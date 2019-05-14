var app = new Vue({
    el: '#app',
    data: {
        project: [
            {
                id: 1,
                title: "JO!NTY",
                image: "https://i.imgur.com/HlYwOES.jpg",
                link: "/jointy",
                subject: "Information Fundamental Technology",
                detail: "ปี1เทอม1",
                admin: ['Jack', 'Pang']
            },
            {
                id: 2,
                title: "Nakhonpratom Travel",
                image: "https://i.imgur.com/FqcIOh1.jpg",
                link: "/nakhon",
                subject: "Multimedia",
                detail: "ปี1เทอม2",
                admin: ['Jack']
            },
            {
                id: 3,
                title: "Loofer",
                image: "https://i.imgur.com/n3zWcSJ.png",
                link: "/loofer",
                subject: "Education Information Technology",
                detail: "ปี1เทอม2",
                admin: ['Jack']
            },
            {
                id: 4,
                title: "Journy and The Little Whale",
                image: "https://i.imgur.com/Q7jS4Mk.png",
                link: "/traveler",
                subject: "Geek A Thon",
                detail: "hackathon",
                admin: ['Jack']
            },
            {
                id: 5,
                title: "สันติ หนังคลาสสิค",
                image: "https://i.imgur.com/1P6KUoK.jpg",
                link: "/arch",
                subject: "Job",
                detail: "รับงาน",
                admin: ['Jack']
            },
            {
                id: 6,
                title: "Graphico",
                image: "https://i.imgur.com/CQLyv8O.png",
                link: "/graphico",
                subject: "Web Technology",
                detail: "ปี2เทอม1",
                admin: ['Jack']
            },
            {
                id: 7,
                title: "SmoIT",
                image: "https://i.imgur.com/a4StkZR.png",
                link: "/smo-it",
                subject: "Practice Skills",
                detail: "Vue.js",
                admin: ['Jack']
            },
            {
                id: 8,
                title: "Dormlab",
                image: "assets/dormlab.png",
                link: "https://jacktnp.github.io/dormlab/html/login.html",
                subject: "ปี2เทอม2",
                detail: "Vue.js & Django",
                admin: ['Jack', 'Rew', 'Pang']
            },
            {
                id: 9,
                title: "Resume",
                image: "https://i.imgur.com/QNwTjnN.png",
                link: "#",
                subject: "Practice Skills",
                detail: "Vue.js",
                admin: ['Jack']
            }
        ],
        
        upcoming: [
            {
                id: 0,
                title: "soon...",
                image: "https://i.imgur.com/QNwTjnN.png",
                link: "#",
                subject: "soon...",
                detail: "soon..."
            },
            {
                id: 1,
                title: "soon...",
                image: "https://i.imgur.com/QNwTjnN.png",
                link: "#",
                subject: "Startup",
                detail: "soon..."
            }
        ]
  },
})
