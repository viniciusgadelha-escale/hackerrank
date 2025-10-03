function birthdayCakeCandles(candles) {

    let maior = Math.max(...candles);


    let quantidade = candles.filter(vela => vela === maior).length;


    return quantidade;
}
