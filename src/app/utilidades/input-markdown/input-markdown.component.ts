import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss']
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  contenidoMarkdown: string | undefined = "";

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  encabezado = '';

  constructor() { }

  ngOnInit(): void {
  }

  inputTextArea(texto: any): void {
    // this.contenidoMarkdown = texto.target.value;
    this.changeMarkdown.emit(texto.target.value);
  }

}

