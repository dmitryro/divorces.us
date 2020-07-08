import { observer } from "mobx-react";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import layoutStore from "store/layoutStore/index.ts";
import { listenTransitions } from "hooks/useTransition.tsx";
import Contested from "./Contested.tsx";

const DivOverlay = styled(animated.div)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color:#F3F3F3;
  margin-top:0em;
  top: 300vh;
  width: 100%;
  transition: 2.0s top ease;
  min-hehght:13em;
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


const Overlay = ({comp}) => {
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
      <Contested />
    </DivOverlay>
  );
};


export default observer(Overlay)

