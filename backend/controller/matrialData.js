const getVideos = (req, res) => {
    const videoPlaylists = [
        {
            id: "1",
            title: "DSA with C++",
            youtubePlaylistId: "PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
            thumbnail: "https://img.youtube.com/vi/WQoB2z67hvY/maxresdefault.jpg",
            duration: "40 hours"
        },
        {
            id: "2",
            title: "Computer Networks",
            youtubePlaylistId: "PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
            thumbnail: "https://img.youtube.com/vi/JFF2vJaN0Cw/maxresdefault.jpg",
            duration: "25 hours"
        },
        {
            id: "3",
            title: "OOPs in Java",
            youtubePlaylistId: "PLqleLpAMfxGCr9A4N20ZXcQvPqVVSD0v0",
            thumbnail: "https://img.youtube.com/vi/a199KZGMNxk/maxresdefault.jpg",
            duration: "30 hours"
        },
        {
            id: "4",
            title: "Operating Systems",
            youtubePlaylistId: "PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
            thumbnail: "https://img.youtube.com/vi/vBURTt97EkA/maxresdefault.jpg",
            duration: "35 hours"
        },
        {
            id: "5",
            title: "Database Management Systems",
            youtubePlaylistId: "PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
            thumbnail: "https://img.youtube.com/vi/kBdlM6hNDAE/maxresdefault.jpg",
            duration: "28 hours"
        },
        {
            id: "6",
            title: "System Design for Interviews",
            youtubePlaylistId: "PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
            thumbnail: "https://img.youtube.com/vi/FSR1s2b-l_I/maxresdefault.jpg",
            duration: "20 hours"
        },
        {
            id: "7",
            title: "Competitive Programming",
            youtubePlaylistId: "PLauivoElc3ggagradg8MfOZreCMmXMmJ-",
            thumbnail: "https://img.youtube.com/vi/zLcNwcR6yxQ/maxresdefault.jpg",
            duration: "50 hours"
        },
        {
            id: "8",
            title: "Computer Architecture",
            youtubePlaylistId: "PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
            thumbnail: "https://img.youtube.com/vi/1BUCc7p2JKk/maxresdefault.jpg",
            duration: "15 hours"
        },
        {
            id: "9",
            title: "Aptitude & Logical Reasoning",
            youtubePlaylistId: "PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK",
            thumbnail: "https://img.youtube.com/vi/MgaqnHWvBxE/maxresdefault.jpg",
            duration: "22 hours"
        },
        {
            id: "10",
            title: "Programming Interview Questions",
            youtubePlaylistId: "PLi9RQVmJD2fYXgBAUfaN5MXgYPUTbzqeb",
            thumbnail: "https://img.youtube.com/vi/il_t1WVLNxk/maxresdefault.jpg",
            duration: "35 hours"
        },
        {
            id: "11",
            title: "Project Building for Resume",
            youtubePlaylistId: "PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
            thumbnail: "https://img.youtube.com/vi/fis26HvvDII/maxresdefault.jpg",
            duration: "30 hours"
        },
        {
            id: "12",
            title: "Mock Interviews & HR Preparation",
            youtubePlaylistId: "PLqkLaKRbfoMIJwJ4IJiy0gciO355xWx4Z",
            thumbnail: "https://img.youtube.com/vi/ji3wQ0Kj9ME/maxresdefault.jpg",
            duration: "18 hours"
        },
        {
            id: "13",
            title: "Advanced Data Structures",
            youtubePlaylistId: "PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU",
            thumbnail: "https://img.youtube.com/vi/IpunjDw2U_o/maxresdefault.jpg",
            duration: "25 hours"
        },
        {
            id: "14",
            title: "Core Computer Science Concepts",
            youtubePlaylistId: "PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx",
            thumbnail: "https://img.youtube.com/vi/z-EtmaFJieY/maxresdefault.jpg",
            duration: "45 hours"
        },
        {
            id: "15",
            title: "Big Data & Cloud Computing",
            youtubePlaylistId: "PLkz1SCf5iB4dw3jbRo0SYCk2urRESUA4D",
            thumbnail: "https://img.youtube.com/vi/8N2_Ee11xQY/maxresdefault.jpg",
            duration: "32 hours"
        }
    ];

    res.json(videoPlaylists);
};
const getNotes = (req, res) => {
    const notesData = [
        // 1st Year Notes

        { id: "101", title: "Introduction to Programming", subjectCode: "CS101", driveLink: "https://drive.google.com/drive/folders/1CGVhy77afhvZFIPM1dkU6mKrXE0kGV6s?usp=sharing", date: "2023-08-15", year: "1st Year" },
        { id: "131", title: "Basic Electrical And Electronic Engineering", subjectCode: "ECE131", driveLink: "https://drive.google.com/drive/folders/1PFN5y4aOYS649WYc5rVsqPOmooqfOnOr?usp=sharing", date: "2023-09-20", year: "1st Year" },
        { id: "165", title: "Mathematics For Engineers", subjectCode: "MTH165", driveLink: "https://drive.google.com/drive/folders/1TypUS31LyEf8G4NbKcrcH6jkHsTAhMyk?usp=sharing", date: "2023-10-05", year: "1st Year" },
        { id: "107", title: "Basic Engineering Mechanics", subjectCode: "MEC107", driveLink: "https://drive.google.com/drive/folders/1suzYAnOKsP1ARVX2iRC1EpT33UP5vuoX?usp=sharing", date: "2023-11-12", year: "1st Year" },
        { id: "166", title: "Differential Equations and Vector Calculus", subjectCode: "MTH166", driveLink: "https://drive.google.com/drive/folders/1DuB9aLmCLVaUJbwA-dUD8ZIaDqMJI56N?usp=sharing", date: "2023-12-01", year: "1st Year" },
        { id: "202", title: "Algorithms Analysis", subjectCode: "CS202", driveLink: "https://drive.google.com/cs202-algorithms", date: "2024-02-10", year: "2nd Year" },
        { id: "203", title: "Database Systems", subjectCode: "CS203", driveLink: "https://drive.google.com/cs203-database", date: "2024-03-05", year: "2nd Year" },
        { id: "204", title: "Computer Architecture", subjectCode: "CS204", driveLink: "https://drive.google.com/cs204-architecture", date: "2024-04-20", year: "2nd Year" },
        { id: "205", title: "Probability & Statistics", subjectCode: "MA201", driveLink: "https://drive.google.com/ma201-stats", date: "2024-05-15", year: "2nd Year" },
        // 2nd Year Notes...
        { id: "211", title: "Computer Organisation and Design", subjectCode: "CS211", driveLink: "https://drive.google.com/drive/folders/1HFfBjAYfTD6kVmmAEVfRWT1YAvO3ePQy?usp=sharing", date: "2024-01-15", year: "2nd Year" },
        { id: "310", title: "Programming in java", subjectCode: "CSE310", driveLink: "https://drive.google.com/drive/folders/1mI5C41CHFdvxz7jLgC6ogzqwKQRSNo2x?usp=sharing", date: "2024-02-25", year: "2nd Year" },
        { id: "320", title: "Software Engineering", subjectCode: "CSE320", driveLink: "https://drive.google.com/drive/folders/1X-GLKYHdQLsGtfh-BzwlLs8MQ7Ijpddb?usp=sharing", date: "2024-01-23", year: "2nd Year" },
        { id: "306", title: "Database Managment System", subjectCode: "int306", driveLink: "https://drive.google.com/drive/folders/1bEN-S35r4AeLkea5iT8mv0OvGrwlGe5S?usp=sharing", date: "2024-01-20", year: "2nd Year" },
        { id: "404", title: "Artificial intelligence", subjectCode: "int404", driveLink: "https://drive.google.com/drive/folders/1zQ0P4-moNW896PlNme91ZiIdc6-097JO?usp=sharing", date: "2024-21-20", year: "2nd Year" },
        { id: "202", title: "Algorithms Analysis", subjectCode: "CS202", driveLink: "https://drive.google.com/cs202-algorithms", date: "2024-02-10", year: "2nd Year" },
        { id: "203", title: "Database Systems", subjectCode: "CS203", driveLink: "https://drive.google.com/cs203-database", date: "2024-03-05", year: "2nd Year" },
        { id: "204", title: "Computer Architecture", subjectCode: "CS204", driveLink: "https://drive.google.com/cs204-architecture", date: "2024-04-20", year: "2nd Year" },
        { id: "205", title: "Probability & Statistics", subjectCode: "MA201", driveLink: "https://drive.google.com/ma201-stats", date: "2024-05-15", year: "2nd Year" },
        // 3rd Year Notes
        { id: "332", title: "Ethics", subjectCode: "CSE332", driveLink: "https://drive.google.com/drive/folders/1jVjeDo8QllXKxscJ4zHwkZOg6OmP6vHA?usp=sharing", date: "2024-02-25", year: "3rd Year" },
        { id: "322", title: "Automata", subjectCode: "CSE322", driveLink: "https://drive.google.com/drive/folders/1edEjNpVtwebVjfNJQ2N5i8rtbHpybsvl?usp=sharing", date: "2024-01-23", year: "3rd Year" },
        { id: "423", title: "Cloud Computing", subjectCode: "cse423", driveLink: "https://drive.google.com/drive/folders/1yryHfdSmhkcuP6Ri_06m-olKvdr_QZOw?usp=sharing", date: "2024-01-20", year: "3rd Year" },
        { id: "107", title: "Verbal Ability", subjectCode: "pev107", driveLink: "https://drive.google.com/drive/folders/1nni8T2M9dn6omxXUl7RMlXlwn_J4zMOk?usp=sharing", date: "2024-21-20", year: "3rd Year" },
        { id: "301", title: "Operating Systems", subjectCode: "CS301", driveLink: "https://drive.google.com/cs301-os", date: "2024-08-10", year: "3rd Year" },
        { id: "302", title: "Computer Networks", subjectCode: "CS302", driveLink: "https://drive.google.com/cs302-networks", date: "2024-09-05", year: "3rd Year" },
        { id: "303", title: "Software Engineering", subjectCode: "CS303", driveLink: "https://drive.google.com/cs303-software", date: "2024-10-12", year: "3rd Year" },
        { id: "304", title: "Web Development", subjectCode: "CS304", driveLink: "https://drive.google.com/cs304-webdev", date: "2024-11-20", year: "3rd Year" },
        { id: "305", title: "Artificial Intelligence", subjectCode: "CS305", driveLink: "https://drive.google.com/cs305-ai", date: "2024-12-15", year: "3rd Year" },

        // 4th Year Notes
        { id: "107", title: "Web Development", subjectCode: "int107", driveLink: "https://drive.google.com/drive/folders/13JFy6CE0arvp58HZIlb8jWaxIaz8n9xM?usp=sharing", date: "2024-01-20", year: "4th Year" },
        { id: "217", title: "Data Analysis", subjectCode: "int217", driveLink: "https://drive.google.com/drive/folders/1iKLuuYGllbe1o6Lh0bmsPeGdwDWQ9tmT?usp=drive_link", date: "2024-21-20", year: "4th Year" },
        { id: "401", title: "Machine Learning", subjectCode: "CS401", driveLink: "https://drive.google.com/cs401-ml", date: "2025-01-10", year: "4th Year" },
        { id: "402", title: "Cloud Computing", subjectCode: "CS402", driveLink: "https://drive.google.com/cs402-cloud", date: "2025-02-05", year: "4th Year" },
        { id: "403", title: "Cybersecurity", subjectCode: "CS403", driveLink: "https://drive.google.com/cs403-security", date: "2025-03-15", year: "4th Year" },
        { id: "404", title: "Big Data Analytics", subjectCode: "CS404", driveLink: "https://drive.google.com/cs404-bigdata", date: "2025-04-10", year: "4th Year" },
        { id: "405", title: "Capstone Project", subjectCode: "CS405", driveLink: "https://drive.google.com/cs405-capstone", date: "2025-05-01", year: "4th Year" }
    ];

    res.json(notesData);
};
const getRoadmaps = (req, res) => {
    const roadmapData = [
        {
            "id": 1,
            "title": "Full Stack Development",
            "totalComponent": 29,
            "totalSteps": 31,
            "completedSteps": 0,
            "steps": [
                {
                    "id": 1,
                    "number": 1,
                    "title": "Frontend Fundamentals",
                    "totalItems": 9,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "HTML & CSS Basics",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "JavaScript Fundamentals",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
                                    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL",
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Frontend Frameworks (React)",
                            "duration": "120 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                                    "https://fullstackopen.com/en/part1"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "number": 2,
                    "title": "Backend Development",
                    "totalItems": 9,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Node.js & Express Fundamentals",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv84pOe9waeWV",
                                    "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8",
                                    "https://www.youtube.com/playlist?list=PLbGui_ZYuhigFdLdbSI2EM2MrJB7I0j-B"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Databases (MongoDB & SQL)",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA",
                                    "https://www.udemy.com/course/the-complete-sql-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
                                    "https://www.youtube.com/playlist?list=PLjVLYmrlmjGcQfNj_SLlLV2IA-DvXZepN"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "API Development & Authentication",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q",
                                    "https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PL8p2I9GklV47TDYUq8RmFzeI9CgOoVgpJ",
                                    "https://www.youtube.com/playlist?list=PLbGui_ZYuhijTKyrlu-0g5GcP9bQgboWO"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "number": 3,
                    "title": "DevOps & Deployment",
                    "totalItems": 7,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Git & GitHub Workflow",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR",
                                    "https://www.udemy.com/course/git-and-github-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agwhy658ZPA0MTStKUJTWPi",
                                    "https://www.youtube.com/playlist?list=PLiOa6ike4WAHljIOitb3vR0nXQgneUedR"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Docker & Containerization",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7",
                                    "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLhfxuQVMs-nx3YQa3XJ9-4g_EoK0J8WhU",
                                    "https://www.youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "AWS/Cloud Deployment",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLt1SIbA8guusAJIBS8JgbSFKfQdVkWDbl",
                                    "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLCFe3TcoBniIYIqZHIGwEcV-z9s7dMUPZ",
                                    "https://www.youtube.com/playlist?list=PLBGx66SQNZ8a_y_CMLHchyHz_R6-z9Mbh"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 4,
                    "number": 4,
                    "title": "Advanced Topics",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "TypeScript Integration",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI",
                                    "https://www.udemy.com/course/understanding-typescript/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_",
                                    "https://www.youtube.com/playlist?list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "GraphQL Implementation",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f",
                                    "https://www.howtographql.com/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLe30vg_FG4OSGHy5KK0x5B-ux4wsIV5Fb",
                                    "https://www.youtube.com/playlist?list=PLx0T51ydRO7puVYkzs5KAeGU9-HAANaR-"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Testing & CI/CD Pipelines",
                            "duration": "65 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ",
                                    "https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLxoCk2yfQvDhI4YDJbHlLKvLR-7aL4qX7",
                                    "https://www.youtube.com/playlist?list=PLQoKOqx6dTO54zNIL_XWGJbyAyNHDFIS0"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "title": "Android Development",
            "totalSteps": 24,
            "completedSteps": 0,
            "steps": [
                {
                    "id": 1,
                    "number": 1,
                    "title": "Programming Fundamentals",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Java Programming",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLZPZq0r_RZOMhCAyywfnYLlrjiVOkdAI1",
                                    "https://www.udemy.com/course/java-the-complete-java-developer-course/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits-Bm8gPL8G-Y4ft",
                                    "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqGkzPnK_KBksi"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Kotlin Programming",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLQkwcJG4YTCRSQikwhtoApYs9ij_Hc5Z9",
                                    "https://www.udemy.com/course/kotlin-android-developer-masterclass/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIMW3-rSOGCkPlO1z_IYJy3G",
                                    "https://www.youtube.com/playlist?list=PLUhfM8afLE_Ok-0Lx2v9hfrmbxi3GgsX1"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "number": 2,
                    "title": "Android Basics",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Android Studio & Project Setup",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE8TUoCyjomGFqzTFcJ05OaC",
                                    "https://developer.android.com/courses/android-basics-kotlin/course"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIO0jLgj8g6sADnD0IBaWaw2"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Layouts & UI Components",
                            "duration": "75 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLrnPJCHvNZuA80lNWNCLICR3qYzhw3iPI",
                                    "https://www.udemy.com/course/android-architecture-componentsmvvm-with-dagger-retrofit/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIPVKqCwHkOoomJcWGVhQqHw",
                                    "https://www.youtube.com/playlist?list=PLM8RNjTnXnKgXffvMCQD9¦¾RkAzAetBDt"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Activity & Fragment Lifecycle",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLrnPJCHvNZuAe5r049EpzxQGF2Y7nGWYQ",
                                    "https://www.udemy.com/course/the-complete-android-10-developer-course-mastering-android/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLgH5QX0i9K3p9xzYLFGdfYliIRBLVDRV5",
                                    "https://www.youtube.com/playlist?list=PLdHg5T0SNpN3GBUmpGqjiKGMcBaRT2A-m"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "number": 3,
                    "title": "Android Architecture",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "MVVM Architecture",
                            "duration": "85 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE-8wD5JJZrKraus_tRw8yZa",
                                    "https://www.udemy.com/course/android-architecture-componentsmvvm-with-dagger-retrofit/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIOSigPZ_IEZXrCjs1L5Han_",
                                    "https://www.youtube.com/playlist?list=PLlxmoA0rQ-Lw5k_QCqVl3rsoJOnb_00UV"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Jetpack Components",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE_MUlyvbCiOWsfq0xzgK_1g",
                                    "https://developer.android.com/courses/jetpack-compose/course"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIOHMXHsGchvs7OGGQsCnMNY",
                                    "https://www.youtube.com/playlist?list=PLUhfM8afLE_Ok-0Lx2v9hfrmbxi3GgsX1"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Room Database & LiveData",
                            "duration": "75 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE-4Rot9KmB-KbI_AOXwMKE1",
                                    "https://www.udemy.com/course/android-jetpack-masterclass/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLdHg5T0SNpN3CMNtttJbJIE4tJYZ_dWjF",
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIP-8sc0Nb_X1PYYIVxJUj0y"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 4,
                    "number": 4,
                    "title": "Advanced Android",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Retrofit & Networking",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE-vInwQhGSdnbyJ62nixHCt",
                                    "https://www.udemy.com/course/android-networking-masterclass-with-retrofit-okhttp-gson/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLdHg5T0SNpN0ygjV4yGXNct25jY_ue70U",
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIMW3-rSOGCkPlO1z_IYJy3G"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Coroutines & Flow",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE_PFBRHFB_aL5stMQg3smhL",
                                    "https://www.udemy.com/course/kotlin-coroutines-in-android/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIPylLXKRtJBe0UjIl72RJO_",
                                    "https://www.youtube.com/playlist?list=PLUhfM8afLE_PBmK-AUKjZgq9LZJ3k6CNK"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Jetpack Compose",
                            "duration": "95 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE_I0_tU5TvkfQpnmrP_9XV8",
                                    "https://developer.android.com/codelabs/jetpack-compose-basics"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIOFiwICmG_mP8_fFPK86Q_R",
                                    "https://www.youtube.com/playlist?list=PLlFz6RSza_X_BsEGBrmGWkHLZIU_m4rFV"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "title": "Data Science",
            "totalSteps": 20,
            "completedSteps": 0,
            "steps": [
                {
                    "id": 1,
                    "number": 1,
                    "title": "Programming Fundamentals",
                    "totalItems": 5,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Python Programming",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
                                    "https://www.udemy.com/course/complete-python-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME",
                                    "https://www.youtube.com/playlist?list=PLfP3JxW-T70HvifebGl3d5d5jzI1Kp0i8"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Data Structures & Algorithms",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12",
                                    "https://www.udemy.com/course/data-structures-and-algorithms-python/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLzjZaW71kMwQ-D3oxCEDHAvYu8VC1XOsS",
                                    "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "number": 2,
                    "title": "Mathematics & Statistics",
                    "totalItems": 5,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Linear Algebra & Calculus",
                            "duration": "75 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
                                    "https://www.youtube.com/playlist?list=PLybg94GvOJ9ELZEe9s2NXTKr41Yedbw7M"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLIRnO_sdVuEfTuYoKUZZRQiyhLyL4Jysa",
                                    "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Probability & Statistics",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLvxOuBpazmsOGOursPoofaHyz_1NpxbhA",
                                    "https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLU6SqdYcYsfI1la_TBfVUfXVRyWlq3RKb",
                                    "https://www.youtube.com/playlist?list=PLIoGJq6H_mDsRMQADNcwZMMUP7DQlKYeS"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "number": 3,
                    "title": "Data Analysis & Visualization",
                    "totalItems": 5,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "NumPy & Pandas",
                            "duration": "85 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS",
                                    "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLPbgcxheSpE1DJKfdko58_AIZRIT0TjpO",
                                    "https://www.youtube.com/playlist?list=PLfP3JxW-T70HvifebGl3d5d5jzI1Kp0i8"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Data Visualization (Matplotlib, Seaborn)",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_",
                                    "https://www.coursera.org/learn/python-data-visualization"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLjVLYmrlmjGdEE2jFpL71LsVH9FS-CBYw",
                                    "https://www.youtube.com/playlist?list=PLPbgcxheSpE0a0QVMQvq3AVKhJzLKFnH_"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ];


    res.json(roadmapData);
};
const getMcq = (req, res) => {
    const mcqData = {
        "DSA": [
            {
                "id": "dsa-1",
                "questionText": "What is the time complexity of binary search?",
                "options": ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                "correctAnswer": "O(log n)",
                "explanation": "Binary search divides the search space in half with each iteration."
            },
            {
                "id": "dsa-2",
                "questionText": "Which data structure follows LIFO principle?",
                "options": ["Queue", "Stack", "Linked List", "Tree"],
                "correctAnswer": "Stack",
                "explanation": "Stack follows Last In First Out principle."
            },
            {
                "id": "dsa-3",
                "questionText": "What is the worst-case time complexity of quicksort?",
                "options": ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
                "correctAnswer": "O(n²)",
                "explanation": "Quicksort's worst case occurs when the pivot is always the smallest or largest element."
            },
            {
                "id": "dsa-4",
                "questionText": "Which data structure is used for implementing recursion?",
                "options": ["Queue", "Stack", "Linked List", "Heap"],
                "correctAnswer": "Stack",
                "explanation": "Recursion uses the call stack to keep track of function calls."
            },
            {
                "id": "dsa-5",
                "questionText": "In a min-heap, the smallest element is located at:",
                "options": ["Leaf node", "Root node", "Middle level", "Rightmost node"],
                "correctAnswer": "Root node",
                "explanation": "In a min-heap, the root node contains the smallest element."
            },
            {
                "id": "dsa-6",
                "questionText": "Which traversal method is used to get the contents of a binary search tree in ascending order?",
                "options": ["Pre-order", "In-order", "Post-order", "Level-order"],
                "correctAnswer": "In-order",
                "explanation": "In-order traversal of BST yields nodes in ascending order."
            },
            {
                "id": "dsa-7",
                "questionText": "What is the time complexity of inserting an element at the beginning of a linked list?",
                "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                "correctAnswer": "O(1)",
                "explanation": "Insertion at the beginning of a linked list takes constant time."
            },
            {
                "id": "dsa-8",
                "questionText": "Which data structure is used in breadth-first search of a graph?",
                "options": ["Stack", "Queue", "Priority Queue", "Hash Table"],
                "correctAnswer": "Queue",
                "explanation": "BFS uses a queue to keep track of the next vertex to visit."
            },
            {
                "id": "dsa-9",
                "questionText": "Which of the following sorting algorithms is stable?",
                "options": ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
                "correctAnswer": "Merge Sort",
                "explanation": "Merge Sort maintains the relative order of equal elements."
            },
            {
                "id": "dsa-10",
                "questionText": "What is the auxiliary space complexity of depth-first search in a graph?",
                "options": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                "correctAnswer": "O(n)",
                "explanation": "DFS requires space proportional to the number of vertices."
            }
        ],
        "OS": [
            {
                "id": "os-1",
                "questionText": "Which scheduling algorithm has the shortest average waiting time?",
                "options": ["FCFS", "SJF", "Round Robin", "Priority"],
                "correctAnswer": "SJF",
                "explanation": "Shortest Job First minimizes average waiting time."
            },
            {
                "id": "os-2",
                "questionText": "What is thrashing in operating systems?",
                "options": [
                    "When a process spends more time paging than executing",
                    "When a process is terminated unexpectedly",
                    "When CPU utilization is 100%",
                    "When multiple processes compete for CPU time"
                ],
                "correctAnswer": "When a process spends more time paging than executing",
                "explanation": "Thrashing occurs when the system spends more time swapping pages than executing."
            },
            {
                "id": "os-3",
                "questionText": "Which of the following is not a deadlock prevention method?",
                "options": ["Resource allocation graph", "Mutual exclusion", "Hold and wait", "Circular wait"],
                "correctAnswer": "Resource allocation graph",
                "explanation": "Resource allocation graph is used for deadlock detection, not prevention."
            },
            {
                "id": "os-4",
                "questionText": "What is the purpose of the 'top' command in Unix?",
                "options": [
                    "To display the topmost directory",
                    "To show the current processes and their resource usage",
                    "To list all files in the current directory",
                    "To open the topmost file in a directory"
                ],
                "correctAnswer": "To show the current processes and their resource usage",
                "explanation": "The 'top' command provides a dynamic real-time view of system processes."
            },
            {
                "id": "os-5",
                "questionText": "Which of the following is a non-preemptive scheduling algorithm?",
                "options": ["Round Robin", "SJF", "FCFS", "Priority Scheduling"],
                "correctAnswer": "FCFS",
                "explanation": "First Come First Serve is a non-preemptive scheduling algorithm."
            },
            {
                "id": "os-6",
                "questionText": "In which memory allocation technique is the entire process loaded into memory?",
                "options": ["Paging", "Segmentation", "Contiguous allocation", "Virtual memory"],
                "correctAnswer": "Contiguous allocation",
                "explanation": "Contiguous allocation loads the entire process into a single contiguous block of memory."
            },
            {
                "id": "os-7",
                "questionText": "What is the main advantage of multithreading?",
                "options": [
                    "Increased memory usage",
                    "Simplified code structure",
                    "Concurrent execution within a process",
                    "Reduced CPU utilization"
                ],
                "correctAnswer": "Concurrent execution within a process",
                "explanation": "Multithreading allows multiple threads to execute concurrently within a single process."
            },
            {
                "id": "os-8",
                "questionText": "Which of the following is not a valid state of a process?",
                "options": ["Running", "Waiting", "Blocked", "Terminated"],
                "correctAnswer": "Blocked",
                "explanation": "Blocked is a valid state; all listed options are valid process states."
            },
            {
                "id": "os-9",
                "questionText": "What is the role of the dispatcher in an operating system?",
                "options": [
                    "To schedule processes",
                    "To manage memory allocation",
                    "To switch context between processes",
                    "To handle I/O operations"
                ],
                "correctAnswer": "To switch context between processes",
                "explanation": "The dispatcher is responsible for context switching between processes."
            },
            {
                "id": "os-10",
                "questionText": "Which of the following is used to prevent page faults?",
                "options": ["Increasing RAM", "Using SSDs", "Implementing virtual memory", "Pre-paging"],
                "correctAnswer": "Pre-paging",
                "explanation": "Pre-paging loads pages into memory before they are needed to reduce page faults."
            }
        ],
        "CN": [
            {
                "id": "cn-1",
                "questionText": "Which layer of the OSI model is responsible for routing?",
                "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
                "correctAnswer": "Network Layer",
                "explanation": "The Network Layer (Layer 3) handles routing between networks."
            },
            {
                "id": "cn-2",
                "questionText": "What is the maximum size of an IPv4 address?",
                "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
                "correctAnswer": "32 bits",
                "explanation": "IPv4 addresses are 32 bits (4 bytes) long."
            },
            {
                "id": "cn-3",
                "questionText": "Which protocol operates at the transport layer?",
                "options": ["HTTP", "IP", "TCP", "Ethernet"],
                "correctAnswer": "TCP",
                "explanation": "TCP (Transmission Control Protocol) operates at Layer 4 (Transport Layer)."
            },
            {
                "id": "cn-4",
                "questionText": "Which device operates at the Data Link layer of the OSI model?",
                "options": ["Router", "Switch", "Hub", "Gateway"],
                "correctAnswer": "Switch",
                "explanation": "Switches operate at Layer 2 (Data Link Layer) of the OSI model."
            },
            {
                "id": "cn-5",
                "questionText": "What is the default port number for HTTPS?",
                "options": ["80", "443", "21", "25"],
                "correctAnswer": "443",
                "explanation": "HTTPS uses port 443 by default."
            },
            {
                "id": "cn-6",
                "questionText": "Which of the following is a class C IP address?",
                "options": ["192.168.1.1", "10.0.0.1", "172.16.0.1", "224.0.0.1"],
                "correctAnswer": "192.168.1.1",
                "explanation": "Class C IP addresses range from 192.0.0.0 to 223.255.255.255."
            },
        ]
    };
    res.json(mcqData);
}
module.exports = { getVideos, getNotes, getRoadmaps, getMcq };
