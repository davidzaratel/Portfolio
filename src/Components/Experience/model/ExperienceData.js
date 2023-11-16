import tSystems from '../images/T-Systems.png'
import nextdoor from '../images/Nextdoor.png'

export const experienceData = [
    {
        companyName: "T-Systems International GmbH",
        period: "February - November 2023",
        location: "Berlin, Germany",
        projectName: "iOS Application ",
        image: tSystems,
        bulletPoints: ["Developed T-Systems's Data Intelligence Hub (DIH) first iOS mobile app from scratch using Swift and SwiftUI",
            "Managed and developed all stages of the product: from gathering software requirements, implementation, releasing through TestFlight , testing the app inside the DIH department, documentation and finally fixing errors and debugging the app."
        ],
        skills: ["Swift", "SwiftUI", "Alamofire", "OAuth", "URLSession", "MVVM", "Unit Testing", "Testflight"]
    },
    {
        companyName: "Nextdoor",
        period: "June - September 2023",
        location: "San Francisco, USA",
        projectName: "Video Feed",
        image: nextdoor,
        bulletPoints: ["Developed Nextdoor's Video Feed in iOS, allowing to interact and scroll down through different videos when posts with a video get clicked.",
            "Implemented pagination for this feed, changing the authors information, reactions and comments when the user scrolls through the videos.",
            "Part of the Feed UX team, collaborating with 10 fellow developers."
        ],
        skills: ["Swift", "UIKit", "GraphQL", "Pagination", "Async", "MVVM"]
    },

]