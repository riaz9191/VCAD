// components/HalfFillHeading.tsx

interface HalfFillHeadingProps {
  /** The text to display */
  text: string;
  /** The hex code or Tailwind color name for the bottom-half fill */
  fillColor: string;
  /** Additional classes for styling the text (e.g., text-5xl, font-bold, text-white) */
  className?: string;
}

/**
 * A reusable heading component that displays text with a colored block
 * filling the bottom half behind it.
 */
export default function HalfFillHeading({
  text,
  fillColor,
  className,
}: HalfFillHeadingProps) {
  return (
    // The key fix is adding the `isolate` class here.
    // `isolate` creates a new stacking context, preventing the -z-10 element
    // from rendering behind the parent's background.
    <div className={`relative inline-block isolate ${className}`}>
      {/* The text content, which remains on top by default */}
      <span className='relative z-10'>{text}</span>

      {/* 
        The decorative background element.
        - We can now safely use a negative z-index.
      */}
      <div
        className='absolute bottom-[0.1em] left-0 w-full h-[40%]'
        style={{
          backgroundColor: fillColor,
          zIndex: -1, 
        }}
        aria-hidden='true'
      />
    </div>
  );
}
