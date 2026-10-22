export default function Child({ onIncrement }) {
  function handleClick() {
    onIncrement();
  }

  return <button onClick={handleClick}>Increment Counter</button>;
}
