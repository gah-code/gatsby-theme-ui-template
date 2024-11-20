const customSyntaxTheme = {
  ".syntax-container .comment, .syntax-container .prolog, .syntax-container .doctype, .syntax-container .cdata":
    {
      color: "#6a9955", // Green for comments
      fontStyle: "italic",
    },
  ".syntax-container .punctuation": {
    color: "#d4d4d4", // Light gray for punctuation
  },
  ".syntax-container .property, .syntax-container .tag, .syntax-container .boolean, .syntax-container .number, .syntax-container .constant, .syntax-container .symbol":
    {
      color: "#b5cea8", // Soft green for properties and numbers
    },
  ".syntax-container .selector, .syntax-container .attr-name, .syntax-container .string, .syntax-container .char, .syntax-container .builtin":
    {
      color: "#ce9178", // Salmon for strings
    },
  ".syntax-container .function": {
    color: "#dcdcaa", // Yellowish for functions
  },
  ".syntax-container .keyword": {
    color: "#569cd6", // Blue for keywords
    fontWeight: "bold",
  },
  ".syntax-container .variable": {
    color: "#9cdcfe", // Sky blue for variables
  },
  ".syntax-container .operator": {
    color: "#d4d4d4", // Gray for operators
  },
  ".syntax-container .highlight": {
    background: "rgba(255, 255, 0, 0.2)", // Yellowish background for highlights
  },
  ".syntax-container .line-highlight": {
    background: "rgba(0, 0, 0, 0.2)", // Dimmed background for line highlights
  },

  ".comment, .prolog, .doctype, .cdata": {
    color: "#6a9955", // Green for comments
    fontStyle: "italic",
  },
  ".punctuation": {
    color: "#d4d4d4", // Light gray for punctuation
  },
  ".property, .tag, .boolean, .number, .constant, .symbol": {
    color: "#b5cea8", // Soft green for properties and numbers
  },
  ".selector, .attr-name, .string, .char, .builtin": {
    color: "#ce9178", // Salmon for strings
  },
  ".function": {
    color: "#dcdcaa", // Yellowish for functions
  },
  ".keyword": {
    color: "#569cd6", // Blue for keywords
    fontWeight: "bold",
  },
  ".variable": {
    color: "#9cdcfe", // Sky blue for variables
  },
  ".operator": {
    color: "#d4d4d4", // Gray for operators
  },
  ".highlight": {
    background: "rgba(255, 255, 0, 0.2)", // Yellowish background for highlights
  },
  ".line-highlight": {
    background: "rgba(0, 0, 0, 0.2)", // Dimmed background for line highlights
  },
}

export default customSyntaxTheme
