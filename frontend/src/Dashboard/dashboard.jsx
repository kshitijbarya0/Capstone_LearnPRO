import "../styles/styles.css"
import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import RoadmapItem from "./Roadmap_render";
import NotesSection from './Notes_render';
import MCQPractice from './McqPractice';
import axios from 'axios';
const Dashboard = () => {
  const { user, logout } = useAuth();

  const userName = user?.username || "Username";
  const initalChar = user?.username?.[0] || "X";
  const userId = user?._id || user?.id || user?.userId;
  const [activeMenuItem, setActiveMenuItem] = useState('videos');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [videos, setVideos] = useState([]);
  const [notes, setNotes] = useState([]);
  const [roadmaps, setRoadmaps] = useState([]);
  const [mcqs, setMcqs] = useState({});
  const handleMenuClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    fetchData(menuItem);
  };
  const fetchData = async (dataType) => {
    setLoading(true);
    setError(null);

    try {
      // https://learnpro-hx3l.onrender.com/api/user/${dataType}
      // http://localhost:4001/api/user/${dataType}
      const response = await axios.get(`https://learnpro-hx3l.onrender.com/api/user/${dataType}`);
      switch (dataType) {
        case 'videos':
          setVideos(Array.isArray(response.data) ? response.data : []);
          break;
        case 'notes':
          setNotes(Array.isArray(response.data) ? response.data : []);
          break;
        case 'roadmaps':
          setRoadmaps(Array.isArray(response.data) ? response.data : []);
          break;
        case 'mcq':
          setMcqs(response.data);
          break;
        default:
          break;
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeMenuItem);
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div className="loading-spinner">Loading...</div>;
    }

    if (error) {
      return <div className="error-message">{error}</div>;
    }

    switch (activeMenuItem) {
      case 'videos':
        return (
          <div className="content-grid">
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <div key={video.id || index} className="grid-item">
                  <a
                    href={video.youtubePlaylistId}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="videolistlink"
                  >
                    <div className="video-thumbnail">
                      <img
                        src={video.thumbnail || "/api/placeholder/300/200"}
                        alt={video.title}
                      />
                    </div>
                    <h3>{video.title || `Video ${index + 1}`}</h3>
                    <p>{video.duration || "00:00"}</p>
                  </a>
                </div>
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        );
      case 'notes':
        return (
          <div className="content-area">
            <NotesSection notes={notes} />
          </div>
        );

      case 'roadmaps':
        return (
          <div className="content-area">
            <h2>Learning Roadmaps</h2>
            {roadmaps.length > 0 ? (
              <div className="roadmaps-container">
                {roadmaps.map((roadmap, index) => (
                  <RoadmapItem
                    key={roadmap.id || index}
                    roadmap={roadmap}
                    index={index}
                    userId={userId}
                  />
                ))}
              </div>
            ) : (
              <p>No roadmaps available.</p>
            )}
          </div>
        );

      case 'mcq':
        return (
          <div className="content-area">
            <MCQPractice mcqs={mcqs} />
          </div>
        );

      default:
        return <p>Select a menu item to view content</p>;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>LearnPRO</h3>
          <p>Expand your knowledge</p>
        </div>
        <div className="sidebar-menu">
          <div
            className={`menu-item ${activeMenuItem === 'videos' ? 'active' : ''}`}
            onClick={() => handleMenuClick('videos')}
          >
            <i className="fas fa-video"></i>
            <span className="menu-text">Video Lectures</span>
          </div>
          <div
            className={`menu-item ${activeMenuItem === 'notes' ? 'active' : ''}`}
            onClick={() => handleMenuClick('notes')}
          >
            <i className="fas fa-sticky-note"></i>
            <span className="menu-text">Notes</span>
          </div>
          <div
            className={`menu-item ${activeMenuItem === 'roadmaps' ? 'active' : ''}`}
            onClick={() => handleMenuClick('roadmaps')}
          >
            <i className="fas fa-road"></i>
            <span className="menu-text">Roadmaps</span>
          </div>
          <div
            className={`menu-item ${activeMenuItem === 'mcq' ? 'active' : ''}`}
            onClick={() => handleMenuClick('mcq')}
          >
            <i className="fas fa-question-circle"></i>
            <span className="menu-text">MCQ Practice</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Top Navigation */}
        <div className="top-nav">
          <div className="user-profile">
            <h3>{userName}</h3>
            <div className="profile-icon">
              <span className="fas fa-user"><h3>{initalChar}</h3></span>
            </div>
            <div className="dropdown-menu">
              <button className="search-btn" onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
