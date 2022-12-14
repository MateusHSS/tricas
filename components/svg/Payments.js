import Svg, {G, Mask, Path, Rect} from "react-native-svg";

export default function PaymentsSVG({color}) {
  return (
    <Svg
      width="31"
      height="28"
      viewBox="0 0 31 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_4_162)">
        <Mask
          id="mask0_4_162"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="3"
          y="0"
          width="25"
          height="24"
        >
          <Rect x="3.5" width="24" height="24" fill="#D9D9D9" />
        </Mask>
        <G mask="url(#mask0_4_162)">
          <Path
            d="M17.5 13C16.6667 13 15.9583 12.7083 15.375 12.125C14.7917 11.5417 14.5 10.8333 14.5 10C14.5 9.16667 14.7917 8.45833 15.375 7.875C15.9583 7.29167 16.6667 7 17.5 7C18.3333 7 19.0417 7.29167 19.625 7.875C20.2083 8.45833 20.5 9.16667 20.5 10C20.5 10.8333 20.2083 11.5417 19.625 12.125C19.0417 12.7083 18.3333 13 17.5 13ZM10.5 16C9.95 16 9.47933 15.804 9.088 15.412C8.696 15.0207 8.5 14.55 8.5 14V6C8.5 5.45 8.696 4.97933 9.088 4.588C9.47933 4.196 9.95 4 10.5 4H24.5C25.05 4 25.521 4.196 25.913 4.588C26.3043 4.97933 26.5 5.45 26.5 6V14C26.5 14.55 26.3043 15.0207 25.913 15.412C25.521 15.804 25.05 16 24.5 16H10.5ZM12.5 14H22.5C22.5 13.45 22.6957 12.979 23.087 12.587C23.479 12.1957 23.95 12 24.5 12V8C23.95 8 23.479 7.804 23.087 7.412C22.6957 7.02067 22.5 6.55 22.5 6H12.5C12.5 6.55 12.304 7.02067 11.912 7.412C11.5207 7.804 11.05 8 10.5 8V12C11.05 12 11.5207 12.1957 11.912 12.587C12.304 12.979 12.5 13.45 12.5 14ZM23.5 20H6.5C5.95 20 5.47933 19.8043 5.088 19.413C4.696 19.021 4.5 18.55 4.5 18V7H6.5V18H23.5V20Z"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
}
