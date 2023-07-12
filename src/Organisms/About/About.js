import React from "react";
import  "./About.css";

export default function About() {
    return (
        <div id="about" className='Main'>
            <div className='AboutUs'>
                <div className='Video1'>
                    
                    <iframe
                        width="360"
                        height="515"
                        src="https://www.youtube.com/embed/X_9VoqR5ojM"
                        title="YouTube video player"
                        // frameborder="0"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className='ContainerHeading'>
                    <h1 className='aboutHeading'>About Us</h1>
                    <p>
                        Welcome to Thought Crafters Web Solutions, your trusted partner for website development and maintenance. We are a leading company dedicated to delivering top-notch web solutions tailored to meet the unique needs of businesses across diverse industries. With our expertise, innovation, and commitment to excellence, we empower our clients to establish a strong online presence and achieve their digital goals
                    </p>
                    <button className='button'>Learn More</button>
                </div>
            </div>

            <div className='AboutUs'>
                <div>
                    <h1 className='aboutHeading'>Why Choose Us ?</h1>
                    <ul className='listContainer'>
                        <li>
                            <strong className='strong'>
                                Consultation with expert
                            </strong>
                            <p>
                                We have a team of experienced professionals with a deep understanding of web development and maintenance. Our experts stay up-to-date with the latest industry trends, technologies, and best practices. We have successfully completed numerous projects across diverse industries, enabling us to bring a wealth of knowledge and expertise to every project we undertake.
                            </p>
                        </li>
                        <li>
                            <strong className='strong'>With Strong Cutomer Rel </strong>
                            <p>
                                Choosing a professional website development and maintenance company like ours ensures that your online presence is in capable hands. With our experience, expertise, customized solutions, and comprehensive services, we can help you create a powerful website that drives business growth. From initial design to ongoing support, we are your trusted partner in establishing and maintaining a successful online presence. Contact us today to discuss your website needs and take your business to new heights
                            </p>
                        </li>
                    </ul>
                </div>

                <div className='Video2'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ScKP5CLKWms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>


    );
}