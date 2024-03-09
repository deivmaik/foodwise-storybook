import PropTypes from 'prop-types';

/**
 * Swipe button component
 */
export const SwipeButton = ({
  primary,
  backgroundColor,
  disabled,
  label,
  className,
  ...props
}) => {
  return (
    <button
      type='button'
      className={`font-montserrat w-80 font-black h-16 
      flex items-center justify-center rounded-lg gap-2
      ${disabled ? 'text-neutral-300 bg-neutral-500 border-0' : ''}
      ${
        primary
          ? ' bg-green-500 text-green-100'
          : 'bg-neutral-100 text-green-500 border-2 border-green-500'
      }
      ${props.className}
      `}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <svg
        width='15'
        height='14'
        viewBox='0 0 15 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_252_1120)'>
  <path
    d='M14.3803 6.68828L10.1805 2.02187C10.0909 1.92294 9.96583 1.86694 9.8333 1.86694H7.03345C6.84959 1.86694 6.68254 1.9752 6.60694 2.1432C6.53228 2.31212 6.56308 2.50904 6.68627 2.6453L10.6051 7L6.68627 11.3538C6.56308 11.491 6.53134 11.6879 6.60694 11.8559C6.68254 12.0248 6.84959 12.1331 7.03345 12.1331H9.8333C9.96583 12.1331 10.0909 12.0761 10.1805 11.9791L14.3803 7.31265C14.5398 7.13532 14.5398 6.86467 14.3803 6.68828Z'
    fill={disabled ? '#E3DEDE' : primary ? '#D9F2D9' : '#003817'}
  />
  <path
    d='M8.31397 6.68828L4.1142 2.02187C4.0246 1.92294 3.89954 1.86694 3.76701 1.86694H0.967166C0.783309 1.86694 0.616252 1.9752 0.540656 2.1432C0.465993 2.31212 0.496792 2.50904 0.619985 2.6453L4.53884 7L0.619985 11.3538C0.496792 11.491 0.46506 11.6879 0.540656 11.8559C0.616252 12.0248 0.783309 12.1331 0.967166 12.1331H3.76701C3.89954 12.1331 4.0246 12.0761 4.1142 11.9791L8.31397 7.31265C8.47356 7.13532 8.47356 6.86467 8.31397 6.68828Z'
    fill={disabled ? '#E3DEDE' : primary ? '#D9F2D9' : '#003817'}
  />
</g>


        <defs>
          <clipPath id='clip0_252_1120'>
            <rect
              width='14'
              height='14'
              fill='white'
              transform='translate(0.5)'
            />
          </clipPath>
        </defs>
      </svg>

      {label}
    </button>
  );
};

SwipeButton.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SwipeButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  disabled: false,
  onClick: undefined,
};