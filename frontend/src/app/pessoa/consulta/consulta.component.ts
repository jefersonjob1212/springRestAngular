import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../services/pessoa';
import { Response } from '../../services/response';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-consulta-pessoa',
    templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {
    private pessoas: Pessoa[] = new Array();
    private titulo: string;
    public modalRef: BsModalRef;
    private pessoa: Pessoa = new Pessoa();
    private index: number = 0;
    private res: Response = new Response();

    constructor(private pessoaService: PessoaService,
        private router: Router,
        private modalService: BsModalService) { }

    ngOnInit() {
        this.titulo = "Registros cadastrados";
        this.pessoaService.getPessoas().subscribe(res => this.pessoas = res);
    }

    openModal(codigoParam: number, indexParam: number, template: TemplateRef<any>): void {
        this.pessoa.codigo = codigoParam;
        this.index = indexParam;
        this.modalRef = this.modalService.show(template);
    }

    excluir(template: TemplateRef<any>): void {
        this.pessoaService.excluirPessoa(this.pessoa.codigo).subscribe(response => {
            this.res = <Response>response;
            this.modalRef.hide();
            this.modalRef = this.modalService.show(template);
            if (this.res.codigo == 1) {
                this.pessoas.splice(this.index, 1);
            }
        },
            (erro) => {
                alert(erro);
            });
    }

    editar(codigo: number): void {
        this.router.navigate(['./cadastro-pessoa', codigo]);
    }
}