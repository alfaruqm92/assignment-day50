import { useState } from "react";
import { apiRequest } from "../api/client";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    async function fetchCategories() {
        try {
            setLoading(true);

            const response = await apiRequest({
                endpoint: "/categories",
                method: "GET",
            });

            setCategories(response.data);

        } catch (error) {

            console.error(error);

            setError("Gagal mengambil data kategori");

        } finally {

            setLoading(false);

        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const deleteCategory = async (id) => {

        if (!window.confirm("Yakin ingin menghapus kategori?")) return;

        try {

            await apiRequest({
                endpoint: `/categories/${id}`,
                method: "DELETE",
            });

            alert("Kategori berhasil dihapus");

            fetchCategories();

        } catch (error) {

            console.error(error);

            alert("Gagal menghapus kategori");

        }
    };

    return (
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Slug</th>
                    <th>Deskripsi</th>
                    <th>Aksi</th>
                </tr>
            </thead>

            <tbody>

                {categories.map((category, index) => (

                    <tr key={category.id}>

                        <td>{index + 1}</td>

                        <td>{category.name}</td>

                        <td>{category.slug}</td>

                        <td>{category.description}</td>

                        <td>

                            <button>Edit</button>

                            <button
                                onClick={() => deleteCategory(category.id)}
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );

}