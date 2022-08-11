import create from "zustand";

export const useScroll = create()((set) => ({
  // Home
  homeScroll: [],
  setHomeScroll: (scroll) => {
    return set((state) => ({ homeScroll: scroll }));
  },
  // About
  aboutScroll: [],
  setAboutScroll: (scroll) => {
    return set((state) => ({ aboutScroll: scroll }));
  },
  // Journey
  journeyScroll: [],
  setJourneyScroll: (scroll) => {
    return set((state) => ({ journeyScroll: scroll }));
  },
  // Projects
  projectsScroll: [],
  setProjectsScroll: (scroll) => {
    return set((state) => ({ projectsScroll: scroll }));
  },
  // Skills
  skillsScroll: [],
  setSkillsScroll: (scroll) => {
    return set((state) => ({ skillsScroll: scroll }));
  },
  //   Contact
  contactScroll: [],
  setContactScroll: (scroll) => {
    return set((state) => ({ contactScroll: scroll }));
  },
}));
