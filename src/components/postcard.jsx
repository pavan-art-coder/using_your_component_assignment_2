import react from 'react'
import LikeButton from './likebutton'
const PostrCard=({User})=>{
   return(
    <>
    <img>Profile:{User.profileimage}</img>
    <h1>Username:{User.username}</h1>
    <p>Description:{User.content}</p>
    <h3>Liked:{User.isliked}</h3>
    <LikeButton/>


    
    
    
    </>
   )
}




export default PostrCard