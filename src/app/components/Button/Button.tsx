export function Button(props: {
  fullWidth?: boolean;
  className?: string;
  color?: ButtonColors;
  children: React.ReactElement | React.ReactElement[] | string;
}) {
  const {
    fullWidth = false,
    className = '',
    color = 'white',
    children,
  } = props;

  return (
    <button
      className={`${handleColor(color)} 
      ${className} 
      ${fullWidth && 'min-w-full'}
      slide-button relative min-h-[48px] w-max max-w-[240px] border-b-2 border-l-8 border-r-2 border-t-2 bg-black bg-opacity-30 px-6 py-2 uppercase duration-200 ease-in max-sm:px-2`}
    >
      <span>{children}</span>
    </button>
  );
}

function handleColor(color: ButtonColors) {
  switch (color) {
    case 'red':
      return 'border-[red] text-[red] slide-button-red';

    case 'yellow':
      return 'border-yellow-500 text-yellow-500 slide-button-yellow';

    default:
      return 'border-slate-200 text-slate-200 slide-button-slate';
  }
}

type ButtonColors = 'red' | 'yellow' | 'white';
