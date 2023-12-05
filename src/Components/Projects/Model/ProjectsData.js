import focusImage from '../images/Focus.png'
import myTasks from '../images/MyTasks.png'
import theWavesImage from '../images/TheWaves.png'
import terniumImage from '../images/Ternium.png'
import multiagentImage from '../images/Multiagent.png'
import highlighterImage from '../images/SyntaxHighlighter.png'
import trafficImage from '../images/TraffIcAnalysis.png'
import snakesAndLadders from '../images/SnakesAndLadders.png'
import scheduleGenerator from '../images/ScheduleGenerator.png'

export const projectsData = [
    {
        title: "My Tasks",
        type: "iOS Development",
        image: myTasks,
        link: "https://github.com/davidzaratel/MyTasks",
        description: "Developed iOS app using Swift and SwiftUI that store lists of tasks of different users, allowing to create, delete and modify the lists and tasks.",
        skills: ["Swift", "SwiftUI", "URLSession", "OAuth", "Unit Testing", "Async", "MVVM"]
    },
    {
        title: "Focus",
        type: "iOS Development",
        image: focusImage,
        link: "https://github.com/itumejia/Focus",
        description: "Developed an iOS App with 6 games for a NPO organization to help children with ADHD develop their attention and memory.",
        skills: ["Swift", "UIKit", "MVM", "Storyboards"]
    },
    {
        title: "Anomalies Detection",
        type: "Web Development",
        image: terniumImage,
        link: "https://github.com/DessTEC/TERNIUM_ANOMALIAS",
        description: "Built a web app that displays and finds anomalies inside csv records of Ternium working alongside a 7 person team.",
        skills: ["React", "Javascript", "CSS", "HTML", "Bootstrap", "Flask", "Python", "MongoDB", "ChartsJS", "Hooks", "HTTP"]
    },
    {
        title: "Traffic Analysis",
        type: "Data Structures",
        image: trafficImage,
        link: "https://github.com/davidzaratel/Traffic-Analysis",
        description: "C++ project which implements different data structures to store then sort and search around 8,000 network traffic entries inside a text file.",
        skills: ["C++", "Vectors", "Linked lists", "Binary Trees", "BST", "Graphs", "Hash Tables", "Merge Sort"]    
    },
    {
        title: "Multi-Agent System",
        type: "Agent based modeling",
        image: multiagentImage,
        link: "https://github.com/davidzaratel/MultiagentProject",
        description: "Simulates a scenario where given a N x M matrix (rows and columns) that represents a warehouse, it contains B number of boxes and R number of robots that are programmed to collect the boxes one by one to the exit of the warehouse using the fastest path",
        skills: ["A* Algorithm", "Unity3D", "Python", "Mesa", "C#"]        
    }, 
    {
        title: "The Waves",
        type: "Videogame",
        image: theWavesImage,
        link: "https://quantumd.itch.io/tw",
        description: "Creator and leader of a 6 person team for a 1 Player mode platform shooter videogame made with pixel art in GameMaker Studio 2.",
        skills: ["Game Maker", "Animation", "Pixel art"]        
    },
    {
        title: "Syntax Highlighter",
        type: "Functional Programming",
        image: highlighterImage,
        link: "https://github.com/davidzaratel/JavaScript-Syntax-Highlighter",
        description: "Syntax parser developed with Elixir and Erlang, that highlights the syntaxis of JavaScript source code files and converts them into HTML & CSS files, both sequentially and in parallel.",
        skills: ["Elixir", "Erlang", "HTML", "CSS", "Regex"]
    },
    {
        title: "Snakes and Ladders",
        type: "Object Oriented Programming",
        image: snakesAndLadders,
        link: "https://github.com/davidzaratel/SnakesandLadders",
        description: "Classic game of snakes and ladders that allows users to set the amount of players, tiles, penalties and rewards they'd like, as well as Manual or Automatic mode. ",
        skills: ["C++", "OOP", "Vectors"]
    },
    {
        title: "Schedule Generator",
        type: "Object Oriented Programming",
        image: scheduleGenerator,
        link: "https://github.com/davidzaratel/SnakesandLadders",
        description: "Program designed with C++ and using OOP in order to create a weekly Agenda for any user and it allows: registering and deleting activities, printing the schedule and exporting it as well. ",
        skills: ["C++", "OOP", "Vectors"]
    }   
]