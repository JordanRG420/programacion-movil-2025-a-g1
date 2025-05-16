# 🔐 HU 12 - Configuración de seguridad backend y servicios frontend

## Nombre
Configuración del archivo de seguridad en backend y creación del archivo de servicios en frontend

## Descripción
Como desarrollador del sistema, necesito configurar la seguridad del backend con Spring Security y habilitar el acceso desde el frontend desarrollado con Ionic React. Además, debo crear el archivo de configuración del servicio HTTP (`api.ts`) que gestione las peticiones a la API, incluyendo la base URL y manejo de errores.

## Alcance
Esta HU cubre dos aspectos esenciales:
1. Configuración del archivo `SecurityConfig` en Spring Boot:
   - Deshabilitar CSRF.
   - Permitir todas las peticiones sin autenticación (temporalmente).
   - Configurar CORS para aceptar solicitudes desde el frontend (`http://localhost:8100`).
2. Creación del archivo `api.ts` en el frontend:
   - Definir una instancia de Axios con baseURL del backend.
   - Establecer un `interceptor` para capturar y mostrar errores.
   - Preparar este archivo para ser utilizado en todos los servicios del frontend.

---

## Tareas

### 👤 Integrante 1 - Backend: estructura básica de configuración
- Crear la clase `SecurityConfig` en el paquete `config`.
- Anotar con `@Configuration` y `@EnableWebSecurity`.
- Implementar el bean `SecurityFilterChain` con `http.csrf().disable()` y autorización general.

### 👤 Integrante 2 - Backend: configuración de CORS y codificador
- Crear el bean `CorsConfigurationSource`.
- Permitir origen `http://localhost:8100` y métodos comunes (`GET`, `POST`, `PUT`, `DELETE`).
- Implementar el bean `PasswordEncoder` con `BCryptPasswordEncoder`.

### 👤 Integrante 3 - Frontend: configuración de Axios
- Crear el archivo `src/services/api.ts`.
- Crear instancia de Axios con `baseURL` configurado a `http://localhost:9000/api`.
- Definir encabezados comunes (`Content-Type: application/json`).

### 👤 Integrante 4 - Frontend: manejo de errores e integración
- Implementar interceptor de respuesta en `api.ts` para capturar errores.
- Mostrar información relevante en consola (URL, estado, mensaje).
- Exportar `api` y probar su uso desde un archivo de prueba o servicio de frontend.

---

## Código Backend: `SecurityConfig.java`

```java
package com.corhuila.app_explora_neiva.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors(cors -> cors.configurationSource(corsConfigurationSource()));
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:8100"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
