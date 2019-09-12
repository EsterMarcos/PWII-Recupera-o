class aluno{

    
    constructor( public raio:number, public area:number, public custoTotal:number) {} 

    raio(){
        return(this.tpgasto*this.vlmedia)
    }
    area(){
        return((this.distancia())/this.rdveiculo)
    }
    custoTotal(){
        return(this.tpgasto*this.vlm)
    }
   }
     
   