import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Pessoa } from '../services/pessoa';
import { ConfigService } from '../services/config.service';

@Injectable()
export class PessoaService
{
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http:Http, private configService: ConfigService)
    {
        this.baseUrlService = configService.getUrlService() + '/pessoa/';

        this.headers = new Headers({'Content-Type' : 'application/json;charset=UTF-8'});
        this.options = new RequestOptions({'headers' : this.headers});
    }

    getPessoas()
    {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    addPessoa(pessoa: Pessoa)
    {
        return this.http.post(this.baseUrlService, JSON.stringify(pessoa), this.options)
        .map(res => res.json());
    }

    excluirPessoa(codigo: number)
    {
        return this.http.delete(this.baseUrlService + codigo).map(res=>res.json());
    }

    getPessoa(codigo:number)
    {
        return this.http.get(this.baseUrlService + codigo).map(res => res.json());
    }

    atualizarPessoa(pessoa: Pessoa)
    {
        return this.http.put(this.baseUrlService, JSON.stringify(pessoa), this.options)
        .map(res => res.json());
    }
}