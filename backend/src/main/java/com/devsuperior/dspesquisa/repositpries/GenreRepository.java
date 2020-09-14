package com.devsuperior.dspesquisa.repositpries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dspesquisa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
