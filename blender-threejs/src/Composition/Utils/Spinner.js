import React from "react";
import { HashLoader } from "react-spinners";



const Spinner = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f7e7ce'
        }}>
            <HashLoader color="#ff3600" />
            <p style={{marginLeft:"40px"}}>The door is open, the stage is set</p>
        </div>
    );
};

export default Spinner;