//import '../css/Messege.css'
import { useNavigate } from 'react-router-dom'

export default function User({ userDetails, deleteUser,setShowDetailsWindow}) {
    const navigate = useNavigate();
    return (
        <div className="user">
            <button onClick={() => { setShowDetailsWindow({ type: "update", flag: true, user: userDetails }) }}>🖊</button>
            <button onClick={() => deleteUser(userDetails.id_number)}>🗑</button>
            {console.log(userDetails)}
            <button className='title' onClick={() => navigate(`${userDetails.id_number}`)}>ID: {userDetails.id_number} Name: {userDetails.first_name+" "+userDetails.last_name}</button>
        </div>
    )
}