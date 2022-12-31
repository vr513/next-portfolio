import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { createContext } from "react";
import styles from './CustomCursor.module.css'

const CursorContext = createContext()

const CustomCursorProvider = ({children}) => {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    window.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + (e.pageY - 10 - window.scrollY) + "px; left: " + (e.pageX - 10 - window.scrollX) + "px;"
      );
    });
    window.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add(styles.expand);
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove(styles.expand);
      }, 500);
    });
  }, []);

  const textHoverEnter = () => {
    cursorRef.current.classList.add(styles.hoverText);
  }

  const textHoverRemove = () => {
    cursorRef.current.classList.remove(styles.hoverText);
  }

  const iconHoverEnter = () => {
    cursorRef.current.classList.add(styles.hoverIcon);
  }

  const iconHoverRemove = () => {
    cursorRef.current.classList.remove(styles.hoverIcon);
  }

  const value = {
    textHoverEnter,
    textHoverRemove,
    iconHoverEnter,
    iconHoverRemove
  }
  return (
    <CursorContext.Provider value={value}>
        <div className={styles.cursor} ref={cursorRef}></div>
        {children}
    </CursorContext.Provider>
  )
};

const useCursor = () => {
    return useContext(CursorContext);
}

export {CursorContext , CustomCursorProvider , useCursor};
