export function Button(props: {
  color?: ButtonColors;
  children: React.ReactElement | React.ReactElement[] | string;
}) {
  const { children, color = 'white' } = props;

  return (
    <button
      className={`${handleColor(
        color,
      )} w-max max-w-[240px] cursor-pointer border-b-2 border-l-8 border-r-2 border-t-2 bg-black bg-opacity-30 px-6 py-2 uppercase `}
    >
      {children}
    </button>
  );
}

function handleColor(color: ButtonColors) {
  switch (color) {
    case 'red':
      return 'border-red-600 text-red-600';

    case 'yellow':
      return 'border-yellow-500 text-yellow-500';

    default:
      return 'border-slate-200 text-slate-200';
  }
}

type ButtonColors = 'red' | 'yellow' | 'white';
