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
import "./style/sidebar-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

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
        className={`block ${
          isSideBarExpanded
            ? "h-screen w-full lg:w-16"
            : "h-16 w-full lg:w-16 lg:h-screen"
        }  overflow-hidden !relative lg:!absolute`}
        componentClass="nav"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
              <FontAwesomeIcon icon={solid("user-secret")} />
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
      <div
        className={`${isSideBarExpanded ? "lg:pl-[240px]" : "lg:pl-[68px]"}`}
      >
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
