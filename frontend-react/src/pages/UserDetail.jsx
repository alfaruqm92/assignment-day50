import { useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const fetchUser = async () => {

    const response = await apiRequest({
            endpoint: `/users/${id}`,
            method: "GET",
        });

        setUser(response.data);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (!user) return <h2>Loading...</h2>;

    return (
        <>
            <h2>Detail User</h2>

            <p>Nama : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Role : {user.role}</p>
            <p>Dibuat : {user.created_at}</p>
        </>
    );
}

export default UserDetail;