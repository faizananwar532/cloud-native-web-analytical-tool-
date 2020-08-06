import React, { useContext, Fragment} from 'react'
import '../styles/footer.css'
import { Row } from 'react-bootstrap';
import AuthContext from '../context/authContext/authContext'

const Footer = () => {
    const {userAuth} = useContext(AuthContext)
    const FooterActivation = (
        <Fragment>
            <div className="main-footer">
                <div className="container">
                    <Row>
                        {/* colom */}
                        <div className="col footer-content">
                            <ul className='list-unstyled footer-ul'>
                                <li className='footer-brand'>Cloud Native Web Analytical Tool</li>
                                <li>                                    
                                    <ul className="social-network social-circle">
                                        <li><a href="/www.google.com"className="icoFacebook"title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="/www.google.com"className="icoLinkedin"title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="/www.google.com" className="icoInstagram" title="InstaGram"><i className ="fa fa-instagram"></i></a></li>
                                        <li><a href="/www.google.com" className="icoGmail" title="Gmail"><i className ="fa fa-google"></i></a></li>
                                    </ul>				
                                </li>   
                                <li><a href="/learnmore" className='footer-learnmore' >Learn More</a></li>                            
                            </ul>
                            <hr/>
                            <div className="footer-bottom">
                                <p className='text-xs-center'>
                                    &copy;{new Date().getFullYear()} Visualize Analytics App - All Rights
                                </p>
                            </div>
                        </div>  
                    </Row>
                </div>
            </div>
        </Fragment>
    )
    return(
        <div>
            {userAuth ? null : FooterActivation}
        </div>
    );
}

export default Footer
