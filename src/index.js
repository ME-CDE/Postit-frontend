import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./index.css";
import Home from "./Component/Home";
import MainApp from "./Component/MainApp";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import Welcome from "./Component/Welcome"
import Create from "./Component/CreateBlog"
import Posts from "./Component/MyPost"
import Feed from "./Component/Feed"
import Update from "./Component/UpdateBlog"
import Error from "./Component/Error";
import ReadMore from "./Component/ReadMore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="/app/:id" element={<MainApp/>}>
          <Route index element={<Welcome />} />
          <Route path="post" element={<Posts/>}/>
          <Route path="create" element={<Create/>}/>
          <Route path="update/:ids" element={<Update/>}/>
          <Route path="readmore/:ids" element={<ReadMore/>}/>
          <Route path="feed" element={<Feed/>}/>
        </Route>
        <Route path="/error" element={<Error/>}/>
        <Route path="*" Navigate="/error"/>
      </Routes>
    </Router>
  </React.StrictMode>
);
