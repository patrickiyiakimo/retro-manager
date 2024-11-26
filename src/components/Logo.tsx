import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="/images/logoipsum-296.svg"
        className="h-8"
        alt="retro manager Logo"
      />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        RM
      </span>
    </Link>
  );
};

export default Logo;
