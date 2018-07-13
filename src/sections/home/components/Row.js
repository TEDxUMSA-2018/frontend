import React, {Component} from 'react';

const Row = (props) => {
    return (
        <React.Fragment>
            <div className="column is-6" style={{ backgroundColor: "red", height: '100vh', display: 'flex', alignItems: 'center'}}>
                <h1 className="title">1 - 1</h1>
                { props.firstCol() }
            </div>
            <div className="column is-6" style={{ backgroundColor: "blue", height: '100vh', display: 'flex', alignItems: 'center'}}>
                { props.secondCol() }
            </div>
        </React.Fragment>
    );
}

export default Row;