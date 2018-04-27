package br.com.jefersonjob.bo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.jefersonjob.model.PessoaModel;
import br.com.jefersonjob.model.ResponseModel;
import br.com.jefersonjob.repository.PessoaRepository;


public class PessoaBO implements IPessoaBO {
	
	@Autowired
	private PessoaRepository repository;
	
	private ResponseModel response;

	@Override
	public ResponseModel salvar(PessoaModel pessoa) {
		
		try {
			if(pessoa.getNome() == null || pessoa.getNome().equals(""))
				this.response = new ResponseModel(0, "Campo nome é obrigatório.");
				
			this.repository.save(pessoa);
			this.response = new ResponseModel(1, "Registro Salvo com sucesso");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			this.response = new ResponseModel(0, e.getMessage());
		}
		return this.response;
	}

	@Override
	public List<PessoaModel> getTodos() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public PessoaModel getById(Integer id) {
		// TODO Auto-generated method stub
		return this.repository.getOne(id);
	}

	@Override
	public ResponseModel deletar(Integer id) {
		// TODO Auto-generated method stub
		PessoaModel model = this.repository.getOne(id);
		try {
			this.repository.delete(model);
			this.response = new ResponseModel(1, "Registro excluído com sucesso!");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			this.response = new ResponseModel(0, e.getMessage());
		}
		return this.response;
	}

}
