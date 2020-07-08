import { observer } from 'mobx-react'
import React, { useEffect } from "react";
import styled from "styled-components";
import layoutStore from 'store/layoutStore/index.ts';

const ButtonBlue = styled.button`
  background-color: cornflowerblue;
  color: white;
  font-weight: bold;
  width: 8rem;
  height: 3rem;
  border-radius: 5px;
  cursor: pointer;
`;


const OpenOverlayButton = props => {
  useEffect(() => {

  });

  const openOverlay = () => {
      layoutStore.setIsOpenOverlay(true);
  };

  return <ButtonBlue onClick={openOverlay}>Open Overlay</ButtonBlue>;
};


export default observer(OpenOverlayButton);

