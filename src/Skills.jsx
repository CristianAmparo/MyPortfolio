import React from "react"
import SkillSet from "./dataset/SkillSet"
export default function Skills() {
    
    
    const [Skills, setSkills] = React.useState(SkillSet)

    const element = Skills.map(prev => {
    const image = `/images/${prev.image}`
        return (
            <div className="card" key={prev.id}>
                <div className="cardImage">
                <img src={image} alt="Card Image" />
                </div>
                <div className="card-content">
                    <h3>{prev.title}</h3>
                    <p className="description">{prev.desc}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="Skills">
                    <div className="skills-desc">
                        <h1>My Skills</h1>
                    </div>
                    <div className="Skills-container">
                           {element}
                    </div>
                    <div className="triangleE">
                            <img src="/images/triangle.png" alt="" />
                        </div>
                        <div className="triangleF">
                            <img src="/images/triangle.png" alt="" />
                        </div>
                </div>
    )
}