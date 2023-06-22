function GradArrow({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 711 792"
      className={className}
      fill="none"
      aria-hidden={"true"}
    >
      <g clipPath="url(#BottomGrad)">
        <path
          fill="url(#TopGrad)"
          d="M464.242-193H852L325.758 378.5 852 950H464.242L-62 378.5 464.242-193Z"
          opacity=".39"
        />
      </g>
      <defs>
        <linearGradient
          id="TopGrad"
          x1="771.5"
          x2="711.5"
          y1="742.5"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#265AB9" />
          <stop offset="1" stopColor="#11A64A" stopOpacity="0" />
        </linearGradient>
        <clipPath id="BottomGrad">
          <path fill="#fff" d="M0 0h711v792H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default GradArrow;
