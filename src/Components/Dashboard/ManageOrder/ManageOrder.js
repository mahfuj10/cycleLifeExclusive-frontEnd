import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';





export default function ManageOrder() {

    const [allOrders, setAllOrders] = React.useState([]);
    const [status, setStatus] = React.useState('');

    React.useEffect(() => {
        fetch(`https://protected-sea-40292.herokuapp.com/cartProducts`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);


    const handleStatusValue = (event) => {
        setStatus(event.target.value);
    };

    const handaleDeleteProduct = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this order !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                const uri = `https://protected-sea-40292.herokuapp.com/myCart/${id}`;
                fetch(uri, {
                    method: "DELETE",
                })
                    .then()
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        if (data.deleteCount > 0) {
                            const remainingCar = allOrders.filter(product => product._id !== id);
                            setAllOrders(remainingCar);
                        };
                    });

            };
        });
    };

    const handaleStatusChange = id => {

        fetch(`https://protected-sea-40292.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
    }



    return (
        <>
            <TableContainer elevation={5} className="container" component={Paper} sx={{ width: '100%', mt: 5 }} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="right">Email ID</TableCell>
                            <TableCell align="right">Cars Name</TableCell>
                            <TableCell align="right">Action</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders.map((order) => (
                            <TableRow
                                key={order?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order?.userName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {order?.address}
                                </TableCell>
                                <TableCell align="right">{order?.email}</TableCell>
                                <TableCell align="right">{order?.name}</TableCell>
                                <TableCell align="right" >
                                    <DeleteIcon
                                        onClick={() => handaleDeleteProduct(order._id)}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <select
                                        onClick={() => handaleStatusChange(order?._id)}
                                        onChange={handleStatusValue}

                                        style={{ padding: "5px 10px" }}>

                                        <option value="Pending">{order.status}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">On going</option>
                                        <option value="Shipped">Shipped</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                        ))};
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}