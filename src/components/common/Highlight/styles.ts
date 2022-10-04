import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

import { theme } from "./theme";

export const customAtomDark: { [key: string]: React.CSSProperties } = {
  ...atomDark,
  'pre[class*="language-"]': {
    background: "inherit",
    fontFamily: '"Fira Code", monospace',
    fontSize: "14px",
    fontWeight: "500",
    padding: "10px",
    paddingBottom: 0,
  },
  ':not(pre) > code[class*="language-"]': {
    background: "inherit",
  },
};

export const CodeContainer = styled.div<{ $copyToClipboard?: boolean }>`
  background: "inherit",
  border-radius: 4px;
  display: flex;
  flex-direction: row;
`;

export const CodeDiv = styled.div`
  padding: 0px 0px 0px 5px;
`;
