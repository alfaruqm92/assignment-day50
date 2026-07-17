function ProductSearch({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "300px",
        marginBottom: "20px",
      }}
    />
  );
}

export default ProductSearch;