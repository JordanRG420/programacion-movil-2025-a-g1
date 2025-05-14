package com.corhuila.app_movil.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corhuila.app_movil.Entity.Continent;
import com.corhuila.app_movil.IRepository.IBaseRepository;
import com.corhuila.app_movil.IRepository.IContinentRepository;
import com.corhuila.app_movil.IService.IContinentService;

/**
 * Servicio para la gestión de continentes en la aplicación.
 * 
 * Esta clase extiende de ABaseService y utiliza el repositorio
 * IContinentRepository
 * para realizar operaciones CRUD sobre la entidad Continent.
 * 
 * Métodos:
 * - getRepository(): Retorna el repositorio específico para la entidad
 * Continent.
 * 
 * Anotaciones:
 * - @Service: Marca esta clase como un componente de servicio en el contexto de
 * Spring.
 * - @Autowired: Inyecta automáticamente la dependencia del repositorio
 * IContinentRepository.
 * 
 * Implementa:
 * - IContinentService: Interfaz que define las operaciones específicas para
 * continentes.
 */
@Service
public class ContinentService extends ABaseService<Continent> implements IContinentService {

    @Override
    protected IBaseRepository<Continent, Long> getRepository() {
        return repository;
    }

    @Autowired
    private IContinentRepository repository;

}
