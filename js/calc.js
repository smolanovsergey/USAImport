$(document).ready(function () { // Ждём загрузки страницы
    $("#calc-button").click(function () {
        $('.modal-result').hide();
    });
    $("#rastb").click(function () { // Событие нажатия на кнопку "Расчёт"
        $('.modal-result').show();
        var fuel = $("#fuel").val() * 1; // Получаем значение действия, которое нужно выполнить
        var motor = $("#motor").val() * 1; // Переменная первого числа
        var tc = $("input[name=price]").val() * 1; // Переменная второго числа
        var valuta = $("#valuta").val(); // Переменная второго числа
        var age = $("#age").val() * 1; // Переменная второго числа
        var ac = 0;
        var tp = tc * 0.1;
        var result = 0;
        var nds = 0;
        var dolar = 26.485778;
        var euro = 28.94101;
       // var dolar = $("#last2>.down").value(); // курс доллара
       // var euro = $("#last3").text(); // курс евро
        var koef = dolar / euro;

        if (fuel == 1) { // бензин
            if (motor > 0 && motor <= 900) {
                switch (age) {
                    case 0:
                        ac = motor * 0.102;
                        break;
                    case 1:
                        ac = motor * 1.094;
                        break;
                    case 2:
                        ac = motor * 1.438;
                        break;
                }

            } else if (motor >= 1000 && motor <= 1500) {
                switch (age) {
                    case 0:
                        ac = motor * 0.063;
                        break;
                    case 1:
                        ac = motor * 1.367;
                        break;
                    case 2:
                        ac = motor * 1.761;
                        break;
                }
            } else if (motor >= 1600 && motor <= 2200) {
                switch (age) {
                    case 0:
                        ac = motor * 0.267;
                        break;
                    case 1:
                        ac = motor * 1.643;
                        break;
                    case 2:
                        ac = motor * 2.441;
                        break;
                }
            } else if (motor >= 2300 && motor <= 3000) {
                switch (age) {
                    case 0:
                        ac = motor * 0.276;
                        break;
                    case 1:
                        ac = motor * 2.213;
                        break;
                    case 2:
                        ac = motor * 4.985;
                        break;
                }
            } else { // более 3000
                switch (age) {
                    case 0:
                        ac = motor * 2.209;
                        break;
                    case 1:
                        ac = motor * 3.329;
                        break;
                    case 2:
                        ac = motor * 4.985;
                        break;
                }
            }
        } else { // дизель
            if (motor > 0 && motor <= 1500) {
                switch (age) {
                    case 0:
                        ac = motor * 0.103;
                        break;
                    case 1:
                        ac = motor * 1.367;
                        break;
                    case 2:
                        ac = motor * 1.761;
                        break;
                }

            } else if (motor >= 1600 && motor <= 2500) {
                switch (age) {
                    case 0:
                        ac = motor * 0.327;
                        break;
                    case 1:
                        ac = motor * 1.923;
                        break;
                    case 2:
                        ac = motor * 2.209;
                        break;
                }
            } else { // более 2500
                switch (age) {
                    case 0:
                        ac = motor * 2.209;
                        break;
                    case 1:
                        ac = motor * 2.779;
                        break;
                    case 2:
                        ac = motor * 4.715;
                        break;
                }
            }
        }
        if (valuta == '$'){
            ac = ac / koef;
        }
        ac = Math.round (ac);
        nds = Math.round((tc + tp + ac) * 0.2);
        result = Math.round(tp + ac + nds + tc);
        $("input[name=resulttc]").val(tc + ' ' + valuta); // записываем результат
        $("input[name=resultimp]").val(tp + ' ' + valuta); // записываем результат
        $("input[name=resultac]").val(ac + ' ' + valuta); // записываем результат
        $("input[name=nds]").val(nds + ' ' + valuta); // записываем результат
        $("input[name=result]").val(result + ' ' + valuta)// записываем результат
    });
});
