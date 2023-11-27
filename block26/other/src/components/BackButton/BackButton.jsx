export default function BackButton({ setSelectedContactId }) {
  return (
    <button
      onClick={() => {
        setSelectedContactId(null);
      }}>
      back
    </button>
  );
}
