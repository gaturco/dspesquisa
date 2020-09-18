import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    links: string[];
    linksText: string[];
}

const Filters = ({ links, linksText }: Props) => (
    <div className="filters-container records-actions">
        {links?.map((link, index) => (
            <Link key={index} to={link}>
                <button className="action-filters">
                    {linksText[index]}
                </button>
            </Link>
        ))}
    </div>
);

export default Filters;