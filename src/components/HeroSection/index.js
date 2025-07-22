import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import "./hero.css";

const HeroSection = () => {
    const handleSendMessage = () => {
        const phoneNumber = '9494452610'; 
        const message = 'Hello Yugandhar Naik Sabhavath, I’m interested in discussing this further with you. Let’s connect at your convenience!'; 
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <div className='but'>
                            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                            <ResumeButton onClick={handleSendMessage} className='contact'>chat with me</ResumeButton>
                        </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src="https://res.cloudinary.com/drdjty87p/image/upload/v1724928311/WhatsApp_Image_2024-08-29_at_3.04.55_PM_pzxnrc.jpg" alt="hero-image" className='image' />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default HeroSection;
