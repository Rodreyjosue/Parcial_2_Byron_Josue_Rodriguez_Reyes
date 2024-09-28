package com.bjr.Parcial_2.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjr.Parcial_2.modelo.Producto;


public interface ProductoRepositorio extends JpaRepository<Producto, Long> {
}