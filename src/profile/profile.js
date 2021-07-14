

import PropTypes from 'prop-types' 
import Photo from './image'

const Data = props => {
    const handleName = () => {
        alert(props.fullName)
    }
    const styleBtn = {backgroundColor: "grey", fontSize:25, borderRadius: 10}
    return (
        <>
            <Photo>User Image</Photo>

            <h1> {props.fullName}</h1>
            <h4> {props.bio}</h4>
            <h4> {props.profession}</h4>
            <button style={styleBtn} onClick={handleName}>User's Name</button>
           
        </>
    )
}

Data.defaultProps = {
    fullName : "Foulan Ben Foulane :)",
    bio :"rien",
    profession : "Web Developer"
}


Data.propTypes ={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}


export default Data