import { useState } from "react";

import { ProfileStats } from "../ProfileStats";
import { StreaksBadge } from "../StreaksBadge";
import { TopLanguageBadge } from "../TopLanguageBadge";
import { TrophyBadge } from "../TrophyBadge";
import { VisitorCount } from "../VisitorCount";

export const AddonSection = () => {
  const username = "aumirza";
  const [theme, setTheme] = useState("default");

  return (
    <div className="pt-28 h-full w-full flex flex-col items-center overflow-x-scroll">
      <h1 className="text-4xl font-bold">Addon Section</h1>

      <div className="w-4/5 mt-10">
        <label htmlFor="badge-style">
          Style:&nbsp;
          <select
            id="badge-style"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <option value="default">Default</option>
            <option value="default_repocard">Default Repocard</option>
            <option value="radical">Radical</option>
            <option value="merko">Merko</option>
            <option value="gruvbox">Gruvbox</option>
            <option value="tokyonight">Tokyonight</option>
          </select>
        </label>
        <ul className="w-full">
          <li>
            <VisitorCount theme={theme} username={username} />
          </li>
          <li>
            <TrophyBadge theme={theme} username={username} />
          </li>
          <li>
            <ProfileStats theme={theme} username={username} />
          </li>
          <li>
            <TopLanguageBadge theme={theme} username={username} />
          </li>
          <li>
            <StreaksBadge theme={theme} username={username} />
          </li>
          {/* <li> display twitter badge </li>
          <li> display latest dev.to blogs dynamically (GitHub Action) </li>
          <li> display latest medium blogs dynamically (GitHub Action)</li>
          <li>
            display latest blogs from your personal blog dynamically (GitHub
            Action)
          </li> */}
        </ul>
      </div>
    </div>
  );
};
