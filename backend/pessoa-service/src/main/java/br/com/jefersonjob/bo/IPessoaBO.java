package br.com.jefersonjob.bo;

import java.util.List;

import br.com.jefersonjob.model.PessoaModel;
import br.com.jefersonjob.model.ResponseModel;

public interface IPessoaBO {
	
	ResponseModel salvar(PessoaModel pessoa);
	
	List<PessoaModel> getTodos();
	
	PessoaModel getById(Integer id);
	
	ResponseModel deletar(Integer id);
}
