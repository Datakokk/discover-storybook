/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
   * Write your label
   */
    label: string;
    /**
   * Those are the sizes to choose by default is h2
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Capitalize your label
   */
    allCaps?: boolean;
    /**
   * Those are the color to choose
   */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
  * Choose your color
  */
    fontColor?: string;
    /**
  * Choose your Background-color
  */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
