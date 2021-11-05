import './App.css';

export default function App() {
    console.log("Hello Everyone");

    //const names = ["Master", "Kaththi", "Yuvan-song", "G.v-song", "Insta"],;

    const Users = [{
            name: "Master",
            pic: "https://i.pinimg.com/originals/73/23/b3/7323b3c7f8cc1299d1596b2c60109f9f.jpg",
            Rating: 9.5 / 10,
            summary: "Troubled alcoholic teacher JD is sent to teach at a juvenile reform school. But when he realises a dangerous criminal is using his students to cover up his crimes, JD sets out to stop him. Strong violence, drug misuse."
        },
        {
            name: "Kaththi",
            pic: "https://st1.bollywoodlife.com/wp-content/uploads/2014/10/vijay12.jpg",
            Rating: 9.8 / 10,
            summary: "Jeevanantham, and his lookalike Kathiresan, try to prevent a multinational company from forcefully taking over a village with fertile agricultural land to make room for commercial projects."
        },
        {
            name: "Yuvan-song",
            pic: "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(jpg)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/package/Yuvan.png",
            Rating: 9.8 / 10,
            summary: "Yuvan Shankar Raja is the third and youngest child of musician and film composer Ilaiyaraaja. He is the younger brother of music director Karthik Raja and playback singer-music director Bhavatharini. Yuvan once confessed that his brother Karthik Raja was more talented than him, but he did not get a successful break into the music business since he did not get a good team to work with",
        },
        {
            name: "G.v-song",
            pic: "https://static.toiimg.com/thumb/msid-84261722,width-1200,height-900,resizemode-4/.jpg",
            Rating: 8 / 10,
            summary: "G. V. Prakash Kumar is an Indian Tamil composer, actor, producer and singer.[3][4] He has predominantly scored music for Tamil films and Telugu films. His first film was S Pictures' Veyil (2006) and he became popular in Tamil cinema by the early 2010s.[5][6] He made his debut in acting on 2015 through Darling",
        },
        {
            name: "Insta",
            pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/photo-1611262588024-d12430b989_1200x768.jpeg?cKq2xcBMBm5eaadsXhYdeAAaFJXk5745&size=770:433",
            Rating: 6.7 / 10,
            summary: "Insta-id - sannasichottu",
        },
    ];
   
return (
    <div className="App">
        {Users.map((ur)=>
            mgs(ur.name, ur.pic, ur.Rating, ur.summary)
        )}
    </div>)
    function mgs (name,pic,Rating,summary){
        return(
    <div>
        <img className="User-pic" src={pic} alt={name}/>
        <h1 className="User-name" >{ name}</h1>
        <h2 className="Rating">{Rating}</h2>
        <h3 className="summary"> {summary} </h3>
    </div>)
    }
        
    }
