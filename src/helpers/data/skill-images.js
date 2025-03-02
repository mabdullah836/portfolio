import bootstrap from "/public/svg/skills/bootstrap.svg";
import css from "/public/svg/skills/css.svg";
import firebase from "/public/svg/skills/firebase.svg";
import git from "/public/svg/skills/github.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import materialui from "/public/svg/skills/materialui.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import nextJS from "/public/svg/skills/nextjs.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import redux from "/public/svg/skills/redux.svg";
import antdesign from "/public/svg/skills/antDesign.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;

    case "css":
      return css;

    case "javascript":
      return javascript;
    case "next js":
      return nextJS;

    case "react":
      return react;

    case "typescript":
      return typescript;

    case "bootstrap":
      return bootstrap;

    case "mongodb":
      return mongoDB;

    case "tailwind":
      return tailwind;

    case "firebase":
      return firebase;

    case "git":
      return git;

    case "materialui":
      return materialui;
    case "redux":
      return redux;
    case "antdesign":
      return antdesign;
  }
};
