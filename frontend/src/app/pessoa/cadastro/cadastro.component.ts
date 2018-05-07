import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../services/pessoa';
import { Response } from '../../services/response';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-cadastro-pessoa',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit
{
    private titulo: string;
    private pessoa: Pessoa = new Pessoa();
    private cadPessoa: string = 'Cadastro de Pessoa';
    private res:Response = new Response();
    public modalRef:BsModalRef = new BsModalRef();

    constructor(private pessoaService: PessoaService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private modalService:BsModalService)
    {}

    ngOnInit(){
        this.activatedRoute.params.subscribe(parametro=>{
            if(parametro['codigo'] == undefined)
            {
                this.titulo = 'Novo ' + this.cadPessoa;
            }
            else
            {
                this.titulo = 'Editar ' + this.cadPessoa;
                this.pessoaService.getPessoa(Number(parametro['codigo'])).subscribe(res => this.pessoa=res);
            }
        });
    }
    
    voltar(): void
    {
        if(this.pessoa.codigo == undefined)
        {
            this.router.navigate(['./home']);
        }
        else{
            this.router.navigate(['./consulta-pessoa']);
        }
    }

    salvar(template: TemplateRef<any>): void{
        if(this.pessoa.codigo == undefined)
        {
            this.pessoaService.addPessoa(this.pessoa).subscribe(response=>{
                this.res = <Response>response;
                this.modalRef = this.modalService.show(template);
                if(this.res.codigo == 1)
                {
                    this.pessoa = new Pessoa();
                }
            },
            (erro)=>{
                alert(erro);
            });
        }
        else
        {
            this.pessoaService.atualizarPessoa(this.pessoa).subscribe(response=>{
                this.res = <Response>response;
                this.modalRef = this.modalService.show(template);
                if(this.res.codigo == 1)
                {
                    this.router.navigate(['./consulta-pessoa']);
                }
            },
            (erro)=>{
                alert(erro);
            }
        );
        }
    }
}