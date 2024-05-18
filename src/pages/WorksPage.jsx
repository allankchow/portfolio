import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WorksPage = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('https://allanchow.dev/portfolio/wp-json/wp/v2/works?orderby=title&order=asc')
            .then(response => response.json())
            .then(data => {
                setWorks(data);
            })
            .catch(error => console.error('Error fetching works:', error));
    }, []);

    return (
        <div className="works-container">
            <h1>WORKS | 作品集</h1>
            <ul>
                {works.map(work => (
                    <li key={work.id}>
                        <Link to={`/works/${work.slug}`}>
                            <div className="image-container">
                                <img src={work.acf.work_image} alt={`Cover for ${work.title.rendered}`} />
                            </div>
                            <h2>{work.title.rendered}</h2>
                            <h3>{work.acf.work_subtitle}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorksPage;
