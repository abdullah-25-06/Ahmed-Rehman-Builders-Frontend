import { Route, Routes } from "react-router-dom";
import "./index.css";
import PrivateRoutes from "./Component/User/PrivaateRoutes";
import Login1 from "./Component/loginform1/Login1";
import Scroll from "./Component/Sidescroll/Scroll";
import React, { Suspense } from "react";
import { CSpinner } from "@coreui/react";
const Home1 = React.lazy(() => import("./Component/Home/Home"));
const Project1 = React.lazy(() => import("./Component/Projects/Project"));
const Innerproject1 = React.lazy(() =>
  import("./Component/Projects/Innerproject")
);
const About1 = React.lazy(() => import("./Component/About/About"));
const Contact1 = React.lazy(() => import("./Component/Contact/Contact"));
const Uploading1 = React.lazy(() => import("./Component/Dashboard/Uploading"));
const Totalprojects1 = React.lazy(() =>
  import("./Component/Dashboard/Totalprojects")
);
const Update1 = React.lazy(() => import("./Component/Dashboard/Update"));
const Userreviews1 = React.lazy(() =>
  import("./Component/Dashboard/Userreviews")
);
const ClientComments1 = React.lazy(() =>
  import("./Component/Dashboard/ClientComments")
);
function App() {
  return (
    <>
      <Scroll />
      <Suspense fallback={<div style={{"textAlign":"center" ,"margin":"10px"}}> <CSpinner color="dark" /></div>}>
        <Routes>
          <Route path="/" element={<Home1 />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/UploadProject" element={<Uploading1 />}></Route>
            <Route path="/Dashboard" element={<Totalprojects1 />}></Route>
            <Route path="/U" element={<Update1 />}></Route>
            <Route path="/UserComments" element={<Userreviews1 />}></Route>
            <Route path="/ClientReviews" element={<ClientComments1 />}></Route>
          </Route>
          <Route path="Project" element={<Project1 />}></Route>
          <Route path="I" element={<Innerproject1 />}></Route>
          <Route path="About" element={<About1 />}></Route>
          <Route path="Contact" element={<Contact1 />}></Route>
          <Route path="/Login" element={<Login1 />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
