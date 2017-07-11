/**
 * Created by Pablito on 30-05-2017.
 */
//<script>
/*
 * FUNCION PARA EL CALENDARIO
 */

function CarritoController(c) {
    this.timeServer = new Date();
    this.currentTime = new Date();

    this.config = {};
    this.zebraPicker;
    this.domContentTurnos = $('#content_turnos');
    this.domDate = $('#date');
    this.domDateZebraShow = $('#calendar_picker');

    this.arrDays = ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'];
    this.arrMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    function __constructor(self) {
        $('#date').css('display', 'none');

        if (!self.isEmpty(c)) {
            self.config = c;
            self.timeServer = new Date(self.config.timeServer);

            return self.init();
        } else {
            //ALGUNA ACCION DE ERROR A REALIZARSE
            console.error('Error en configuraciones');
        }
    }

    /*
     * Analiza si el parametro pasado es null, undefined o un array vacio.
     * @param {string||array||object} value.
     * @param {boolean} allowEmptyString. Permitir valores vacios.
     * @returns {Boolean}
     */
    this.isEmpty = function (value, allowEmptyString) {
        return (value == null) || (!allowEmptyString ? value === '' : false) || (this.isArray(value) && value.length === 0);
    };

    /*
     * Analiza si el parametro pasado es un array vacio o no.
     * @param {type} value
     * @returns {Boolean}
     */
    this.isArray = ('isArray' in Array) ? Array.isArray : function (value) {
        return this.toString.call(value) === '[object Array]';
    };

    /*
     * Analiza una fecha dada
     * @param {object Date} fecha.
     * @param {int} indice del dia de la semana. "0" para domingo, hasta "6" para sabado.
     * @returns {Boolean}
     */
    this.isTheDay = function (fecha, days) {
        var index = $.inArray(parseInt(fecha.getDay()), days);

        return index >= 0;
        /*return days.some(function (day) {
         return parseInt(day) === parseInt(fecha.getDay());
         });*/
    };

    /*
     * Convierte el format yyyy-mm-dd a yyyy/mm/dd
     * @param {string} formato entrada.
     * @returns {string} formato salida
     */
    this.convertFormat = function (entrada) {
        return entrada.split('-').join('/');
    };

    /*
     * Inicializa el datepicker
     */
    this.init = function () {
        var self = this;

//        this.enabledDates();
//        console.log(this.config.enabledDates);

        this.zebraPicker = this.domDate.Zebra_DatePicker({
            direction: this.config.direction, //
            disabled_dates: this.config.disabledDates, //BLOQUEA FECHAS INDICADA EN UN ARREGLO ["dd mm yyyy"]
            enabled_dates: this.config.enabledDates, //ACTIVA LOS DIAS BLOQUEADOS POR disabled_dates RESPETANDO SU FORMATO
//            enabled_dates: this.enabledDates(this.config.enabledDates), //ACTIVA LOS DIAS BLOQUEADOS POR disabled_dates RESPETANDO SU FORMATO
            show_select_today: false,
            show_icon: false,
            always_visible: this.domDateZebraShow, //ELEMENTO EN DONDE SE MOSTRARA EL DATEPICKER
            onSelect: function (date, dateformat, dateObj, elem) {
                self.onSelectDateZebra(date, dateformat, dateObj, elem);
            },
            onOpen: function () {
                self.onSelectDateZebra(this.val());
            }
        });

//            $(window).load(function () {
        self.alertCarrito();
//            });
    };

    this.enabledDates = function (fechas) {
        var self = this;
        var resultante = [];

        if (!this.isEmpty(this.config.especial)) {
            $.each(this.config.itemsCarrito.normales, function (index, item) {
                if ($.inArray(parseInt(item.idcategoria), self.config.especial.categorias) >= 0) {
                    resultante = fechas.concat(self.config.especial.fechas);
                }
            });
        }

        return resultante;
    };

    this.todayText = function () {
        var today = [
            this.arrDays[this.currentTime.getDay()] + ', ', // Dia de la semana
            this.currentTime.getDate() + ' de ', // Dia del mes
            this.arrMonths[this.currentTime.getMonth()] + ' de ', // Mes del anio
            this.currentTime.getFullYear() // Anio completo
        ].join('');

        $('#todayText').html(today);
    };

    this.onSelectDateZebra = function (date, dateformat, dateObj, elem) {
        this.currentTime = new Date(this.convertFormat(date));

        this.todayText();
        this.domContentTurnos.html('');
        this.crearTurnos();
    };

    this.crearTurnos = function () {
        var self = this;
        var turnos = [];
        var flagChecked = true;

        if (!this.isEmpty(this.config.turnos)) {
            $.each(this.config.turnos, function (index, turno) {
                var disabled = self.isTurnDisabled(turno);
                var checked = '';

                if (!self.isEmpty(turno.activo_desde) && !self.isEmpty(turno.activo_hasta)) {
                    var activo_desde = new Date(self.convertFormat(turno.activo_desde));
                    var activo_hasta = new Date(self.convertFormat(turno.activo_hasta));

//                    if (self.currentTime >= activo_desde && self.currentTime <= activo_hasta && self.isTheDay(self.currentTime, turno.dias_activo)) {
                    if (self.currentTime >= activo_desde && self.currentTime <= activo_hasta) {
                        if (disabled != 'disabled' && flagChecked) {
                            checked = 'checked="checked"';
                            flagChecked = false;
                        }

                        turnos.push('<input required type="radio" name="datos_hora" id="turno_' + turno.turno + '" class="datos_radio time_radio" value="' + turno.horaini + '-' + turno.horafin + '" ' + disabled + ' ' + checked + ' />');
                        turnos.push('<label for="turno_' + turno.turno + '"  style="border-right: 1px solid #CCC;cursor: pointer">' + turno.horaini + '-' + turno.horafin + '</label>');

                        return true;
                    }
                } else {
                    if (disabled != 'disabled' && flagChecked) {
                        checked = 'checked="checked"';
                        flagChecked = false;
                    }

                    if (self.isTheDay(self.currentTime, turno.dias_activo)) {
                        turnos.push('<input required type="radio" name="datos_hora" id="turno_' + turno.turno + '" class="datos_radio time_radio" value="' + turno.horaini + '-' + turno.horafin + '" ' + disabled + ' ' + checked + ' />');
                        turnos.push('<label for="turno_' + turno.turno + '"  style="border-right: 1px solid #CCC;cursor: pointer">' + turno.horaini + '-' + turno.horafin + '</label>');
                    }
                }
            });
        }

        return this.domContentTurnos.append(turnos.join(''));
    };

    this.isTurnDisabled = function (turno) {
        var currentHour = this.timeServer.getHours();

        if ((currentHour >= parseInt(turno.horaini)) && !(this.currentTime > this.timeServer)) {
            return 'disabled';
        }

        return '';

//
    };

    this.alertCarrito = function () {
        if (parseInt(this.config.idcampana) > 0) {
            var itemsCampania = this.isEmpty(this.config.itemsCarrito.campanias);
            var itemsEspecial = this.isEmpty(this.config.itemsCarrito.especiales);
            var itemsNormal = this.isEmpty(this.config.itemsCarrito.normales);

            switch (true) {
                case (!itemsEspecial && !itemsNormal):
                    //                    $.fancybox('public/image/advertencia.png', {
                    $.fancybox(this.config.popupadvertencia, {
                        type: 'image'
                    });

                    this.marcarProductos();

                    $('#datos_pagar').remove();

                    break;
                case (!itemsCampania && !itemsNormal):
                    //                    $.fancybox('public/image/fechas-de-entrega.png', {
                    $.fancybox(this.config.popupcampanianormal, {
                        type: 'image'
                    });

                    break;
            }
        }
    };

    this.marcarProductos = function () {
        if (parseInt(this.config.idcampana) > 0) {
            $.each(this.config.itemsCarrito.especiales, function (index, item) {
                $('#prod_' + item.idproductos).css({
                    border: 'dashed 1px #FF0000',
                    backgroundColor: 'rgba(255,0,0,.1)'
                });
            });

            $.each(this.config.itemsCarrito.normales, function (index, item) {
                $('#prod_' + item.idproductos).css({
                    border: 'dashed 1px #FF0000',
                    backgroundColor: 'rgba(255,0,0,.1)'
                });
            });
        }
    };

    return __constructor(this);
}

//</script>