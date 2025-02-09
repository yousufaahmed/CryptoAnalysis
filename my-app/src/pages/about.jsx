import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">About the Team</h1>
      <Row className="justify-content-center">
        {/* Developer Box 1 */}
        <Col xs={12} md={3} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Card.Img
                variant="top"
                src="https://avatars.githubusercontent.com/u/76410737?v=4" // GitHub picture URL (Yousuf Ahmed)
                alt="Yousuf Ahmed"
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
              />
              <Card.Title>Yousuf Ahmed</Card.Title>
              <Card.Text>Full Stack Developer</Card.Text>
              <div>
                <a href="https://www.linkedin.com/in/yousufaahmed" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className="mr-3" />
                </a>
                <a href="https://github.com/yousufaahmed" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Developer Box 2 */}
        <Col xs={12} md={3} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Card.Img
                variant="top"
                src="https://github.com/guhan-tofu.png" // GitHub picture URL (Sri Guhan)
                alt="Sri Guhan"
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
              />
              <Card.Title>Sri Guhan</Card.Title>
              <Card.Text>AI Developer</Card.Text>
              <div>
                <a href="https://www.linkedin.com/in/sri-guhan" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className="mr-3" />
                </a>
                <a href="https://github.com/sri-guhan" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Developer Box 3 */}
        <Col xs={12} md={3} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Card.Img
                variant="top"
                src="https://github.com/ernestboz.png" // GitHub picture URL (Ernest Bozjigitov)
                alt="Ernest Bozjigitov"
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
              />
              <Card.Title>Ernest Bozjigitov</Card.Title>
              <Card.Text>CTF Hacker 1</Card.Text>
              <div>
                <a href="https://www.linkedin.com/in/ernest-bozjigitov" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className="mr-3" />
                </a>
                <a href="https://github.com/ernest-bozjigitov" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Developer Box 4 */}
        <Col xs={12} md={3} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Card.Img
                variant="top"
                src="https://github.com/eliotde.png" // GitHub picture URL (Eliot Deacon)
                alt="Eliot Deacon"
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
              />
              <Card.Title>Eliot Deacon</Card.Title>
              <Card.Text>CTF Hacker 2</Card.Text>
              <div>
                <a href="https://www.linkedin.com/in/eliot-deacon" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className="mr-3" />
                </a>
                <a href="https://github.com/eliot-deacon" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
