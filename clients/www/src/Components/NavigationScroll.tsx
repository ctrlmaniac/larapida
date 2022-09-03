import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element | null;
}

const NavigationScroll: React.FC<Props> = (props) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return props.children || null;
};

export default NavigationScroll;