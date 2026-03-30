/**
 * LERP (Linear Interpolation) Cursor Script
 * handles smooth, lagging movement for a custom cursor.
 * 
 * Optimized for Astro ViewTransitions:
 * - Uses persistent state but updates DOM references on every transition.
 * - Prevents multiple event listeners or redundant loops.
 */

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let circleX = 0;
let circleY = 0;
let isStarted = false;
let isInitialized = false;

let cursor: HTMLElement | null = null;
let dotWrapper: HTMLElement | null = null;
let circleWrapper: HTMLElement | null = null;

const update = () => {
  if (isStarted && dotWrapper && circleWrapper) {
    // Dot follows mouse fast (leading) - LERP: 0.65
    dotX += (mouseX - dotX) * 0.65;
    dotY += (mouseY - dotY) * 0.65;
    
    // Circle follows mouse with more lag - LERP: 0.15
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;

    dotWrapper.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    circleWrapper.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;

    // Fluid Spotlight effect (synchronized with the leading dot)
    const root = document.documentElement;
    root.style.setProperty("--mx", `${(dotX / window.innerWidth) * 100}%`);
    root.style.setProperty("--my", `${(dotY / window.innerHeight) * 100}%`);
  }
  requestAnimationFrame(update);
};

export const initCursor = () => {
  const root = document.documentElement;

  // Only initialize on devices that support hover (desktop/mouse)
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!supportsHover) return;

  // Re-query elements on every call (essential for ViewTransitions swap)
  cursor = document.getElementById("cursor");
  if (!cursor) return;

  dotWrapper = cursor.querySelector(".cursor__dot-wrapper") as HTMLElement;
  circleWrapper = cursor.querySelector(".cursor__circle-wrapper") as HTMLElement;
  
  if (!dotWrapper || !circleWrapper) return;

  const setPosition = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isStarted) {
      dotX = circleX = mouseX;
      dotY = circleY = mouseY;
      isStarted = true;
    }
  };

  const handleHover = (isHovering: boolean) => {
    if (cursor) cursor.classList.toggle("cursor--hover", isHovering);
  };

  if (!isInitialized) {
    // Event Listeners on window/document should only be added once
    window.addEventListener("mousemove", setPosition);
    requestAnimationFrame(update);
    
    // Event delegation for hover states
    document.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement;
      const hoverSelectors = "a, button, .btn-dark, .btn-ghost, .btn-light, [role='button']";
      if (target.closest(hoverSelectors)) {
        handleHover(true);
      }
    });
    
    document.addEventListener("mouseout", (e) => {
      const target = e.target as HTMLElement;
      const hoverSelectors = "a, button, .btn-dark, .btn-ghost, .btn-light, [role='button']";
      if (target.closest(hoverSelectors)) {
        handleHover(false);
      }
    });

    isInitialized = true;
  }
};
