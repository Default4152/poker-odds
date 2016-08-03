(() => {
    const potOddsResult = document.getElementsByClassName('potOddsResult')[0];
    const equityResult  = document.getElementsByClassName('equityResult')[0];
    const goodBad       = document.getElementsByClassName('goodBad')[0];

    let calculateButton = document.getElementsByClassName('calculate')[0].addEventListener('click', () => {
        const betAmount    = document.getElementsByClassName('betAmount')[0].value;
        const potAmount    = document.getElementsByClassName('potAmount')[0].value;
        const outsAmount   = parseFloat(document.getElementsByClassName('outsAmount')[0].value);
        let allIn        = document.querySelector('input[name="allIn"]').checked;
        const flopOrTurn   = document.querySelector('input[name="flopOrTurn"]:checked').value;
        const potOdds      = ((betAmount / (parseFloat(betAmount) + parseFloat(potAmount))) * 100).toFixed(2);
        const outsOddsFlop = allIn ? ((outsAmount / 47) * 100).toFixed(2) * 2 : (((outsAmount / 47) * 100).toFixed(2));
        const outsOddsTurn = ((outsAmount / 46) * 100).toFixed(2);
        const outsOdds     = flopOrTurn === 'Flop' ? outsOddsFlop : outsOddsTurn;

        potOddsResult.value = potOdds + '%';
        equityResult.value  = outsOdds + '%';

        if (parseFloat(outsOdds) > parseFloat(potOdds)) {
            goodBad.style.background = "#3FC380";
            goodBad.style.color = "white";
            goodBad.value = "+EV";
        } else {
            goodBad.style.background = "#E74C3C";
            goodBad.style.color = "white";
            goodBad.value = "-EV";
        }
    });

    let resetButton = document.getElementsByClassName('reset')[0].addEventListener('click', () => {
        const inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i += 1) {
            inputs[i].value = '';
        }

        goodBad.style.background = '#e8ebed';
    });
})();