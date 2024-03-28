import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import User from './User'
import '../css/Home.css';
import Exeption from "./Exeption.jsx";
import SuccessfulOperation from './SuccessfulOperation.jsx';
import AddOrUpdateUser from "./AddOrUpdateUser.jsx";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState();
    const [search, setSearch] = useState();
    const [showDetailsWindow, setShowDetailsWindow] = useState({ type: "", flag: false });
    const [details, setDetails] = useState({});
    const [exeption, setExeption] = useState(false);
    const [messege, setMessege] = useState({ flag: false, string: "" });
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const usersArr = JSON.parse(localStorage.getItem("users"));
        if (!usersArr) {
            getUsers();
        }
        else {
            setUsers(usersArr);
        }
        setIsLoading(false);

    }, []);

    async function getUsers() {
        try {
            const response = await fetch(`http://localhost:2024/users`);
            const resData = await response.json();
            if (response.ok) {
                localStorage.setItem("users", JSON.stringify(resData));
                setUsers(resData);
            }
            else {
                throw new Error(response.status)
            }
        }
        catch (e) {
            console.log(e);
            setExeption(true);
            setTimeout(() => {
                setExeption(false);
            }, 5000);
        }
    }

    function searchUsers(string) {
        let newArrUsers = JSON.parse(localStorage.getItem("users"));
        newArrUsers = newArrUsers.filter(user => (user.first_name.includes(string) || user.last_name.includes(string)))
        setUsers([...newArrUsers]);
    }

    async function addUser() {
        setShowDetailsWindow({ type: "", flag: false });
        console.log(details);
        try {
            const response = await fetch(`http://localhost:2024/users`, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        firstName: details.firstName,
                        lastName: details.lastName,
                        idNumber: details.idNumber,
                        address: details.address,
                        dateOfBirth: details.dateOfBirth,
                        phoneNumber: details.phoneNumber,
                        mobilePhoneNumber: details.mobilePhoneNumber,
                        vaccineDate1: details.vaccineDate1,
                        vaccineManufacturer1: details.vaccineManufacturer1,
                        vaccine_date2: details.vaccineDate2,
                        vaccine_manufacturer2: details.vaccineManufacturer2,
                        vaccine_date3: details.vaccineDate3,
                        vaccine_manufacturer3: details.vaccineManufacturer3,
                        vaccine_date4: details.vaccineDate4,
                        vaccine_manufacturer4: details.vaccineManufacturer4,
                        positive_test_date: details.positive_test_date,
                        recovery_date: details.recovery_date
                    }
                ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (response.ok) {
                const response = await fetch(`http://localhost:2024/users/${details.idNumber}`);
                const resData = await response.json();
                if (response.ok) {
                    let newArrUsers = JSON.parse(localStorage.getItem("users"));
                    newArrUsers.push(resData);
                    localStorage.setItem("users", JSON.stringify(newArrUsers));
                    setUsers([...newArrUsers]);
                    setMessege({ flag: true, string: "addition" });
                    setTimeout(() => {
                        setMessege({ flag: false, string: "" });
                    }, 5000);
                }
                else {
                    throw new Error(response.status)
                }
            }
            else {
                throw new Error(response.status)
            }
        }
        catch (e) {
            console.log(e);
            setExeption(true);
            setTimeout(() => {
                setExeption(false);
            }, 5000);
        }
    }

    async function deleteUser(id) {
        try {
            const response = await fetch(`http://localhost:2024/users/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                let newArrUsers = JSON.parse(localStorage.getItem("users"));
                const userToRemove = newArrUsers.find((obj) => obj.id_number == id);
                newArrUsers.splice(newArrUsers.indexOf(userToRemove), 1);
                localStorage.setItem("users", JSON.stringify(newArrUsers));
                setUsers([...newArrUsers]);
                setMessege({ flag: true, string: "delete" });
                setTimeout(() => {
                    setMessege({ flag: false, string: "" });
                }, 5000);
            }
            else {
                throw new Error(response.status)
            }
        }
        catch (e) {
            console.log(e);
            setExeption(true);
            setTimeout(() => {
                setExeption(false);
            }, 5000);
        }
    }

    async function updateUser(id) {
        let newArrUsers = JSON.parse(localStorage.getItem("users"));
        const currentUser = newArrUsers.find((obj) => obj.id_number == id);
        console.log(currentUser);
        const newArrDetails = {
            firstName: details.firstName ? details.firstName : currentUser.first_name,
            lastName: details.lastName ? details.lastName : currentUser.last_name,
            idNumber: details.idNumber ? details.idNumber : currentUser.id_number,
            address: details.address ? details.address : currentUser.address,
            dateOfBirth: details.dateOfBirth ? details.dateOfBirth : currentUser.date_of_birth.substring(0, 10),
            phoneNumber: details.phoneNumber ? details.phoneNumber : currentUser.phone_number,
            mobilePhoneNumber: details.mobilePhoneNumber ? details.mobilePhoneNumber : currentUser.mobile_phone_number,
            vaccineDate1: details.vaccineDate1 ? details.vaccineDate1 : currentUser.vaccine_date1.substring(0, 10),
            vaccineManufacturer1: details.vaccineManufacturer1 ? details.vaccineManufacturer1 : currentUser.vaccine_manufacturer1,
            vaccine_date2: details.vaccineDate2 ? details.vaccineDate2 : currentUser.vaccine_date2.substring(0, 10),
            vaccine_manufacturer2: details.vaccineManufacturer2 ? details.vaccineManufacturer2 : currentUser.vaccine_manufacturer2,
            vaccine_date3: details.vaccineDate3 ? details.vaccineDate3 : currentUser.vaccine_date3.substring(0, 10),
            vaccine_manufacturer3: details.vaccineManufacturer3 ? details.vaccineManufacturer3 : currentUser.vaccine_manufacturer3,
            vaccine_date4: details.vaccineDate4 ? details.vaccineDate4 : currentUser.vaccine_date4.substring(0, 10),
            vaccine_manufacturer4: details.vaccineManufacturer4 ? details.vaccineManufacturer4 : currentUser.vaccine_manufacturer4,
            positive_test_date: details.positive_test_date ? details.positive_test_date : currentUser.positive_test_date.substring(0, 10),
            recovery_date: details.recovery_date ? details.recovery_date : currentUser.recovery_date.substring(0, 10)
        }
        console.log("bbb");
        console.log(newArrDetails);
        setShowDetailsWindow({ type: "", flag: false });
        try {
            const response = await fetch(`http://localhost:2024/users/${newArrDetails.idNumber}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ...newArrDetails
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (response.ok) {
                const response = await fetch(`http://localhost:2024/users/${newArrDetails.idNumber}`);
                if (response.ok) {
                    const resData = await response.json();
                    let newArrUsers = JSON.parse(localStorage.getItem("users"));
                    const userToUpdate = newArrUsers.find((obj) => obj.id_number == id);
                    newArrUsers[newArrUsers.indexOf(userToUpdate)] = resData;
                    localStorage.setItem("users", JSON.stringify(newArrUsers));
                    setUsers([...newArrUsers]);
                    setMessege({ flag: true, string: "update" });
                    setTimeout(() => {
                        setMessege({ flag: false, string: "" });
                    }, 5000);
                }
                else {
                    throw new Error(response.status)
                }
            }
            else {
                throw new Error(response.status)
            }
        }
        catch (e) {
            console.log(e);
            setExeption(true);
            setTimeout(() => {
                setExeption(false);
            }, 5000);
        }
    }

    function onChangeHandler(event) {
        const value = event.target.value;
        setSearch(value);
    }

    return (
        <>
            {exeption && <Exeption />}
            {messege.flag && <SuccessfulOperation messege={messege.string} />}
            {showDetailsWindow.flag && <AddOrUpdateUser details={details} setDetails={setDetails} addUser={addUser} updateUser={updateUser} setShowDetailsWindow={setShowDetailsWindow} type={showDetailsWindow.type} userDetails={showDetailsWindow.user} />}
            <h1>Corona Management System</h1>
            <div className="usersOperations">
                {<button id="addTask" title="להוספת לקוח" onClick={() => setShowDetailsWindow({ type: "add", flag: true })}>➕</button>}
                <input className="whatToSearch" placeholder="לחיפוש לקוח" maxLength="30" onChange={onChangeHandler}></input>
                <button title="לחיפוש" onClick={() => searchUsers(search)}>🔎</button>
            </div>
            {isLoading && <h1>Loading...</h1>}
            <div className="users">
                {users && users.map((user, i) => {
                    return <User userDetails={user} deleteUser={deleteUser} setShowDetailsWindow={setShowDetailsWindow} key={i} />
                }
                )}
                {users && users.length == 0 &&
                    <>
                        <h1>Sorry,</h1> <h3 className="didntFind">We did not find what you were looking for</h3>
                    </>}
            </div>
        </>
    )
}