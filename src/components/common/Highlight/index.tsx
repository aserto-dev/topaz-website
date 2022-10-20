import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeContainer, CodeDiv, customAtomDark } from "./styles";

type HighlightProps = {
  children: string;
  language: string;
};

const style = { ...customAtomDark, fontFamily: "Ubuntu Mono" };

const Highlight: React.FC<HighlightProps> = ({ children, language }) => {
  return (
    <CodeContainer>
      <CodeDiv>
        <SyntaxHighlighter
          language={language}
          lineProps={{ style: { whiteSpace: "break-spaces" } }}
          style={customAtomDark}
          customStyle={{
            fontFamily: "Ubuntu Mono",
          }}
          wrapLines={true}
        >
          {children}
        </SyntaxHighlighter>
      </CodeDiv>
    </CodeContainer>
  );
};

export default Highlight;
