import React from "react";
import Sidebar from "../Sidebar";
import "../MainContainer/_maincontainer.scss"

class MainContainer extends React.Component{
    render(){
        return(
            <section className="main-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-40">
                            <sidebar/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainContainer;