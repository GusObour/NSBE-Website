import React from 'react';

const Hero = () => {
    return (
        <div
            className="relative relative bg-gradient-to-r from-purple to-off-white text-white py-20 bg-cover bg-center"
            // style={{
            //     opacity: 0.8
            // }}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to KSU NSBE</h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                    The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States.
                    NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology.
                </p>
                {/* <p className="text-lg md:text-xl lg:text-2xl mb-6">
                    With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is
                    “to increase the number of culturally responsible black engineers who excel academically, succeed professionally and positively impact the community."
                </p> */}
                <a
                    href="https://www.nsbe.org/"
                    className="inline-block bg-purple text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-off-white"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default Hero;
