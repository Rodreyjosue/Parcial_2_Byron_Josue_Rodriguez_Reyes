import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';  

function App() {
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [disponible, setDisponible] = useState(true); // Agregado para el estado de disponibilidad
    const [editMode, setEditMode] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = () => {
        axios.get('http://localhost:8080/productos')
            .then(response => setProductos(response.data))
            .catch(error => console.error("Error al obtener los productos: ", error));
    };

    const addProducto = () => {
        if (!nombre || !descripcion || !precio) {
            setErrorMessage("Debes Llenar todos los Campos");
            return;
        }

        setErrorMessage("");

        const producto = {
            nombre,
            descripcion,
            precio: parseFloat(precio),
            disponible,
        };

        if (editMode) {
            axios.put(`http://localhost:8080/productos/${currentProductId}`, producto)
                .then(() => {
                    fetchProductos(); 
                    clearForm();
                    setEditMode(false);
                    setCurrentProductId(null);
                })
                .catch(error => console.error("Error en Edicion", error));
        } else {
            axios.post('http://localhost:8080/productos', producto)
                .then(response => {
                    setProductos([...productos, response.data]); 
                    clearForm();
                })
                .catch(error => console.error("Error al agregar producto: ", error));
        }
    };

    const deleteProducto = (id) => {
        axios.delete(`http://localhost:8080/productos/${id}`)
            .then(() => {
                setProductos(productos.filter(producto => producto.id !== id));
            })
            .catch(error => console.error("Error al eliminar el producto: ", error));
    };

    const editProducto = (producto) => {
        setNombre(producto.nombre);
        setDescripcion(producto.descripcion);
        setPrecio(producto.precio);
        setDisponible(producto.disponible);
        setEditMode(true);
        setCurrentProductId(producto.id);
    };

    const cancelEdit = () => {
        clearForm();
        setEditMode(false);
        setCurrentProductId(null);
    };

    const clearForm = () => {
        setNombre("");
        setDescripcion("");
        setPrecio("");
        setDisponible(true);
        setErrorMessage("");
    };

    return (
        <div className="container">
            <h1>{editMode ? "Editar Producto" : "Agregar Producto al Inventario"}</h1>
            <div>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <textarea
                    placeholder="Descripción del producto"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    rows="3"
                    style={{ width: "100%" }}
                />
                <input
                    type="text"
                    placeholder="Precio"
                    value={precio}
                    onChange={e => setPrecio(e.target.value)}
                />
                <label>
                    Disponible:
                    <input
                        type="checkbox"
                        checked={disponible}
                        onChange={e => setDisponible(e.target.checked)}
                    />
                </label>

                <div>
                    <button onClick={addProducto}>
                        {editMode ? "Guardar Cambios" : "Agregar Producto"}
                    </button>
                    {editMode && (
                        <button onClick={cancelEdit} style={{ marginLeft: "10px", backgroundColor: "gray" }}>
                            Cancelar
                        </button>
                    )}
                </div>

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>

            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        <strong>{producto.nombre}</strong><br />
                        {producto.descripcion}<br />
                        <span>Precio: ${producto.precio}</span><br />
                        <span>Estado: {producto.disponible ? 'Disponible' : 'No disponible'}</span><br />
                        <button onClick={() => editProducto(producto)} style={{ marginRight: "10px" }}>Editar</button>
                        <button onClick={() => deleteProducto(producto.id)} style={{ backgroundColor: "red", color: "white" }}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
