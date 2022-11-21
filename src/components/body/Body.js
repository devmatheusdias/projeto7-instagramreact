import React from "react";
import ListStories from "./stories/ListStories";
import ListPosts from "./posts/ListPosts";
import Sidebar from "../sidebar/Sidebar";

export default function Body(props) {
    return (
        <div className="corpo">
            <div className="esquerda">
                <ListStories></ListStories>
                <ListPosts></ListPosts>
            </div>
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}
