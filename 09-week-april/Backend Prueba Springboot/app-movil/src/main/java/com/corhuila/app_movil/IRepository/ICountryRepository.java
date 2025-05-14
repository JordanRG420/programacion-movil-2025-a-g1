package com.corhuila.app_movil.IRepository;

import org.springframework.stereotype.Repository;

import com.corhuila.app_movil.Entity.Country;

@Repository
public interface ICountryRepository extends IBaseRepository<Country, Long> {

}
