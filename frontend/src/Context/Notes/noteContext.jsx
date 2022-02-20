const { createContext } = require("react");

const noteContext = createContext(); // creating the context for notes to make it available all over tree.

export default noteContext;

// it will be used as a module and data is written in some other file.  we can write all the together but to maintain cleanliness we separate the files