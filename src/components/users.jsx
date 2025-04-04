import { useEffect, useState } from "react";
import { fetchUsers } from "../api/user.api";
import { withAsync } from "../helpers/with-async";
import { apiStatus } from "../constants/api-status";

const API_STATE = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

const userFetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(apiStatus.IDLE);

    const initFetchUsers = async () => {
        setFetchStatus(apiStatus.PENDING);
        const { response, error } = await withAsync(() => fetchUsers());
        if (error) {
            setFetchStatus(apiStatus.ERROR);
        } else if (response) {
            setFetchStatus(apiStatus.SUCCESS);
            setUsers(response.data);
        }
    };

    return {
        users,
        fetchStatus,
        initFetchUsers
    };
};

const Users = () => {
    const { users, fetchStatus, initFetchUsers } = userFetchUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    console.log(users);

    return (
        <>
            <button onClick={initFetchUsers}>{fetchStatus === apiStatus.PENDING ? "Loading..." : "Fetch Users"}</button>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {users?.map((user, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'row', width: '500px', justifyContent: 'space-between' }}>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Users;