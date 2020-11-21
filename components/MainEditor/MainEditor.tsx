import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic'
const MarkdownEditor = dynamic(import('../Editor/MarkdownEditor'), { ssr: false });
import { EditorProps } from '../Editor/Editor';
import ImageUploadHandler from './ImageUploadHandler';

interface MainEditor extends EditorProps {
  setActiveLine: Function;
}

const MainEditor = ({ setActiveLine, ...props }: MainEditor) => {

  const [monaco, setMonaco] = useState(null);
  const [editor, setEditor] = useState(null);

  function onDropEditor(e, target, instance) {
    console.log('on Drop editor');
    e.preventDefault();
  }

  function importNoSSR(editorInstance) {
    const loader = async () => {
      setEditor(editorInstance);
      setMonaco(await import('monaco-editor'));
    }
    loader();
  }

  function onScrollSync(editorInstance) {

    /*
    Scroll by current cursor
    */

    // editorInstance.onDidChangeCursorPosition((e) => {
    //   setActiveLine(Number(e.position.lineNumber));
    // });

    /*
    Scroll by first line of Visible Ranges
    */

    editorInstance.onDidScrollChange(function (e) {
      setActiveLine(Number(editorInstance.getVisibleRanges()[0].startLineNumber));
      // console.log(editorInstance.getVisibleRanges()[0].startLineNumber);
    });
  }

  function updateOption(editorInstance){
    editorInstance.updateOptions({
      wordWrap: "on"
    })
  }

  function _editorDidMount(editorInstance, monaco) {
    // Make sure no ssr part in this extension
    importNoSSR(editorInstance);
    onScrollSync(editorInstance);

    updateOption(editorInstance);


    if (props.editorDidMount) props.editorDidMount(editorInstance, monaco);
  }

  return (
    <span>

      <MarkdownEditor
        {...props}
        editorDidMount={_editorDidMount}
      />

    </span>

  )
}

export default MainEditor;


