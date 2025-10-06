function timeConversion(horario) {


    let periodo = horario.slice(-2);
    

    let hora = parseInt(horario.slice(0, 2));

    
    let minutosESegundos = horario.slice(2, -2);

    
    if (periodo === "AM") {
       
        if (hora === 12) {
            hora = 0;
        }
    } else {
        

        if (hora !== 12) {
            hora += 12;
        }
    }

    
    let horaFormatada = hora.toString().padStart(2, "0");

    
    let horarioFinal = horaFormatada + minutosESegundos;

    
    return horarioFinal;
}
