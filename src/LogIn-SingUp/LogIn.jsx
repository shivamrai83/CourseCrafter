import React from 'react'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios';

 function LogIn(props) {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
        </form>
    )
}

async function LogInRequest(values){
  const {email,password} = values;
  const {token_value}=await axios.post("http://localhost:3008/login",{email, password});
  console.log(token_value);
}

export default reduxForm({
    form:'login',
    onSubmit:LogInRequest,
})(LogIn) 