import React from "react"
import PropTypes  from "prop-types"
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile = ({fullName,profession,bio,children,handleName}) =>{
    return (
        <div  style={{textAlign: "center"}}>
            {children}
            <h1 style={{color: "silver"}}>{fullName}</h1>
            <h3 style={{color : "rebeccapurple" }}>{profession}</h3>
            <p style={{color : "white" }}>{bio}</p>
            <Button style={{color : "rebeccapurple" ,backgroundColor:"black"}} onClick={() =>handleName(`Hello! Taha yassine ,Thanks for reading  `)}>
                ClickMe
            </Button>
        </div>
    )
}
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    handleName: PropTypes.func
}
Profile.defaultProps = {
    fullName: "Steve Jobs",
    profession: "Entrepreneur",
    bio: "Ex-CEO of Apple"

}
export default Profile