import React from 'react';
import CarouselBoxHk from "../Components/CarouselBoxHk";
import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Home() {
    const teams = [
        {
            image: "https://smartdublin.ie/wp-content/uploads/2023/04/TEAM.jpg",
            title: "Developers", text: "Команда 1", id: 1
        },
        {
            image: "https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg",
            title: "Природознавці", text: "Команда 2", id: 2
        },
        {
            image: "https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg",
            title: "Маркетологи", text: "Команда 3", id: 3
        }
    ]

    return (
        <div>
            <CarouselBoxHk/>
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <div className="row">
                    {teams.map((team, index) => (
                        <div className="col" key={index}>
                            <Card className="m-4 text-center" bg="light">
                                <Card.Img variant="top" src={team.image} />
                                <Card.Body>
                                    <Card.Title>{team.title}</Card.Title>
                                    <Card.Text>{team.text}</Card.Text>
                                    <Link to={`/team/${team.id}`}>
                                        <Button variant="primary">About team</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;