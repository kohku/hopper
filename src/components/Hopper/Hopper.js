import React from 'react';
import Bell from '../Bell';
import './Hopper.css';

const Hopper = () => (
    <div className="hopper">
        <div className="row">
            <div className="column">
                <Bell direction="north" />
            </div>
            {/* <div className="column">
                <Bell direction="east" />
            </div>
            <div className="column">
                <Bell direction="south" />
            </div>
            <div className="column">
                <Bell direction="west" />
            </div> */}
        </div>
    </div>
);


export default Hopper;