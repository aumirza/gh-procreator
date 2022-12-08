import { useState } from "react";

export const TrophyBadge = ({ username }) => {
  const [showSettings, setShowSettings] = useState(false);

  const [theme, setTheme] = useState("");
  const [column, setColumn] = useState(4);
  const [marginW, setMarginW] = useState(15);
  const [marginH, setMarginH] = useState(15);

  // https://github-profile-trophy.vercel.app/
  // query string parameters
  // theme: 'default' | 'radical' | 'gruvbox' | 'tokyonight' | 'onedark' | 'dracula'
  // username: string // github username
  // column: number
  // margin-w: number
  // margin-h: number

  const link = `https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&column=${column}&margin-w=${marginW}&margin-h=${marginH}`;

  return (
    <div className="">
      <h3>
        <span className="font-bold text-xl"> Display Trophies</span>
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
              onChange={(e) => setTheme(e.target.value)}
              value={theme}
            >
              <option value="default">Default</option>
              <option value="radical">Radical</option>
              <option value="gruvbox">Gruvbox</option>
              <option value="tokyonight">Tokyonight</option>
              <option value="onedark">Onedark</option>
              <option value="dracula">Dracula</option>
            </select>
          </label>

          <label htmlFor="badge-column">
            Column:&nbsp;
            <input
              type="number"
              id="badge-column"
              placeholder="1 - 6"
              min={1}
              max={6}
              onChange={(e) => setColumn(e.target.value)}
              value={column}
            />
          </label>

          <label htmlFor="badge-margin-w">
            Margin W:&nbsp;
            <input
              type="number"
              id="badge-margin-w"
              placeholder="15"
              onChange={(e) => setMarginW(e.target.value)}
              value={marginW}
            />
          </label>

          <label htmlFor="badge-margin-h">
            Margin H:&nbsp;
            <input
              type="number"
              id="badge-margin-h"
              placeholder="15"
              onChange={(e) => setMarginH(e.target.value)}
              value={marginH}
            />
          </label>

          <span className="mt-2 flex flex-col">
            Preview:&nbsp;
            {username ? (
              <img src={link} alt="profile-visitors-count" />
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
