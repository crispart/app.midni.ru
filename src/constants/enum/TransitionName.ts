const TransitionName = {
  FADE: 'fade',
  FADE_UP: 'fade-up',
} as const;

type TransitionName = keyof typeof TransitionName;

export default TransitionName;
