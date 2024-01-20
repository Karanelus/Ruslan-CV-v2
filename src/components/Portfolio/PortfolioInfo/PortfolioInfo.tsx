import { useCvRuslanContext } from "../../../context/CvRuslanContext";
import portfolioData from "../Portfolio.data";
import styles from "../Portfolio.styles";
import PortfolioInfoLinkButton from "./PortfolioInfoLinkButton";

const PortfolioInfo = () => {
  const { aboutProjectRef, portfolioChecking } = useCvRuslanContext();

  const projectInfo = portfolioData.projects;
  const showedProject = projectInfo.find(
    (project) => project.id === portfolioChecking.projectNum,
  )!;
  const sectionStylesShortcut = styles.portfolioSection.projectInfoSection;
  const headerText = showedProject.nameOfProject;
  const aboutProjectText = showedProject.about;
  const linkButtonShortcut = portfolioData.linkButtons;
  const buttonLink = (name: string): string => {
    if (name === linkButtonShortcut.at(0)) {
      return showedProject.linkLive;
    }
    return showedProject.linkRepo;
  };
  const linkButtons = linkButtonShortcut.map((button) => (
    <PortfolioInfoLinkButton
      key={button}
      link={buttonLink(button)}
      name={button}
    />
  ));

  return (
    <div ref={aboutProjectRef} className={sectionStylesShortcut.container}>
      <h3 className={sectionStylesShortcut.headerText}>
        <b>{headerText}</b>
      </h3>
      <p data-with-indent>{aboutProjectText}</p>
      <div className={sectionStylesShortcut.linkButtons.container}>
        {linkButtons}
      </div>
    </div>
  );
};

export default PortfolioInfo;
