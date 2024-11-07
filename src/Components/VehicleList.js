// ItemTable.js
import React, { useEffect, useState } from 'react';

function VehicleList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/vehicles")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.Make}</td>
                        <td>{item.Model}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default VehicleList;
