import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export function Header({ heading, paragraph, linkName, linkUrl = "#" }) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <FontAwesomeIcon
          icon={icon({ name: "gauge-high" })}
          size={"4x"}
          // color={"#"}
          className="dark:text-white text-[#272945]"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-[#e3e3e6]">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5 dark:text-[#e3e3e6]">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-[#272945] hover:text-[#272945] dark:text-[#00c5ff]"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
