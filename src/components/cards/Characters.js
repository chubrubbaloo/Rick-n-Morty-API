import React from "react";
import {GiHeartBeats} from "react-icons/gi";
import {GiChoppedSkull} from "react-icons/gi";
import {GiMale} from "react-icons/gi";
import {GiFemale} from "react-icons/gi";
import {MdLocationPin} from "react-icons/md";
import {GiHumanTarget} from "react-icons/gi";
import {GiAlienBug} from "react-icons/gi";
import {GiRobotAntennas} from "react-icons/gi";
import {BsQuestionLg} from "react-icons/bs";


export const Characters = ({characters}) => {
    return (
        <section className="flex-container">
            {characters.map((character) => (
                <div className='card' key={character.id}>
                    <img src={character.image} alt=""/>
                    <h3> {character.name} </h3>
                    <div className='property-style'>
                        <p>
                            {character.status === 'Alive' ?
                                <GiHeartBeats className='status-icons'/> : character.status === 'Dead' ?
                                    <GiChoppedSkull className='status-icons'/> :
                                    <BsQuestionLg className='status-icons'/>}
                            {character.status === 'Alive' ? 'Alive' : character.status === 'Dead' ?
                                'Dead' : 'Unknown Status'}
                        </p>
                        <p>
                            {character.species === 'Human' ? <GiHumanTarget className='status-icons'/>
                                : character.species === 'Alien' ? <GiAlienBug className='status-icons'/> :
                                    <GiRobotAntennas className='status-icons'/>}
                            {character.species === 'Human' ? 'Human' : character.species === 'Alien' ? 'Alien' : 'Robot'}
                        </p>
                        <p>
                            {character.gender === 'Male' ? <GiMale className='status-icons'/> :
                                <GiFemale className='status-icons'/>} {character.gender === 'Male' ? 'Male' : 'Female'}
                        </p>
                        <p>
                            <MdLocationPin className='status-icons'/> {character.location.name}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}