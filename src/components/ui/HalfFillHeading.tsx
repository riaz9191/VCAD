
interface HalfFillHeadingProps {
  text: string;
  fillColor: string;
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
    <div className={`relative inline-block isolate ${className}`}>
      <span className='relative z-10'>{text}</span>
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
