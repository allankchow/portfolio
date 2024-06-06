import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import gsap from "gsap";

function AboutPage() {
    const [pageContent, setPageContent] = useState({
        title: "",
        image: "",
        intro: "",
        techStack: "",
        isLoading: true,
        error: null
    });

    useEffect(() => {
        const pageId = "16";  // This should correspond to the correct ID on your backend
        fetch(`https://allanchow.dev/portfolio/wp-json/wp/v2/pages/${pageId}`)
            .then(response => response.json())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data.content.rendered, "text/html");

                // Extract intro section
                const introSection = doc.querySelector(".wp-block-media-text.is-stacked-on-mobile.is-vertically-aligned-top");
                const introHtml = introSection ? introSection.innerHTML : 'Intro section not found';

                // Extract tech stack
                const techStackSection = doc.querySelector(".wp-block-group");
                const techStackHtml = techStackSection ? techStackSection.innerHTML : 'Tech stack not found';

                setPageContent(prevState => ({
                    ...prevState,
                    intro: introHtml,
                    techStack: techStackHtml,
                    isLoading: false
                }));
            })
            .catch(error => {
                console.error("Error fetching page:", error);
                setPageContent(prevState => ({
                    ...prevState,
                    isLoading: false,
                    error: "Failed to fetch data"
                }));
            });
    }, []);

    if (pageContent.isLoading) {
        return <div>Loading...</div>;
    }

    if (pageContent.error) {
        return <div>Error: {pageContent.error}</div>;
    }

    return (
        <main className="about-container">
            <div className="main-content">
                <h1>ABOUT | 关于</h1>
                <div className="content-flex">
                    <div className="intro" dangerouslySetInnerHTML={{ __html: pageContent.intro }} />
                    <div className="social-links">
                    <a href="https://github.com/allankchow" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="mailto:chowallan15@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.linkedin.com/in/allankchow" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                    <div className="tech-stack" dangerouslySetInnerHTML={{ __html: pageContent.techStack }} />
                </div>

            </div>
        </main>
    );
}

export default AboutPage;
