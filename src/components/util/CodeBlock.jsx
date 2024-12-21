/** @jsxImportSource theme-ui */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Button, Text } from "theme-ui"

const CodeBlock = ({
  code,
  // language = "javascript",
  showCopy = true,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false)

  // Copy code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000) // Reset "Copied" status after 2 seconds
  }

  return (
    <Box
      as="pre"
      sx={{
        variant: "styles.pre", // Uses theme styles for consistency
        position: "relative", // Positions buttons and labels inside the component
        paddingTop: "40px", // Adds space for label and copy button
        overflowX: "auto", // Ensures horizontal scrolling for long lines
        fontSize: [2],
        borderRadius: "default",

        ...props.sx, // Allows custom styles via props
      }}
      {...props}
    >
      {/* Language Label - Positioned Top Left */}
      {/* <Text
        sx={{
          position: "absolute",
          top: "8px",
          left: "8px",
          fontSize: 1,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "secondary",
          bg: "muted",
          px: 2,
          py: 1,
          borderRadius: "default",
        }}
      >
        {language}
      </Text> */}

      {/* Copy Button - Positioned Top Right */}
      {showCopy && (
        <Button
          sx={{
            position: "absolute",
            top: "8px",
            left: "8px",
            fontSize: 1,
            px: 2,
            py: 1,
            bg: isCopied ? "secondary" : "muted",
            color: isCopied ? "background" : "text",
            borderRadius: "default",
            cursor: "pointer",
            "&:hover": {
              bg: "primary",
              color: "background",
            },
          }}
          onClick={handleCopy}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      )}

      {/* Render Code Lines */}
      {code.split("\n").map((line, index) => (
        <Text
          as="div"
          key={index}
          sx={{
            fontFamily: "monospace",
            color: "text",
            mt: 2,
            mb: 3,
            fontSize: [2],
            lineHeight: "0.3",
            fontWeight: "bold",

            // whiteSpace: "pre-wrap",
            "&:before": {
              content: `"${index + 1}"`, // Line numbers
              display: "inline-block",
              width: "0.5em",
              textAlign: "right",
              pr: 4,
              color: "text",
            },
          }}
        >
          {line}
        </Text>
      ))}
    </Box>
  )
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  // language: PropTypes.string,
  showCopy: PropTypes.bool,
  sx: PropTypes.object, // Custom styling via sx prop
}

export default CodeBlock
