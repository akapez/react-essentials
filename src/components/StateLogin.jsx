import { useState } from "react";

export default function StateLogin() {

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(enteredValues);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setEnteredValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    // function handleEmailChange(e) {
    //     setEnteredEmail(e.target.value);
    // }
    // function handlePasswordChange(e) {
    //     setEnteredPassword(e.target.value);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={(e) => handleInputChange(e)}
                        value={enteredValues.email} />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(e) => handleInputChange(e)}
                        value={enteredValues.password} />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
