let input = gets();

let leitor = parseInt(input)
let qtdEntradas = leitor
for (let i = 0; i < qtdEntradas; i++) {
    input = gets()
    let E = parseInt(input)
  	if (E > 8000){
    		print("Mais de 8000!");
  	}	else { 
      print("Inseto!");
    }
}