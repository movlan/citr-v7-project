import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "brown",
  () => {},
]);

export default ThemeContext;
