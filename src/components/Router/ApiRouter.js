import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Context
import UserContext from '../../contexts/UserContext';

//Alert
import { logOutAlert } from '../Alerts/SuccessAlerts';

//Components
import Login        from '../Login/Login';
import Home         from '../Home/Home';
import Register     from '../Register/Register';
import AllPosts     from '../Posts/AllPosts';
import CreatePost   from '../Posts/CreatePost';
import PageNotFound from '../Errors/PageNotFound';
import NotLogged from '../Errors/NotLogged';

export default function ApiRouter() {
    const [userLogin, setUserLogin] = useState('Unknown user');
    const [isLogged, setIsLogged] = useState(false);

    const logOut = () => {
        logOutAlert(userLogin)
        setUserLogin('Unknown user');
        setIsLogged(false);
    }

    return(
            <Router>
                <UserContext.Provider value={{ userLogin, setUserLogin, setIsLogged, logOut }}>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route exact path='/Login' element={<Login />}/>
                        <Route exact path='/Register' element={<Register />}/>
                        <Route exact path='/AllPosts' element={isLogged ? <AllPosts /> : <NotLogged />}/>
                        <Route exact path='/CreatePost' element={isLogged ? <CreatePost /> : <NotLogged />}/>
                        <Route path='*' element={<PageNotFound />}/>
                    </Routes>
                </UserContext.Provider>
            </Router>
    )
}