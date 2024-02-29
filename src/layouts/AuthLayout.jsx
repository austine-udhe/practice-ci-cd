import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return <div>{children}</div>;
};

AuthLayout.propTypes = {
  children: PropTypes.element,
};
export default AuthLayout;
