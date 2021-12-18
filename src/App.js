import React, { useState, useEffect } from "react";
import ImageSlider from "./Components/imageslider"
import { Home } from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Comments from "./Components/Comments"
import { setUserToLocaleStorage, checkIfUserExistsInLocalStorage } from "./Components/localstorage";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Video from "./Components/Video";
import Audioplayer from "./Components/Audioplayer";



const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()


  useEffect(() => {
    const { exists, user } = checkIfUserExistsInLocalStorage();
    console.log(exists)
    if (exists) {
      setUser(user);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    setUserToLocaleStorage(user);
  };

  const loginBtnDisabled = () => {
    return !username || username.trim().length === 0 || !password || password.trim().length === 0;
  }

  // if there's a user show the message below
  // if there's no user, show the login form
  return (
    <div>
      {user
        ? <div>
          {user.name}

					 <BrowserRouter>
					<Navbar/>
					<Routes>
						<Route path="/imageslider" element={	<ImageSlider slides={Home} />}/>
						<Route path="/comments" element={<Comments/>}/>
            <Route path="/video" element={<Video/>}/>
						<Route path="audioplayer" element={<Audioplayer/>}/>
						</Routes>
					</BrowserRouter>





          <button onClick={handleLogout}>logout</button>
        </div>
        : <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              value={username}
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <div>
              <label htmlFor="password">password: </label>
              <input
                type="password"
                value={password}
                placeholder="enter a password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button type="submit"
              disabled={loginBtnDisabled()}
            >Login</button>
          </form></div>}
    </div>
  );
}

export default App;

