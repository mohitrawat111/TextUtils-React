
import './App.css';
import About from './components/About';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import NotFound from './components/NotFound';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-secondary');
  //   document.body.classList.remove('bg-warning');
  // }
  const toggleMode1 = (cls) => {
    // cls class pass hori h jb hum palattes ka use karenge... abhi humne hata di h palattes comment out krk
    // but mene pass kri hue h class wrna pura method likhna pdta... toggle mode me cls pass nahi hogi
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-' + cls);
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode had been enabled", "success")
      // document.title = 'TextUtils-Dark Mode';

      //   setInterval(() => {
      //     document.title = 'TextUtils is amazing';
      //   }, 2000);
      //   setInterval(() => {
      //     document.title = 'Install TextUtils Now';
      //   }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode had been enabled", "success")
      // document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar /> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode1} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* ./users ---> Component1
            /users/home----> Component2 */}
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route path="*" element={<NotFound heading=" Page you are looking for Not Found" />} />
            {/* When no other route matches the URL, you can render a "not found" route using path="*". This route will match any URL, but will have the weakest precedence so the router will only pick it if no other routes match. */}

            <Route exact path="/" element={<TextForm heading=" Try TextUtils-Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>


        </div>
      </Router>

    </>
  );
}

export default App;
