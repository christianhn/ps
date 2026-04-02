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
    typeSpeed = 120,
    eraseSpeed = 80,
    pauseTime = 4000
  } = options;

  const el = document.getElementById(elementId);
  if (!el || !phrases.length) return;

  let i = 0;
  let j = 0;
  let isDeleting = false;
  let timeout: any;

  // Clear initial text to start fresh with phrases[0]
  // This prevents 'a ti.' from overlapping or clashing with 'a tu ritmo.'
  const type = () => {
    const currentPhrase = phrases[i];
    
    if (isDeleting) {
      el.innerText = currentPhrase.substring(0, j - 1);
      j--;
    } else {
      el.innerText = currentPhrase.substring(0, j + 1);
      j++;
    }

    // Add organic/human variations for peaceful rhythm
    let nextStepSpeed = isDeleting ? eraseSpeed : typeSpeed;
    const jitter = (Math.random() * 0.4 + 0.8); // 80% to 120% speed
    nextStepSpeed = nextStepSpeed * jitter;

    if (!isDeleting && j === currentPhrase.length) {
      nextStepSpeed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      nextStepSpeed = 800; // Longer pause before next phrase starts
    }

    timeout = setTimeout(type, nextStepSpeed);
  };

  // Start the cycle after initial delay, clearing the static text right before typing
  setTimeout(() => {
    isDeleting = true;
    j = el.innerText.length;
    type();
  }, waitBeforeStart);

  // Return a cleanup function if needed (to prevent memory leaks on fast navigation/swaps)
  return () => clearTimeout(timeout);
};
