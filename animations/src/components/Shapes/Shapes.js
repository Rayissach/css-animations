import React from 'react';
import './Shapes.css';

class Shapes extends React.Component {
    render() {
        return (
            <div className='content'>
                <div classname='shape-box'>
                    <div className='shapes-an' id='yin-yang'>
                    </div>
                </div>
                {/* <div className='start-box'> */}
                    <div className='start'>
                        <h1>Start</h1>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Shapes;