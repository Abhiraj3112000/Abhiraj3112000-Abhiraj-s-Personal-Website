import React, { Component } from 'react';
 import "./Footer.css"
class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container-foot">
                    <section className="ft-social">
                        <ul className="ft-social-list">
                            <li><a href={"#"} target="_blank" rel="noopener noreferrer">
                               <i className="fab fa-github" id="main-icon"/>   
                            </a></li>
                            <li><a href={"#"} target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin"  id="main-icon"/>  
                            </a></li>
                            <li><a href={"#"} target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-facebook" id="main-icon"/>
                            </a></li>
                            <li><a href={"#"} target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-twitter"  id="main-icon"/>   
                            </a></li>
                            <li><a href= { "mailto:" + "#" } target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-envelope" id="main-icon"/>    
                            </a></li>                     
                        </ul>
                    </section> 
                    <br/>
                    <section className="ft-legal" style={{ textAlign: "center", color: "#afafaa" }}>
                        <p id="ft-p-copy">
                            Copyright &copy; 2020 Abhiraj Chatterjee
                        </p>
                    </section>
                </div>
            </footer>
           
        );
    }
    
}

export default Footer;