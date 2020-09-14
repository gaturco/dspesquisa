package com.devsuperior.dspesquisa.repositpries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dspesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
