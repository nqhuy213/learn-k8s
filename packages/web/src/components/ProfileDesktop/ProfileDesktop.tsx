import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const DiagnolBackground = styled.div`
  font-family: 'Electrolize', sans-serif;
  background: linear-gradient(rgba(135, 60, 255, 1), rgba(135, 60, 255, 0) 0%),
    linear-gradient(75deg, #ffb400 20%, rgba(17, 17, 17, 255) 0%);
  height: 100vh;
  width: 100%;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 0 7px rgb(0 0 0 / 90%);
`

const Name = styled.h1``

const Title = styled.h1``

const Description = styled.p``

export default function ProfileDesktop() {
  return (
    <DiagnolBackground>
      <Container className="flex p-0 m-0 w-100 h-100" fluid={true}>
        <Row className="w-100 p-0 m-0  w-100 h-100">
          <Col
            xs={4}
            className="p-5 d-flex flex-row justify-content-center align-items-center h-100"
          >
            <Avatar src="https://picsum.photos/200/300" />
          </Col>
          <Col
            xs={8}
            className="p-5 d-flex flex-row justify-content-center align-items-center h-100"
          >
            <div>
              <Name>I'M HARVEY NGUYEN.</Name>
              <Title>Software Engineer</Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque tempore,
                quaerat quibusdam quo at adipisci molestiae, aspernatur nihil non, quod vel
                praesentium libero fuga esse! Maiores saepe repellendus quasi.
              </Description>
            </div>
          </Col>
        </Row>
      </Container>
    </DiagnolBackground>
  )
}
