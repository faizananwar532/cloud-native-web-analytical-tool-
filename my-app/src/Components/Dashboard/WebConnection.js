import React from 'react'
import PropTypes from 'prop-types'

import './SubMainSectionLayout.css'
import './webConnection.css'



function WebConnection(props) {
    const string = "<script src=" + "//localhost:8290/divolte.js" + "defer async></script>"
    return (
        <div className = 'subLayout-section'>
            <div  className = 'subLayout-section-text'>
                <text>Web Connection</text>
            </div>
            <div className='connection-layout'>
                <div className='connection-wrapper'>
                    <div className="connect-textarea">
                        <text>Code</text>
                        <textarea className="sinpit" readOnly>{string}</textarea>
                    </div>                    
                    <div className="connect-password">
                        
                    </div>
                    <div className= "connect-button">
                        <button>Connect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

WebConnection.propTypes = {

}

export default WebConnection

