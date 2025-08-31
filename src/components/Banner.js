import { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(() => [" Frontend Developer"], []);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [
    loopNum,
    isDeleting,
    text,
    toRotate,
    period,
    setDelta,
    setIsDeleting,
    setLoopNum,
    setText,
  ]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <div className="container">
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            {/* <h1>{``} </h1> */}
            <h1>
              {`Hi! I'm Ayush,`}
              <span className="wrap">{text}</span>{" "}
            </h1>
            <p>
              I am a software developer with a passion for creating innovative
              solutions to complex problems. I have a strong background in
              computer science and a keen eye for detail. I am always eager to
              learn new technologies and improve my skills.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </div>
    </section>
  );
};
