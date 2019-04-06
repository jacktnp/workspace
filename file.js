var app = new Vue({
    el: '#app',
    data: {
        project: [
            {
                id: 1,
                title: "JO!NTY",
                image: "assets/jointy.png",
                link: "/jointy",
                subject: "Information Fundamental Technology",
                detail: "ปี1เทอม1",
                admin: ['Jack', 'Pang']
            },
            {
                id: 2,
                title: "Nakhonpratom Travel",
                image: "assets/multi.png",
                link: "/nakhon",
                subject: "Multimedia",
                detail: "ปี1เทอม2",
                admin: ['Jack']
            },
            {
                id: 3,
                title: "Loofer",
                image: "assets/loofer.png",
                link: "/loofer",
                subject: "Education Information Technology",
                detail: "ปี1เทอม2",
                admin: ['Jack']
            },
            {
                id: 4,
                title: "Journy and The Little Whale",
                image: "assets/geekathon.png",
                link: "/traveler",
                subject: "Geek A Thon",
                detail: "hackathon",
                admin: ['Jack']
            },
            {
                id: 5,
                title: "สันติ หนังคลาสสิค",
                image: "assets/arch.png",
                link: "/arch",
                subject: "Job",
                detail: "รับงาน",
                admin: ['Jack']
            },
            {
                id: 6,
                title: "Graphico",
                image: "assets/graphico.png",
                link: "/jointy",
                subject: "Web Technology",
                detail: "ปี2เทอม1",
                admin: ['Jack']
            },
            {
                id: 7,
                title: "SmoIT",
                image: "assets/smo-it.png",
                link: "/smo-it",
                subject: "Practice Skills",
                detail: "Vue.js",
                admin: ['Jack']
            },
            {
                id: 8,
                title: "Dormlab",
                image: "assets/no-img.png",
                link: "#",
                subject: "ปี2เทอม2",
                detail: "Vue.js & Django",
                admin: ['Jack', 'Rew', 'Pang']
            },
            {
                id: 9,
                title: "Resume",
                image: "assets/no-img.png",
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
                image: "assets/no-img.png",
                link: "#",
                subject: "soon...",
                detail: "soon..."
            },
            {
                id: 1,
                title: "soon...",
                image: "assets/no-img.png",
                link: "#",
                subject: "Startup",
                detail: "soon..."
            }
        ]
  },
})
