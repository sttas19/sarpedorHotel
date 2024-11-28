import { IconElement } from "./type";

const PlusIcon: IconElement = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3.5V20.5M20.5 12H3.5" stroke="black" strokeLinecap="round" />
  </svg>
);

export { PlusIcon };
