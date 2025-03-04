import { useLocation } from "react-router-dom"

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"

import styles from './Projects.module.css'

function Projects() {
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>My projects</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p>Projects...</p>
            </Container>
        </div>
    )
}

export default Projects