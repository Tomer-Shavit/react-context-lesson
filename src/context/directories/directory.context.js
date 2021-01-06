import { createContext } from "react";
import sections from "./directories.data";

const DirectoryContext = createContext({ sections });

export default DirectoryContext;
