import type { IconElement } from "./type";

const XIcon: IconElement = ({ ...props }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L21 21M21 1L1 21" stroke="white" strokeLinecap="round" />
  </svg>
);
export { XIcon };
