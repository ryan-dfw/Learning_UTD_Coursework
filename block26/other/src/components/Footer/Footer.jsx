export default function Footer({ count, setCount }) {
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}>
      increment
    </button>
  );
}
