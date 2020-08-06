import React, { PureComponent } from 'react'

export default class passwordField extends PureComponent {
    render() {
        return (
            <div>
                <input
                            className = {error.password ? "error" : null || success.password ? "success" : null || success.confirmPassword ? "success" : null}
                            type = {state.isPasswordShown ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            noValidate
                            value={values.password}
                            onChange={handleChange}
                            onClick={handleChange}
                        />
                        <i className="fa fa-eye fa-md"
                            name= "passwordShown"
                            onClick={togglePasswordVisiblity}></i>
            </div>
        )
    }
}
