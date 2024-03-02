import React from 'react';
import { useParams } from 'react-router-dom';

function TeamDetails() {
    const { id } = useParams();

    const teams = [
        {
            image: "https://smartdublin.ie/wp-content/uploads/2023/04/TEAM.jpg",
            title: "Developers", text: "Наша команда займається розробкою та підтримкою програмного забезпечення",
            id: 1
        },
        {
            image: "https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg",
            title: "Природознавці", text: "Наша команда досліджує явища, що нас оточують", id: 2
        },
        {
            image: "https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg",
            title: "Маркетологи", text: "Наша команда забезпечує комерційну успішність проєктів", id: 3
        }
    ]

    const team = teams.find(team => team.id === parseInt(id));

    return (
        <div className="text-center">
            <img src={team.image} alt="Team image"/>
            <h2>{team.title}</h2>
            <p>{team.text}</p>
        </div>
    );
}

export default TeamDetails;
