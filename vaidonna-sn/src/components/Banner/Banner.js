import React from 'react';
import './Banner.scss';
import { Parallax } from 'react-parallax';

const Banner = () => {
    return (
        <div className="banner">
            <Parallax bgImage="https://images.unsplash.com/photo-1525253086316-d0c936c814f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" strength={500}>
                <div style={{ height: 600 }}>

                </div>
            </Parallax>

        </div>
    )
}
export default Banner;