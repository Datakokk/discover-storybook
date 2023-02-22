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
};

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label', 
    size = 'h2',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span 
      style={{ color: fontColor, backgroundColor } }
      className={`label ${ size } text-${ color }`}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  );
};
