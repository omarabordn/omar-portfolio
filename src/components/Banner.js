import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleted, setIsDeleted] = useState(false);
    const toRotate = ["Front-End Developer", "ReactJS Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleted ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleted) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleted && updatedText === fullText) {
            setIsDeleted(true);
            setDelta(period);
        } else if (isDeleted && updatedText === '') {
            setIsDeleted(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Omar `}<span className='wrap'><span><br /> {text}</span></span></h1>
                        <p>A highly motivated Web Developer,
                            seeking to grow in experience and learn how to utilize his skillset
                            in a leading company. Moreover, to be an effective member and
                            a team player.</p>
                        <button><a href='https://omar-abordn-resume.tiiny.site/' target='open' >My Resume<ArrowRightCircle size={25} /> </a></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header' />

                    </Col>
                </Row>
            </Container>
        </section>
    )
}


//https://omarabordn.github.io/omar-portfolio/