import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../services/pessoa';
import { Response } from '../../services/response';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-cadastro-pessoa',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent
{

}