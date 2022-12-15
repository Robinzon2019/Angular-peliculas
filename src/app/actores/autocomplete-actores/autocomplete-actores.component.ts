import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { actorDTO } from '../actor';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.scss']
})
export class AutocompleteActoresComponent implements OnInit {

  control: FormControl = new FormControl();
  actores = [
    {nombre: 'Tom Holland', personaje: '', foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgaGBgYGBgYGBgYGBkaGhgZGhgYGRgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQsISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEEQAAIBAgMFBQUGAwcEAwAAAAECAAMRBBIhBTFBUWEGInGBkRMyobHRBxRCUsHwYuHxFXJzgpKishYjNMIkQ1P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQACAgEEAwACAwEAAAAAAAAAAQIREgMhMUEEIlETMkJSkRT/2gAMAwEAAhEDEQA/ANUseJGpjwZ3MwQ+cnLzkQCMaZ0zkYDlkgkBMrYvGrTF2PgOJgwTCMo47FIgszqDyLAH0mE2h2wqViyUj7OmvvOCc7dFPDy/rnMVjSTbvXP4V97/ADNMZai6NVH6etptjD7vap/qX6y7Tro3usD4GeIiqV3kL0F2bzNwJNT2rk91nHgbSVNlYo9tiniy7RV/eLX5nWW6eOqJZkd1t+RiB5qND5iP8gsT16KYPZHbVtFrIWHFxYHxK21m0weMSquam6uOhvbx5S1JMmqLEUUUYCivFFGAopy8UKEdiinIDFFOXigIrKY8SFTJQZbM0x15wxXnCYhnbzhMaTAfaTHOqCnTJD1Li43ovFhyPAHhv4QbxVsErdIfiu0KBzSpjO4vmIuFUjeM1tT0EynafaTspF/e005cvlJMPhPYi1srAaX1Jv14QdtCnmW++zfCw+k5JTcjojBIH5MieA0/vnj5a/CQtT9nTD/jc7+Q+pl6ulxb96mQbTQs6JwFvQSLLoHLQJ425niegkoVF/Dc8yf38I9zZA3FyQP4VEhppYFj+xw8SYWKhzYheKr6n5ySnilHDL4HMPTfKZrH8It5C84tdzy84wCqOp4AnpoY+himRhkZkI5Eq0GJVHHTqJftmW/vDnpf1jUhOJ6N2a7TLUVadVrVN1zYB+Wu69uHGaeeFioV3C/75Tbdmu2qjLSr6cA5+TfWaxkQ4m+itOI4YBlIIIuCNQRzBnZpYqFaK0UUYUKIiIzhMQUKKNvFCwoogyQGRAzt5s0YEuaK8ivFmhQWVNq7RWihY6sdFXmfpMUu0S7ktmdzvNyABytpp0Ep9o8c9SoG1yktlAO8BiABbcNN/O/SR7PZiwF/Ibpxa023XR16UNg79xZu+WAHQt8iTIkwujXOmscl3ORNbb7D9ecL4bYJy63vMMjXEzFdF1W+vD52lOopZr8d3w3fKayv2fLfOUqvZxwbwyDEynsCciH8JIPgdY2umhH8Rv8AIfITUtsV9LiNOwi19N8dhiY6omp6jT4SuEN/3ym2/wCl252i/wCmeZELDEwhQ+kkoV3TVTpy4TaV+zYtM5tDYrpu1EFJdg4PohFYPqNG5cD9JCu/kb6yot1NjpJ8+bXjNEzNo9N+zza2ZGw7tqneS/FT7wHgbHzm2vPCtm456TpUQ2ZTf9CD0O7znsmAx4q00cbmUH6zeG+xmwgWjc8h9pGl5piKyxnkNV7RuaUcXXsRHiKy77aKCfvMUMAyL14gYy86JqYD7xr6gjpFFChHmO1MMErOOTG1tN+p8N8s7IUhWc7z3VB68fnHdoUviX6njoNNNPzaiFtmYUdwW3Hxnl637NHo6b9UzQdnNlhEzEanXdaaJachwK2AEtFpki27KVUStUlqtKrCOx0RsokRQSV42CCiO0RQR04TGBG9ESjicEGG6Es04THSYraPN+0uxsnfUaTNjQ9OP1nqu1aQdSCJ55j8LkY/D6GOLrYmS7KaP/WekdhcUTQZPyNoeja/O88wGhtN12Cx6hmpHewBU8yOHoZ06T9tzCS2N37ScDzmSNtOzYy3JlbSDcbcuqjjL4MFbQazqekVbAx33RucUqfeT+zFI9vo9g4BJUS8dTSS5eUtyMkiIpGuknyzmSKx0efdpkb7yOVlI6X/AJ3hbY/eyiDe0NYnENbgFXgdba+G+GeziZm03LYec83Wfszu0v1RrKBsBJHjaYtIquLRdCwmRZ1xK7m0iqbSQ7nW/K8geveGVFKNkrG8QEhFWd9sLQyQ8WPcSMrIzXHORnHJ+cespSQmqJTOO2kr/wBoITYaybMCNDGTZQxjd0zD7VtdvSbqqlwRMNtqlkcjhGiZAFqelydRL2x8WadRHA3MNN3x4Su5sAN++TbHwpqV0SxOZhcC17cd/SaozPZV1APSK0kVLADkLTpWdqZlQzLBe0k18oYMH45Lm0pMloCWilr7q3KKK0FM06JaPyyW04VmVioaEnSs7OGMdGE7WUctYZfxDMeXGxtzuIX7JUctMk78xJlPbxSuC6e/T0YEfg11HgYV7PW9n5/pODUkpO0dkIuKqXJYx1QnjYcLQBjRp79vG0J7TcknKLncAIBq9narhmqPqVOVQfxcL24dBMd5M2SilYPrhR+MeRlnAYog2DaQXR2BVVxnyBdL5Wa+g13neYRwezmz2Bst9DcXhKNdlxlfKDiOxEixFRlF4a2fhrIQ28W1lXaFEZTpEotoTkrMhjdoNz+cHU6gc6H9+MKY/ZhIuNTwG68p1tm1ci5ASbNdQwRQdMp68Y4xByVXQQwpAG8+MKUMRbUGZrB7OxFixBBFu7mvfnrwl7DZ72YWP70P1lVKO5HrLqjQU6ofxmb7VYbu5h4Q/hbEa75R7Rr/ANs+M0Tvczkq2PPv3fj5cpqOwmz2fECpY2p6k8O8rC3ibj4wFhcI1SoEHE2PTmZ6D2Zr4ejegj3YnUnid2/cRNYyipKzJQk02kacxpMc0jM7UZMdeD8XVysDLsGbRbveUpImTI/v55RSn7QTsWERZSNrFFFMhnI19x8DHxri4I6RPgFyZrYmFDu991m+MJbHoZFZD+Fit+dt3wtIMFSZFqAGzAgX8bybZVMogubkliT/AJjPM/XY9PU9twnUojfBmLpMdxA8v5wtRF5WrprHSZknTM+2yix7zk/CX8BshFNzqZO9QLJcLWBvb1hSRTlJomCWBgzF7oVfdBuIS8uK2IbB9XDKw1lV9msPdYy+5yiOw9ZW3GJpdlJvoHU8K436joRLS4JTvF/nCCiOddI4oJSsHnCquo0gftAO5DdVoN2jhfaAJ1v424RonkGbA2VpnNu/w6RlbC5K6lfzD5yXYjujEF7gse7w8uUIPQz1lAHG8m8jePpt1RqBwjWElKxpWeojzmRFYNxSAuAeULFYG2ro3lKTIYz7snMRQfmPOKRi/o7Xw3UUU5eSSdjSYiY0mMCvWpXzW3kD1H9ZXwyMgysLcR5y60ZVZSDY68pwa0GpM7dKeUUhyYiwlTEYu14x25Shi3yi58pz5GyiV8TXJMIYDFLTRi+munLdA+BpM7XPlf5maNUCi0a+jk0tiE7YpumZWBHQgiUqu1kUXJkO1KaZWAUC+/S0A4bA3NmN/jHGTvkMI1YXTa6OCFIJ6awWKrU2B4GFcNhAo0W3lKu0sPcESpK0KLSYSw2MuBrLZxOkyuzarC6NvHxhEVSNJMZNDlFF+o8ZRUk79w3mVg9xLCIbd0A9JaMyrh8MM5I3XJhzY+GuWcjoP34fOVEol2CgkniBuHUngIeoUwihRw+J4mb6MN7J1J7USFJE6R5eczzqVnMRldIA2we/boJoXOkzu1VLVLDlNImcgdlMUm+7tOw2JpmyvOGKKQBwxpM60bAQiZDUQHUjUbjJCY0xuKapgpNO0U2OsF7YTNa3CEa+hlXEi88aSp0z1oO6YHXbDYcZjSZx/DbTqbw7Sx1WoiutNbNlsC2pzbjyi2dh1INx0ll8OUAyHLYggeH6TSKTQm1YMxdauASaNwDYka8L+e8QeMdWIutFreFoUrYyutxlRtb6sV4W5HlK/wB7rFctkU2HeBZt38Nh85SiV7Vwiv7bE6goosubU8OWnGCdo7ZdCFelqTlGU3ubX3TQHO1yz71toLeY66xi4Rb5iLnmdT5cpTjXJnbvdIFYNGfK5XKdfG1uMuPaWqrBVJgt6lzMUjS7LVMxvZlziK1XOTkRiABex1sLkeEbh7n3Rc8AOJ5TS9ndkjD0gtrOxzOQd7Hf9J1aMU92c+pJp7BOjSVRZQAOQFo+06J2dJiNyRCmI6KFkkbppM5tFilW4F9JpmmZ2ySHJHKXF3sTIg+/N+SKU/bNzijxXwnJm0vFGgx0RByK07OwAjIjSsmtERHYqBmOTjwlHKYcdAQQYNZMpsd3AzzvKglLJdnoePO40+iTBi0fiKmk7hhwjqlC8xXBre4FxDCViR1hitg14ym+FHKOmWpIgpuJJnvOrhY2qbCUrozdFLHVL6CUVSXWHEyA6myxJDsL9nKN6l+Cgnz0H6zVQH2cp2z9Ao9b/SHJ2aSqJzzds7FFFNDMUUUUAOGZrbnvnwmlaZ3aqgub8ppDkzlwBM0Us+zXnFNqZmawR4MjM6DMhEkUZmjgYhjhGtO3nCYDGtKjre95dRMxt0J8AN5+I9ZVYTk8ro6fH7KOcoektDGCRldZFisGLXU5fiP5TjR1bMjxWNBNhIkxFt8D4tKiHnBdbaDg2IMpWVijVVsUIMxGKEEpVd+MmajzN5RFDmrltFlzDU8sgw1OXLaQQM0HZ8d1/EfKF4A2RTdkcK2U5e63Jhu8Ru0kGytv1KwK5UV0OV1ud40JA5XvOxNRgpPg5byk49mmigv71W5J8Y1sZVGpyW85n/06f00/DILTsD/2i75cmXUEtfgb2j/bVvzJ6Ry8iEXTYlpSYUaZzbNs5vyl41a3519JQx1B27zWPUQh5eldWKWjJoFXXrFJMp/YinZnH6Yfjn8NWxjSY0mcvKMbH5p0NI7zt4qBMkDxPWVFLMbAamVsTilRczGw+J6CZTau1GqX4KNy/qesljTNf2XqfeExDnQs4ReiqoYAebmSOvqNCOsb9n62witxZ3J/1W+QEJ7TwhPfTf8AiX83h1nLrRy4OnRli9wM0ZUNxHubi4/p0kA3TiZ2IGYzrAVQi8PYwQUaOu6SmadEVGmeVpa9jJKdOTqkuyGiuiSyiyRKZJAAJJ3Ab4bwOzlSzPq3AcF+pmunByexlqTUUS7LoFE7wsTrb5Tzfb2Kaljqr0zlIYbuN0UsD4m89PqPpc6AC/kJ4ztHE+0qu/53ZvInT4Wno4pQx6PPcnlkaXD7adxcMeo5R52jU4kzK4TEsjBl8xwI5Gb7Y2KpuodAOTo1iV/l1nFqacYNOtjs05uaq9x/Z8mxJ6/OUtpYx1qEKTaaE5c7FQAMo3QdgauWq5yZ72HDS050o/leXGxtUsVXIG+/VObfGF9h4t3zI9/OFDim/wDxHwkSrlLOwCkjcOENZ6Tg1F7iip37DDSEUFPtQXPiYpnhM2uP00hMY7gC5IA5nQTMY3tMdyLbq2p9Nw+MA4rHO5u7FvE/IcJ7lniGwxfaGil7Euf4d3qYGftFVqEhAEUb23n1PGAqVMtv0Et5gAAN3KS5FJFipWZj3mLdSbmVcS+hnc+kp4qp6yGUj077N6wbCZfyu49bN+s1LTBfZdW7lRP4wfgJv5lLk0QH2hgA3eTut8G6H6wDUupyuMp+B8DNi6SpXwauLMAR1mUtPI2hqYmPxGsq+zPKFqmFpl2CVO6CQSfdBG8ByQDFRwVN3yLXQtyGUnrYBpzvRkmdC1o1yDEpmEaGz2Op7o67/IfWGKWzkTcLn8x1Plykns7zWGg/5GU9b+pVoUlQWQeJ4nzkyrzk3s42o4UEnhvnZCKjsc0pWZvtrtP2NAoD36ndHQfiPpp5zy8wx2n2p94rsw9wd1PAcfPfAwlN2ZUdBlnCYt6bB0Nj8xyI4iVgI4QpNUxptcG12B2gRrpUOVzuJ909L8POObaBR3y8TMMTYwtsra5pnvIHTirf+p4Gc0vGjk2u+joj5Mkqf+mn/tt5XxG0mfQw3sqvgsQO4qh+KMAG8uflK20sMiOcqgQh40E7KlryoA/dW5RQl7NuRinT+GJhnIy949FvIHq20AvIqnesQSDzH73QyM6CQfSw3RobjKCV3G+zdRofSTCvfQXHO++Kx0TVKnAGVqraR4kVSIZsfsyxQzunHQjqDYGeozx7slSZMldd4ZgeoB1E9fw1UOoZdxF5mzQ7aee/aB2rKE4Wg1n/APsdTqoP4AeBPE8JtNuY/wBjTJXVzog68/KePbT2NUdy4UlySTxLfziuhpWC6eIdNEYi++x39eskpbYrIwcOcym4NgZDaVKrQpMm2e09ltuLi6IfQOvddeTW3jod8LPpPIuw+NfD1RU/A/dcdOB8j+s9dJBFxxmsXaFJUQs8ynbjaZp0sgNmqaeC8T++c15QTyHtdj/bYlyD3U7i+W8+t/SOvorATGIRGcvATHRCImNaoBvIHnGSdedBkX3hTpqfAGPW8LsKJ0qEag2tutC+H27U3Oc45k9714+cBgxwaUgs2K9oEsND6RTIe0MUKQZslb5GIiLj8J2ZtFLgQ3R6C0bOiIZKpkFWTCQVTGBvew9DPhvB3/SbvZQyqF4TFfZo96DryqH4qv8AObpKegtIYwbj6DVHuRoBpflIsJgVzk8hDlVe4TKOBX3jJSLs8t7cbOWhXuosrgtYD8V+8B8/OYyo4vx9Jp+2G0fbYl2DXRTkTwHEeJuZmHbWPsRrOzOHNWkAq3ysQdNOf6z0bYZdaYR967j04TBdhsZlRl/jv6gfSek4hBkBtqRKjsJ8GY7ZbedEZKJtwd+PKy9es8wYza9vHCIiD3nJY9FXQepP+2YmUm3uxPbg5eOnLxGMgayA740IOQ9I+KFDOWjQ95ys2luc6iWiQD1jo0GdBlIkdeKcijAsMeMdGsNLTq7v3w0kFDpwmdjGeAydTIascDGPEM3P2W1u9VT+63zH6Cekk2nkv2bVcuJZeaX9GH1nrETGkSVvcMynaTahw+Fdh77nIutrFhq3kLn0mqxJsnrPKe3+JJNJLm1ne3iQB/xMSGYys0psJYcyuZIBfs1iilZVvo1gR1G79Z7RXayKOgnhGy2/+RS/vp8WAntfaLGihSZ/yJcdWtZR/qIlx3JZ5f2vx3tcU9j3UtTXwTf/ALi0CWnWJOp1J1J68TOy7JZyNZhOuL6RopCJhsJXEdFkAkdTlxO/whYDU1N/STCNUcI8JBAcEeqxBQIo7EK/70inLxQsKLESfrFFEyh7yGKKAkSLONFFEUHewf8A5i/3H+U9hpzsUljQ7Ge55GeOduD/AN9f8MfFmiih0xmXqSBp2KSBNsf/AMqh/i0/+Ynpv2mORTpi+hdbjnxiilx5ZMujzNp2KKUuBMYY+KKAjjSFN7eMUUHyhomSOMUUESKciijAbFFFAD//2Q=='},
    {nombre: 'Tom Hanks', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg'},
    {nombre: 'Samuel L. Jackson', personaje: '', foto: 'data:image/jpeg;base64,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'}
  ];

  filteredActores: any[] = [];
  nombreActorSelecionado = '';
  actoresSeleccionados: any[] = [];

  columnasAMostrar = [ 'imagen', 'nombre', 'personaje', 'acciones' ];

  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  filtrarActor(evento: any): void{
    let criterio = evento.target.value;
    this.filteredActores = this.actores.filter(actor => actor.nombre.toLowerCase().includes(criterio.toLowerCase()));

    if(criterio.length === 0){
      this.filteredActores = [];
    }
  }

  seleccionarActor(actor: any): void {
    this.filteredActores = [];
    // this.nombreActorSelecionado = actor.nombre;
    // console.log('Actor seleccionado: ' + JSON.stringify(actor));
    this.actoresSeleccionados.push(actor);
    console.log('Actores seleccionados: ' + JSON.stringify(this.actoresSeleccionados));
    this.control.patchValue('');

    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor: any): void{
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

}