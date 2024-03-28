import '../css/AddOrUpdateUser.css'

export default function AddOrUpdateUser({ details, setDetails, addUser, updateUser, setShowDetailsWindow, type,userDetails }) {

    function onChangeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        setDetails(values => ({ ...values, [name]: value }));
        console.log(details);
    }

    function onSubmitInfoHandler() {
        if (type == "add") { addUser() }
        if (type == "update") { updateUser(userDetails.id_number) }
        setDetails({});
    };

    return (

        <div className="backgroundUserDetailsWindow">
            <form onSubmit={onSubmitInfoHandler} className="detailsUserWindow">
                <button className='close' onClick={() => { setDetails({}); setShowDetailsWindow({ type: "", flag: false }) }}>❌</button>
                <div className='userInfo'>
                    <h2 className="enterDetails">Enter Details:</h2>
                    <div className='userDetails'>
                        <h3 className="titles">ID:</h3>
                        <input className="inputFormElement" name="idNumber" value={userDetails?(details.idNumber||userDetails.id_number):details.id_number} onChange={(e) => onChangeHandler(e)} type="text" placeholder="ID" required minLength={9} maxLength={9} disabled={userDetails?true:false}/>
                        <h3 className="titles">First Name:</h3>
                        <input className="inputFormElement" name="firstName" value={userDetails?(details.firstName||userDetails.first_name):details.firstName} onChange={(e) => onChangeHandler(e)} type="text" placeholder="firs name" required minLength={3} maxLength={10} />
                        <h3 className="titles">Last Name:</h3>
                        <input className="inputFormElement" name="lastName" value={userDetails?(details.lastName||userDetails.last_name):details.lastName} onChange={(e) => onChangeHandler(e)} type="text" placeholder="last name" required minLength={3} maxLength={10} />
                    </div>
                    <div className='userDetails'>
                        <h3 className="titles">Address:</h3>
                        <input className="inputFormElement" name="address" value={userDetails?(details.address||userDetails.address):details.address} onChange={(e) => onChangeHandler(e)} type="text" placeholder="address" required minLength={3} maxLength={15}/>
                        <h3 className="titles">Date Of Birth</h3>
                        <input className="inputFormElement" name="dateOfBirth" value={userDetails?(details.dateOfBirth||userDetails.date_of_birth.substring(0, 10)):details.dateOfBirth} onChange={(e) => onChangeHandler(e)} type="text" placeholder="xxxx-xx-xx"  pattern="^\d{4}-\d{2}-\d{2}$" required disabled={userDetails?true:false}/>
                    </div>
                    <div className='userDetails'>
                        <h4 className="titles">Phone Number:</h4>
                        <input className="inputFormElement" name="phoneNumber" value={userDetails?(details.phoneNumber||userDetails.phone_number):details.phoneNumber} onChange={(e) => onChangeHandler(e)} type="text" placeholder="phone number" required pattern='/^\d{3}-\d{7}}$/'/>
                        <h4 className="titles">Mobile Phone Number:</h4>
                        <input className="inputFormElement" name="mobilePhoneNumber" value={userDetails?(details.mobilePhoneNumber||userDetails.mobile_phone_number):details.mobilePhoneNumber} onChange={(e) => onChangeHandler(e)} type="text" placeholder="mobile phone number" required minLength={3} maxLength={10}/>
                    </div>
                    <div className='userDetails'>
                        <h4 className="titles">Vaccine Date 1:</h4>
                        <input className="inputFormElement" name="vaccineDate1" value={userDetails&&userDetails.vaccine_date1?(details.vaccineDate1||userDetails.vaccine_date1.substring(0, 10)):details.vaccineDate1} onChange={(e) => onChangeHandler(e)} type="text" placeholder="xxxx-xx-xx"  pattern="^\d{4}-\d{2}-\d{2}$"  />
                        <h4 className="titles">Vaccine Manufacturer 1:</h4>
                        <input className="inputFormElement" name="vaccineManufacturer1" value={userDetails&&userDetails.vaccine_manufacturer1?(details.vaccineManufacturer1||userDetails.vaccine_manufacturer1):details.vaccineManufacturer1} onChange={(e) => onChangeHandler(e)} type="text" placeholder="vaccine manufacturer 1"  minLength={3} maxLength={10}/>
                    </div>
                    <div className='userDetails'>
                        <h4 className="titles">Vaccine Date 2:</h4>
                        <input className="inputFormElement" name="vaccineDate2" value={userDetails&&userDetails.vaccine_date2?(details.vaccineDate2||userDetails.vaccine_date2.substring(0, 10)):details.vaccineDate2} onChange={(e) => onChangeHandler(e)} type="text" placeholder="xxxx-xx-xx"  pattern="^\d{4}-\d{2}-\d{2}$"  />
                        <h4 className="titles">Vaccine Manufacturer 2:</h4>
                        <input className="inputFormElement" name="vaccineManufacturer2" value={userDetails&&userDetails.vaccine_manufacturer2?(details.vaccineManufacturer2||userDetails.vaccine_manufacturer2):details.vaccineManufacturer2} onChange={(e) => onChangeHandler(e)} type="text" placeholder="vaccine manufacturer 2"  minLength={3} maxLength={10}/>
                    </div>
                    <div className='userDetails'>
                        <h4 className="titles">Vaccine Date 3:</h4>
                        <input className="inputFormElement" name="vaccineDate3" value={userDetails&&userDetails.vaccine_date3?(details.vaccineDate3||userDetails.vaccine_date3.substring(0, 10)):details.vaccineDate3} onChange={(e) => onChangeHandler(e)} type="text" placeholder="xxxx-xx-xx"  pattern="^\d{4}-\d{2}-\d{2}$"  />
                        <h4 className="titles">Vaccine Manufacturer 3:</h4>
                        <input className="inputFormElement" name="vaccineManufacturer3" value={userDetails&&userDetails.vaccine_manufacturer3?(details.vaccineManufacturer3||userDetails.vaccine_manufacturer3):details.vaccineManufacturer3} onChange={(e) => onChangeHandler(e)} type="text" placeholder="vaccine manufacturer 3" minLength={3} maxLength={10}/>
                    </div>
                    <div className='userDetails'>
                        <h4 className="titles">Vaccine Date 4:</h4>
                        <input className="inputFormElement" name="vaccineDate4" value={userDetails&&userDetails.vaccine_date4?(details.vaccineDate4||userDetails.vaccine_date4.substring(0, 10)):details.vaccineDate4} onChange={(e) => onChangeHandler(e)} type="text" placeholder="xxxx-xx-xx"  pattern="^\d{4}-\d{2}-\d{2}$"  />
                        <h4 className="titles">Vaccine Manufacturer 4:</h4>
                        <input className="inputFormElement" name="vaccineManufacturer4" value={userDetails&&userDetails.vaccine_manufacturer4?(details.vaccineManufacturer4||userDetails.vaccine_manufacturer4):details.vaccineManufacturer4} onChange={(e) => onChangeHandler(e)} type="text" placeholder="vaccine manufacturer 4"  minLength={3} maxLength={10}/>
                    </div>
                    <div className='userDetails'>
                        <h4 className="titles">Positive Test Date:</h4>
                        <input className="inputFormElement" name="positive_test_date" value={userDetails&&userDetails.positive_test_date?(details.positive_test_date||userDetails.positive_test_date.substring(0, 10)):details.positive_test_date} onChange={(e) => onChangeHandler(e)} type="text" placeholder="xxxx-xx-xx"  pattern="^\d{4}-\d{2}-\d{2}$"  />
                        <h4 className="titles">Recovery Date:</h4>
                        <input className="inputFormElement" name="recovery_date" value={userDetails&&userDetails.recovery_date?(details.recovery_date||userDetails.recovery_date.substring(0, 10)):details.recovery_date} onChange={(e) => onChangeHandler(e)} type="text" placeholder="xxxx-xx-xx"  pattern="^\d{4}-\d{2}-\d{2}$"  />
                    </div>
                </div>
                <button type="submit" className="submit">{type == "add" ? "Add" : "Update"}</button>
            </form>
        </div>
    )
}
