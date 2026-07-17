import { useNavigate } from "react-router-dom";


function ProductTable({ products, deleteProduct }) {

  const navigate = useNavigate(); 
   
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Harga</th>
          <th>Kategori</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>Rp {product.price}</td>
            <td>{product.category?.name ?? "-"}</td>
            <td>
                <button onClick={() => navigate(`/products/edit/${product.id}`)}>
                    Edit
                </button>
                 <button onClick={() => deleteProduct(product.id)}>
                    Delete
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;