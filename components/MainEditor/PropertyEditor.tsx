import { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Styles = styled.div`
/* .files input {
  display: none !important;
} */
`;

function PropertyEditor({ ...props }: any) {


  return (
    <Styles>

      <input type="text"></input>
    </Styles>

  )
}

export default PropertyEditor;
