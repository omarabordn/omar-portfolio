import { FrontProjectCard } from './FrontProjectCard';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";






export const Projects = () => {

  const frontProjects = [
    {
      title: "SpeedEX Shipping Company",
      description: "Design & Development using HTML,CSS,JS",
      imgUrl: projImg1,
      link: 'https://omarabordn.github.io/speedex/',
    },
    {
      title: "NETFLIX Clone",
      description: "Responsive Design & Development using HTML,CSS,JS",
      imgUrl: projImg5,
      link: 'https://omarabordn.github.io/netflix/',

    },
    {
      title: "Black&White Peronal Portofolio",
      description: "Responsive Design & Development using HTML,CSS,JS",
      imgUrl: projImg3,
      link: 'https://omarabordn.github.io/personal-portfolio/',

    },
    {
      title: "Peronal Portofolio",
      description: "Responsive Design & Development using HTML,CSS,JS",
      imgUrl: projImg4,
      link: 'https://omarabordn.github.io/joebelson/',

    },
    {
      title: "Personal Card",
      description: "Design & Development using ReactJS",
      imgUrl: projImg2,
      link: 'https://omarabordn.github.io/personal-card/',

    },
    {
      title: "Airbnb Clone",
      description: "Design & Development using ReactJS",
      imgUrl: projImg6,
      link: 'https://omarabordn.github.io/airbnb-clone/',
    },

  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects & Experience</h2>
            <p className='title'></p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Education</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      frontProjects.map((project, index) => {
                        return (
                          <FrontProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className='exp-desc'> <span className='bold'>- Front-End</span> <br></br>Develop and maintain responsive web pages using HTML, CSS, and JavaScript.<br></br>Developing and implementing highly responsive user interface components using React concepts.<br></br>Good experience and knowledge in HTML,CSS,Bootstrap,JavaScript,React,git.</p>
                  <p className='exp-desc'> <span className='bold'>- Mechatronics Engineering</span> <br></br>Design and simulate electronic and mechanic systems.<br></br>Good experience and Work with microcontrollers and arduino and implement many projects, See One of the projects <a href='/project.pdf' target='open'>Here.</a></p>
                  <p className='exp-desc'> <span className='bold'>- Embroidery Design and Digitize</span> <br></br>Design and sell embroidered or printed uniforms, Work with embroidery machines and embroidery design programs.<br></br>I also started an instagram store you can visit <a href='https://www.instagram.com/threadandink1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='open'>Here.</a></p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className='exp-desc'>University of Aleppo<br></br><span className='bold'>Bachelor's Degree in Mechatronics Engineering 2018-2022</span> <br></br>Mechatronics engineering integrates mechanical, electronic, and computer engineering to design intelligent systems.</p>
                  <p className='exp-desc'>Syrian Virtual University<br></br><span className='bold'>Master Degree in Computer Science 2023-Present</span><br></br>Algorithms, information theory, data analysis, automation, and computing theory.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>

  )
}