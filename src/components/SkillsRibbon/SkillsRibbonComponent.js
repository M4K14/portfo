import SkillsCard from "../SkillsCard/SkillsCardComponent";
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoPython,
  BiSolidData,
  BiChip,
} from "react-icons/bi";
import { FaFigma, FaSass } from "react-icons/fa";
import { SiGreensock } from "react-icons/si";
import { TbRegexOff } from "react-icons/tb";
import { TbCloudDataConnection } from "react-icons/tb";
import { PiBracketsCurly, PiGithubLogo } from "react-icons/pi";
import { IoIosGitBranch, IoLogoJavascript } from "react-icons/io";

const listItemsLeft = {
  ReactJs: <BiLogoReact />,
  Redux: <BiLogoRedux />,
  SASS: <FaSass />,
  Git: <IoIosGitBranch />,
  Github: <PiGithubLogo />,
};
const listItemsMiddle = {
  "JSE/S6": <IoLogoJavascript />,
  CSS3: <PiBracketsCurly />,
  Figma: <FaFigma />,
  GreenSock: <SiGreensock />,
  regex: <TbRegexOff />,
};
const listItemsRight = {
  Algorithms: <BiChip />,
  Python: <BiLogoPython />,
  "RESTful APIs": <TbCloudDataConnection />,
  "Data Structures": <BiSolidData />,
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
