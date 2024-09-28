package com.bjr.Parcial_2.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bjr.Parcial_2.modelo.Producto;
import com.bjr.Parcial_2.repositorio.ProductoRepositorio;



import java.util.List;

@Service
public class ProductoServicio {
    @Autowired
    private ProductoRepositorio repositorio;

    public List<Producto> obtenerTodos() {
        return repositorio.findAll();
    }

    public Producto agregarProducto(Producto producto) {
        return repositorio.save(producto);
    }

    public Producto actualizarProducto(Long id, Producto producto) {
        producto.setId(id);
        return repositorio.save(producto);
    }

    public void eliminarProducto(Long id) {
        repositorio.deleteById(id);
    }
}