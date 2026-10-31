function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>React is Working!</h1>
      <p>If you can see this, React is loading properly.</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <p>Tailwind test:</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Tailwind Button
        </button>
      </div>
    </div>
  );
}

export default App;