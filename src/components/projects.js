import React from 'react'
import ProjectItem from './project-item'
import ProjectItemAlt from './project-item-alt'
import tsuyoIcon from '../img/tsuyo.png'
import tmwIcon from '../img/tmw.png'
import mftIcon from '../img/mft.jpg'
import oshigotoIcon from '../img/oshigoto.png'


export default function Projects() {
    return (
        <div className="row my-5" id="projects" data-aos="fade-up">
            <div className="container px-4 justify-content-center">
                <div className="row text-center text-heading">
                    <h2>Projects</h2>
                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItemAlt
                      title="Oshigoto"
                      techStack={"Vue, Django, Selenium"}
                      screenshot={oshigotoIcon}
                      bulletPoints={["Developed an application for scraping job listings and gathering insights from five different job listing sites"]}
                      links={[{ 
                        name: "source code",
                        url: "https://github.com/wrewsama/oshigoto"}]
                        }
                      />

                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItem
                      title="MyFitnessTomodachi"
                      techStack={"React Native, Golang"}
                      screenshot={mftIcon}
                      bulletPoints={["Built a mobile application for both Android and iOS with React Native and TypeScript"]}
                      links={[{ name: "frontend code",
                                url: "https://github.com/wrewsama/MyFitnessTomodachi"},
                              { name: "backend code",
                                url: "https://github.com/wrewsama/MyFitnessTomodachi-api"}]} />

                </div>
                <div className="row d-flex justify-content-center">
                    <ProjectItemAlt
                      title="tsuyo"
                      techStack={"MongoDB, Express, React, Node.js, Bootstrap"}
                      screenshot={tsuyoIcon}
                      bulletPoints={["Engineered a full-stack web application for users to track workouts and view progress over time through interactive graphs made using React and ChartJS",
                                     "Ensured secure transmission of data from backend to frontend utilising JSON web tokens"]}
                      links={[{ name: "website",
                                url: "https://tsuyo.onrender.com/login" },
                              { name: "frontend code",
                                url: "https://github.com/wrewsama/tsuyo-frontend"},
                              { name: "backend code",
                                url: "https://github.com/wrewsama/tsuyo-backend"}]} />
                </div>

                <div className="row d-flex justify-content-center">
                    <ProjectItem 
                      title="toomanywords"
                      techStack={"React, Flask, Firebase"}
                      screenshot={tmwIcon}
                      bulletPoints={["Collaborated in a two man team to develop a full-stack web based text summariser for students and educators to shorten overly verbose text",
                                     "Leveraged open-source Natural Language Processing library, Hugging Face  Transformers to summarise input text automatically and integrated it into backend using Flask",
                                     "Experimented with performance of multiple pre-trained NLP and summariser models from Hugging Face"]}
                      links={[{ name: "source code",
                                url: "https://github.com/Ramanathan0908/Orbital" },
                              { name: "demo video",
                                url: "https://drive.google.com/file/d/1G2qCzFBWzxYBWx1Hx_66Fmj7FLbqUS-P/view?usp=sharing"}]} />
                </div>

            </div>
        </div>
    )
}
