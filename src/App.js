import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Repo from "./components/Repo";
import "./App.css";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import ErrorBound from "./components/ErrorBound";
import ErrorBoundary from "./components/Errorboundary";
import { Helmet } from "react-helmet";
import About from "./components/About";
function App() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Github Api Repo</title>
        <script type="text/javascript">
	atOptions = {
		'key' : '20a9861b19f6ff2b8f77748948b434be',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivecreativeformat.com/20a9861b19f6ff2b8f77748948b434be/invoke.js"></scr' + 'ipt>');
</script>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta
          name="description"
          content="Github API project, working with github api repo in react, best react."
        />

        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/74744008?v=4"
        />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      </Helmet>
      <div className="nav-bar">
        <img
          src="https://thealtschool.com/wp-content/uploads/2022/01/cropped-AltSchool-Logo-1.png"
          alt="logo"
        />
        <img
          class="mainimg"
          src="https://avatars.githubusercontent.com/u/74744008?v=4"
          alt="user.owner.login"
        />

        <nav>
          <Link to="..">Home</Link>
         

          <Link to="/ErrorBound">ErrorBound</Link>
          <Link to="/About">About</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repo" element={<Repo />} />
        

        <Route path="ErrorBound" element={<ErrorBound />} />
        <Route path="Errorboundary" element={<ErrorBoundary />} />

        <Route path="*" element={<Error404 />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
