import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"

import Message from "../layout/Message"
import Container from "../layout/Container"
import Loading from "../layout/Loading"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"


import styles from './Projects.module.css'

function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {

        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                }
            }).then(resp => resp.json())
            .then(data => {
                console.log(data);
                
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(error => console.log(error))
        }, 300)
            
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>My projects</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.nome}
                        key={project.id}
                        />
                    ))
                }
                {!removeLoading && <Loading />}
                {!removeLoading && projects.length === 0 &&
                    <p>Não há projetos cadastrados!</p>
                }
            </Container>
        </div>
    )
}

export default Projects