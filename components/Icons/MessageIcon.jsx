function MessageIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={"true"}
      className={className}
      viewBox="0 0 30 24"
      fill="none"
    >
      <path
        fill="currentColor"
        d="m27 6-12 7.5L3 6V3l12 7.5L27 3m0-3H3a2.99 2.99 0 0 0-3 3v18a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"
      />
    </svg>
  );
}

export default MessageIcon;
