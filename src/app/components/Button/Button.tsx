export function Button(props: {
  color?: ButtonColors;
  children: React.ReactElement | React.ReactElement[] | string;
}) {
  const { children, color = 'white' } = props;

  return (
    <button
      className={`${handleColor(
        color,
      )} min-h-[48px] w-max max-w-[240px] cursor-pointer border-b-2 border-l-8 border-r-2 border-t-2 bg-black bg-opacity-30 px-6 py-2 uppercase outline-none duration-200 ease-in`}
    >
      {children}
    </button>
  );
}

function handleColor(color: ButtonColors) {
  switch (color) {
    case 'red':
      return 'border-[red] text-[red] button-hover-red';

    case 'yellow':
      return 'border-yellow-500 text-yellow-500 button-hover-yellow';

    default:
      return 'border-slate-200 text-slate-200 button-hover-slate';
  }
}

type ButtonColors = 'red' | 'yellow' | 'white';
