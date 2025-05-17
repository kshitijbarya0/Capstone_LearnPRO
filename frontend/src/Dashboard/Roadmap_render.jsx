import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoadmapItem = ({ roadmap, userId }) => {
    const [expandedSteps, setExpandedSteps] = useState(() => {
        const initialState = {};
        if (roadmap.steps && roadmap.steps.length > 0) {
            roadmap.steps.forEach((step, idx) => {
                initialState[step.id] = idx === 0;
            });
        }
        return initialState;
    });
    const [language, setLanguage] = useState("english");
    const [currentVideo, setCurrentVideo] = useState(null);
    const [completedLectures, setCompletedLectures] = useState({});
    const [isSaving, setIsSaving] = useState(false);
    useEffect(() => {
        const fetchUserCompletionData = async () => {
            const token = JSON.parse(localStorage.getItem("token"));
            if (!token) {
                console.error("No token found, user is not authenticated.");
                return;
            }

            try {
                // https://learnpro-hx3l.onrender.com
                // http://localhost:4001/api/users/${userId}/progress/${roadmap.id}
                const url = `https://learnpro-hx3l.onrender.com/api/users/${userId}/progress/${roadmap.id}`;
                const response = await axios.get(
                    url,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (response.data && response.data.completedLectures) {
                    const formattedCompletedLectures = {};

                    roadmap.steps.forEach(step => {
                        formattedCompletedLectures[step.id] = {};
                        step.lectures.forEach(lecture => {
                            formattedCompletedLectures[step.id][lecture.id] = !!response.data.completedLectures[lecture.id];
                        });
                    });

                    setCompletedLectures(formattedCompletedLectures);
                }
            } catch (error) {
                console.error("Failed to fetch user progress:", error);
            }
        };

        if (userId && roadmap?.id) {
            fetchUserCompletionData();
        }
    }, [userId, roadmap?.id]);

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && currentVideo) {
                setCurrentVideo(null);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        if (currentVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
        };
    }, [currentVideo]);

    const toggleStep = (stepId) => {
        setExpandedSteps({
            ...expandedSteps,
            [stepId]: !expandedSteps[stepId]
        });
    };

    const extractYouTubeInfo = (url) => {
        if (!url) return null;
        const playlistRegExp = /^.*(youtube.com\/playlist\?list=)([^#&?]*).*/;
        const playlistMatch = url.match(playlistRegExp);

        if (playlistMatch && playlistMatch[2]) {
            return {
                type: 'playlist',
                id: playlistMatch[2]
            };
        }
        const videoRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const videoMatch = url.match(videoRegExp);

        if (videoMatch && videoMatch[2].length === 11) {
            return {
                type: 'video',
                id: videoMatch[2]
            };
        }

        return null;
    };

    const handleVideoClick = (lecture) => {
        if (!lecture || !lecture.resources) {
            console.error("No resources found for this lecture");
            return;
        }

        if (!lecture.resources[language] || !Array.isArray(lecture.resources[language]) || lecture.resources[language].length === 0) {
            console.warn(`No ${language} videos available for this lecture`);
            return;
        }

        const videoUrl = lecture.resources[language][0];
        console.log("Video URL:", videoUrl);

        const youtubeInfo = extractYouTubeInfo(videoUrl);
        console.log("Extracted YouTube Info:", youtubeInfo);

        if (youtubeInfo) {
            if (youtubeInfo.type === 'video') {
                setCurrentVideo({
                    id: youtubeInfo.id,
                    url: videoUrl,
                    title: lecture.title,
                    type: 'video'
                });
            } else if (youtubeInfo.type === 'playlist') {
                setCurrentVideo({
                    id: youtubeInfo.id,
                    url: videoUrl,
                    title: lecture.title,
                    type: 'playlist'
                });
            }
        } else {
            console.error("Could not extract YouTube info from URL:", videoUrl);
        }
    };

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === "english" ? "hindi" : "english");
    };

    const closeVideo = (e) => {
        if (e) e.stopPropagation();
        setCurrentVideo(null);
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'video-modal') {
            closeVideo();
        }
    };

    const isLectureCompleted = (lectureId, stepId) => {
        if (!completedLectures) return false;
        if (!completedLectures[stepId]) return false;
        return !!completedLectures[stepId][lectureId];
    };

    const toggleLectureCompletion = async (lectureId, stepId, isCompleted) => {
        try {
            setIsSaving(true);
            setCompletedLectures(prevState => {
                const newState = { ...prevState };
                if (!newState[stepId]) {
                    newState[stepId] = {};
                }
                newState[stepId][lectureId] = isCompleted;
                return newState;
            });

            const token = JSON.parse(localStorage.getItem("token"));
            if (!token) {
                console.error("No token found, user is not authenticated.");
                return;
            }

            const completionData = {
                userId,
                roadmapId: roadmap.id,
                stepId,
                lectureId,
                isCompleted
            };
            // https://learnpro-hx3l.onrender.com
            // http://localhost:4001/api/users/progress/update
            const response = await axios.post('https://learnpro-hx3l.onrender.com/api/users/progress/update',
                completionData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (error) {
            setCompletedLectures(prevState => {
                const newState = { ...prevState };
                if (!newState[stepId]) {
                    newState[stepId] = {};
                }
                newState[stepId][lectureId] = !isCompleted;
                return newState;
            });
        } finally {
            setIsSaving(false);
        }
    };

    const calculateStepStats = (stepId) => {
        const step = roadmap.steps.find(s => s.id === stepId);
        if (!step) return { completed: 0, total: 0 };

        let completed = 0;
        let total = 0;

        step.lectures.forEach(lecture => {
            total += 1;
            if (isLectureCompleted(lecture.id, stepId)) {
                completed += 1;
            }
        });

        return { completed, total };
    };

    const calculateRoadmapStats = () => {
        let completed = 0;
        let total = 0;

        roadmap.steps.forEach(step => {
            step.lectures.forEach(lecture => {
                total += 1;
                if (isLectureCompleted(lecture.id, step.id)) {
                    completed += 1;
                }
            });
        });

        return { completed, total };
    };

    const roadmapStats = calculateRoadmapStats();

    return (
        <div className="roadmap-accordion">
            {currentVideo && (
                <div
                    className="video-modal"
                    onClick={handleOutsideClick}
                >
                    <div className="video-modal-content">
                        <div className="video-modal-header">
                            <div className="video-title">{currentVideo.title || "Video"}</div>
                            <div className="video-controls">
                                <a
                                    href={currentVideo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="youtube-link"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Watch on YouTube
                                </a>
                                <button className="close-btn" onClick={closeVideo}>×</button>
                            </div>
                        </div>
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="450"
                                src={currentVideo.type === 'playlist'
                                    ? `https://www.youtube.com/embed/videoseries?list=${currentVideo.id}&autoplay=1`
                                    : `https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            <div className="roadmap-title">
                <h2>{roadmap.title}</h2>
                <div className="progress-text">
                    {roadmapStats.completed}/{roadmapStats.total} completed
                </div>
                <div className="language-toggle">
                    <button
                        onClick={toggleLanguage}
                        className={`language-btn ${language === "english" ? "active" : ""}`}
                    >
                        {language === "english" ? "🇬🇧 English" : "🇮🇳 Hindi"}
                    </button>
                </div>
            </div>
            {roadmap.steps && roadmap.steps.map((step) => {
                const stepStats = calculateStepStats(step.id);

                return (
                    <div className="step-container" key={step.id}>
                        <div
                            className={`step-header ${expandedSteps[step.id] ? 'active' : ''}`}
                            onClick={() => toggleStep(step.id)}
                        >
                            <div className="step-number">
                                <div className="number">{step.number}</div>
                                <div className="step-title">{step.title}</div>
                            </div>
                            <div className="step-progress">{stepStats.completed}/{stepStats.total}</div>
                        </div>
                        <div className={`step-content ${expandedSteps[step.id] ? 'active' : ''}`}>
                            <ul className="lecture-list">
                                {step.lectures && step.lectures.map((lecture) => {
                                    const lectureCompleted = isLectureCompleted(lecture.id, step.id);

                                    return (
                                        <li key={lecture.id} className={`lecture-item ${lectureCompleted ? 'completed' : ''}`}>
                                            <div
                                                className={`lecture-icon ${lecture.resources && lecture.resources[language] && lecture.resources[language].length > 0 ? 'has-video' : 'no-video'}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    if (lecture.resources && lecture.resources[language] && lecture.resources[language].length > 0) {
                                                        handleVideoClick(lecture);
                                                    } else {
                                                        console.warn("No video available for this lecture in", language);
                                                    }
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                            </div>
                                            <div className="lecture-info">
                                                <div className="lecture-title">{lecture.title}</div>
                                                <div className="lecture-meta">
                                                    <span className="lecture-duration">{lecture.duration}</span>
                                                    {lecture.resources && lecture.resources[language] && lecture.resources[language].length > 0 && (
                                                        <span className="lecture-resources">
                                                            ({lecture.resources[language].length} resources)
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="lecture-completion-checkbox" onClick={(e) => e.stopPropagation()}>
                                                <input
                                                    type="checkbox"
                                                    id={`checkbox-${roadmap.id}-${step.id}-${lecture.id}`}
                                                    checked={lectureCompleted}
                                                    onChange={(e) => toggleLectureCompletion(lecture.id, step.id, e.target.checked)}
                                                    disabled={isSaving}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                                <label
                                                    htmlFor={`checkbox-${roadmap.id}-${step.id}-${lecture.id}`}
                                                    className="checkmark-container"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <span className={`checkmark ${lectureCompleted ? 'checked' : ''}`}></span>
                                                </label>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
            {isSaving && (
                <div className="saving-indicator">
                    Saving progress...
                </div>
            )}
        </div>
    );
};

export default RoadmapItem;