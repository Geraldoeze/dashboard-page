import React from "react";
import useResponsive from "../../hooks/useResponsive";

export const HomeIcon = () => {
  const isMedium = useResponsive("down", "md", "xl")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= {isMedium ? "1.8em" : "1.2em"}
      height= {isMedium ? "1.8em" : "1.2em"}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 3s-6.186 5.34-9.643 8.232A1.041 1.041 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3"
      ></path>
    </svg>
  );
};

export const CircleIcon = () => {
  const isMedium = useResponsive("down", "md", "xl")

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= {isMedium ? "1.8em" : "1.2em"}
      height= {isMedium ? "1.8em" : "1.2em"}
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M10 10V3c3.87 0 7 3.13 7 7zM9 4v7h7c0 3.87-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7"
      ></path>
    </svg>
  );
};

export const MessageIcon = () => {
  const isMedium = useResponsive("down", "md", "xl")

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= {isMedium ? "1.8em" : "1.2em"}
      height= {isMedium ? "1.8em" : "1.2em"}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20.6 4.17a4.67 4.67 0 0 0-3.29-1.38H6.7a4.71 4.71 0 0 0-4.72 4.72v6.6a4.71 4.71 0 0 0 4.72 4.72h2.33l1.95 1.94c.127.143.284.255.46.33c.171.07.355.108.54.11a1.41 1.41 0 0 0 .56-.12a1.37 1.37 0 0 0 .44-.3l2-2h2.33a4.72 4.72 0 0 0 4.71-4.72v-6.6a4.71 4.71 0 0 0-1.42-3.3m-5.08 7.7H8.44a1 1 0 0 1 0-2h7.08a1 1 0 1 1 0 2"
      ></path>
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.2em"
      height="2.2em"
      viewBox="0 0 56 56"
    >
      <path
        fill="currentColor"
        d="M46.586 9.45c-2.39-2.391-5.766-2.766-9.75-2.766H19.117c-3.937 0-7.312.375-9.703 2.765c-2.39 2.39-2.742 5.742-2.742 9.657v17.718c0 4.008.352 7.336 2.742 9.727c2.39 2.39 5.766 2.765 9.774 2.765h17.648c3.984 0 7.36-.375 9.75-2.765c2.39-2.39 2.742-5.719 2.742-9.727V19.176c0-4.008-.351-7.36-2.742-9.727M28 41.745a1.855 1.855 0 0 1-1.852-1.851V29.84h-10.03c-1.032 0-1.852-.844-1.852-1.828c0-.985.82-1.875 1.851-1.875h10.031V16.105c0-1.054.82-1.875 1.852-1.875c1.055 0 1.852.82 1.852 1.875v10.032h10.054c1.032 0 1.852.89 1.852 1.875c0 .984-.82 1.828-1.852 1.828H29.852v10.055A1.84 1.84 0 0 1 28 41.746"
      ></path>
    </svg>
  );
};

export const WalletIcon = () => {
  const isMedium = useResponsive("down", "md", "xl")

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= {isMedium ? "1.8em" : "1.2em"}
      height= {isMedium ? "1.8em" : "1.2em"}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
      ></path>
      <path
        fill="currentColor"
        d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"
      ></path>
    </svg>
  );
};

export const BagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 6.015V5a3.75 3.75 0 0 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084c-.9-1.084-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 1 1 4.5 0v1h-4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4c-.5-.3-1.1-.1-1.4.4L8.6 8.2L2.9 9c-.3 0-.5.1-.6.3c-.4.4-.4 1 0 1.4l4.1 4l-1 5.7c0 .2 0 .4.1.6c.3.5.9.7 1.4.4l5.1-2.7l5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7l4.1-4c.2-.1.3-.3.3-.5"
      ></path>
    </svg>
  );
};

export const VideoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const ClockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15.25 13.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5M12 2C6.478 2 2 6.478 2 12s4.478 10 10 10s10-4.478 10-10S17.522 2 12 2"
      ></path>
    </svg>
  );
};

export const NetflixIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="m7.188.005l6.333 17.948v-.01l.5 1.411c2.786 7.88 4.281 12.104 4.286 12.109l.938.057c1.542.063 3.453.24 4.901.411c.333.042.62.052.641.042L17.928 12.52l-3.234-9.135A354.017 354.017 0 0 0 13.538.119l-.042-.12H7.194zm11.343.011l-.016 7.073l-.01 7.078l-.583-1.646l-.75 15.745c.74 2.089 1.135 3.203 1.141 3.208s.427.036.932.057c1.547.068 3.453.24 4.906.417c.333.036.625.052.641.036c.021-.01.026-7.224.026-16.01L24.808.016zM7.188.005v15.984c0 8.792.01 15.995.021 16.005s.552-.042 1.208-.115a54.66 54.66 0 0 1 2.01-.214c.693-.068 2.76-.203 3-.203c.068 0 .073-.359.083-6.771l.01-6.776l.505 1.417l.177.5l.76-15.734l-.255-.729L13.493.004z"
      ></path>
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"
      ></path>
    </svg>
  );
};

export const SearchIcon = ({ style }) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975z"
      ></path>
    </svg>
  );
};

export const MainLogo = () => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 17.35C1.4 16.45 0 14 0 10.3C0 6 0.750003 3.85 2.8 2.05C4.3 0.700003 4.9 0.5 7.55 0.5C10.05 0.5 10.75 0.699997 11.75 1.7C13.7 3.65 18.5 13.85 18.5 16.1V18L12.15 17.95C8.55 17.95 5 17.7 4 17.35Z"
        fill="white"
      />
    </svg>
  );
};
export const MainLogoTwo = () => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 17.35C1.4 16.45 0 14 0 10.3C0 6 0.750003 3.85 2.8 2.05C4.3 0.700003 4.9 0.5 7.55 0.5C10.05 0.5 10.75 0.699997 11.75 1.7C13.7 3.65 18.5 13.85 18.5 16.1V18L12.15 17.95C8.55 17.95 5 17.7 4 17.35Z"
        fill="#8880CF"
      />
    </svg>
  );
};

export const SmallScreenMainLogo = () => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 17.35C1.4 16.45 0 14 0 10.3C0 6 0.750003 3.85 2.8 2.05C4.3 0.700003 4.9 0.5 7.55 0.5C10.05 0.5 10.75 0.699997 11.75 1.7C13.7 3.65 18.5 13.85 18.5 16.1V18L12.15 17.95C8.55 17.95 5 17.7 4 17.35Z"
        fill="#3326AE"
      />
    </svg>
  );
};
export const SignalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6 15H2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m8-6h-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1m8-8h-4c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1"
      />
    </svg>
  );
};

export const CardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
      />
    </svg>
  );
};
