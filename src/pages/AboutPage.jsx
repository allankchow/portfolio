import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

function AboutPage() {
    const [pageContent, setPageContent] = useState({
        title: "",
        image: "",
        text: "",
    });
    const bannerRef = useRef(null);

    // Define categories array
    const categories = [
        {
            title: "Frontend",
            skills: [
                "HTML5",
                "CSS3",
                "SASS",
                "JavaScript",
                "jQuery",
                "React",
                "Redux",
                "Figma",
                "Adobe XD",
                "Adobe Photoshop",
                "Adobe Illustrator",
            ],
        },
        {
            title: "Backend",
            skills: ["Node.js", "PHP", "MySQL", "WooCommerce", "WordPress"],
        },
        {
            title: "Tools & Other",
            skills: ["GitHub", "MatLab", "NPM"],
        },
    ];

    useEffect(() => {
        const pageId = "16"; // Adjust the page ID as necessary
        fetch(`https://allanchow.dev/portfolio/wp-json/wp/v2/pages/${pageId}`)
            .then((response) => response.json())
            .then((data) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(
                    data.content.rendered,
                    "text/html"
                );
                const image = doc.querySelector("img");
                const textContent = doc.body.innerHTML.replace(
                    image?.outerHTML,
                    ""
                );
                setPageContent({
                    image: image?.src,
                    text: textContent,
                });
            })
            .catch((error) => console.error("Error fetching page:", error));
    }, []);

    useEffect(() => {
        const categoriesContainer = bannerRef.current.querySelector('.categories');
        const totalWidth = categoriesContainer.scrollWidth;
    
        const baseSpeed = 30; 
        const duration = (totalWidth / window.innerWidth) * baseSpeed; 
    
        gsap.fromTo(categoriesContainer, {
            x: 0
        }, {
            x: -totalWidth,
            ease: "none",
            duration: duration, // Dynamically adjusted duration
            repeat: -1,
        });
    }, []);
    
    

    return (
        <main className="about-container">
            <div className="main-content">
                <h1>ABOUT | 关于</h1>
                <div className="content-flex">
                    {pageContent.image && (
                        <img src={pageContent.image} alt="About" />
                    )}
                    <div
                        dangerouslySetInnerHTML={{ __html: pageContent.text }}
                    />
                </div>
                <div className="social-links">
                    <a
                        href="https://github.com/allankchow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="mailto:chowallan15@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/allankchow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
            <div ref={bannerRef} className="tech-banner">
                <div className="categories">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <React.Fragment key={index}>
                            {categories.map((category, index) => (
                                <div key={index} className="category">
                                    <span className="category-title">
                                        {category.title}
                                    </span>
                                    {category.skills.map((skill, idx) => (
                                        <span key={idx} className="skill-item">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default AboutPage;
