import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";  

const WorkPage = () => {
    const { slug } = useParams();
    const [work, setWork] = useState(null);

    useEffect(() => {
        fetch(`https://allanchow.dev/portfolio/wp-json/wp/v2/works?slug=${slug}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setWork(data[0]); // Assuming the first entry is the desired one
                } else {
                    console.log('No work found for this slug:', slug);
                }
            })
            .catch(error => console.error('Error fetching work detail:', error));
    }, [slug]);

    if (!work) {
        return <div className="work-loading">Loading...</div>;
    }

    // Helper function to generate list items from a backtick-separated string
    const generateListItems = text => {
        return text.split('`').map((item, index) => (
            <li key={index} className="tech-list-item">{item.trim()}</li>
        ));
    };

    // Function to split content based on tilde and render as paragraphs
    const renderContentSections = text => {
        return text.split('~').map((section, index) => (
            <p key={index} className="work-description">{section.trim()}</p>
        ));
    };

    return (
        <div className="work-page-content">
            <div className="content-left">
                <Link to="/works" className="return-link">Return</Link>
                <img src={work.acf.work_image} alt={`Cover for ${work.title.rendered}`} className="work-image" />
                <h1 className="work-title">{work.title.rendered}</h1>
                <h2 className="work-subtitle">{work.acf.work_subtitle}</h2>
            </div>
            <div className='content-right'>
                <div className="flex-content">
                    <h3 className="section-heading">{work.acf.work_overview_heading}</h3>
                    <div className="social-links">
                        <a  href={`https://github.com/allankchow/${slug}`}
                            target="_blank"
                            rel="noopener noreferrer">See on GitHub
                            <span>
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </span>
                        </a>
    
                    </div>
                </div>
                {renderContentSections(work.acf.work_overview)}
                <h3 className="section-heading">{work.acf.tech_heading}</h3>
                <ul className="tech-list">
                    {generateListItems(work.acf.tech_list)}
                </ul>
                <h3 className="section-heading">{work.acf.key_features_heading}</h3>
                <ul className="features-list">
                    {generateListItems(work.acf.key_features_body)}
                </ul>
            </div>

        </div>
    );
};

export default WorkPage;
