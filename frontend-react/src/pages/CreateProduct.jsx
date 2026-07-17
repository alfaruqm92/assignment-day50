import { useState, useEffect } from "react";
import { apiRequest } from "../api/client";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const [form, setForm] = useState({
        category_product_id: "",
        title: "",
        instructor: "",
        description: "",
        price: "",
        level: "",
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await apiRequest({
            endpoint: "/products",
            method: "POST",
            body: form,
            });

            alert("Produk berhasil ditambahkan");

            navigate("/products");

        } catch (error) {
            console.error(error);

            alert("Gagal menambahkan produk");
        }
}

    async function fetchCategories() {
        try {
            const response = await apiRequest({
            endpoint: "/categories",
            method: "GET",
            });

            setCategories(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div style={{ padding: 20 }}>
      <h2>Tambah Produk</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="Nama Produk"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <textarea
            name="description"
            placeholder="Deskripsi"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <input
            name="price"
            type="number"
            placeholder="Harga"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <input
            name="category_product_id"
            type="number"
            placeholder="ID Kategori"
            value={form.category_product_id}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
            <select
            name="level"
            value={form.level}
            onChange={handleChange}
            >
            <option value="">Pilih Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            </select>
        </div>

        <br />

        <select
            name="category_product_id"
            value={form.category_product_id}
            onChange={handleChange}
            >
            <option value="">Pilih Kategori</option>

            {categories.map((category) => (
                <option
                key={category.id}
                value={category.id}
                >
                {category.name}
                </option>
            ))}
        </select>

        <button type="submit">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;