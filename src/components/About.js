import React, { Component } from 'react';

class About extends Component {
    render(){
        
        // render only when this props data exist
        if(this.props.data){
            // Unexpected use of 'name' no-restricted-globals if you user let or const
            var name = this.props.data.name;
            var profilePic = "./images/"+this.props.data.image;
            var email = this.props.data.email;
        }
        return (   
            <section id="about">
                <div className="row">
                    <div className="three columns">
                       <img className="profile-pic"  src={profilePic} alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br />
                                    <span>{email}</span>
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