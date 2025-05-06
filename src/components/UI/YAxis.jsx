export default function YAxis({ data, gapClass, className }) {
  return (
    <ul className={gapClass + ' ' + className}>
      {data.map((entry) => {
        return (
          <li key={entry + 'y'} className="font-normal text-sm">
            {entry}
          </li>
        );
      })}
    </ul>
  );
}