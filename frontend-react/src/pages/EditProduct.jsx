import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../api/client";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [form, setForm] = useState({
        category_product_id: "",
        title: "",
        instructor: "",
        description: "",
        price: "",
        image: "",
        rating: "",
        students: "",
        level: "",
    });

    async function fetchCategories() {
        const res = await apiRequest("/categories");

        setCategories(res.data);
    }
    async function fetchProduct() {
        try {
            const res = await apiRequest(`/products/${id}`);

            setForm({
                category_product_id: res.category_product_id,
                title: res.title,
                instructor: res.instructor,
                description: res.description,
                price: res.price,
                image: res.image ?? "",
                rating: res.rating ?? "",
                students: res.students ?? "",
                level: res.level,
            });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
    fetchCategories();
    fetchProduct();
    }, []);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
    e.preventDefault();

        try {

            await apiRequest(`/products/${id}`, {
                method: "PUT",
                body: form,
            });

            alert("Produk berhasil diupdate");

            navigate("/products");

        } catch (error) {

            console.error(error);

            alert("Gagal update produk");

        }
    }

    return (
    <div style={{ padding: 20 }}>
      <h2>Edit Produk</h2>

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
          Update
        </button>
      </form>
    </div>
  );
}

export default EditProduct;