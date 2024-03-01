import React, {useState} from 'react';
import {TypeAnimation} from "react-type-animation";

import profile from "./assets/profile.jpg"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import discord from "./assets/discord.svg"
import gmail from "./assets/gmail.svg"
import twitter from "./assets/twitter.svg"

import ImageLink from "./components/ImageLink";
import copy from 'clipboard-copy';

const TYPING_ANIMATION = [
    'Java Developer', 800,
    'Backend Developer', 800,
    'I know something about React', 800,
    'A little JS, Python, HTML and more stuff', 800,
    'Technology enthusiast', 800,
    'Coffee Lover', 800,
    'Minecraft addicted', 800,
    'Sometimes I think I\'m crazy', 800
];

function App() {
    const [text, setText] = useState('srblecaute')
    const [visible, setVisible] = useState(false);
    const [time, setTime] = useState<NodeJS.Timeout | undefined>()

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-tr from-[#000000] to-[#323131] top-52%">
            <div className="flex-1 flex flex-col items-center bg-[#171717] w-[85lvw] mt-[5lvh] shadow-md rounded-3xl p-5">
                <div className="flex flex-col items-center">
                    <img alt='profile' className="h-36 w-36 lg:h-48 lg:w-48 rounded-full object-cover object-top" src={profile}/>
                    <p className="mt-5 text-white font-bold text-3xl">I'm José Arnaldo</p>
                    <TypeAnimation
                        className="mt-3 text-white select-none"
                        sequence={TYPING_ANIMATION}
                        repeat={Infinity}
                        speed={10}
                        deletionSpeed={50}
                    />
                </div>

                <div className="h-full w-[75lvw] flex items-center text-white text-justify indent-4 text-[13.5px]/6 md:indent-8 md:text-base">
                    Hey guys! I am currently an Information Systems student at the Federal University
                    of Alagoas and graduated as an Environmental Technician from the Federal Institute of Alagoas.
                    I am always looking for opportunities to grow and learn, in addition to having a special
                    affection for the areas of Environment and Technology. I have knowledge mainly in Java,
                    but I know a little about Python, JS, Kotlin, React and others.
                </div>

                <div className="px-3 py-2 mb-2 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700"  style={{visibility: visible ? 'visible' : 'hidden'}}>
                    <p className="text-sm font-medium text-white">{text}</p>
                </div>

                <div className="flex flex-wrap mb-8 items-center">
                    <ImageLink url="www.linkedin.com/in/jose-arnald0" src={linkedin} description="LinkedIn"/>
                    <ImageLink url="mailto:jose@arnaldo.dev" src={gmail} description="Gmail" target={''}/>

                    <div
                        onClick={() => copy('srblecaute').then(() => setText("Username Copiado"))}
                        onMouseEnter={() => setTime(setTimeout(() => setVisible(true), 350))}
                        onMouseLeave={() => {
                            clearTimeout(time)
                            setVisible(false)
                            setText('srblecaute')
                        }}>
                        <ImageLink src={discord} description="Discord"/>
                    </div>

                    <ImageLink url="https://github.com/SrBlecaute01" src={github} description="Github"/>
                    <ImageLink url="https://twitter.com/SrBlecaute" src={twitter} description="X"/>
                </div>
            </div>

            <footer className="p-3">
                <p className="text-sm text-white font-bold">Arnaldo © 2024</p>
            </footer>
        </div>
    );
}

export default App;