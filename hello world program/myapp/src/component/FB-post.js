import React from "react"
import "./FB-post.css"
import like from "./like.png"
import comment from "./comment.png"
import share from "./share.jpeg"
import img_avatar2 from "./img_avatar2.png"
// import FBpostinfo from "./FB-postinfo"
// import searchResult from "./FB-postinfo"

function FBpost({username, img,title, description }) {
    return (
        <center>
        <div className="container">
            <img src={img_avatar2} className="avatar" alt="hello world"/>
            <h2 className="h2">{username}</h2>
            
        <h2 className="title">{title}</h2>
        <img src={img} alt="images" />
        <p>{description}</p>
        <hr/>
         <div className="hello">        
             <img src={like} className="image" id="a" alt="like"/>
             <img src={comment} className="image" id="b" alt="comment"/>
             <img src={share} className="image" id="c" alt="share"/>

         </div>

        </div>
        </center>
    )
}

export default FBpost