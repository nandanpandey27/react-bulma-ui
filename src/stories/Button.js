import PropTypes from "prop-types";

const Button = ({
  children = "",
  color = "",
  size = "",
  isOutlined = false,
  isLight = false,
  isInverted = false,
  isLoading = false,
  isStatic = false,
  title = false,
  isFocused = false,
  isHovered = false,
  tabIndex = 0,
  onClick = () => {},
  isFullwdith = false,
  isRounded = false,
  isDisabled = false,
  ...props
}) => {
  const colorString = color ? `is-${color}` : "";
  const sizeString = size ? `is-${size}` : "";
  let className = `button ${colorString} ${sizeString}`;
  className += isOutlined ? "is-outlined" : "";
  className += isLight ? " is-light" : "";
  className += isInverted ? " is-inverted" : "";
  className += isLoading ? " is-loading" : "";
  className += isStatic ? " is-static" : "";
  className += isFocused ? " is-focused" : "";
  className += isHovered ? " is-hovered" : "";
  className += isFullwdith ? " is-fullwidth" : "";
  className += isRounded ? " is-rounded" : "";

  return (
    <button
      title={title}
      tabIndex={isDisabled ? -1 : tabIndex}
      className={className.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /**
   * white | light | dark | black | text | ghost
   * primary | link | info | warning | success | danger
   */
  color: PropTypes.string,

  /**
   * small | normal | medium | large
   */
  size: PropTypes.string,

  isOutlined: PropTypes.bool,
  isStatic: PropTypes.bool,
  isInverted: PropTypes.bool,
  isLoading: PropTypes.bool,
  isLight: PropTypes.bool,
  title: PropTypes.string,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  isFullwdith: PropTypes.bool,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default Button;
