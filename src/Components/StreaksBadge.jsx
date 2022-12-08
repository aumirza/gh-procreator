import { useState } from "react";

export const StreaksBadge = ({ username, theme }) => {
  const link = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}`;

  return (
    <div className="">
      <h3>
        <span className="font-bold text-xl"> Streaks Badge</span>
      </h3>

      <div className="p-5">
        <span className="mt-2 flex items-center">
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
    </div>
  );
};
