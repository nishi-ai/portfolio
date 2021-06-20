import React, { Component } from 'react';  
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCopied: false
        }
    }
    // onCopyText function to toggle this state
    onCopyText = () => {
        this.setState({ isCopied: true })
        setTimeout(() => {
           this.setState({ isCopied: false })
        }, 1000);
    };
    // render function
    render(){
        
        // render only when this props data exist
        if(this.props.data){
            // Unexpected use of 'name' no-restricted-globals if you user let or const
            var email = this.props.data.email;       
        }
        return (   
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <div className="row">
                            <div className="columns contact-details">
                                <p className="address">
                                    <h6>The most easiest way to email me <FontAwesomeIcon icon={['fas', 'leaf']} /></h6>
                                    <span>{email}</span>
                                    <CopyToClipboard text={email} onCopy={ this.onCopyText }>
                                    <span>{this.state.isCopied ? <FontAwesomeIcon icon={['fas', 'clipboard-check']} /> : <FontAwesomeIcon icon={['fas', 'copy']} />}</span>
                                    </CopyToClipboard>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
export default About;