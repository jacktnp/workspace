var app = new Vue({
  el: '#workspace_db',
  data: {
    menu: [
        {id: 0, title: "Home", link: "#"},
        {id: 1, title: "Profile", link: "#"},
        {id: 2, title: "Project", link: "#"},
        {id: 3, title: "Contact", link: "#"}
    ],

    project: [
        {
            id: 1,
            title: "JO!NTY",
            image: "assets/01-jointy.png",
            link: "/jointy",
            subject: "Information Fundamental Technology",
            detail: "#ปี1เทอม1"
        },
        {
            id: 2,
            title: "Nakhonpratom Travel",
            image: "assets/02-multi.png",
            link: "/nakhon",
            subject: "Multimedia",
            detail: "#ปี1เทอม2"
        },
        {
            id: 3,
            title: "Loofer",
            image: "assets/03-loofer.png",
            link: "/loofer",
            subject: "Education Information Technology",
            detail: "#ปี1เทอม2"
        },
        {
            id: 4,
            title: "Journy and The Little Whale",
            image: "assets/04-geekathon.png",
            link: "/traveler",
            subject: "Geek A Thon",
            detail: "#hackathon"
        },
        {
            id: 5,
            title: "สันติ หนังคลาสสิค",
            image: "assets/05-arch.png",
            link: "/arch",
            subject: "Job",
            detail: "#รับงาน"
        },
        {
            id: 6,
            title: "Graphico",
            image: "assets/08-graphico.png",
            link: "/jointy",
            subject: "Web Technology",
            detail: "#ปี2เทอม1"
        },
        {
            id: 7,
            title: "SmoIT",
            image: "assets/01-jointy.png",
            link: "/jointy",
            subject: "Practice Skills",
            detail: "#Vue.js"
        },
    ],

    upcoming: [
        {
            id: 0,
            title: "soon...",
            image: "assets/00-no-image.png",
            link: "#",
            subject: "Startup",
            detail: "#Startup"
        },
        {
            id: 1,
            title: "soon...",
            image: "assets/00-no-image.png",
            link: "#",
            subject: "Startup",
            detail: "#Startup"
        }
    ]
  }
})