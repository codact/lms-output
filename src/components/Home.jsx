import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <form className="form-signin w-50 mx-auto">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <p>
              To work with React, we need to install it along with Babel. This
              will transpile the code from ES6 to ES5, as not all browsers
              support ES6 yet (for example Internet Explorer).
            </p>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Link to={'/about'}>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
            </Link>
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
        </form>
      </div>
    );
  }
}
