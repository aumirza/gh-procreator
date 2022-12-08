import { useState } from "react";

import { AboutSection } from "./Sections/AboutSection";
import { AddonSection } from "./Sections/AddonSection";
import { SkillsSection } from "./Sections/SkillsSection";
import { SocialSection } from "./Sections/SocialSection";
import { UsernameSection } from "./Sections/UsernameSection";

const sections = [
  UsernameSection,
  AboutSection,
  SkillsSection,
  SocialSection,
  AddonSection,
];

export const Main = () => {
  const [sectionIdx, setSectionIdx] = useState(0);

  const nextSection = () => {
    setSectionIdx(sectionIdx + 1);
  };

  const Section = sections[sectionIdx];

  return (
    <div className="h-full w-full  flex justify-center items-center">
      <Section next={nextSection} />
    </div>
  );
};
