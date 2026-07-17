import { useState, useEffect } from "react";
import { apiRequest } from "../api/client";



function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    
    const fetchUsers = async (page = 1) => {
    try {

            const response = await apiRequest({
                endpoint: `/users?page=${page}`,
                method: "GET",
            });

            setUsers(response.data.data);
            setCurrentPage(response.data.current_page);
            setLastPage(response.data.last_page);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    return (
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Aksi</th>
                </tr>
            </thead>

            <tbody>

                {users.map((user, index) => (

                    <tr key={user.id}>

                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>

                        <td>

                            <button
                                onClick={() => navigate(`/users/${user.id}`)}
                            >
                                Detail
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>
        </table>
    )
}

export default User;
