interface IHamburgerProps {
  onClick: () => void;
}

export const Hamburger = ({ onClick }: IHamburgerProps) => {
  return (
    <div className="block md:hidden">
      <button
        className="flex items-center px-2 py-2 border rounded text-primary hover:border-primary"
        onClick={onClick}
      >
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};