package com.corhuila.app_movil.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corhuila.app_movil.Entity.Country;
import com.corhuila.app_movil.IRepository.IBaseRepository;
import com.corhuila.app_movil.IRepository.ICountryRepository;
import com.corhuila.app_movil.IService.ICountryService;

@Service
public class CountryService extends ABaseService<Country> implements ICountryService {

    @Override
    protected IBaseRepository<Country, Long> getRepository() {
        return repository;
    }

    @Autowired
    private ICountryRepository repository;

}
