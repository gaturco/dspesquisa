package com.devsuperior.dspesquisa.repositpries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dspesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
