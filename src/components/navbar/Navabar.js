import React from "react";
import Logo from "./Logo";
import Pesquisa from "./Pesquisa";
import Menu from "./Menu";

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="container">
                <Logo></Logo>
                <Pesquisa></Pesquisa>
                <Menu></Menu>
            </div>
        </div>
    )
}
