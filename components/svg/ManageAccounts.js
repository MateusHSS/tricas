import Svg, {G, Mask, Path, Rect} from "react-native-svg";

export default function ManageAccountsSVG({color = "#242A3A"}) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="mask0_4_168"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_4_168)">
        <Path
          d="M10 12C8.9 12 7.95833 11.6083 7.175 10.825C6.39167 10.0417 6 9.1 6 8C6 6.9 6.39167 5.95833 7.175 5.175C7.95833 4.39167 8.9 4 10 4C11.1 4 12.0417 4.39167 12.825 5.175C13.6083 5.95833 14 6.9 14 8C14 9.1 13.6083 10.0417 12.825 10.825C12.0417 11.6083 11.1 12 10 12ZM2 20V17.2C2 16.65 2.14167 16.1333 2.425 15.65C2.70833 15.1667 3.1 14.8 3.6 14.55C4.45 14.1167 5.40833 13.75 6.475 13.45C7.54167 13.15 8.71667 13 10 13H10.35C10.45 13 10.55 13.0167 10.65 13.05C10.5167 13.35 10.404 13.6627 10.312 13.988C10.2207 14.3127 10.15 14.65 10.1 15H10C8.81667 15 7.754 15.15 6.812 15.45C5.87067 15.75 5.1 16.05 4.5 16.35C4.35 16.4333 4.22933 16.55 4.138 16.7C4.046 16.85 4 17.0167 4 17.2V18H10.3C10.4 18.35 10.5333 18.696 10.7 19.038C10.8667 19.3793 11.05 19.7 11.25 20H2ZM16 21L15.7 19.5C15.5 19.4167 15.3123 19.3293 15.137 19.238C14.9623 19.146 14.7833 19.0333 14.6 18.9L13.15 19.35L12.15 17.65L13.3 16.65C13.2667 16.4167 13.25 16.2 13.25 16C13.25 15.8 13.2667 15.5833 13.3 15.35L12.15 14.35L13.15 12.65L14.6 13.1C14.7833 12.9667 14.9623 12.854 15.137 12.762C15.3123 12.6707 15.5 12.5833 15.7 12.5L16 11H18L18.3 12.5C18.5 12.5833 18.6877 12.675 18.863 12.775C19.0377 12.875 19.2167 13 19.4 13.15L20.85 12.65L21.85 14.4L20.7 15.4C20.7333 15.6 20.75 15.8083 20.75 16.025C20.75 16.2417 20.7333 16.45 20.7 16.65L21.85 17.65L20.85 19.35L19.4 18.9C19.2167 19.0333 19.0377 19.146 18.863 19.238C18.6877 19.3293 18.5 19.4167 18.3 19.5L18 21H16ZM17 18C17.55 18 18.021 17.8043 18.413 17.413C18.8043 17.021 19 16.55 19 16C19 15.45 18.8043 14.979 18.413 14.587C18.021 14.1957 17.55 14 17 14C16.45 14 15.9793 14.1957 15.588 14.587C15.196 14.979 15 15.45 15 16C15 16.55 15.196 17.021 15.588 17.413C15.9793 17.8043 16.45 18 17 18ZM10 10C10.55 10 11.021 9.804 11.413 9.412C11.8043 9.02067 12 8.55 12 8C12 7.45 11.8043 6.97933 11.413 6.588C11.021 6.196 10.55 6 10 6C9.45 6 8.97933 6.196 8.588 6.588C8.196 6.97933 8 7.45 8 8C8 8.55 8.196 9.02067 8.588 9.412C8.97933 9.804 9.45 10 10 10Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}