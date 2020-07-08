// type UseTransition = (toggle: boolean) => [any, boolean];

// const useTransition: UseTransition = toggle => {
//   const didMountRef = useRef(false);
//   const componentRef: any = useRef(null);
//   const [safeShowHide, setSafeShowHide] = useState(false);

//   useLayoutEffect(() => {
//     if (didMountRef.current) {
//       setSafeShowHide(true);
//     } else {
//       didMountRef.current = true;
//     }
//   }, [toggle]);

//   useEffect(() => {
//     componentRef.current.addEventListener("transitionend", () => {
//       setSafeShowHide(false);
//     });
//   }, [componentRef, setSafeShowHide]);

//   return [componentRef, safeShowHide];
// };

class Counter {
  count = 0;

  increment = () => {
    this.count++;
    return this.count;
  };

  decrement = () => {
    this.count--;
    return this.count;
  };
}

type Callback = () => void;

export const listenTransitions = (
  element: HTMLElement,
  startCallBack?: Callback,
  endCallBack?: Callback
) => {
  const counter = new Counter();

  const transitionStart = () => {
    const count = counter.increment();
    if (count === 1 && startCallBack) {
      startCallBack();
      cleanUp();
    }
  };

  const transitionEnd = () => {
    const count = counter.decrement();
    if (count === 0 && endCallBack) {
      endCallBack();
      cleanUp();
    }
  };

  element.addEventListener("transitionend", transitionEnd);
  element.addEventListener("transitionstart", transitionStart);

  function cleanUp() {
    element.removeEventListener("transitionend", transitionEnd);
    element.removeEventListener("transitionstart", transitionStart);
  }
};

