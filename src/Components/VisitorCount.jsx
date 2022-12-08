import { useState } from "react";

export const VisitorCount = ({ username }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [color, setColor] = useState("000000");
  const [badgeStyle, setBadgeStyle] = useState("flat");
  const [label, setLabel] = useState("Visitors");

  // https://komarev.com/ghpvc/
  // query string parameters
  // style: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge'
  // color: string | hex color code
  // label: string
  // username: string // github username

  return (
    <div className="">
      <h3>
        <span className="font-bold text-xl"> Display visitors count badge</span>
        <button
          className="ml-2 text-sm text-indigo-500"
          onClick={() => setShowSettings(!showSettings)}
        >
          {showSettings ? "Hide" : "Show"} Settings
        </button>
      </h3>

      {showSettings ? (
        <div className="p-5">
          <label htmlFor="badge-style">
            Style:&nbsp;
            <select
              id="badge-style"
              onChange={(e) => setBadgeStyle(e.target.value)}
              value={badgeStyle}
            >
              <option value="flat">Flat</option>
              <option value="flat-square">Flat Square</option>
              <option value="plastic">Plastic</option>
              <option value="for-the-badge">Badge</option>
            </select>
          </label>

          <label htmlFor="badge-color">
            Color:&nbsp;
            <input
              type="color"
              defaultValue={`#${color}`}
              className="w-6"
              onChange={(e) => setColor(e.target.value.replace("#", ""))}
            />
          </label>

          <label htmlFor="badge-label-text">
            Label Text:&nbsp;
            <input
              type="text"
              id="badge-label-text"
              placeholder="Profile views"
              className="w-2/4 bg-gray-300 pl-2"
              onChange={(e) => setLabel(e.target.value.trim())}
              defaultValue={label}
            />
          </label>

          <span className="mt-2 flex items-center">
            Preview:&nbsp;
            {username ? (
              <img
                src={`https://komarev.com/ghpvc/?username=${username}&label=${encodeURI(
                  label
                )}&color=${color}&style=${badgeStyle}`}
                alt="profile-visitors-count"
              />
            ) : (
              <span className="text-xxs md:text-sm text-red-600">
                Invalid GitHub username
              </span>
            )}
          </span>
        </div>
      ) : null}
    </div>
  );
};
