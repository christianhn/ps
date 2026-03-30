/**
 * Typing Effect Script
 * A reusable utility that types and erases phrases for a given element.
 * 
 * Usage:
 * initTyping({
 *   elementId: 'hero-typing',
 *   phrases: ['a tu ritmo.', 'a tu vida.', 'a ti.'],
 *   waitBeforeStart: 3000,
 *   typeSpeed: 100,
 *   eraseSpeed: 50,
 *   pauseTime: 4000
 * });
 */

interface TypingOptions {
  elementId: string;
  phrases: string[];
  waitBeforeStart?: number;
  typeSpeed?: number;
  eraseSpeed?: number;
  pauseTime?: number;
}

export const initTyping = (options: TypingOptions) => {
  const {
    elementId,
    phrases,
    waitBeforeStart = 3000,
    typeSpeed = 100,
    eraseSpeed = 50,
    pauseTime = 4000
  } = options;

  const el = document.getElementById(elementId);
  if (!el || !phrases.length) return;

  let i = 0;
  let j = el.innerText.length;
  let isDeleting = false;
  let timeout: any;

  const type = () => {
    const currentPhrase = phrases[i];
    
    if (isDeleting) {
      el.innerText = currentPhrase.substring(0, j - 1);
      j--;
    } else {
      el.innerText = currentPhrase.substring(0, j + 1);
      j++;
    }

    let nextStepSpeed = isDeleting ? eraseSpeed : typeSpeed;

    if (!isDeleting && j === currentPhrase.length) {
      nextStepSpeed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      nextStepSpeed = 500;
    }

    timeout = setTimeout(type, nextStepSpeed);
  };

  // Start the cycle after initial delay
  setTimeout(type, waitBeforeStart);

  // Return a cleanup function if needed (to prevent memory leaks on fast navigation/swaps)
  return () => clearTimeout(timeout);
};
