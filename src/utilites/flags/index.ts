import he from "./he.svg";
import en from "./en.svg";
import ru from "./ru.svg";

const getByLang = (lang) => {
  switch (lang) {
    case "ru":
      return ru;
    case "en":
      return en;
    case "he":
      return he;
  }
};
export const getFlags = (languages) =>
  languages.reduce((acc, cur) => {
    acc.push({
      src: getByLang(cur),
      name: cur,
    });
    return acc;
  }, []);
