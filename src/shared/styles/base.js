// @flow
import { color } from "./constants";

export default `
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    color: ${color.text};

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    color: ${color.blue};
    text-decoration: none;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    line-height: 1.25;
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: ${color.text};
  }
  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1em; }
  h5 { font-size: 0.875em; }
  h6 { font-size: 0.75em; }

  p,
  dl,
  ol,
  ul,
  pre,
  blockquote {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  hr {
    border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border - bottom: 1px solid rgba(255, 255, 255, 0.3);
}
`;
