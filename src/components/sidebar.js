import React, { useEffect, useState } from "react";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Sidebar(props) {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(1);

  const [collapsed, setCollapsed] = useState(true);

  const menus = [
    {
      id: 1,
      title: "Dashboard",
      src: <FontAwesomeIcon icon={icon({ name: "cube" })} />,
    },
    {
      id: 2,
      title: "Inbox",
      src: <FontAwesomeIcon icon={icon({ name: "inbox" })} />,
    },
    {
      id: 3,
      title: "Accounts",
      src: <FontAwesomeIcon icon={icon({ name: "users" })} />,
      gap: true,
      subMenu: ["Account Settings", "Account Details"],
    },
    {
      id: 4,
      title: "Schedule ",
      src: <FontAwesomeIcon icon={icon({ name: "calendar-days" })} />,
    },
    {
      id: 5,
      title: "Search",
      src: <FontAwesomeIcon icon={icon({ name: "magnifying-glass" })} />,
    },
    {
      id: 6,
      title: "Analytics",
      src: <FontAwesomeIcon icon={icon({ name: "chart-pie" })} />,
    },
    {
      id: 7,
      title: "Files ",
      src: <FontAwesomeIcon icon={icon({ name: "file" })} />,
      gap: true,
    },
    {
      id: 8,
      title: "Setting",
      src: <FontAwesomeIcon icon={icon({ name: "gear" })} />,
    },
  ];

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const selectedStyle = `${
    collapsed ? "w-14" : "w-56"
  } py-4 bg-white rounded-tl-full rounded-bl-full text-black hover:cursor-pointer duration-100 pl-4 group relative flex items-center justify-between pr-4`;
  const unSelectedStyle = `${
    collapsed ? "w-14" : "w-56"
  } py-4 hover:bg-white hover:rounded-tl-full hover:rounded-bl-full hover:text-black  hover:cursor-pointer duration-100  text-white pl-4 group relative flex items-center justify-between pr-4`;

  const isSelected = (id) => {
    return id == selected;
  };
  const handleClick = (id) => {
    console.log("clicked " + id);
  };
  return (
    <>
      <div className="flex h-screen ">
        <div
          className={`bg-[#292845] ${
            collapsed ? "w-14" : "w-58"
          } h-screen pt-10`}
        >
          <li>
            {menus.map((menu) => (
              <ul
                key={menu.id}
                className={`${
                  isSelected(menu.id) ? selectedStyle : unSelectedStyle
                }`}
                onClick={() => handleClick(menu.id)}
              >
                <div className="flex items-center gap-x-2">
                  {menu.src}
                  <p className={`${collapsed ? "hidden" : "block"}`}>
                    {menu.title}
                  </p>
                </div>
                {menu.subMenu && !collapsed && (
                  <FontAwesomeIcon icon={solid("chevron-right")} />
                )}
                {menu.subMenu && (
                  <div
                    className={`hidden absolute group-hover:block bg-[#272945] shadow-2xl rounded top-0 hover:block 
                      w-40 z-50
                    } -right-40`}
                  >
                    {menu.subMenu.map((subMenu) => (
                      <div className="text-white hover:bg-[#272945/50] hover:text-white-200 px-4 py-4 rounded">
                        {subMenu}
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            ))}
          </li>
        </div>
        {props.children}
      </div>
    </>
  );
}
