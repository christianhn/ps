/**
 * LERP (Linear Interpolation) Cursor Script
 * Optimized for performance:
 * - Uses hardware-accelerated transforms instead of CSS variables on root.
 * - Stops processing style recalculations for the entire page.
 * - Tuned LERP factors for a fluid, douglus.site-like feel.
 */

let cursor: HTMLElement | null = null;
let dotWrapper: HTMLElement | null = null;
let circleWrapper: HTMLElement | null = null;
let spotlightWrapper: HTMLElement | null = null;
let isInitialized = false;
let isStarted = false;

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let circleX = 0;
let circleY = 0;

const update = () => {
  if (isStarted && dotWrapper && circleWrapper && spotlightWrapper) {
    // Dot follows mouse fast (leading) - LERP: 0.8
    dotX += (mouseX - dotX) * 0.8;
    dotY += (mouseY - dotY) * 0.8;
    
    // Circle follows mouse with lag - LERP: 0.18 (douglus.site style)
    circleX += (mouseX - circleX) * 0.18;
    circleY += (mouseY - circleY) * 0.18;

    // Use translate3d for GPU acceleration (Composite layer only)
    dotWrapper.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    circleWrapper.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
    
    // Move the whole spotlight layer via transform
    spotlightWrapper.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
  }
  requestAnimationFrame(update);
};

export const initCursor = () => {
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!supportsHover) return;

  cursor = document.getElementById("cursor");
  spotlightWrapper = document.getElementById("cursor-spotlight");
  if (!cursor || !spotlightWrapper) return;

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
    window.addEventListener("mousemove", setPosition);
    requestAnimationFrame(update);
    
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
