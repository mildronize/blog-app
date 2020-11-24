import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  @font-face{
    font-family:codicon;
    src:url(assets/codicon.ttf)
    format("truetype")}
  `;

export const MarkdownStyle = createGlobalStyle`
  .markdown-preview {
  /* text-align: center; */
  color: #000;
  font-family: georgia, serif;
  font-size: 120%;
  line-height: 1.6;
  margin: 0;
  padding: 2em 2em 5em;
  background: #fdfdfd;
  margin: auto;
  max-width: 33em;
  color: #0a0a0a;
}
.markdown-preview a {
  outline: none !important;
  font-weight: bold;
  text-decoration: none;
}
.markdown-preview a:link {
  color: #c00;
}
.markdown-preview a:visited {
  color: #606;
}
.markdown-preview a:hover {
  color: #606;
}
.markdown-preview a:active {
  color: #900;
  outline: none;
}
.markdown-preview h1 {
  font-size: 320%;
  line-height: 1.35;
  font-style: normal;
  margin: 1.5em 0 0.8em;
}
.markdown-preview h2 {
  font-weight: bold;
  font-size: 200%;
  margin: 1em 0 0.8em;
}
.markdown-preview h3 {
  font-weight: normal;
  text-transform: uppercase;
  font-size: 150%;
  letter-spacing: 0.15em;
  margin: 1.75em 0 0.8em;
}
.markdown-preview h4 {
  font-weight: normal;
  font-size: 150%;
  letter-spacing: 0.1em;
  margin: 1.5em 0 0.8em;
}
.markdown-preview h5 {
  font-weight: normal;
  font-style: italic;
  font-size: 150%;
  margin: 1.5em 0 0.8em;
}
.markdown-preview h6 {
  font-weight: bold;
  font-size: 100%;
  letter-spacing: 0.1em;
  margin: 1.5em 0 0.8em;
}
.markdown-preview p {
  text-align: left;
  font-size: 100%;
  margin: 1em 0 0;
}
.markdown-preview p.lead {
  font-size: 150%;
  margin: 1em 0;
}
.markdown-preview p + p {
  margin: 0;
  text-indent: 1.5em;
}
.markdown-preview p + ul, .markdown-preview p + ol, .markdown-preview p + dl {
  margin-bottom: 1.5em;
}
.markdown-preview p.lead + p {
  text-indent: 0;
}
.markdown-preview blockquote {
  border-left: 5px solid #eee;
  padding-left: 1.5em;
  margin: 1em 0;
}
.markdown-preview blockquote small {
  display: block;
  line-height: 1.7em;
}
.markdown-preview ul, .markdown-preview ol, .markdown-preview dl {
  text-align: left;
}
.markdown-preview dt {
  font-weight: bold;
}
.markdown-preview code {
  font-family: courier, monospace;
}
.markdown-preview p > code {
  padding: 0.25em;
  background: #eee;
}
.markdown-preview pre {
  text-align: left;
  font-size: 100%;
}
.markdown-preview hr {
  height: 0;
  color: #eee;
  border: 1px solid #eee;
  margin: 2em 0 1em;
}
.markdown-preview .normal {
  font-weight: normal;
}
.markdown-preview .quiet {
  color: #999;
}
.markdown-preview .pull-left {
  float: left;
  margin: 0.5em 2em 1em 0;
}
.markdown-preview .pull-right {
  float: right;
  margin: 0.5em 0 1em 2em;
}
@media (max-width: 500px) {
  .markdown-preview body {
    font-size: 80%;
 }
  .markdown-preview img {
    max-width: 100% !important;
    height: auto !important;
    float: none !important;
 }
}

  `;
