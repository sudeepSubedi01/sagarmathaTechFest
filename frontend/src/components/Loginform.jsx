import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Loginform = () => {
  const navigate = useNavigate('/dashboard')
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!credentials.email || !credentials.password) return
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/api/volunteers/login", credentials);
      setLoading(false);
      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        setCredentials({
          email: "",
          password: "",
        });
        navigate('/dashboard')
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-full">
        <div className="bg-white w-full sm:w-96 p-4 rounded-md border-solid border-indigo-600 border-y-4 mt-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    value={credentials.password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-3"
                  />
                </div>
              </div>
              <div>
                {loading ? (
                  <>
                    <button
                      disabled
                      type="button"
                      className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Login
                      <span className="loading loading-spinner loading-md"></span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a Volunteer?
              <Link
                to={"/volunteer-form"}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-2 link"
              >
                Be one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginform;
