// CSS
import './MyLabel.css';

interface MyLabelProps {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * If true, the label will be capitalised
   */
  allCaps?: boolean;

  /**
   * Font color (form some reason)
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Button's font color
   */
  fontColor?: string;
}

export default function MyLabel({
  label,
  color,
  fontColor,
  size = 'normal',
  allCaps = false,
}: MyLabelProps) {
  return (
    <span
      className={`label ${size} ${color}`}
      style={{
        color: fontColor,
        textTransform: allCaps ? 'uppercase' : 'none',
      }}
    >
      {label}
    </span>
  );
}
