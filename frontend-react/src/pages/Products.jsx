import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import ProductTable from "../components/ProductTable";
import Pagination from "../components/Pagination";
import ProductSearch  from "../components/ProductSearch";


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [search, setSearch] = useState("");



  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  async function fetchProducts(page = 1) {
  try {
    setLoading(true);

    const response = await apiRequest("/products", {
      params: {
          page,
          search,
      },
    });

      setProducts(response.data.data);
      setCurrentPage(response.data.current_page);
      setLastPage(response.data.last_page);
    } catch (err) {
      console.error(err);
      setError("Gagal mengambil data produk.");
    } finally {
      setLoading(false);
    }
  } 

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
        "Yakin ingin menghapus produk?"
    );

    if (!confirmDelete) return;

    try {
        await apiRequest({
          endpoint: `/products/${id}`,
            method: "DELETE",
        });

        alert("Produk berhasil dihapus");

        fetchProducts(currentPage);

    } catch (error) {

        console.error(error);

        alert("Gagal menghapus produk");
    }
  };

  return (
    <>
      <ProductSearch
        search={search}
        setSearch={setSearch}
      />

      <ProductTable
        products={products}
        deleteProduct={deleteProduct}
      />

      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPrevious={() => fetchProducts(currentPage - 1)}
        onNext={() => fetchProducts(currentPage + 1)}
      />
    </>
  )
}

export default Products;