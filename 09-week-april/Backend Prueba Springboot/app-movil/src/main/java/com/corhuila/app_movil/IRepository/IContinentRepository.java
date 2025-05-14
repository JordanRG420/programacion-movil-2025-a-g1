package com.corhuila.app_movil.IRepository;

import org.springframework.stereotype.Repository;

import com.corhuila.app_movil.Entity.Continent;

@Repository
public interface IContinentRepository extends IBaseRepository<Continent, Long> {
    // Aquí puedes agregar métodos específicos para la entidad Continent si es
    // necesario
    // Por ejemplo:
    // List<Continent> findByName(String name);

}
