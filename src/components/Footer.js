import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo1.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/x-social-media-white-icon.svg';
import navIcon3 from '../assets/img/github-icon.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="LOGO" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/omar-abordn" target="open"><img src={navIcon1} /></a>
                            <a href="https://x.com/BlaugranaCN" target="open"><img src={navIcon2} /></a>
                            <a href="https://github.com/omarabordn" target='open'><img src={navIcon3} /></a>
                        </div>
                        <p>Omar Abordn. All right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
