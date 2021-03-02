import React from "react";

const Footer= props => {
    
    return(

           <>

            <div className="ui two column grid">            
            <div className="seven wide column" style={{background:"whitesmoke"}}>
                
                    <div className="ui two column grid padding-no">
                        <div className="three wide column"></div>
                        <div className="thirteen wide column padding-md" >
                            <div className="ui one column grid padding-xl">
                                <div className="column">
                                    <div className="ui header text-size-big nav-bar-brand-name ">
                                        Find out
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="text-color-grey ">
                                        It has roots in a piece of classical
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="ui two column grid padding-no ">
                                        <div className="three wide column" style={{width:'fit-content'}} >
                                            Find out
                                        </div>

                                        <div className="column">
                                            Find out
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

            <div className="nine wide column" style={{background:"lightgray"}}>
                
            </div>

            </div>


        </>
    );
}

export default Footer;