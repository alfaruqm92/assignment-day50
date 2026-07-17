function Pagination({
  currentPage,
  lastPage,
  onPrevious,
  onNext,
}) {
  return (
    <div style={{ marginTop: 20 }}>
      <button
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        Previous
      </button>

      <span style={{ margin: "0 15px" }}>
        Halaman {currentPage} dari {lastPage}
      </span>

      <button
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;