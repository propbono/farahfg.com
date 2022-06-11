import { Link } from "react-scroll";

interface ScrollLinkProps {
  activeClass?: string;
  to: string;
  spy?: boolean;
  smooth?: boolean;
  offset?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export const ScrollLink: React.FC<ScrollLinkProps> = (props) => {
  const {
    activeClass = "",
    to,
    spy = true,
    smooth = true,
    offset = 0,
    duration = 1000,
    className,
    children,
  } = props;
  return (
    <Link
      activeClass={activeClass}
      to={to}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};
