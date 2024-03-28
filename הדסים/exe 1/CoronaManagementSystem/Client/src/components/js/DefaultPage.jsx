import { Link, useNavigate, useParams } from 'react-router-dom'
//import '../css/DefaultPage.css'

export default function DefaultPage( {string} ) {

    // const navigate=useNavigate();
    // let { id } = useParams();
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // if (!id) {

    //     userInfo ? id = userInfo.id : id = null;
    // }
    return (
        <div className='defaultPage'>
            <h1 className='welcome'>{string}</h1>
            <Link to={`/home`}>See The List Of Members</Link>
            {/* <div className='entrance'>
                {!changeUser && userInfo && <Link to={`/home`}>Home</Link>}
                {changeUser && <Link to={`/uhome`}>Return Home</Link>}
            </div> */}
        </div>
    )
}
