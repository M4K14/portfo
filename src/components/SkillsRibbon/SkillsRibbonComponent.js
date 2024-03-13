import SkillsCard from "../SkillsCard/SkillsCardComponent";
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoSass,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoCss3,
} from "react-icons/bi";

const listItemsLeft = {
  Redux: <BiLogoRedux />,
  ReactJs: <BiLogoReact />,
  Test: <BiLogoReact />,
};
const listItemsMiddle = {
  SASS: <BiLogoSass />,
  Git: <BiLogoGit />,
  test: <BiLogoReact />,
};
const listItemsRight = {
  "JSE/S6": <BiLogoJavascript />,
  CSS3: <BiLogoCss3 />,
  TEST: <BiLogoReact />,
};

const SkillsRibbon = () => {
  return (
    <>
      <SkillsCard
        container={"skill_container_left"}
        listItems={listItemsLeft}
      />
      <SkillsCard
        container={"skill_container_middle"}
        listItems={listItemsMiddle}
      />
      <SkillsCard
        container={"skill_container_right"}
        listItems={listItemsRight}
      />
    </>
  );
};

export default SkillsRibbon;
