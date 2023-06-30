const LANGUAGES = ["JavaScript", "C++", "Swift", "Kotlin", "PHP", "Go"];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};
