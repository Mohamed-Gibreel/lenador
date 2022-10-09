import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import { Homepage } from "./pages/home/index";
import { useState } from "react";

function App() {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);
  const [selected, setSelected] = useState("home");
  const handleToggle = (expanded) => {
    setIsSideBarExpanded(expanded);
  };
  const handleSelect = (selected) => {
    setSelected(selected);
  };

  return (
    <div className="h-screen overflow-hidden">
      <SideNav
        onSelect={handleSelect}
        onToggle={handleToggle}
        className="hidden md:block lg:block sm:block"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="devices">
            <NavIcon>
              <i
                className="fa fa-fw fa-device"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Devices</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <div className={`${isSideBarExpanded ? "pl-[240px]" : "pl-[64px]"}`}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/topics" element={<div>About Page</div>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
