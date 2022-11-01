import Svg, {G, Mask, Path, Rect} from "react-native-svg";

export default function AttachMoneySVG({color = "#F5F5FB"}) {
  return (
    <Svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="mask0_32_92"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="16"
      >
        <Rect x="0.5" width="16" height="16" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_32_92)">
        <Path
          d="M7.84991 14V12.5667C7.26103 12.4333 6.7528 12.1778 6.32525 11.8C5.89725 11.4222 5.58325 10.8889 5.38325 10.2L6.61658 9.7C6.78325 10.2333 7.03058 10.6389 7.35858 10.9167C7.68614 11.1944 8.11658 11.3333 8.64991 11.3333C9.10547 11.3333 9.49169 11.2307 9.80858 11.0253C10.125 10.8196 10.2832 10.5 10.2832 10.0667C10.2832 9.67778 10.161 9.36933 9.91658 9.14133C9.67214 8.91378 9.10547 8.65556 8.21658 8.36667C7.26103 8.06667 6.60547 7.70844 6.24991 7.292C5.89436 6.87511 5.71658 6.36667 5.71658 5.76667C5.71658 5.04444 5.94991 4.48333 6.41658 4.08333C6.88325 3.68333 7.36103 3.45556 7.84991 3.4V2H9.18325V3.4C9.7388 3.48889 10.1972 3.69156 10.5586 4.008C10.9195 4.32489 11.1832 4.71111 11.3499 5.16667L10.1166 5.7C9.98325 5.34444 9.79436 5.07778 9.54991 4.9C9.30547 4.72222 8.97214 4.63333 8.54991 4.63333C8.06103 4.63333 7.6888 4.74178 7.43325 4.95867C7.17769 5.17511 7.04991 5.44444 7.04991 5.76667C7.04991 6.13333 7.21658 6.42222 7.54991 6.63333C7.88325 6.84444 8.46103 7.06667 9.28325 7.3C10.0499 7.52222 10.6306 7.87489 11.0252 8.358C11.4195 8.84156 11.6166 9.4 11.6166 10.0333C11.6166 10.8222 11.3832 11.4222 10.9166 11.8333C10.4499 12.2444 9.87214 12.5 9.18325 12.6V14H7.84991Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}