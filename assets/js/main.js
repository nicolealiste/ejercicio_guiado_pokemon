function Pokemon(nombre,color,poderDeAtaque){
	this.nombre= nombre;
	this.color=color;

	this.nivelDeAmistad=0;

	this.vida=100;
	this.poderDeAtaque=poderDeAtaque;

	this.mostrarPokemon=function(){
		return("Hola, soy: "+this.nombre+" y soy de color: "+this.color);
	};
	this.aumentarAmistad=function(valor){
		this.nivelDeAmistad=this.nivelDeAmistad + valor;
	};
	this.atacar=function(pokemon){
		pokemon.vida=pokemon.vida-this.poderDeAtaque;
		return pokemon.vida;
	}
}
function figth(){

	var player1= document.getElementById('1player').value;
	var player2= document.getElementById('2player').value;
	var p1= new Pokemon (player1,"Amarillo",100);
	var p2= new Pokemon (player2, "Rojo",20);
	p1.atacar(p2);

	var resFInal=document.getElementById('print');
	var texto= (p1.nombre +" ataco a "+ p2.nombre + ".y "+ p2.nombre+ " tiene una vida de "+ p2.vida);
	resFInal.innerHTML=texto;
		

};
//Pikachu.atacar(Charmander);
//console.log(Charmander.vida);
