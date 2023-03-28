import React from 'react'
import PropTypes from 'prop-types'
import dv from './dv.jpeg'

function Profil ({fullName, bio, profession}){
    return ( <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1 style={{display: 'flex', textAlign: 'center'}}>{fullName}</h1>
        <img src={dv}alt="Profil" style={styles.image}/>
        <h2 style={{padding:'1px',}}>{bio}</h2>
        <p>{profession}</p>
        <button onClick={() => alert (fullName)}>
            nom complet
        </button>
</div>)
}
Profil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,  
    handleName: () => {},
}
Profil.defaultProps = {
    fullName: 'GOMYCODE',
    bio: 'Economiste et informaticien, Demba Niakhate est Professeur à Dakar Ecole de Management et Doyen du Corps Professoral.',
    profession: ' informaticien '
}
const styles = {
    image:{
        width: '100%',
        height: '200vh',
        borderRadius: '50',
    }
}
export default Profil