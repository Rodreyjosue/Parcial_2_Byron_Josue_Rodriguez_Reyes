package com.bjr.Parcial_2.controlador;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bjr.Parcial_2.modelo.Producto;
import com.bjr.Parcial_2.servicio.ProductoServicio;



import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/productos")
public class ProductoControlador {
    @Autowired
    private ProductoServicio servicio;

    @GetMapping
    public List<Producto> obtenerTodos() {
        return servicio.obtenerTodos();
    }

    @PostMapping
    public Producto agregarProducto(@RequestBody Producto producto) {
        return servicio.agregarProducto(producto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto producto) {
        return ResponseEntity.ok(servicio.actualizarProducto(id, producto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        servicio.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }
}
