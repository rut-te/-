import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function UserInfo() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState();
    //const [showDetailsWindow, setShowDetailsWindow] = useState({ type: "", flag: false });
    //const [details, setDetails] = useState({});
    const [exeption, setExeption] = useState(false);
    const [messege, setMessege] = useState({ flag: false, string: "" });
    const { userId } = useParams();
    // let dateObject;
    // let dateString;

    useEffect(() => {
        setIsLoading(true);
        getUser();
        setIsLoading(false);
    }, []);

    function getUser() {
        const myUsersArr = JSON.parse(localStorage.getItem("users"));
        console.log(myUsersArr);
        const currentUser = myUsersArr.find((obj) => obj.id_number == userId);
        setUser({ ...currentUser });
    }
    return (
        <div className='info'>
            <div>
                <button className='closeInfo' onClick={() => navigate("..")}>❌</button>
            </div>
            {console.log(user)}
            {isLoading && <h3>Loading...</h3>}
            {user && <div className='userInfo'>
                <div className='userInfoDives'>
                    <h3>ID: {user.id_number}</h3>
                    <h3>First Name: {user.first_name}</h3>
                    <h3>Last Name: {user.last_name}</h3>
                </div>
                <div className='userInfoDives'>
                    <h3>Address: {user.address}</h3>
                    <h3>Date Of Birth: {user.date_of_birth.substring(0, 10)}</h3>
                </div>
                <div className='userInfoDives'>
                    <h3>Phone Number: {user.phone_number}</h3>
                    <h3>Mobile Phone Number: {user.mobile_phone_number}</h3>
                </div>
                <div className='userInfoDives'>
                    {user.vaccine_date1 && <h3>Vaccine Date 1: {user.vaccine_date1.substring(0, 10)}</h3>}
                    {user.vaccine_manufacturer1 && <h3>Vaccine Manufacturer 1: {user.vaccine_manufacturer1}</h3>}
                </div>
                <div className='userInfoDives'>
                    {user.vaccine_date2 && <h3>Vaccine Date 2: {user.vaccine_date2.substring(0, 10)}</h3>}
                    {user.vaccine_manufacturer2 && <h3>Vaccine Manufacturer 2: {user.vaccine_manufacturer2}</h3>}
                </div>
                <div className='userInfoDives'>
                    {user.vaccine_date3 && <h3>Vaccine Date 3: {user.vaccine_date3.substring(0, 10)}</h3>}
                    {user.vaccine_manufacturer3 && <h3>Vaccine Manufacturer 3: {user.vaccine_manufacturer3}</h3>}
                </div>
                <div className='userInfoDives'>
                    {user.vaccine_date4 && <h3>Vaccine Date 4: {user.vaccine_date4.substring(0, 10)}</h3>}
                    {user.vaccine_manufacturer4 && <h3>Vaccine Manufacturer 4: {user.vaccine_manufacturer4}</h3>}
                </div>
                <div className='userInfoDives'>
                    {user.positive_test_date && <h3>Positive Test Date: {user.positive_test_date.substring(0, 10)}</h3>}
                    {user.recovery_date && <h3>Recovery Date: {user.recovery_date.substring(0, 10)}</h3>}
                </div>

            </div>
            }
        </div>
    )
}