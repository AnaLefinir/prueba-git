/**
 * Created by Anita on 10/04/2016.
 */




(function () {
    $(document).ready(function () {
        function Keypress(value, kind) {
            this.value = value;
            this.kind = kind;
        }

        var display = [];
        var screenview = [];

        $('.key').click(function (event) {
            event.preventDefault();
            var value = $(this).attr('value');
            var i = display.length;
            var keytouch = new Keypress(value, $(this).attr('kind'));
            display.push(keytouch);
            var screenpost;

            switch (value) {
                case '0' :

                function number() {
                    if (i === 0) {
                        return value;
                    } else {
                        if (i <= 1 && display[i - 1].value === '0') {
                            display.pop();
                        } else if (display[i - 1].kind === 'number') {
                            return value;
                        } else if (display[i - 1].value === '.') {
                            return value;
                        } else if (display[i - 1].kind === 'operator') {
                            return value;
                        }
                    }
                }

                    var keyNumber = number();

                    if (keyNumber !== undefined) {
                        screenview.push(keyNumber);
                        screenpost = screenview.join('');
                        $('.screen').val(screenpost);
                    }
                    break;

                case '1' :
                case '2' :
                case '3' :
                case '4' :
                case '5' :
                case '6' :
                case '7' :
                case '8' :
                case '9' :
                    screenview.push(value);
                    screenpost = screenview.join('');
                    $('.screen').val(screenpost);
                    break;

                case '.' :

                function point() {
                    if (i === 0) {
                        return ('0' + value);
                    } else {
                        if (display[i - 1].value === '.') {
                            display.pop();
                        } else if (display[i - 1].kind === 'number') {
                            return value;
                        }
                    }
                }

                    var keyPoint = point();

                    if (keyPoint !== undefined) {
                        screenview.push(keyPoint);
                        screenpost = screenview.join('');
                        $('.screen').val(screenpost);
                    }
                    break;
                case '+' :
                case '-' :
                case '*' :
                case '/' :
                function addOperator() {
                    if (display.length === 0) {
                        display = [];
                        screenview = [];
                        return;
                    } else if (display[i - 1].kind === 'number') {
                        return value;
                    } else if (display[i - 1].kind === 'operator') {
                        display.pop();
                        screenview.pop();
                        return;
                    }
                }

                    var keyOperator = addOperator();
                    if (keyOperator !== undefined) {
                        screenview.push(keyOperator);
                        screenpost = screenview.join('');
                        $('.screen').val(screenpost);
                    } else {
                        display.pop();
                    }

                    break;

                case 'CE' :

                function deleteelement() {
                    /*if (display.length === 0 && screenview.length === 0){
                     return screenview;
                     }else if(display[i - 1].kind === 'number' || display[i - 1].kind === 'operator'){
                     */
                    display.pop();
                    screenview.pop();
                    return screenview;
                }


                    var deleteAnt = deleteelement();
                    screenpost = deleteAnt.join('');
                    $('.screen').val(screenpost);


                    break;

                case 'C' :
                function deleteAll() {
                    display = [];
                    screenview = [];
                    return screenview;
                }

                    var errase = deleteAll();
                    screenpost = errase.join('');
                    $('.screen').val(screenpost);

                    break;

                case '=' :
                function getResult() {
                    screenpost = screenview.join('');
                    if (display[i - 1].kind === 'number') {
                        var result = eval(screenpost);
                        if (result === Infinity || isNaN(result)) {
                            return 'ERROR';
                        } else if (typeof result === 'number') {
                            return result;

                        }
                    } else if (display[i - 1].kind === 'operator') {
                        return 'ERROR';
                    }
                }

                    var rsl = getResult();
                    $('.screen').val(rsl);
                    display = [];
                    screenpost = [];
                    screenview = [];

                    break;


            }
        });
    });
}());


