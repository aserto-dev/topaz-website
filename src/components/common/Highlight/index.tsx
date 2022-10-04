import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeContainer, CodeDiv, customAtomDark } from "./styles";

type HighlightProps = {
  children: string;
  language: string;
};

const Highlight: React.FC<HighlightProps> = ({ children, language }) => {
  return (
    <CodeContainer>
      <CodeDiv>
        <SyntaxHighlighter
          language={language}
          lineProps={{ style: { whiteSpace: "break-spaces" } }}
          style={customAtomDark}
          wrapLines={true}
        >
          {children}
        </SyntaxHighlighter>
      </CodeDiv>
    </CodeContainer>
  );
};

export default Highlight;
