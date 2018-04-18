package br.com.jefersonjob.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import br.com.jefersonjob.model.PessoaModel;

public interface PessoaRepository extends  JpaRepository<PessoaModel, Integer> {
		
}
