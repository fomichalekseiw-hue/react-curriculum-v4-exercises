function SnackList() {
  const snacks = [
    { name: 'Chips', rank: 3 },
    { name: 'Pizza', rank: 1 },
    { name: 'Burger', rank: 2 },
  ];

  return (
    <ol>
      {snacks
        .toSorted((a, b) => a.rank - b.rank)
        .map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
    </ol>
  );
}

export default SnackList;
