import { useState, useRef, useEffect } from 'react';
import MainEditor from './MainEditor';
import ImageUploadHandler from './ImageUploadHandler';
import './FullScreenEditor.css';
import styled from 'styled-components';
import MarkdownPreview from './MarkdownPreview';
import ReactResizeDetector from 'react-resize-detector';

const Styles = styled.div`

.full-screen-wrapper{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.full-screen {
  height: 100%;
}

body {
  margin: 0;
}

.full-screen {
  display: flex;
  overflow: hidden;
  flex-direction: column;

  .header,
  .footer {
    height: 50px;
    background: #555;
    color: white;
    flex: 0 0 auto;
    overflow: scroll;
  }

  .main {

    flex: 1 1 auto;
    display: flex;
    overflow: hidden;

    .left,
    .right{
      width: 50%;
      background: #eee;
      flex: 0 0 auto;
      /* overflow: scroll; */
    }

    .middle {
      flex: 1 1 auto;
      overflow: scroll;
    }
  }

}
`;

function FullScreenEditor() {

  const imageUploadRef = useRef(null);

  const [value, setValue] = useState("");
  const [previewValue, setPreviewValue] = useState("");
  const [previousValueLength, setPreviousValueLength] = useState(0);
  const [activeLine, setActiveLine] = useState(1);
  const [onEditorResize, setOnEditorResize] = useState({
    func: () => {}
  });

  const handleEditorChange = (newValue, e) => {

    setValue(newValue);
    localStorage.setItem('markdown_draft', value);
    // delay for rendering preview
    if(Math.abs(previousValueLength - newValue.length) <= 3){
      setPreviewValue(newValue);
    }

    const timer = setTimeout(() => {
      setPreviousValueLength(value.length);
    }, 300);

    return () => clearTimeout(timer);
  }



  function editorDidMount(editor, monaco) {
    editor.focus();
  }

  const onUploadImageButtonClick = () => {
    // Click upload
    imageUploadRef.current.click();
  };

  const onResize = () =>{
    onEditorResize.func();
  }

  useEffect(() => {

    if (localStorage.getItem('markdown_draft')) {
      setValue(localStorage.getItem('markdown_draft'));
      setPreviewValue(localStorage.getItem('markdown_draft'));
      setPreviousValueLength(value.length);
    }
    console.log(previewValue);
  }, []);

  return (
    <Styles>

      <div className="full-screen-wrapper">
        <div className="full-screen">
          <div className="header">

            <ImageUploadHandler
              imageUploadRef={imageUploadRef} />

            <button onClick={onUploadImageButtonClick}>Upload Image ...</button>

          </div>
          <div className="main">
            <ReactResizeDetector onResize={onResize} >
              <div className="left">
                <MainEditor
                  theme="vs"
                  width={'100%'}
                  editorDidMount={editorDidMount}
                  value={value}
                  setActiveLine={setActiveLine}
                  setOnEditorResize={setOnEditorResize}
                  onChange={handleEditorChange}
                />
              </div>
            </ReactResizeDetector>
            <div className="middle">
              <MarkdownPreview  activeLine={activeLine} children={previewValue} />
            </div>

          </div>
          <div className="footer">Footer </div>
        </div>
      </div>


    </Styles>

  )
}

export default FullScreenEditor;
