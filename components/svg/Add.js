import Svg, {Path} from "react-native-svg";

export default function AddSVG({color = "#F5F5FB"}) {
  return (
    <Svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.5 14.4432V8.44324H0.5V6.44324H6.5V0.443237H8.5V6.44324H14.5V8.44324H8.5V14.4432H6.5Z"
        fill={color}
      />
    </Svg>
  );
}
