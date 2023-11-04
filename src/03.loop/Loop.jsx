export function Loop() {
  const animals = [
    {
      id: 1,
      name: "Tom",
    },
    {
      id: 2,
      name: "Jerry",
    },
  ];
  return (
    <ol>
      {animals.map(({ id, name }) => (
        <li key={id}>
          {name} <br />
        </li>
      ))}
    </ol>
  );
}
