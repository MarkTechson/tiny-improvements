import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Input, Label } from "reactstrap";
import AwardCard from "./components/AwardCard";
import NameCard from "./components/NameCard";

class App extends Component {

  constructor() {
    super();
    this.state = {
      restaurants: [
        {
          name: 'Maialino',
          genre: 'Italian',
          score: 4.4
        },
        {
          name: 'Beyond Sushi',
          genre: 'Vegan',
          score: 4.7
        },
        {
          name: 'Abyssinia',
          genre: 'Ethiopian',
          score: 4.5
        },
        {
          name: 'La Roja de Todos',
          genre: 'Chilean',
          score: 4.5
        }
      ],
      users: [
        {
          name: "Alia",
          userId: 10457,
          position: "Solutions Engineer"
        },
        {
          name: "Cody",
          userId: 10850,
          position: "Senior Functional Consultant"
        },
        {
          name: "Ana",
          userId: 10222,
          position: "Lead Solutions Engineer"
        },
        {
          name: "Leon",
          userId: "02481",
          position: "King of All Solution Architects in the Pacific Region of Mars"
        }
      ],
      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us."
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does."
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee."
        }

      ]

    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Button color="success">Give Kudos</Button>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard title={award.title} comment={award.comment} />)}
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Form>
              <FormGroup>
                <Label>Give Kudos to</Label>
                <Input type="select">
                  {this.state.users.map(user => <option>({user.userId}) {user.name} {user.position}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Kudos Text" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        {/* NEW CODE GOES BELOW*/}


      </Container>
    );
  }
}

export default App;