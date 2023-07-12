import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import './PortfolioWeb.css'

export default function PortfolioWeb() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const productData = [
        {
            id: 1,
            image: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5f7b82a674ea043faa688458_Influencer%20-%20Webflow%20Template%20-%201.png",
            heading: "Influancer Web Page",
        },
        {
            id: 2,
            image: "https://www.virtuemarttemplates.net/images/thumbs/hypershop/hypershop-4.jpg",
            heading: "e-Comerse",
        },
        {
            id: 3,
            image: "https://cdn.dribbble.com/users/8120973/screenshots/17263029/media/fe3f8f505c4947b7fa7e9d66313d3107.png?compress=1&resize=400x300",
            heading: "e-Comerse",
        },
        {
            id: 4,
            image: "https://i.pinimg.com/736x/f6/d0/9b/f6d09b92188012b5ae9818e43636b7ea--web-development-website.jpg",
            heading: "Flexiblity Website",
        },
        {
            id: 5,
            image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/11/attachment_88813488-e1572534840369.png?auto=format&q=60&fit=max&w=930",
            heading: "Web app",
        },
        {
            id: 6,
            image: "https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/ecommerce-website-templates-free-download-html-with-css-of-free-template-218-greeny-of-ecommerce-website-templates-free-download-html-with-css.jpg",
            heading: "Green Web",
        }
    ];

    const data = productData.map((item, index) => (
        <Card key={item.id} index={index} image={item.image} heading={item.heading} />
    ));

    return (
        <div id="Program">
            <h1 className='cardsHeading'>Portfolio Website</h1>
            <Carousel showDots={true} responsive={responsive}>{data}</Carousel>
        </div>
    );
}
