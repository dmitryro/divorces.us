import { observer } from "mobx-react";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import layoutStore from "store/layoutStore/index.ts";
import { listenTransitions } from "hooks/useTransition.tsx";
import Contact from "./Contact.tsx";

const DivOverlay = styled(animated.div)`
  marginTop: 4.0em;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  top: 300vh;
  width: 100%;
  overflow: hidden;
  transition: 2.0s top ease;
`;

const HeaderTitle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  width: 100%;
  height: 5rem;
  font-size: 2rem;
`;

const CloseButton = styled.button`
  position: fixed;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;

  :after {
    font-size: 2rem;
    color: white;
    content: "X";
  }
`;

const DivContent = styled.div`
  padding: 2rem;
  background-color: cornflowerblue;
  height: calc(100vh - 3rem);
`;



const Overlay = ({classes, whiteFont}) => {
  const ref = useRef(null);
  const isOpenOverlay = layoutStore.isOpenOverlay;
  const onCloseOverlay = () => {
    layoutStore.setIsOpenOverlay(false);
    if (ref.current) {
      listenTransitions(ref.current, null, layoutStore.closeOverlay);
      ref.current.style.top = "100vh";
    }
  };

  useEffect(() => {
    if (ref.current && isOpenOverlay) {
      ref.current.style.top = 0;
    }
  }, [ref, isOpenOverlay]);

  return (
    <DivOverlay ref={ref}>
      <Contact classes={classes} whiteFont={whiteFont} />
    </DivOverlay>
  );
};


export default observer(Overlay)

