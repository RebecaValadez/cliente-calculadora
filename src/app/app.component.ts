import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionserviceService } from './services/operacionservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  // resultado(event: Event) {
  //   const element = event.target as HTMLInputElement;
  //   this.person.name = element.value;
  // }
  constructor(private operaciones: OperacionserviceService){

  }

  sumar(){
    //this.operacionesService.suma('');
    console.log('sumar');
    var obj: any = {"item1": this.num1, "item2": this.num2};
    this.operaciones.suma(obj).subscribe((result) => {
      console.log(result);
      this.resultado = parseFloat(result.toString());
    });
    
  }

  restar(){
    //this.operacionesService.resta('');
    console.log('restar')
    var obj: any = {"item1": this.num1, "item2": this.num2};
    this.operaciones.resta(obj).subscribe((result) => {
      console.log(result);
      this.resultado = parseFloat(result.toString());
    });
  }

  multiplicar(){
    //this.operacionesService.multiplicacion('');
    console.log('multiplicar')
    var obj: any = {"item1": this.num1, "item2": this.num2};
    this.operaciones.multiplicacion(obj).subscribe((result) => {
      console.log(result);
      this.resultado = parseFloat(result.toString());
    });
  }

  dividir(){
    //this.operacionesService.division('');
    console.log('dividir')
    var obj: any = {"item1": this.num1, "item2": this.num2};
    this.operaciones.division(obj).subscribe((result) => {
      console.log(result);
      this.resultado = parseFloat(result.toString());
    });
  }
}
