/**
 * Created by Pablito on 06-06-2017.
 */
// JavaScript Document <script>

var efecto_Scroll = function () {

    obj = $(".scroll0").fadeTo(0, 1);
    $(window).scroll(function (d, h) {
        obj.each(function (i) {
            a = $(this).offset().top + $(this).height();
            b = $(window).scrollTop() + $(window).height();
            if (a <= b)
                $(this).fadeTo(1200, 5);
        })

    })


}


var statSend = false;


$(document).ready(function () {

    //css z-index

    $("#user").css({"z-index": "2"});
    $("#header").css({"z-index": "1"});

    $("#detalle_descripcion>div").eq(1).css({"z-index": "2"});

    //footer aÃ±o

    var fecha = new Date();
    var year = fecha.getFullYear();

    $("#florerias p").eq(1).children("span").html(year);

    //aparicion elementos

    $(".aparicion").each(function (i) {
        $(this).css({"opacity": "1", "top": "0"}).delay(i * 200 + 200).animate({"opacity": "1", "top": "0"}, 400);
    });



    //carrusel

    $.fn.carrusel = function (options) {
        return this.each(function (i) {

            //crear

            var carruselAjuste = $.extend({carruselAlto: "100%", carruselAncho: "100%", carruselFilas: "", columnasMinimo: "", columnasMaximo: "", columnasLimite: "2000", cambioProgresivo: true, cambioDemora: 400, flechaActivo: false, flechaIzq: "", flechaDer: "", flechaAlto: "", flechaAncho: "", flechaRelleno: "", autoActivo: false, autoDemora: 2000, aparicionActivo: false, aparicionPartida: 0, aparicionDemora: 100
            }, options);

            $(this).append('<div class="carrusel_overflow"><div class="carrusel_slider"></div></div><div class="carrusel_left" style="background:url(../css/images/' + carruselAjuste.flechaIzq + ') no-repeat center center"><div></div></div><div class="carrusel_right" style="background:url(../css/images/' + carruselAjuste.flechaDer + ') no-repeat center center;"><div></div></div>');
            $(".carrusel_overflow").eq(i).css({"height": carruselAjuste.carruselAlto, "width": carruselAjuste.carruselAncho});

            var carruselItemCantidad = $(".carrusel_item").length;
            var carruselGrupoMinimo = carruselAjuste.carruselFilas * carruselAjuste.columnasMinimo;
            var carruselGrupoMaximo = carruselAjuste.carruselFilas * carruselAjuste.columnasMaximo;

            for (var ii = 0; ii < Math.ceil(carruselItemCantidad / carruselGrupoMinimo); ii++) {
                $(".carrusel_slider").eq(i).append('<div class="carrusel_grupo grupo_min grupo_min' + ii + '"></div>');
            }
            for (var ii = 0; ii < Math.ceil(carruselItemCantidad / carruselGrupoMaximo); ii++) {
                $(".carrusel_slider").eq(i).append('<div class="carrusel_grupo grupo_max grupo_max' + ii + '"></div>');
            }
            $(".carrusel_slider").eq(i).children(".grupo_min").each(function (ii) {
                $(this).css({"left": ii * 100 + "%"});
            });
            $(".carrusel_slider").eq(i).children(".grupo_max").each(function (ii) {
                $(this).css({"left": ii * 100 + "%"});
            });
            for (var ii = 0; ii < $(this).children(".carrusel_item").length; ii++) {
                $(this).children(".carrusel_item").eq(ii).addClass("item_min" + Math.floor(ii / carruselGrupoMinimo));
                $(this).children(".carrusel_item").eq(ii).addClass("item_max" + Math.floor(ii / carruselGrupoMaximo));
            }
            ;

            //orden

            if ($(window).width() < carruselAjuste.columnasLimite) {
                carruselGrupoItems = carruselAjuste.carruselFilas * carruselAjuste.columnasMinimo;
                carruselGrupoActivo = $(".carrusel_slider").eq(i).children(".grupo_min");
                $(".carrusel_slider").eq(i).children(".grupo_min").css({"display": "block"});
                $(".carrusel_slider").eq(i).children(".grupo_max").css({"display": "none"});
                for (var ii = 0; ii < 100; ii++) {
                    $(this).children(".item_min" + ii).appendTo(".grupo_min" + ii);
                }
                ;
                $(".carrusel_slider").eq(i).children(".grupo_min").children(".carrusel_item").each(function (ii) {
                    $(this).css({"height": 100 / carruselAjuste.carruselFilas + "%", "width": 100 / carruselAjuste.columnasMinimo + "%", "left": (ii - Math.floor(ii / carruselAjuste.columnasMinimo) * carruselAjuste.columnasMinimo) * (100 / carruselAjuste.columnasMinimo) + "%", "top": (Math.floor(ii / carruselAjuste.columnasMinimo) - Math.floor(ii / carruselGrupoItems) * carruselAjuste.carruselFilas) * (100 / carruselAjuste.carruselFilas) + "%"});
                });
            } else {
                carruselGrupoItems = carruselAjuste.carruselFilas * carruselAjuste.columnasMaximo;
                carruselGrupoActivo = $(".carrusel_slider").eq(i).children(".grupo_max");
                $(".carrusel_slider").eq(i).children(".grupo_min").css({"display": "none"});
                $(".carrusel_slider").eq(i).children(".grupo_max").css({"display": "block"});
                for (var ii = 0; ii < 100; ii++) {
                    $(this).children(".item_max" + ii).appendTo(".grupo_max" + ii);
                }
                ;
                $(".carrusel_slider").eq(i).children(".grupo_max").children(".carrusel_item").each(function (ii) {
                    $(this).css({"height": 100 / carruselAjuste.carruselFilas + "%", "width": 100 / carruselAjuste.columnasMaximo + "%", "left": (ii - Math.floor(ii / carruselAjuste.columnasMaximo) * carruselAjuste.columnasMaximo) * (100 / carruselAjuste.columnasMaximo) + "%", "top": (Math.floor(ii / carruselAjuste.columnasMaximo) - Math.floor(ii / carruselGrupoItems) * carruselAjuste.carruselFilas) * (100 / carruselAjuste.carruselFilas) + "%"});
                });
            }
            ;

            carruselGrupoActivo.css({"left": "100%"});
            carruselGrupoActivo.eq(0).css({"left": "0%"});

            //automanual

            if (carruselAjuste.flechaActivo) {
                $(".carrusel_left").eq(i).css({"height": carruselAjuste.flechaAlto + carruselAjuste.flechaRelleno * 2 + "px", "width": carruselAjuste.flechaAncho + carruselAjuste.flechaRelleno * 2 + "px", "left": -carruselAjuste.flechaRelleno + "px"});
                $(".carrusel_left img").eq(i).css({"height": carruselAjuste.flechaAlto + "px", "width": carruselAjuste.flechaAncho + "px"});
                $(".carrusel_right").eq(i).css({"height": carruselAjuste.flechaAlto + carruselAjuste.flechaRelleno * 2 + "px", "width": carruselAjuste.flechaAncho + carruselAjuste.flechaRelleno * 2 + "px", "right": -carruselAjuste.flechaRelleno + "px"});
                $(".carrusel_right img").eq(i).css({"height": carruselAjuste.flechaAlto + "px", "width": carruselAjuste.flechaAncho + "px"});
                if (carruselGrupoActivo.length > 1) {
                    $(".carrusel_left").eq(i).fadeIn(200);
                    $(".carrusel_right").eq(i).fadeIn(200);
                } else {
                    $(".carrusel_left").eq(i).fadeOut(200);
                    $(".carrusel_right").eq(i).fadeOut(200);
                }
            }

            var carruselNavEstado = 0;
            var carruselAutoEstado = true;

            var carruselCambioAnterior = function () {
                if (carruselNavEstado > 0) {
                    carruselGrupoActivo.eq(carruselNavEstado).animate({"left": "100%"}, carruselAjuste.cambioDemora);
                    carruselGrupoActivo.eq(carruselNavEstado - 1).css({"left": "-100%"}).animate({"left": "0%"}, carruselAjuste.cambioDemora);
                    carruselNavEstado--;
                } else {
                    carruselGrupoActivo.eq(carruselNavEstado).animate({"left": "100%"}, carruselAjuste.cambioDemora);
                    carruselGrupoActivo.eq(carruselGrupoActivo.length - 1).css({"left": "-100%"}).animate({"left": "0%"}, carruselAjuste.cambioDemora);
                    carruselNavEstado = carruselGrupoActivo.length - 1;
                }
                ;
            };
            var carruselCambioSiguiente = function () {
                if (carruselNavEstado < carruselGrupoActivo.length - 1) {
                    carruselGrupoActivo.eq(carruselNavEstado).animate({"left": "-100%"}, carruselAjuste.cambioDemora);
                    carruselGrupoActivo.eq(carruselNavEstado + 1).css({"left": "100%"}).animate({"left": "0%"}, carruselAjuste.cambioDemora);
                    carruselNavEstado++;
                } else {
                    carruselGrupoActivo.eq(carruselNavEstado).animate({"left": "-100%"}, carruselAjuste.cambioDemora);
                    carruselGrupoActivo.eq(0).css({"left": "100%"}).animate({"left": "0%"}, carruselAjuste.cambioDemora);
                    carruselNavEstado = 0;
                }
                ;
            };

            $(".carrusel_left div").each(function (i) {
                $(this).click(function (e) {
                    carruselAutoEstado = false;
                    carruselCambioAnterior();
                    $(".carrusel_left div").eq(i).hide();
                    $(".carrusel_right div").eq(i).hide();
                    setTimeout(function (e) {
                        $(".carrusel_left div").eq(i).show();
                        $(".carrusel_right div").eq(i).show();
                        setTimeout(function (e) {
                            carruselAutoEstado = true;
                        }, carruselAjuste.autoDemora * 2);
                    }, carruselAjuste.cambioDemora);
                });
            });
            $(".carrusel_right div").each(function (i) {
                $(this).click(function (e) {
                    carruselAutoEstado = false;
                    carruselCambioSiguiente();
                    $(".carrusel_right div").eq(i).hide();
                    $(".carrusel_left div").eq(i).hide();
                    setTimeout(function (e) {
                        $(".carrusel_right div").eq(i).show();
                        $(".carrusel_left div").eq(i).show();
                        setTimeout(function (e) {
                            carruselAutoEstado = true;
                        }, carruselAjuste.autoDemora * 2);
                    }, carruselAjuste.cambioDemora);
                });
            });

            var carruselAuto = function (autoDemora) {
                setInterval(function (e) {
                    if (carruselAjuste.autoActivo && carruselAutoEstado && carruselGrupoActivo.length > 1) {
                        $(".carrusel_left div").eq(i).hide();
                        $(".carrusel_right div").eq(i).hide();
                        setTimeout(function (e) {
                            if (carruselAjuste.cambioProgresivo) {
                                carruselCambioSiguiente();
                            } else {
                                carruselCambioAnterior();
                            }
                            ;
                            setTimeout(function (e) {
                                $(".carrusel_left div").eq(i).show();
                                $(".carrusel_right div").eq(i).show();
                            }, carruselAjuste.cambioDemora);
                        }, carruselAjuste.cambioDemora);
                    }
                    ;
                }, autoDemora);
            };
            carruselAuto(carruselAjuste.autoDemora);

            //aparicion

            if (carruselAjuste.aparicionActivo) {
                $(".carrusel_slider").eq(i).children(".carrusel_grupo").children(".carrusel_item").css({"opacity": "0"});

                if ($(window).scrollTop() + $(window).height() >= carruselAjuste.aparicionPartida) {
                    $(".carrusel_slider").eq(i).children(".carrusel_grupo").children(".carrusel_item").each(function (i) {
                        $(this).delay(i * carruselAjuste.aparicionDemora + carruselAjuste.aparicionDemora * 2).animate({"opacity": "1"}, carruselAjuste.aparicionDemora * 2);
                    });
                }
                ;
                $(window).scroll(function (e) {
                    if ($(window).scrollTop() + $(window).height() >= carruselAjuste.aparicionPartida) {
                        $(".carrusel_slider").eq(i).children(".carrusel_grupo").children(".carrusel_item").each(function (i) {
                            $(this).delay(i * carruselAjuste.aparicionDemora + carruselAjuste.aparicionDemora * 2).animate({"opacity": "1"}, carruselAjuste.aparicionDemora * 2);
                        });
                    }
                    ;
                });
            }

            //redimension

            $(window).resize(function (e) {
                carruselNavEstado = 0;

                carruselGrupoActivo.css({"left": "100%"});
                carruselGrupoActivo.eq(0).css({"left": "0%"});

                if (carruselGrupoActivo.length > 1) {
                    $(".carrusel_left").eq(i).fadeIn(200);
                    $(".carrusel_right").eq(i).fadeIn(200);
                } else {
                    $(".carrusel_left").eq(i).fadeOut(200);
                    $(".carrusel_right").eq(i).fadeOut(200);
                }

                if ($(window).width() < carruselAjuste.columnasLimite) {
                    carruselGrupoItems = carruselAjuste.carruselFilas * carruselAjuste.columnasMinimo;
                    carruselGrupoActivo = $(".carrusel_slider").eq(i).children(".grupo_min");
                    $(".carrusel_slider").eq(i).children(".grupo_min").css({"display": "block"});
                    $(".carrusel_slider").eq(i).children(".grupo_max").css({"display": "none"});
                    for (var ii = 0; ii < 100; ii++) {
                        $(".carrusel_slider").eq(i).children(".carrusel_grupo").children(".item_min" + ii).appendTo(".grupo_min" + ii);
                    }
                    ;
                    $(".carrusel_slider").eq(i).children(".grupo_min").children(".carrusel_item").each(function (ii) {
                        $(this).css({"height": 100 / carruselAjuste.carruselFilas + "%", "width": 100 / carruselAjuste.columnasMinimo + "%", "left": (ii - Math.floor(ii / carruselAjuste.columnasMinimo) * carruselAjuste.columnasMinimo) * (100 / carruselAjuste.columnasMinimo) + "%", "top": (Math.floor(ii / carruselAjuste.columnasMinimo) - Math.floor(ii / carruselGrupoItems) * carruselAjuste.carruselFilas) * (100 / carruselAjuste.carruselFilas) + "%"});
                    });
                } else {
                    carruselGrupoItems = carruselAjuste.carruselFilas * carruselAjuste.columnasMaximo;
                    carruselGrupoActivo = $(".carrusel_slider").eq(i).children(".grupo_max");
                    $(".carrusel_slider").eq(i).children(".grupo_min").css({"display": "none"});
                    $(".carrusel_slider").eq(i).children(".grupo_max").css({"display": "block"});
                    for (var ii = 0; ii < 100; ii++) {
                        $(".carrusel_slider").eq(i).children(".carrusel_grupo").children(".item_max" + ii).appendTo(".grupo_max" + ii);
                    }
                    ;
                    $(".carrusel_slider").eq(i).children(".grupo_max").children(".carrusel_item").each(function (ii) {
                        $(this).css({"height": 100 / carruselAjuste.carruselFilas + "%", "width": 100 / carruselAjuste.columnasMaximo + "%", "left": (ii - Math.floor(ii / carruselAjuste.columnasMaximo) * carruselAjuste.columnasMaximo) * (100 / carruselAjuste.columnasMaximo) + "%", "top": (Math.floor(ii / carruselAjuste.columnasMaximo) - Math.floor(ii / carruselGrupoItems) * carruselAjuste.carruselFilas) * (100 / carruselAjuste.carruselFilas) + "%"});
                    });
                }
                ;
            });

        });
    };

    $("#inicio_carrusel").carrusel({
        carruselAlto: "100%",
        carruselAncho: "100%",
        carruselFilas: 2,
        columnasMinimo: 4,
        columnasMaximo: 5,
        columnasRemaximo: 6,
        columnasLimite: 1600,
        columnasOtrolimite: 1700,
        cambioProgresivo: true,
        cambioDemora: 600,
        flechaActivo: true,
        flechaIzq: 'flecha-inicio-left.png',
        flechaDer: 'flecha-inicio-right.png',
        flechaAlto: 40,
        flechaAncho: 40,
        flechaRelleno: 5,
        autoActivo: false,
        autoDemora: 3000,
        aparicionActivo: false,
        aparicionPartida: 650,
        aparicionDemora: 200
    });


    $.fn.carrusel = function (options) {
        return this.each(function (i) {
            //variables
            var carruselAjuste = $.extend({carruselVentanaLimite0: '', carruselVentanaLimite1: '', carruselGrupoGiroDireccion: '', carruselGrupoGiroDemora: '', carruselGrupoGiroInfinito: '', carruselItemFilas0: '', carruselItemFilas1: '', carruselItemFilas2: '', carruselItemColumnas0: '', carruselItemColumnas1: '', carruselItemColumnas2: ''}, options);
            var cVeLi0 = carruselAjuste.carruselVentanaLimite0, cVeLi1 = carruselAjuste.carruselVentanaLimite1, cGrGiDi = carruselAjuste.carruselGrupoGiroDireccion, cGrGiDe = carruselAjuste.carruselGrupoGiroDemora, cGrGiIn = carruselAjuste.carruselGrupoGiroInfinito, cItFi0 = carruselAjuste.carruselItemFilas0, cItFi1 = carruselAjuste.carruselItemFilas1, cItFi2 = carruselAjuste.carruselItemFilas2, cItCo0 = carruselAjuste.carruselItemColumnas0, cItCo1 = carruselAjuste.carruselItemColumnas1, cItCo2 = carruselAjuste.carruselItemColumnas2;
            //maquetacion
            $(this).addClass("carrusel_cuerpo");
            $(".carrusel_cuerpo").eq(i).append('<div class="carrusel_contenido"></div>');
            for (var ii = 0; ii < ($(".carrusel_cuerpo").eq(i).children(".carrusel_item").length) / (cItFi0 * cItCo0); ii++) {
                $(".carrusel_contenido").eq(i).append('<div class="carrusel_grupo carrusel_grupo' + i + ' carrusel_grupo' + i + '_' + ii + '"></div>');
                $(".carrusel_control ul").eq(i).append('<li><a><div></div></a></li>');
            }
            ;
            $(".carrusel_cuerpo").eq(i).children(".carrusel_item").addClass("carrusel_item" + i);
            //orden
            var contenidoEstado = 0;
            var itemDisposicion = function (cItFi, cItCo) {
                contenidoEstado = 0;
                $(".carrusel_grupo" + i).removeClass("grupo_activo" + i);
                for (var ii = 0; ii < Math.ceil($(".carrusel_item" + i).length / (cItFi * cItCo)); ii++) {
                    $(".carrusel_grupo" + i + "_" + ii).addClass("grupo_activo" + i);
                }
                ;
                $(".carrusel_grupo" + i).css({"display": "none"});
                switch (cGrGiDi) {
                    case 'inferior':
                        $(".carrusel_grupo" + i).css({"left": "0", "top": "100%"});
                        break;
                    case 'izquierda':
                        $(".carrusel_grupo" + i).css({"left": "-100%", "top": "0"});
                        break;
                    case 'derecha':
                        $(".carrusel_grupo" + i).css({"left": "100%", "top": "0"});
                        break;
                    case 'superior':
                        $(".carrusel_grupo" + i).css({"left": "0", "top": "-100%"});
                        break;
                }
                ;
                $(".carrusel_grupo" + i + "_" + 0).css({"display": "block", "left": "0", "top": "0"});
                $(".carrusel_item" + i).each(function (ii) {
                    $(this).appendTo(".carrusel_grupo" + i + "_" + (Math.floor(ii / cItCo * cItFi)));
                });
                //if ($(".carrusel_item" + i).length >= cItCo) {
                $(".carrusel_item" + i).css({"height": 100 / cItFi + "%", "width": 100 / cItCo + "%"}, 400);
                $(".carrusel_item" + i).each(function (ii) {
                    $(this).css({"left": (ii - Math.floor(ii / cItCo) * cItCo) * (100 / cItCo) + "%", "top": (ii - Math.floor(ii / cItFi) * cItFi) * (100 / cItFi) + "%"}, 400);
                });
                /*} else {
                 $(".carrusel_contenido").eq(i).css({"width": $(".carrusel_contenido").eq(i).width() * $(".carrusel_item" + i).length / cItCo + "px"});
                 $(".carrusel_item" + i).css({"height": 100 / cItFi + "%", "width": 100 / $(".carrusel_item" + i).length + "%"}, 400);
                 $(".carrusel_item" + i).each(function (ii) {
                 $(this).css({"left": (ii - Math.floor(ii / $(".carrusel_item" + i).length) * $(".carrusel_item" + i).length) * (100 / $(".carrusel_item" + i).length) + "%", "top": (ii - Math.floor(ii / cItFi) * cItFi) * (100 / cItFi) + "%"}, 400);
                 });
                 }
                 ;*/
                if ($(".carrusel_item" + i).length > (cItCo * cItFi)) {
                    $(".carrusel_izquierda").eq(i).show();
                    $(".carrusel_derecha").eq(i).show();
                    $(".carrusel_control").eq(i).show();
                } else {
                    $(".carrusel_izquierda").eq(i).hide();
                    $(".carrusel_derecha").eq(i).hide();
                    $(".carrusel_control").eq(i).hide();
                }
                ;
            };
            var ventanaEstado;
            var itemOrden = function () {
                if ($(window).width() < cVeLi0) {
                    if (ventanaEstado !== 0) {
                        ventanaEstado = 0;
                        itemDisposicion(cItFi0, cItCo0);
                    }
                    ;
                } else if (cVeLi0 < $(window).width() && $(window).width() < cVeLi1) {
                    if (ventanaEstado !== 1) {
                        ventanaEstado = 1;
                        itemDisposicion(cItFi1, cItCo1);
                    }
                    ;
                } else if (cVeLi1 < $(window).width()) {
                    if (ventanaEstado !== 2) {
                        ventanaEstado = 2;
                        itemDisposicion(cItFi2, cItCo2);
                    }
                    ;
                }
                ;
            };
            itemOrden();
            //redimension
            $(window).resize(function (e) {
                itemOrden();
            });
            //controles
            var controlNavegador = $(".carrusel_control ul").eq(i).children("li").children("a");
            controlNavegador.children("div").each(function (ii) {
                $(this).click(function (e) {
                    if (ii < contenidoEstado) {
                        controlNavegador.eq(contenidoEstado).removeClass("carrusel_activo");
                        controlNavegador.eq(ii).addClass("carrusel_activo");
                        $(".carrusel_grupo" + i).eq(contenidoEstado).animate({"left": "100%"}, cGrGiDe);
                        $(".carrusel_grupo" + i).eq(ii).css({"display": "block", "left": "-100%"}).animate({"left": "0"}, cGrGiDe);
                        contenidoEstado = ii;
                    } else if (ii > contenidoEstado) {
                        controlNavegador.eq(contenidoEstado).removeClass("carrusel_activo");
                        controlNavegador.eq(ii).addClass("carrusel_activo");
                        $(".carrusel_grupo" + i).eq(contenidoEstado).animate({"left": "-100%"}, cGrGiDe);
                        $(".carrusel_grupo" + i).eq(ii).css({"display": "block", "left": "100%"}).animate({"left": "0"}, cGrGiDe);
                        contenidoEstado = ii;
                    }
                    ;
                    controlNavegador.children("div").hide();
                    setTimeout(function () {
                        controlNavegador.children("div").show();
                    }, cGrGiDe);
                });
            });
            controlNavegador.eq(0).addClass("carrusel_activo");
            //flechas
            var flechaPausa = function (i) {
                $(".carrusel_izquierda div").eq(i).hide();
                $(".carrusel_derecha div").eq(i).hide();
                setTimeout(function () {
                    $(".carrusel_izquierda div").eq(i).show();
                    $(".carrusel_derecha div").eq(i).show();
                }, cGrGiDe);
            };
            $(".carrusel_izquierda div").eq(i).click(function (e) {
                if (contenidoEstado > 0) {
                    $(".carrusel_grupo" + i).eq(contenidoEstado).animate({"left": "100%"}, cGrGiDe);
                    $(".carrusel_grupo" + i).eq(contenidoEstado - 1).css({"display": "block", "left": "-100%"}).animate({"left": "0"}, cGrGiDe);
                    contenidoEstado = contenidoEstado - 1;
                } else if (cGrGiIn) {
                    $(".carrusel_grupo" + i + "_" + 0).animate({"left": "100%"}, cGrGiDe);
                    $(".carrusel_grupo" + i).eq($(".grupo_activo" + i).length - 1).css({"display": "block", "left": "-100%"}).animate({"left": "0"}, cGrGiDe);
                    contenidoEstado = $(".grupo_activo" + i).length - 1;
                }
                ;
                flechaPausa(i);
            });
            $(".carrusel_derecha div").eq(i).click(function (e) {
                if (contenidoEstado < $(".grupo_activo" + i).length - 1) {
                    $(".carrusel_grupo" + i).eq(contenidoEstado).animate({"left": "-100%"}, cGrGiDe);
                    $(".carrusel_grupo" + i).eq(contenidoEstado + 1).css({"display": "block", "left": "100%"}).animate({"left": "0"}, cGrGiDe);
                    contenidoEstado = contenidoEstado + 1;
                } else if (cGrGiIn) {
                    $(".carrusel_grupo" + i).eq($(".grupo_activo" + i).length - 1).animate({"left": "-100%"}, cGrGiDe);
                    $(".carrusel_grupo" + i + "_" + 0).css({"display": "block", "left": "100%"}).animate({"left": "0"}, cGrGiDe);
                    contenidoEstado = 0;
                }
                ;
                flechaPausa(i);
            });
        });
    };


    //user header aparacion

    $("#header").css({"opacity": "1"}).delay(200).animate({"opacity": "1"}, 400);

    if($(window).height()>550 && $(window).width()>1100){
        $(".detalle_carrusel").carrusel({carruselVentanaLimite0: 1, carruselVentanaLimite1: 1600, carruselGrupoGiroDireccion: 'derecha', carruselGrupoGiroDemora: 400, carruselGrupoGiroInfinito: true, carruselItemFilas0: 1, carruselItemFilas1: 1, carruselItemFilas2: 1, carruselItemColumnas0: 3, carruselItemColumnas1: 3, carruselItemColumnas2: 4});
    }




    //user formularios eventos

    $(".user_form_overlay").css({"opacity": "0.5"});
    $(".user_form").each(function (i) {
        $(this).mouseenter(function (e) {
            $(".user_form>p").eq(i).css({"background-image": "none"}).stop(true, false).animate({"background-color": "#FFC400","color":"#fff"}, 200);
            $(".user_form").eq(i).css({"z-index": "2"});
            $(".user_form0").eq(i).stop(true,true).slideDown(200);
        });
        $(this).mouseleave(function (e) {
            $(".user_form>p").eq(i).css({"background-image": "url(public/image/bg-link.png)"}).stop(true, true).animate({"background-color": "#37B34A","color":"#DCFFE0"}, 200);
            $(".user_form").eq(i).css({"z-index": "1"});
            $(".user_form0").eq(i).stop(true,true).slideUp(200);
        });
    });
    $(".user_form>p").each(function (i) {
        $(this).click(function (e) {
            $(".user_form").removeClass("user_activo");
            $(".user_form_overlay").fadeOut(200);
            $(".user_form0").eq(i).stop(true,true).slideToggle(200);
        });
    });
    $(".user_boton").each(function (i) {
        $(this).mouseenter(function (e) {
            $(".user_boton").eq(i).stop(true, false).animate({"background-color": "#FFC400"}, 200);
        });
        $(this).mouseleave(function (e) {
            $(".user_boton").eq(i).stop(true, false).animate({"background-color": "#37B34A"}, 200);
        });
    });
    $(".user_form0 form").each(function(i){
        $(this).children("input").click(function(e){
            $(".user_form").eq(i).addClass("user_activo");
            $(".user_form_overlay").eq(i).fadeIn(200);
        });
    });
    $(".user_form0 img,.user_form_overlay").click(function (e) {
        $(".user_form").removeClass("user_activo");
        $(".user_form_overlay").fadeOut(200);
        $(".user_form0").slideUp(200);
        setTimeout(function (e) {
            $(".user_form").css({"z-index": "1"});
        }, 200);
    });

    //window scroll aparicion

    $("#footer_fechas,#footer_recibe,.footer1,#cuentas_pago,#cuentas_seguro,#nav,#creditos,.detalle_item").css({"opacity": "1"});

    var scrollAparicion = function (demora) {
        if ($(window).scrollTop() + $(window).height() >= $("#user").height() + $("#header").height() + $(".content").height() + $("#footer0").height() - 100) {
            $("#footer_fechas").animate({"opacity": "1", "left": "60px"}, demora);
            $("#footer_recibe").animate({"opacity": "1", "right": "0"}, demora);
        }
        ;
        if ($(window).scrollTop() + $(window).height() >= $("#user").height() + $("#header").height() + $(".content").height() + $("#footer").height() - 100) {
            $(".footer1").each(function (i) {
                $(this).delay(i * 100).animate({"opacity": "1", "top": "340px"}, demora);
            });
        }
        ;
        if ($(window).scrollTop() + $(window).height() >= $("#user").height() + $("#header").height() + $(".content").height() + $("#footer").height() + $("#cuentas").height()) {
            $("#cuentas_pago").animate({"opacity": "1", "left": "0"}, demora);
            //$("#cuentas_seguro").animate({"opacity": "1", "right": "0"}, demora);
        }
        ;
        if ($(window).scrollTop() + $(window).height() >= $("#user").height() + $("#header").height() + $(".content").height() + $("#footer").height() + $("#cuentas").height() + $("#nav").height()) {
            $("#nav").animate({"opacity": "1", "top": "0"}, demora);
        }
        ;
        if ($(window).scrollTop() + $(window).height() >= $("#user").height() + $("#header").height() + $(".content").height() + $("#footer").height() + $("#cuentas").height() + $("#nav").height() + $("#creditos").height()) {
            $("#creditos").animate({"opacity": "1"}, demora);
        }
        ;

        if ($(window).scrollTop() + $(window).height() >= $("#user").height() + $("#header").height() + $("#detalle0").height() + 300) {
            $(".detalle_item").each(function (i) {
                $(this).delay(i * 100).animate({"opacity": "1", "top": "0"}, demora);
            });
        }
        ;
    }

    setTimeout(function (e) {
        scrollAparicion(400);
    }, 400);
    $(window).scroll(function (e) {
        scrollAparicion(400);
    });
    $(window).resize(function (e) {
        scrollAparicion(400);
    });

    //content item events

    $(".content_item_img div").css({"opacity": "0.5"});
    $(".content_item_img a").css({"opacity": "0"});
    $(".comple").css({"max-height": "70%", "max-width": "70%"}, 200);

    var itemFormEstado;

    if ($(window).height() > 550 && $(window).width() > 1100) {
        var contentItemLeave = function (i) {
            $(".content_item").eq(i).css({"z-index": "1"});
            $(".content_item_img img").eq(i).stop(true, true).animate({"max-height": "90%", "max-width": "90%"}, 200);
            $(".comple").eq(i).stop(true, true).animate({"max-height": "70%", "max-width": "70%"}, 200);
            $(".content_item_img div").eq(i).stop(true, true).fadeOut(200);
            $(".content_item_img a").eq(i).stop(true, true).animate({"opacity": "0"}, 200);
            $(".content_item_datos").eq(i).stop(true, true).animate({"background-color": "#FFF"}, 200);
            $(".content_item_datos h3").eq(i).stop(true, true).animate({"color": "#37B34A"}, 200);
            $(".content_item_datos p").eq(i).stop(true, true).animate({"color": "#505050"}, 200);
            $(".content_item_datos p span").eq(i).stop(true, true).animate({"color": "#999"}, 200);
            $(".item_boton").eq(i).css({"background-image": "url(css/images/icon-carrito-naranja.png)"}).stop(true, true).animate({"background-color": "#FFF", "color": "#969696"}, 200);
            $(".item_check").eq(i).stop(true, true).animate({"background-color": "#f47920", "color": "#f47920"}, 200);
            $(".content_item").eq(i).children("form").children("fieldset").animate({"background-color": "#fff"}, 200);
        };

        $(".content_item").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".content_item").eq(i).css({"z-index": "2"});
                $(".content_item_img img").eq(i).stop(true, true).animate({"max-height": "100%", "max-width": "100%"}, 200);
                $(".content_item_img div").eq(i).stop(true, true).fadeIn(200);
                $(".content_item_img a").eq(i).stop(true, true).animate({"opacity": "1"}, 200);
                $(".content_item_datos").eq(i).stop(true, true).animate({"background-color": "#37B34A"}, 200);
                $(".content_item_datos h3").eq(i).stop(true, true).animate({"color": "#d9ffdd"}, 200);
                $(".content_item_datos p").eq(i).stop(true, true).animate({"color": "#FFF"}, 200);
                $(".content_item_datos p span").eq(i).stop(true, true).animate({"color": "#FFF"}, 200);
                $(".item_boton").eq(i).css({"background-image": "url(css/images/icon-carrito-amarillo.png)"}).stop(true, true).animate({"background-color": "#2a9e37", "color": "#f47920"}, 200);
                $(".item_check").eq(i).stop(true, true).animate({"background-color": "#2a9e37", "color": "#ffffff"}, 200);
                $(".content_item").eq(i).children("form").children("fieldset").animate({"background-color": "#30a840"}, 200);
                $(".comple").eq(i).stop(true, true).animate({"max-height": "80%", "max-width": "80%"}, 200);
            });
            $(this).mouseleave(function (e) {
                if (itemFormEstado != i) {
                    contentItemLeave(i);
                }
                ;
            });
        });
    }

    $(".content_item_img a").each(function (i) {
        $(this).mouseenter(function (e) {
            $(".content_item_img a p").eq(i).stop(true, false).animate({"color": "#f6901e"}, 200);
        });
        $(this).mouseleave(function (e) {
            $(".content_item_img a p").eq(i).stop(true, true).animate({"color": "#505050"}, 200);
        });
    });

    $(".item_boton").each(function (i) {
        $(this).mouseenter(function (e) {
            $(".item_boton").eq(i).css({"color": "#ffc81a"});
        });
        $(this).mouseleave(function (e) {
            if (itemFormEstado != i) {
                $(".item_boton").eq(i).css({"color": "#fff"});
            }
            ;
        });

        $(this).click(function (e) {
            if (itemFormEstado != i && $(".content_item_form fieldset").eq(i).children(".item_select").length > 0) {
                e.preventDefault();
                contentItemLeave(itemFormEstado);
                $(".content_item_form fieldset").eq(itemFormEstado).slideUp(200);
                $(".content_item_form fieldset").eq(i).slideDown(200);
                itemFormEstado = i;
                //aqui colocar url aÃ±adir carrito
                $('.content_item_carrito').eq(i).attr('href', 'mi-carrito-de-compras');
            };
        });
    });

    $(".item_check").each(function (i) {
        $(this).mouseenter(function (e) {
            $(".item_check").eq(i).css({"color": "#FFF"});
        });
        $(this).mouseleave(function (e) {
            if (itemFormEstado != i) {
                $(".item_check").eq(i).css({"color": "#d9ffdd"});
            }
            ;
        });
        $(this).click(function (e) {
            if($(".content_item_form fieldset").eq(i).children(".item_select").length > 0){
                if ($('.item_checkbox').eq(i).is(':checked') && itemFormEstado != i) {
                    //contentItemLeave(itemFormEstado);
                    $(".content_item_form fieldset").eq(itemFormEstado).slideUp(200);
                    $(".content_item_form fieldset").eq(i).slideDown(200);
                    $(".item_ocasion").eq(i).attr({"data-required":"true"});
                    itemFormEstado = i;
                }else{
                    $(".content_item_form fieldset").eq(i).slideUp(200);

                    itemFormEstado = -1;
                };
            }
        });
    });


    //content div aparicion

    $(".content_banner h2 span").css({"opacity": "1"}).animate({"opacity": "1", "top": "0"}, 400);

    //content acordion slide

    $(".content_acordion_tab").append('<p><span></span></p><div><img src="css/images/flecha-amarilla16.png" alt="Compra con confianza" title="Compra con confianza"></div>');
    $(".content_acordion_tab p span").each(function (i) {
        $(this).text(i + 1);
    });
    $(".content_acordion_tab p span").each(function (i) {
        if (i < 9) {
            $(this).before('<ins>0</ins>');
        }
        ;
    });

    var contentAcordionEstado;

    $(".content_acordion_tab").each(function (i) {
        $(this).mouseenter(function (e) {
            $(".content_acordion_tab").eq(i).stop(true, false).animate({"background-color": "#2a9e37"}, 200);
            $(".content_acordion_tab h3").eq(i).stop(true, false).animate({"color": "#FFF"}, 200);
        })
        $(this).mouseleave(function (e) {
            if (contentAcordionEstado != i) {
                $(".content_acordion_tab").eq(i).stop(true, true).animate({"background-color": "#FFF"}, 200);
                $(".content_acordion_tab h3").eq(i).stop(true, true).animate({"color": "#646464"}, 200);
            }
            ;
        });
        $(this).click(function (e) {
            if (contentAcordionEstado != i) {
                $(".content_acordion_tab").eq(contentAcordionEstado).animate({"background-color": "#FFF"}, 200);
                $(".content_acordion_tab h3").eq(contentAcordionEstado).animate({"color": "#646464"}, 200);
                $(".content_acordion_tab div img").eq(contentAcordionEstado).rotate({duration: 200, angle: -90, animateTo: 90});
                $(".content_acordion_panel").eq(contentAcordionEstado).slideUp(200);
                $(".content_acordion_tab").eq(i).animate({"background-color": "#2a9e37"}, 200);
                $(".content_acordion_tab h3").eq(i).animate({"color": "#FFF"}, 200);
                $(".content_acordion_tab div img").eq(i).rotate({duration: 200, angle: 90, animateTo: -90});
                $(".content_acordion_panel").eq(i).slideDown(200);
                contentAcordionEstado = i;
            } else {
                $(".content_acordion_tab").eq(i).animate({"background-color": "#FFF"}, 200);
                $(".content_acordion_tab h3").eq(i).animate({"color": "#646464"}, 200);
                $(".content_acordion_tab div img").eq(i).rotate({duration: 200, angle: -90, animateTo: 90});
                $(".content_acordion_panel").eq(i).slideUp(200);
                contentAcordionEstado = -1;
            }
            ;
        });
    });

    //banner nav aparicion

    //$("#banner_nav").slideDown(400);

    //carrito div aparicion

    //$("#carrito_titulo").css({"opacity": "1"}).animate({"opacity": "1", "top": "0"}, 400);
    //$("#carrito_tabla").css({"opacity": "1"}).delay(200).animate({"opacity": "1", "top": "0"}, 400);
    //$("#carrito_datos,#carrito_fechas").css({"opacity": "1"}).delay(400).animate({"opacity": "1", "left": "0"}, 400);



    //perfil nav eventos

    var perfilNavEstado;

    $("#perfil_nav div").each(function (i) {
        $(this).mouseenter(function (e) {
            $("#perfil_nav div p").eq(i).stop(true, true).animate({"background-color": "#FFF", "border-color": "#F5F5F5", "color": "#37B34A"}, 200);
        });
        $(this).mouseleave(function (e) {
            if (perfilNavEstado != i) {
                $("#perfil_nav div p").eq(i).stop(true, true).animate({"background-color": "#F0F0F0", "border-color": "#FFF", "color": "#787878"}, 200);
            }
            ;
        });
        $(this).click(function (e) {
            if (perfilNavEstado != i) {
                $("#perfil_nav div p").eq(perfilNavEstado).stop(true, true).animate({"background-color": "#F0F0F0", "border-color": "#FFF", "color": "#787878"}, 200);
                $("#perfil_nav div p").eq(i).stop(true, true).animate({"background-color": "#FFF", "border-color": "#F5F5F5", "color": "#37B34A"}, 200);
                $(".perfil1").eq(perfilNavEstado).slideUp(200);
                $(".perfil1").eq(i).slideDown(200);
                $("#perfil_direcciones_form fieldset").eq(1).slideUp(200);
                $("#perfil_direcciones_form fieldset").eq(0).slideDown(200);
                perfilNavEstado = i;
            }
            ;
        });
    });

    //perfil despacho numeracion

    $(".perfil_despacho p").each(function(i){
        $(this).append(i+1);
    });

    //resultado div aparicion

    // $("#resultado0,#resultado_filtro").delay(400).animate({"opacity": "1", "left": "0"}, 400);

    //resultado productos item

    if ($(".resultado_item0").length >= 2) {
        $("#resultado_titulo p").text($(".resultado_item0").length + " ENCONTRADOS");
    } else if ($(".resultado_item0").length == 1) {
        $("#resultado_titulo p").text($(".resultado_item0").length + " ENCONTRADO");
    } else if ($(".resultado_item0").length == 0) {
        $("#resultado_titulo p").text("NO SE ENCONTRADO RESULTADOS");
        $("#resultado_item>p").show();
    }
    ;

    //productos div aparicion

    //$("#productos0,#productos_filtro").css({"opacity": "1"}).delay(400).animate({"opacity": "1", "left": "0"}, 400);

    //productos productos item

    if ($(".productos_item0").length < 2) {
        $("#productos_orden p").text($(".productos_item0").length + " PRODUCTO");
    } else {
        $("#productos_orden p").text($(".productos_item0").length + " PRODUCTOS");
    }
    ;

    //detalle div aparicion

    //$("#detalle_foto,#detalle_descripcion").css({"opacity": "1"}).animate({"opacity": "1", "left": "0"}, 400);
    //$("#detalle_complemento h4").css({"opacity": "1"}).delay(200).animate({"opacity": "1", "top": "0"}, 400);

    //como comprar tab

    var comprarTabEstado;

    $(".comprar_tab").each(function (i) {
        $(this).mouseenter(function (e) {
            $(".comprar_tab p").eq(i).stop(true, false).animate({"color": "#37B34A"}, 200);
            $(".comprar_tab span").eq(i).stop(true, false).animate({"color": "#F6901E"}, 200);
        });
        $(this).mouseleave(function (e) {
            if (comprarTabEstado != i) {
                $(".comprarcomprar_tab p").eq(i).stop(true, true).animate({"color": "#787878"}, 200);
                $(".comprar_tab span").eq(i).stop(true, true).animate({"color": "#787878"}, 200);
            }
            ;
        });
        $(this).click(function (e) {
            if (comprarTabEstado != i) {
                $(".comprar_tab p").eq(comprarTabEstado).animate({"color": "#787878"}, 400);
                $(".comprar_tab span").eq(comprarTabEstado).animate({"color": "#787878"}, 400);
                $(".comprar_video").eq(comprarTabEstado).fadeOut(400);
                $(".comprar_tab p").eq(i).animate({"color": "#37B34A"}, 400);
                $(".comprar_tab span").eq(i).animate({"color": "#F6901E"}, 400);
                $(".comprar_video").eq(i).fadeIn(400);
                comprarTabEstado = i;
            }
            ;
        });
    });

    //formas de pago cuentas

    var formasCuentasEstado=0;
    $(".formas_boton").click(function(e){
        if(formasCuentasEstado==0){
            $(".formas_cuentas").fadeIn(200);
            formasCuentasEstado=1;
        }else{
            $(".formas_cuentas").fadeOut(200);
            formasCuentasEstado=0;
        };
    });

    //contacto email background



    //popup recordar opacity

    $(".olvidar_regalar ins").css({"opacity": "0.85"});

    //mouse eventos

    $(window).load(function (e) {

        //user carrito hover

        $("#user_carrito").mouseenter(function (e) {
            $("#user_carrito").stop(true, false).animate({"background-color": "#FFC400"}, 200);
            $("#user_carrito span").stop(true, false).animate({"background-color": "#F6901E"}, 200);
        });
        $("#user_carrito").mouseleave(function (e) {
            $("#user_carrito").stop(true, false).animate({"background-color": "#F6901E"}, 200);
            $("#user_carrito span").stop(true, false).animate({"background-color": "#FFC400"}, 200);
        });

        //user link inicio

        $("#user_inicio p").mouseenter(function (e) {
            $(this).css({"background-image": "none"}).stop(true, false).animate({"background-color": "#FFF", "color": "#F6901E"}, 200);
        });
        $("#user_inicio p").mouseleave(function (e) {
            $(this).css({"background-image": "url(public/image/bg-link.png)"}).stop(true, true).animate({"background-color": "#37B34A", "color": "#DCFFE0"}, 200);
        });

        //$("#user_inicio_activo").attr({"href": "javascript;;"});
        $("#user_inicio_activo").click(function (e) {
            //e.preventDefault(e);
        });

        //header buscador hover

        $("#buscar_lupa").mouseenter(function (e) {
            $(this).stop(true, false).animate({"background-color": "#eee"}, 200);
        });
        $("#buscar_lupa").mouseleave(function (e) {
            $(this).stop(true, true).animate({"background-color": "#FD0"}, 200);
        });

        //header nav hover
        $("#header_nav>li ul").eq(-7).css({"left":"0"});
        $("#header_nav>li ul").eq(-6).css({"left":"110px"});
        $("#header_nav>li ul").eq(-5).css({"left":"210px"});
        $("#header_nav>li ul").eq(-4).css({"left":"290px"});
        $("#header_nav>li ul").eq(-3).css({"left":"430px"});
        $("#header_nav>li ul").eq(-2).css({"left":"505px"});
        $("#header_nav>li ul").eq(-1).css({"left":"auto","right":"0"});
        $("#header_nav>li ul").each(function(i){
            $(this).css({"width":Math.ceil($("#header_nav>li ul").eq(i).children("li").length / 4) * 165 + 15 + "px"});
            if($("#header_nav>li ul").eq(i).children("li").length < 4){
                $("#header_nav>li ul").eq(i).css({"height":$("#header_nav>li ul").eq(i).children("li").length*50+"px"});
            };
            $("#header_nav>li ul").eq(i).children("li").each(function(ii){
                $(this).css({"left":Math.floor(ii/4)*165+"px","top":(ii-Math.floor(ii/4)*4)*50+"px"});
            });
        });

        $("#header_nav>li").each(function (i) {
            $("#header_nav>li").eq(i).mouseenter(function (e) {
                $("#header_nav>li").eq(i).stop(true, false).animate({"border-color": "#42B549"}, 200);
                $("#header_nav>li>a").eq(i).stop(true, false).animate({"color": "#F6901E"}, 200);
                $("#header_nav>li ul").eq(i).stop(true, true).css({"opacity":"1"}).slideDown(200);
                $(".zoomContainer").hide();
            });
            $("#header_nav>li").eq(i).mouseleave(function (e) {
                $("#header_nav>li").eq(i).stop(true, false).animate({"border-color": "#FFF"}, 200);
                $("#header_nav>li>a").eq(i).stop(true, false).animate({"color": "#646464"}, 200);
                $("#header_nav>li ul").eq(i).stop(true, true).css({"opacity":"0"}).slideUp(200);
                $(".zoomContainer").show();
            });
        });

        $("#header_nav>li ul li").each(function (i) {
            $(this).mouseenter(function (e) {
                $("#header_nav>li ul li a").eq(i).stop(true, false).animate({"color": "#F47920"}, 200);
            });
            $(this).mouseleave(function (e) {
                $("#header_nav>li ul li a").eq(i).stop(true, true).animate({"color": "#42B549"}, 200);
            });
        });

        //footer boton subir

        $("#footer_subir").mouseenter(function (e) {
            $(this).animate({"padding-top": "40px"}, 100).animate({"padding-top": "30px"}, 100);
        });
        $("#footer_subir").click(function (e) {
            $("html,body").animate({scrollTop: 0}, 400);
        });
        if($("#main").height()>1500){
            $("#footer_subir").show();
        };

        //footer fechas hover

        $("#footer_fechas a").mouseenter(function (e) {
            $("#footer_fechas a").stop(true, false).animate({"background-color": "#F47920"}, 200);
            $("#footer_fechas a p").stop(true, false).animate({"color": "#FFF"}, 200);
            $("#footer_fechas a em").stop(true, false).animate({"color": "#FFF"}, 200);
        });
        $("#footer_fechas a").mouseleave(function (e) {
            $("#footer_fechas a").stop(true, true).animate({"background-color": "#FFF"}, 200);
            $("#footer_fechas a p").stop(true, true).animate({"color": "#F47920"}, 200);
            $("#footer_fechas a em").stop(true, false).animate({"color": "#F47920"}, 200);
        });

        //footer recibe hover

        $("#recibe_suscribirme").mouseenter(function (e) {
            $(this).stop(true, false).animate({"background-color": "#FFF", "color": "#37B34A"}, 200);
        });
        $("#recibe_suscribirme").mouseleave(function (e) {
            $(this).stop(true, false).animate({"background-color": "#37B34A", "color": "#FFF"}, 200);
        });

        //footer redes hover

        $("#footer_redes a").each(function (i) {
            $(this).mouseenter(function (e) {
                $("#footer_redes a img").eq(i).stop(true, false).animate({"width": "90%"}, 200);
            });
            $(this).mouseleave(function (e) {
                $("#footer_redes a img").eq(i).stop(true, true).animate({"width": "70%"}, 200);
            });
        });

        //nav link hover

        $("#nav a").each(function (i) {
            $(this).mouseenter(function (e) {
                $("#nav a").eq(i).stop(true, false).animate({"color": "#FD0"});
            });
            $(this).mouseleave(function (e) {
                $("#nav a").eq(i).stop(true, true).animate({"color": "#DCFFE0"});
            });
        });

        //nav link activo

        $(".nav_activo").attr({"href": "javascript;;"});
        $(".nav_activo").click(function (e) {
            e.preventDefault(e);
        });



        //banner nav hover

        $("#banner_nav li").each(function (i) {
            $(this).mouseenter(function (e) {
                $("#banner_nav li a").eq(i).stop(true, false).animate({"color": "#F6901E"}, 200);
            });
            $(this).mouseleave(function (e) {
                $("#banner_nav li a").eq(i).stop(true, true).animate({"color": "#787878"}, 200);
            });
        });

        //carrito seguir comprando

        $("#carrito_titulo a").mouseenter(function (e) {
            $(this).stop(true, false).animate({"color": "#FD0"}, 200);
        });
        $("#carrito_titulo a").mouseleave(function (e) {
            $(this).stop(true, true).animate({"color": "#969696"}, 200);
        });

        //carrito recordar hover

        $(".recordar_boton").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".recordar_boton").eq(i).stop(true, false).animate({"background-color": "#F6901E", "color": "#FFF"}, 200);
            });
            $(this).mouseleave(function (e) {
                $(".recordar_boton").eq(i).stop(true, true).animate({"background-color": "#FFF", "color": "#F6901E"}, 200);
            });
        });

        //carrito eliminar hover

        $(".eliminar_boton").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".eliminar_boton").eq(i).stop(true, false).animate({"background-color": "#c83732", "color": "#FFF"}, 200);
            });
            $(this).mouseleave(function (e) {
                $(".eliminar_boton").eq(i).stop(true, true).animate({"background-color": "#FFF", "color": "#c83732"}, 200);
            });
        });

        $(".eliminar_botoncomplemento").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".eliminar_botoncomplemento").eq(i).stop(true, false).animate({"background-color": "#c83732", "color": "#FFF"}, 200);
            });
            $(this).mouseleave(function (e) {
                $(".eliminar_botoncomplemento").eq(i).stop(true, true).animate({"background-color": "#FFF", "color": "#c83732"}, 200);
            });
        });

        //carrito submit hover

        $("#datos_pagar").mouseenter(function (e) {
            $(this).stop(true, false).animate({"background-color": "#eee", "color": "#37B34A"}, 200);
        });
        $("#datos_pagar").mouseleave(function (e) {
            $(this).stop(true, true).animate({"background-color": "#37B34A", "color": "#eee"}, 200);
        });

        //carrito fechas hover

        $("#carrito_fechas a").mouseenter(function (e) {
            $("#carrito_fechas a").stop(true, false).animate({"background-color": "#F47920"}, 200);
            $("#carrito_fechas a p").stop(true, false).animate({"color": "#FFF"}, 200);
        });
        $("#carrito_fechas a").mouseleave(function (e) {
            $("#carrito_fechas a").stop(true, true).animate({"background-color": "#FFF"}, 200);
            $("#carrito_fechas a p").stop(true, true).animate({"color": "#F47920"}, 200);
        });

        //carrito horario popup

        $("#carrito_popup0").mouseenter(function(e){
            $("#carrito_popup0>div").stop(true,true).fadeIn(400);
        });
        $("#carrito_popup0").mouseleave(function(e){
            $("#carrito_popup0>div").stop(true,true).fadeOut(400);
        });

        //olvidar horario popup

        $("#olvidar_popup").mouseenter(function(e){
            $("#olvidar_popup span").stop(true,true).fadeIn(400);
        });
        $("#olvidar_popup").mouseleave(function(e){
            $("#olvidar_popup span").stop(true,true).fadeOut(400);
        });

        //olvidado boton hover

        $("#olvidado_enviar").mouseenter(function (e) {
            $(this).stop(true, true).animate({"background-color": "#EEE", "color": "#37B34A"}, 200);
        });
        $("#olvidado_enviar").mouseleave(function (e) {
            $(this).stop(true, true).animate({"background-color": "#37B34A", "color": "#FFF"}, 200);
        });

        //perfil enviar hover

        $(".perfil_boton").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".perfil_boton").eq(i).stop(true, true).animate({"background-color": "#EEE", "color": "#37B34A"}, 200);
            });
            $(this).mouseleave(function (e) {
                $(".perfil_boton").eq(i).stop(true, true).animate({"background-color": "#37B34A", "color": "#FFF"}, 200);
            });
        });

        //perfil datos contrasena

        $(".perfil1 ins").eq(0).click(function (e) {
            $(".perfil1 form").eq(1).slideToggle(200);
        });
        $(".perfil1 ins").eq(1).click(function (e) {
            $(".perfil1 form").eq(2).slideToggle(200);
        });

        //perfil direcciones slide

        $("#perfil_direcciones_anadir").click(function (e) {
            $("#perfil_direcciones_form fieldset").eq(0).slideUp();
            $("#perfil_direcciones_form fieldset").eq(1).slideDown();
        });

        //perfil editar hover

        $(".perfil_editar").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".perfil_editar").eq(i).stop(true, true).animate({"background-color": "#FD0"}, 200);
            });
            $(this).mouseleave(function (e) {
                $(".perfil_editar").eq(i).stop(true, true).animate({"background-color": "#FFF"}, 200);
            });
        });

        //resultado filtro check

        //resultado filtro categoria check

        $('input[name="filtrocategoria[]"]').click(function (e) {
            var selectedCategoria = new Array();
            var n = $('input[name="filtrocategoria[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtrocategoria[]"]:checked').each(function () {
                    selectedCategoria.push($(this).val());
                });
            }

            var selectedSubcategoria = new Array();
            var n = $('input[name="filtrosubcategoria[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtrosubcategoria[]"]:checked').each(function () {
                    selectedSubcategoria.push($(this).val());
                });
            }

            var selectedPrecio = new Array();
            var n = $('input[name="filtroprecio[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtroprecio[]"]:checked').each(function () {
                    selectedPrecio.push($(this).val());
                });
            }

            $.post('datos',
                {'filtrocategoria': selectedCategoria, 'filtrosubcategoria': selectedSubcategoria, 'filtroprecio': selectedPrecio},
                function (data) {
                    window.location = "filtro";
                });
        });

        //resultado filtro subcategoria check
        $('input[name="filtrosubcategoria[]"]').click(function (e) {
            var selectedCategoria = new Array();
            var n = $('input[name="filtrocategoria[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtrocategoria[]"]:checked').each(function () {
                    selectedCategoria.push($(this).val());
                });
            }

            var selectedSubcategoria = new Array();
            var n = $('input[name="filtrosubcategoria[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtrosubcategoria[]"]:checked').each(function () {
                    selectedSubcategoria.push($(this).val());
                });
            }

            var selectedPrecio = new Array();
            var n = $('input[name="filtroprecio[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtroprecio[]"]:checked').each(function () {
                    selectedPrecio.push($(this).val());
                });
            }

            $.post('datos',
                {'filtrocategoria': selectedCategoria, 'filtrosubcategoria': selectedSubcategoria, 'filtroprecio': selectedPrecio},
                function (data) {
                    window.location = "filtro";
                });

        });
        //resultado filtro precio check
        $('input[name="filtroprecio[]"]').click(function (e) {
            var selectedCategoria = new Array();
            var n = $('input[name="filtrocategoria[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtrocategoria[]"]:checked').each(function () {
                    selectedCategoria.push($(this).val());
                });
            }

            var selectedSubcategoria = new Array();
            var n = $('input[name="filtrosubcategoria[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtrosubcategoria[]"]:checked').each(function () {
                    selectedSubcategoria.push($(this).val());
                });
            }

            var selectedPrecio = new Array();
            var n = $('input[name="filtroprecio[]"]:checked').length;
            if (n > 0) {
                $('input[name="filtroprecio[]"]:checked').each(function () {
                    selectedPrecio.push($(this).val());
                });
            }

            $.post('datos',
                {'filtrocategoria': selectedCategoria, 'filtrosubcategoria': selectedSubcategoria, 'filtroprecio': selectedPrecio},
                function (data) {
                    window.location = "filtro";
                });
        });

        //productos filtro check

        $(".productos_filtro_categoria input").css({"opacity":"0"});

        $(".productos_filtro_categoria input").each(function (i) {
            $(this).click(function (e) {
                $(".productos_filtro_subcategoria").eq(i).children("span").children("input").prop("checked", true);
            });
        });
        $(".productos_filtro_subcategoria").each(function (i) {
            $(this).click(function (e) {
                $(".productos_filtro_categoria input").eq(i).prop("checked", false);
            });
        });

        //detalle redes hover

        $("#detalle_foto_redes a").each(function (i) {
            $(this).mouseenter(function (e) {
                $("#detalle_foto_redes a img").eq(i).stop(true, false).animate({"height": "40px", "width": "40px"}, 200);
            });
            $(this).mouseleave(function (e) {
                $("#detalle_foto_redes a img").eq(i).stop(true, true).animate({"height": "30px", "width": "30px"}, 200);
            });
        });

        //detalle recordar hover

        $("#detalle_descripcion_fecha").mouseenter(function (e) {
            $("#detalle_descripcion_fecha").stop(true, false).animate({"background-color": "#F47920"}, 200);
            $("#detalle_descripcion_fecha p").stop(true, false).animate({"color": "#FFF"}, 200);
        });
        $("#detalle_descripcion_fecha").mouseleave(function (e) {
            $("#detalle_descripcion_fecha").stop(true, true).animate({"background-color": "#FFF"}, 200);
            $("#detalle_descripcion_fecha p").stop(true, true).animate({"color": "#F47920"}, 200);
        });

        //detalle carrito hover

        $("#detalle_descripcion_carrito").mouseenter(function (e) {
            $("#detalle_descripcion_carrito").stop(true, false).animate({"background-color": "#FFF", "color": "#37B34A"}, 200);
        });
        $("#detalle_descripcion_carrito").mouseleave(function (e) {
            $("#detalle_descripcion_carrito").stop(true, true).animate({"background-color": "#37B34A", "color": "#FFF"}, 200);
        });

        //popup boton hover

        $(".popup_boton").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".popup_boton").eq(i).stop(true, false).animate({"background-color": "#EEE", "color": "#37B34A"}, 200);
            });
            $(this).mouseleave(function (e) {
                $(".popup_boton").eq(i).stop(true, true).animate({"background-color": "#37B34A", "color": "#FFF"}, 200);
            });
        });

        //popup cliente nuevo

        $("#nuevo_boton").click(function (e) {
            $("#datos,#fechas").animate({"height": "520px"}, 200);
            $(".popup ul li div").css({"opacity": "0.9"}).fadeIn(200);
            $("#datos_nuevo_form fieldset").eq(0).slideUp(200);
            $("#fechas_nuevo_form fieldset").eq(0).slideUp(200);
            $("#datos_nuevo_form fieldset").eq(1).slideDown(200);
            $("#fechas_nuevo_form fieldset").eq(1).slideDown(200);
        });

        $(".popup ul li div").click(function (e) {
            $("#datos,#fechas").animate({"height": "300px"}, 200);
            $(".popup ul li div").fadeOut(200);
            $("#datos_nuevo_form fieldset").eq(1).slideUp(200);
            $("#fechas_nuevo_form fieldset").eq(1).slideUp(200);
            $("#datos_nuevo_form fieldset").eq(0).slideDown(200);
            $("#fechas_nuevo_form fieldset").eq(0).slideDown(200);
        });

        //popup recomendaciones eventos

        $(".olvidar_regalar").each(function (i) {
            $(this).mouseenter(function (e) {
                $(".olvidar_regalar ins").eq(i).stop(true, true).fadeIn(200);
                $(".olvidar_regalar strong").eq(i).stop(true, true).fadeIn(200);
                $(".olvidar_regalar input").eq(i).stop(true, true).fadeIn(200);
                $(".olvidar_regalar span").eq(i).stop(true, true).fadeIn(200);
            });
            $(this).mouseleave(function (e) {
                if (!$(".olvidar_regalar input").eq(i).attr("checked")) {
                    $(".olvidar_regalar ins").eq(i).stop(true, true).fadeOut(200);
                    $(".olvidar_regalar strong").eq(i).stop(true, true).fadeOut(200);
                    $(".olvidar_regalar input").eq(i).stop(true, true).fadeOut(200);
                    $(".olvidar_regalar span").eq(i).stop(true, true).fadeOut(200);
                }
                ;
            });
        });

        //nosotros agregar hover

        $("#nosotros_agregar").mouseenter(function (e) {
            $("#nosotros_agregar span").stop(true, false).animate({"color": "#FD0"}, 200);
            $("#nosotros_agregar div").stop(true, false).animate({"background-color": "#F6901E"}, 200);
        });
        $("#nosotros_agregar").mouseleave(function (e) {
            $("#nosotros_agregar span").stop(true, true).animate({"color": "#FFF"}, 200);
            $("#nosotros_agregar div").stop(true, true).animate({"background-color": "#FD0"}, 200);
        });

        //nosotros terminar hover

        $("#nosotros_terminar").mouseenter(function (e) {
            $("#nosotros_terminar").stop(true, false).animate({"background-color": "#FFF", "color": "#F6901E"}, 200);
        });
        $("#nosotros_terminar").mouseleave(function (e) {
            $("#nosotros_terminar").stop(true, true).animate({"background-color": "#F6901E", "color": "#FFF"}, 200);
        });

        //pedido boton

        $("#pedido_confirmar").mouseenter(function(e){
            $(this).stop(true,true).animate({"background-color":"#FFF","color":"#37B34A"},200);
        });
        $("#pedido_confirmar").mouseleave(function(e){
            $(this).stop(true,true).animate({"background-color":"#37B34A","color":"#FFF"},200);
        });

        //productos filtro activo

        $(".productos_filtro_categoria>label").each(function(i){
            if($(".productos_filtro_categoria>input").eq(i).attr("checked")=="checked"){
                $(".productos_filtro_categoria>label").eq(i).css({"color":"#F6901E"});
            };
        });

    });

    //fancybox datos cliente

    $(".popup_datos").fancybox({
        padding: 0,
        margin: 0,
        scrolling: 'auto',
        width: 980,
        height: 520,
        centerOnScroll: false,
        modal: true,
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.5,
        overlayColor: '#000',
        titleShow: false,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 400,
        speedOut: 200,
        showCloseButton: true,
        showNavArrows: false,
        enableEscapeButton: true,
        type: 'iframe',
        onComplete: function () {
            $('body').css({"overflow": "hidden"});
            $('#fancybox-close').css({"display":"block"});
            setTimeout(function(){
                $("html, body").animate({scrollTop:0});

            }, 800);
        },
        onClosed: function () {
            $('body').css({"overflow": ""});
        }
    });

    /*Detalle pedido*/
    $(".popup_detalle_pedido").fancybox({
        padding: 0,
        margin: 0,
        scrolling: 'auto',
        width: 750,
        height: 557,
        modal: true,
        centerOnScroll: false,
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.5,
        overlayColor: '#000',
        titleShow: false,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 400,
        speedOut: 200,
        showCloseButton: true,
        showNavArrows: false,
        enableEscapeButton: true,
        type: 'iframe',
        onComplete: function () {
            $('body').css({"overflow": "hidden"});
            $('#fancybox-close').css({"display":"block"});
            setTimeout(function(){
                $("html, body").animate({scrollTop:0});

            }, 800);
        },
        onClosed: function () {
            $('body').css({"overflow": ""});
        }
    });

    //fancybox recordar fecha
    $(".popup_fechas").fancybox({
        type: 'ajax',
        padding: 0,
        autoWidth: true,
        autoHeight: true,
        topRatio: .25
    });

    $(".popup_recordar").fancybox({
        type: 'ajax',
        padding: 0,
        autoWidth: true,
        autoHeight: true,
        topRatio: .25
    });

    $(".popup_correo").fancybox({
        padding: 0,
        margin: 0,
        scrolling: 'auto',
        width: 430,
        modal: true,
        height: 240,
        centerOnScroll: false,
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.5,
        overlayColor: '#000',
        titleShow: false,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 400,
        speedOut: 200,
        showCloseButton: true,
        showNavArrows: false,
        enableEscapeButton: true,
        type: 'iframe',
        modal:true,
        onComplete: function () {
            $('body').css({"overflow": "hidden"});
            $('#fancybox-close').css({"display":"block"});
            setTimeout(function(){
                $("html, body").animate({scrollTop:0});

            }, 800);
        },
        onClosed: function () {
            $('body').css({"overflow": ""});
        }
    });

    $(".popup_direc_actualizar").fancybox({
        padding: 0,
        margin: 0,
        scrolling: 'auto',
        width: 490,
        height: 480,
        centerOnScroll: false,
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.5,
        overlayColor: '#000',
        titleShow: false,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        speedIn: 400,
        speedOut: 200,
        showCloseButton: true,
        showNavArrows: false,
        enableEscapeButton: true,
        type: 'iframe',
        modal:true,
        onComplete: function () {
            $('body').css({"overflow": "hidden"});
            $('#fancybox-close').css({"display":"block"});
            setTimeout(function(){
                $("html, body").animate({scrollTop:0});

            }, 800);
        },
        onClosed: function () {
            $('body').css({"overflow": ""});
        }
    });

    $(".popup_complemento").fancybox({
        padding: 0,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        overlayOpacity: 0.5,
        type: 'iframe',
        iframe: {
            scrolling : 'auto',
            preload   : true
        },
        beforeShow: function(){
            console.log($('html'));
            $('html').addClass('fancybox-margin fancybox-lock').css('position', 'fixed');
        },
        beforeClose: function(){
            console.log($('html'));
            $('html').removeClass('fancybox-margin fancybox-lock').css('position', 'inherit');
        }
    });

    $('#popolvido').click(function(){
        parent.window.location= $('#popolvido').attr('href');
    });

    $('#buscar_lupa').click(function (e) {
        e.preventDefault();
        if ($('#buscar_buscar').val() != '') {
            window.location = 'busqueda-' + $('#buscar_buscar').val();
        }
    });

    $("#buscar_buscar").keypress(function (e) {
        if (event.which == 13) {
            e.preventDefault();
            if ($('#buscar_buscar').val() != '') {
                window.location = 'busqueda-' + $('#buscar_buscar').val();
            }
        }
    });


    if (window.location.pathname == 'iniciar') {
        $("#user_sesion p").trigger("click");
    }


    $("#orden_seleccione").change(function () {
        $.post('datos', {'orden': $("#orden_seleccione").val()},
            function (data) {
                window.location = $(location).attr('href');
            });
    });

    $('input[id^="filtro_categoria"]').click(function () {
        $('input[id^="filtro_categoria"]:checked').each(function () {
            window.location = $(this).val();
        });
    });

    $('.item_color').each(function (i) {
        $('.item_color').eq(i).change(function () {
            if ($('.item_color').eq(i).val() != '') {
                $('.item_color').eq(i).css({'color': $('.item_color option:selected').eq(i).attr('style')});
            } else {
                $('.item_color').eq(i).css({'color': ''});
            }
        });
    });

    $('#descripcion_color').each(function (i) {
        $('#descripcion_color').eq(i).change(function () {
            if ($('#descripcion_color').eq(i).val() != '') {
                $('#descripcion_color').eq(i).css({'color': $('#descripcion_color option:selected').eq(i).attr('style')});
            } else {
                $('#descripcion_color').eq(i).css({'color': ''});
            }
        });
    });

    $('.content_item_form').each(function (i) {
        $('.content_item_form').eq(i).submit(function (e) {
            e.preventDefault();
            if ($(this).parsley('isValid')) {
                var form = $(this);

                $.fancybox('public/image/popup-espera.jpg', {
                    type: 'image',
                    padding: 0,
                    modal: true,
                    beforeShow: function(){
                        $.post('listacarrito', form.serialize(), function (data) {
                            if (data == 1) {
                                window.location = 'mi-carrito-de-compras';
                                return;
                            }
                        });
                    }
                });
            }
        });
    });

    $('.cantidad_select').each(function (i) {
        $('.cantidad_select').eq(i).change(function (e) {
            e.preventDefault();

            $.post('cantidad', {'cantidad': $(this).val(), 'producto': $('.carritoproducto').eq(i).val()}, function (data) {
                if (data == 1) {
                    window.location = 'mi-carrito-de-compras';
                    return;
                }
            });
        });
    });



    $('.datos_informacion_dni_2').keyup(function () {

        if (($('.datos_informacion_dni').val().length == 8 || $('.datos_informacion_dni').val().length == 6) && $('input[name="datos_informacion"]:checked').val() == 'boleta') {
            if(($('.datos_informacion_dni').attr("value").match(/^\d{8}$/) || $('.datos_informacion_dni').attr("value").match(/^\d{6}$/))) {
                $('input[name="datos_informacion_dni"]').removeClass("parsley-error");
                $('input[name="datos_informacion_dni"]').addClass("parsley-success");
                return;
            }
        }

        if ($('.datos_informacion_dni').val().length == 11 && $('input[name="datos_informacion"]:checked').val() == 'factura') {
            if($('.datos_informacion_dni').attr("value").match(/^\d{11}$/)) {
                $('input[name="datos_informacion_dni"]').removeClass("parsley-error");
                $('input[name="datos_informacion_dni"]').addClass("parsley-success");
                return;
            }
        }

        $('input[name="datos_informacion_dni"]').removeClass("parsley-success");
        $('input[name="datos_informacion_dni"]').addClass("parsley-error");
        return ;

    });

    $('.datos_informacion_dni_2').change(function () {

        if (($('.datos_informacion_dni').val().length == 8 || $('.datos_informacion_dni').val().length == 6) && $('input[name="datos_informacion"]:checked').val() == 'boleta') {
            if(($('.datos_informacion_dni').attr("value").match(/^\d{8}$/) || $('.datos_informacion_dni').attr("value").match(/^\d{6}$/))) {
                $('input[name="datos_informacion_dni"]').removeClass("parsley-error");
                $('input[name="datos_informacion_dni"]').addClass("parsley-success");
                return;
            }
        }

        if ($('.datos_informacion_dni').val().length == 11 && $('input[name="datos_informacion"]:checked').val() == 'factura') {
            if($('.datos_informacion_dni').attr("value").match(/^\d{11}$/)) {
                $('input[name="datos_informacion_dni"]').removeClass("parsley-error");
                $('input[name="datos_informacion_dni"]').addClass("parsley-success");
                return;
            }
        }

        $('input[name="datos_informacion_dni"]').removeClass("parsley-success");
        $('input[name="datos_informacion_dni"]').addClass("parsley-error");
        return false;

    });

    $('input[name="datos_informacion"]').click(function (e) {
        if ($('input[name="datos_informacion"]:checked').val() == 'boleta') {
            $('input[name="datos_informacion_direccion"]').attr("placeholder", "DIRECCIÃ“N:").placeholder();
            $('input[name="datos_informacion_nombre"]').attr("placeholder", "* NOMBRE Y APELLIDO:").placeholder();
            $('input[name="datos_informacion_dni"]').attr("placeholder", "* DNI:").placeholder();
            $('input[name="datos_informacion_dni"]').val("");
            $('input[name="datos_informacion_nombre"]').val("");
            $('input[name="datos_informacion_dni"]').removeClass("parsley-success");
            $('input[name="datos_informacion_dni"]').removeClass("parsley-error");
        }
        if ($('input[name="datos_informacion"]:checked').val() == 'factura') {
            $('input[name="datos_informacion_direccion"]').attr("placeholder", "* DIRECCIÃ“N:").placeholder();
            $('input[name="datos_informacion_nombre"]').attr("placeholder", "* RAZON SOCIAL:").placeholder();
            $('input[name="datos_informacion_dni"]').attr("placeholder", "* RUC:").placeholder();
            $('input[name="datos_informacion_dni"]').val("");
            $('input[name="datos_informacion_nombre"]').val("");
            $('input[name="datos_informacion_dni"]').removeClass("parsley-success");
            $('input[name="datos_informacion_dni"]').removeClass("parsley-error");
        }
    });

    $('input[name="datos_solnombre"]').keyup(function(){
        if($('input[name="datos_informacion"]:checked').val()=='boleta'){
            $('input[name="datos_informacion_nombre"]').val($('input[name="datos_solnombre"]').val());
        }
    });

    $('#detalle_descripcion_form').each(function (i) {
        $('#detalle_descripcion_form').eq(i).submit(function (e) {
            e.preventDefault();
            var count=0;
            var complementos = [];
            $("input:checkbox").each(function(c){
                if ($('.item_checkbox').eq(c).is(':checked')) {
                    if($(".content_item_form fieldset").eq(c).children(".item_select").length > 0){
                        if($(".content_item_form fieldset").eq(c).children(".item_select").val()==''){
                            count = count + 1;
                        }else{
                            complementos.push({
                                complemento:$('.ocasiones').eq(c).val(),
                                ocasiones:$(".content_item_form fieldset").eq(c).children(".item_select").val(),
                                producto:$('.idproducto').val()
                            });
                        }
                    }else{
                        complementos.push({
                            complemento:$('.ocasiones').eq(c).val(),
                            ocasiones:"",
                            producto:$('.idproducto').val()
                        });
                    }
                }
            });
            if(count > 0){
                $("html, body").animate({scrollTop:$("#user").height()+$("#header").height()+$("#detalle0").height()+$('#glob').position().top},400);
                $('.msgglobo').html("Debe llenar los campos del complemento seleccionado");
                return false;
            }
            if ($(this).parsley('isValid')) {
                $.post('listacarrito', $(this).serialize()+'&'+$.param({'complementos': complementos}), function (data) {
                    if (data == 1) {
                        window.location = 'mi-carrito-de-compras';
                        return;
                    }
                });
            }
        });
    });

    $('#olvidado_form').submit(function(e){
        e.preventDefault();
        $('.msgclave').html('');
        if ($(this).parsley('isValid')) {
            $.post('enviarrecuperar',$('#olvidado_form').serialize(), function(data){
                if (data == 1) {
                    $.fancybox('public/image/img-recupera.jpg', {
                        type: 'image',
                        padding: 0,
                        beforeClose: function () {
                            window.location = 'inicio';
                        }
                    });
                } else {
                    $('.msgclave').html(data);
                }
            });
        }
    });

    $('#contacto_form').submit(function(e){
        e.preventDefault();
        if ($(this).parsley('isValid')) {
            $.post('enviocontacto',$('#contacto_form').serialize(), function(data){
                if (data == 1) {
                    $.fancybox('public/image/img-gracias.jpg', {
                        type: 'image',
                        padding: 0,
                        beforeClose: function () {
                            document.getElementById('contacto_form').reset();
                        }
                    });
                }
            });
        }
    });

    $('.eliminar_boton').each(function (i) {
        $('.eliminar_boton').eq(i).click(function (e) {
            e.preventDefault();
            $.post('datos',$('#carrito_datos_form').serialize());
            $.post($(this).attr('href'), ($('#carrito_datos_form').serialize()+'&'+$.param({'producto': $('.carritoproducto').eq(i).val()})), function (data) {
                if (data == 1) {
                    window.location = 'mi-carrito-de-compras';
                    return;
                }
            });
        });
    });

    $('.eliminar_botoncomplemento').each(function (i) {
        $('.eliminar_botoncomplemento').eq(i).click(function (e) {
            e.preventDefault();
            var complementos = [];
            $(".carritoproductocomplemento").each(function(c){
                complementos.push({
                    complemento:$('.carritocomplemento').eq(c).val(),
                    productocomplemento:$('.carritoproductocomplemento').eq(c).val(),
                    ocasiones:$(".carritoproductoocasion").eq(c).val()
                });
            });
            $.post('datos',$('#carrito_datos_form').serialize());
            $.post($(this).attr('href'), ($('#carrito_datos_form').serialize()+'&'+$.param({'producto': $('.carritocomplemento').eq(i).val()})), function (data) {
                if (data == 1) {
                    window.location = 'mi-carrito-de-compras';
                    return;
                }
            });
        });
    });
    if($('#datos_entrega_distrito').val()==""){
        $('#tarifadelivery').val('0.00');
    }
    $('#tarifa').html('Costo por delivery es: $ 0.00' );
    $('.deliverycosto').html(parseFloat($('#tarifadelivery').val()).toFixed(2));

    var total =parseFloat($('#totcar').val());
    $('#carrito_tabla_total').html("$ " + (parseFloat(parseFloat($('#tarifadelivery').val()) + parseFloat(total)).toFixed(2)));

    $('#datos_entrega_distrito').change(function () {
        $.post('tarifa', ($('#carrito_datos_form').serialize()+'&'+$.param({distrito: $('#datos_entrega_distrito').val()})), function (data) {
            $('#tarifa').html('Costo por delivery es: $ ' + data);
            $('.deliverycosto').eq(0).html(parseFloat(data).toFixed(2));
            $('#tarifadelivery').val(data);
            total =parseFloat($('#totcar').val());
            $('#carrito_tabla_total').html("$ " + (parseFloat(parseFloat(data) + parseFloat(total)).toFixed(2)));

        });
    });

    var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];

    var now = new Date();
    var fecha = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate();
    $('.datosfecha').val(now.getFullYear() + '-' + (now.getMonth()) + '-' + now.getDate());
    $('.day').val(now.getDate());
    $('.month').val(now.getMonth());
    $('.year').val(now.getFullYear());
    if($('.year').val()=='' || $('.month').val()=='' || $('.day').val()==''){
        $('#datos_hora099').attr("disabled", "disabled");
        $('#datos_hora144').attr("disabled", "disabled");
        $('#datos_hora188').attr("disabled", "disabled");
        $('#datos_hora099').removeAttr("checked");
        $('#datos_hora144').removeAttr("checked");
        $('#datos_hora188').removeAttr("checked");
        return;
    }
    var hora = parseInt(now.getHours());
    var minuto = parseInt(now.getMinutes());
    var fechaform = $('.year').val() + '/' + (parseInt($('.month').val()) +1)+ '/' + $('.day').val();
    var ultimodia = new Date(now.getFullYear() , parseInt($('.month').val()), 0);
    var semana = new Date($('.year').val() , parseInt($('.month').val()), $('.day').val());
    $('.msgfechaentrega').html('');
    fechaform = $('.year').val() + '/' + (parseInt($('.month').val()) +1) + '/' + $('.day').val();
    $('#datos_hora188').removeAttr("disabled");
    $('#datos_hora099').removeAttr("disabled");
    $('#datos_hora144').removeAttr("disabled");
    if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
        $('.day').val($('.day').val() + 1);
        $('#datos_hora099').removeAttr("disabled");
        $('#datos_hora188').removeAttr("disabled");
        $('#datos_hora099').attr("checked", "checked");
        $('#datos_hora144').removeAttr("disabled");
        return false;
    }

    if ((Date.parse(fecha)) == (Date.parse(fechaform))) {
        if (hora >= 9 && hora < 14) {
            if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                if($('.day').val() == 28 && $('.month').val() == 6){
                    $dianuevo = (parseInt($('.day').val()) + 2);
                }else{
                    $dianuevo = (parseInt($('.day').val()) + 1);
                }

                $('.day').val($dianuevo);
                $('#datos_hora099').removeAttr("disabled");
                $('#datos_hora188').removeAttr("disabled");
                $('#datos_hora099').attr("checked", "checked");
                $('#datos_hora144').removeAttr("disabled");
                return false;
            }
            if(semana.getDay() == 0){
                if($('.day').val() == 14 && $('.month').val() == 1){
                    $('#datos_hora144').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora144').attr("checked", "checked");
                }else{
                    $('.day').val(now.getDate() + 1);
                    $('#datos_hora099').attr("checked", "checked");
                }
            }else{
                $('#datos_hora099').attr("disabled", "disabled");
                $('#datos_hora144').attr("checked", "checked");
                $('#datos_hora188').removeAttr("disabled");
            }

        }

        if (hora >= 14 && hora < 18) {
            $('#datos_hora099').attr("disabled", "disabled");
            $('#datos_hora144').attr("disabled", "disabled");
            $('#datos_hora188').attr("checked", "checked");
            if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                if($('.day').val() == 28 && $('.month').val() == 6){
                    $dianuevo = (parseInt($('.day').val()) + 2);
                }else{
                    $dianuevo = (parseInt($('.day').val()) + 1);
                }


                $('.day').val($dianuevo);
                $('#datos_hora099').removeAttr("disabled");
                $('#datos_hora188').removeAttr("disabled");
                $('#datos_hora099').attr("checked", "checked");
                $('#datos_hora144').removeAttr("disabled");
                return false;
            }
            if(semana.getDay() == 0){
                if($('.day').val() == 14 && $('.month').val() == 1){
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora188').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("checked");
                }else{
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    if(now.getDate()==ultimodia.getDate()){
                        $('.day').val(1);
                        $('.month').val(now.getMonth() + 1);
                    }else{
                        $('.day').val(now.getDate() + 1);
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora144').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                    }
                    $('#datos_hora099').attr("checked", "checked");
                }
            }
        }

        if ((hora >= 18 && hora <= 23) && (Date.parse(fecha)) == (Date.parse(fechaform))) {
            if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                if($('.day').val() == 28 && $('.month').val() == 6){
                    $dianuevo = (parseInt($('.day').val()) + 2);
                }else{
                    $dianuevo = (parseInt($('.day').val()) + 1);
                }

                $('.day').val($dianuevo);
                $('#datos_hora099').removeAttr("disabled");
                $('#datos_hora188').removeAttr("disabled");
                $('#datos_hora099').attr("checked", "checked");
                $('#datos_hora144').removeAttr("disabled");
                return false;
            }
            if(now.getDate()==ultimodia.getDate()){
                $('.day').val(1);
                $('.month').val(now.getMonth() + 1);
                if(semana.getDay() == 6){
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                }
            }else{
                if (hora < 9) {
                    $('.day').val(now.getDate() + 1);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora144').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                }else{
                    if(now.getDate()==ultimodia.getDate()){
                        $('.day').val(1);
                    }else{
                        $('.day').val(now.getDate() + 1);
                    }
                }
            }
            $('#datos_hora099').attr("checked", "checked");
        }else{
            if (hora < 9) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                $('#datos_hora099').attr("checked", "checked");
                $('#datos_hora099').removeAttr("disabled");
                $('#datos_hora144').removeAttr("disabled");
                $('#datos_hora188').removeAttr("disabled");
            }
        }
    } else {
        if ((Date.parse(fecha)) < (Date.parse(fechaform))) {
            if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                if($('.day').val() == 28 && $('.month').val() == 6){
                    $dianuevo = (parseInt($('.day').val()) + 2);
                }else{
                    $dianuevo = (parseInt($('.day').val()) + 1);
                }

                $('.day').val($dianuevo);
                $('#datos_hora099').removeAttr("disabled");
                $('#datos_hora188').removeAttr("disabled");
                $('#datos_hora099').attr("checked", "checked");
                $('#datos_hora144').removeAttr("disabled");
                return false;
            }
            if (((parseInt($('.month').val()) +1)==4 || (parseInt($('.month').val()) +1)==6 || (parseInt($('.month').val()) +1)==9 || (parseInt($('.month').val()) +1)==11) && $('.day').val()==31) {
                $('#datos_hora099').attr("disabled", "disabled");
                $('#datos_hora144').attr("disabled", "disabled");
                $('#datos_hora188').attr("disabled", "disabled");
                $('#datos_hora099').removeAttr("checked");
                $('#datos_hora144').removeAttr("checked");
                $('#datos_hora188').removeAttr("checked");
                $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                return false;
            }
            if ((parseInt($('.month').val()) +1) == 2) { // bisiesto
                var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora144').removeAttr("checked");
                    $('#datos_hora188').removeAttr("checked");
                    $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                    return false;
                }
            }
            $('#datos_hora099').removeAttr("checked");
            $('#datos_hora144').removeAttr("checked");
            $('#datos_hora188').removeAttr("checked");
            $('#datos_hora099').attr("checked", "checked");

            if(semana.getDay() == 0){
                if($('.day').val() == 14 && $('.month').val() == 1){
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                }else{
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                }
            }
        }else{
            if ((parseInt($('.month').val()) +1) == 2) { // bisiesto
                var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora144').removeAttr("checked");
                    $('#datos_hora188').removeAttr("checked");
                    $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                    return false;
                }else{
                    if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                        return false;
                    }else{
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                    }
                }
            }else{
                if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora144').removeAttr("checked");
                    $('#datos_hora188').removeAttr("checked");
                    $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                    return false;
                }else{
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora144').removeAttr("checked");
                    $('#datos_hora188').removeAttr("checked");
                }
            }
        }
    }

    $('.day').change(function () {

        if($('.year').val()=='' || $('.month').val()=='' || $('.day').val()==''){
            $('#datos_hora099').attr("disabled", "disabled");
            $('#datos_hora144').attr("disabled", "disabled");
            $('#datos_hora188').attr("disabled", "disabled");
            $('#datos_hora099').removeAttr("checked");
            $('#datos_hora144').removeAttr("checked");
            $('#datos_hora188').removeAttr("checked");
            return false;
        }
        $('.msgfechaentrega').html('');
        now = new Date();
        fecha = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate();
        hora = parseInt(now.getHours());
        minuto = parseInt(now.getMinutes());
        ultimodia = new Date(now.getFullYear() , parseInt($('.month').val()), 0);
        semana = new Date($('.year').val() , parseInt($('.month').val()), $('.day').val());
        fechaform = $('.year').val() + '/' + (parseInt($('.month').val()) +1) + '/' + $('.day').val();
        $('#datos_hora188').removeAttr("disabled");
        $('#datos_hora099').removeAttr("disabled");
        $('#datos_hora144').removeAttr("disabled");

        if ((Date.parse(fecha)) == (Date.parse(fechaform))) {
            if (hora >= 9 && hora < 14) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora144').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora144').attr("checked", "checked");
                    }else{
                        $('.day').val(now.getDate() + 1);
                        $('#datos_hora099').attr("checked", "checked");
                    }
                }else{
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("checked", "checked");
                    $('#datos_hora188').removeAttr("disabled");
                }
            }

            if (hora >= 14 && hora < 18) {
                $('#datos_hora099').attr("disabled", "disabled");
                $('#datos_hora144').attr("disabled", "disabled");
                $('#datos_hora188').attr("checked", "checked");
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora188').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("checked");
                    }else{
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        if(now.getDate()==ultimodia.getDate()){
                            $('.day').val(1);
                            $('.month').val(now.getMonth() + 1);
                        }else{
                            $('.day').val(now.getDate() + 1);
                            $('#datos_hora099').removeAttr("disabled");
                            $('#datos_hora144').removeAttr("disabled");
                            $('#datos_hora188').removeAttr("disabled");
                        }
                        $('#datos_hora099').attr("checked", "checked");
                    }
                }
            }

            if ((hora >= 18 && hora <= 23) && (Date.parse(fecha)) == (Date.parse(fechaform))) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(now.getDate()==ultimodia.getDate()){
                    $('.day').val(1);
                    $('.month').val(now.getMonth() + 1);
                    if(semana.getDay() == 6){
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                    }
                }else{
                    if (hora < 9) {
                        $('.day').val(now.getDate() + 1);
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora144').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                    }else{
                        $('.day').val(now.getDate() + 1);
                    }
                }
                $('#datos_hora099').attr("checked", "checked");
            }else{
                if (hora < 9) {
                    if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                        if($('.day').val() == 28 && $('.month').val() == 6){
                            $dianuevo = (parseInt($('.day').val()) + 2);
                        }else{
                            $dianuevo = (parseInt($('.day').val()) + 1);
                        }

                        $('.day').val($dianuevo);
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora099').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("disabled");
                        return false;
                    }
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora144').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                }
            }
        } else {
            if ((Date.parse(fecha)) < (Date.parse(fechaform))) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if (((parseInt($('.month').val()) +1)==4 || (parseInt($('.month').val()) +1)==6 || (parseInt($('.month').val()) +1)==9 || (parseInt($('.month').val()) +1)==11) && $('.day').val()==31) {
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora144').removeAttr("checked");
                    $('#datos_hora188').removeAttr("checked");
                    $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                    return false;
                }
                if ((parseInt($('.month').val()) +1) == 2) { // bisiesto
                    var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                    if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                        return false;
                    }
                }
                $('#datos_hora099').removeAttr("checked");
                $('#datos_hora144').removeAttr("checked");
                $('#datos_hora188').removeAttr("checked");
                $('#datos_hora099').attr("checked", "checked");
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora099').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("disabled");
                    }else{
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                    }
                }
            }else{
                if ((parseInt($('.month').val()) +1) == 2) { // bisiesto
                    var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                    if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                        return false;
                    }else{
                        if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                            if($('.day').val() == 28 && $('.month').val() == 6){
                                $dianuevo = (parseInt($('.day').val()) + 2);
                            }else{
                                $dianuevo = (parseInt($('.day').val()) + 1);
                            }

                            $('.day').val($dianuevo);
                            $('#datos_hora099').removeAttr("disabled");
                            $('#datos_hora188').removeAttr("disabled");
                            $('#datos_hora099').attr("checked", "checked");
                            $('#datos_hora144').removeAttr("disabled");
                            return false;
                        }
                        if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                            $('#datos_hora099').attr("disabled", "disabled");
                            $('#datos_hora144').attr("disabled", "disabled");
                            $('#datos_hora188').attr("disabled", "disabled");
                            $('#datos_hora099').removeAttr("checked");
                            $('#datos_hora144').removeAttr("checked");
                            $('#datos_hora188').removeAttr("checked");
                            $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                            return false;
                        }else{
                            $('#datos_hora099').attr("disabled", "disabled");
                            $('#datos_hora144').attr("disabled", "disabled");
                            $('#datos_hora188').attr("disabled", "disabled");
                            $('#datos_hora099').removeAttr("checked");
                            $('#datos_hora144').removeAttr("checked");
                            $('#datos_hora188').removeAttr("checked");
                        }
                    }
                }else{
                    if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                        return false;
                    }else{
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                    }
                }
            }
        }
    });

    $('.month').change(function () {
        if($('.year').val()=='' || $('.month').val()=='' || $('.day').val()==''){
            $('#datos_hora099').attr("disabled", "disabled");
            $('#datos_hora144').attr("disabled", "disabled");
            $('#datos_hora188').attr("disabled", "disabled");
            $('#datos_hora099').removeAttr("checked");
            $('#datos_hora144').removeAttr("checked");
            $('#datos_hora188').removeAttr("checked");
            return false;
        }
        $('.msgfechaentrega').html('');
        now = new Date();
        fecha = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate();
        hora = parseInt(now.getHours());
        minuto = parseInt(now.getMinutes());
        ultimodia = new Date(now.getFullYear() , parseInt($('.month').val()), 0);
        semana = new Date($('.year').val() , (parseInt($('.month').val())), $('.day').val());
        fechaform = $('.year').val() + '/' + (parseInt($('.month').val()) +1) + '/' + $('.day').val();
        $('#datos_hora188').removeAttr("disabled");
        $('#datos_hora099').removeAttr("disabled");
        $('#datos_hora144').removeAttr("disabled");

        if ((Date.parse(fecha)) == (Date.parse(fechaform))) {
            if (hora >= 9 && hora < 14) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora144').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora144').attr("checked", "checked");
                    }else{
                        $('.day').val(now.getDate() + 1);
                        $('#datos_hora099').attr("checked", "checked");
                    }
                }else{
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("checked", "checked");
                    $('#datos_hora188').removeAttr("disabled");
                }
            }

            if (hora >= 14 && hora < 18) {
                $('#datos_hora099').attr("disabled", "disabled");
                $('#datos_hora144').attr("disabled", "disabled");
                $('#datos_hora188').attr("checked", "checked");
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora188').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("checked");
                    }else{
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        if(now.getDate()==ultimodia.getDate()){
                            $('.day').val(1);
                            $('.month').val(now.getMonth() + 1);
                        }else{
                            $('.day').val(now.getDate() + 1);
                            $('#datos_hora099').removeAttr("disabled");
                            $('#datos_hora144').removeAttr("disabled");
                            $('#datos_hora188').removeAttr("disabled");
                        }
                        $('#datos_hora099').attr("checked", "checked");
                    }
                }
            }

            if ((hora >= 18 && hora <= 23) && (Date.parse(fecha)) == (Date.parse(fechaform))) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(now.getDate()==ultimodia.getDate()){
                    $('.day').val(1);
                    $('.month').val(now.getMonth() + 1);
                    if(semana.getDay() == 6){
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                    }
                }else{
                    if (hora < 9) {
                        $('.day').val(now.getDate() + 1);
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora144').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                    }else{
                        $('.day').val(now.getDate() + 1);
                    }
                }
                $('#datos_hora099').attr("checked", "checked");
            }else{
                if (hora < 9) {
                    if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                        if($('.day').val() == 28 && $('.month').val() == 6){
                            $dianuevo = (parseInt($('.day').val()) + 2);
                        }else{
                            $dianuevo = (parseInt($('.day').val()) + 1);
                        }

                        $('.day').val($dianuevo);
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora099').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("disabled");
                        return false;
                    }
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora144').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                }
            }
        } else {
            if ((Date.parse(fecha)) < (Date.parse(fechaform))) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }


                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if (((parseInt($('.month').val()) +1)==4 || (parseInt($('.month').val()) +1)==6 || (parseInt($('.month').val()) +1)==9 || (parseInt($('.month').val()) +1)==11) && $('.day').val()==31) {
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora144').removeAttr("checked");
                    $('#datos_hora188').removeAttr("checked");
                    $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                    return false;
                }
                if ((parseInt($('.month').val()) +1) == 2) {
                    var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                    if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                        return false;
                    }
                }

                $('#datos_hora099').removeAttr("checked");
                $('#datos_hora144').removeAttr("checked");
                $('#datos_hora188').removeAttr("checked");
                $('#datos_hora099').attr("checked", "checked");
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora099').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("disabled");
                    }else{
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                    }
                }
            }else{
                if ((parseInt($('.month').val()) +1) == 2) { // bisiesto
                    var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                    if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                        return false;
                    }else{
                        if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                            $('#datos_hora099').attr("disabled", "disabled");
                            $('#datos_hora144').attr("disabled", "disabled");
                            $('#datos_hora188').attr("disabled", "disabled");
                            $('#datos_hora099').removeAttr("checked");
                            $('#datos_hora144').removeAttr("checked");
                            $('#datos_hora188').removeAttr("checked");
                            $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                            return false;
                        }else{
                            $('#datos_hora099').attr("disabled", "disabled");
                            $('#datos_hora144').attr("disabled", "disabled");
                            $('#datos_hora188').attr("disabled", "disabled");
                            $('#datos_hora099').removeAttr("checked");
                            $('#datos_hora144').removeAttr("checked");
                            $('#datos_hora188').removeAttr("checked");
                        }
                    }
                }else{
                    if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                        return false;
                    }else{
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                    }
                }
            }
        }
    });

    $('.year').change(function () {
        if($('.year').val()=='' || $('.month').val()=='' || $('.day').val()==''){
            $('#datos_hora099').attr("disabled", "disabled");
            $('#datos_hora144').attr("disabled", "disabled");
            $('#datos_hora188').attr("disabled", "disabled");
            $('#datos_hora099').removeAttr("checked");
            $('#datos_hora144').removeAttr("checked");
            $('#datos_hora188').removeAttr("checked");
            return false;
        }
        $('.msgfechaentrega').html('');
        now = new Date();
        fecha = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate();
        hora = parseInt(now.getHours());
        minuto = parseInt(now.getMinutes());
        ultimodia = new Date(now.getFullYear() , parseInt($('.month').val()), 0);
        semana = new Date($('.year').val() , (parseInt($('.month').val())), $('.day').val());
        fechaform = $('.year').val() + '/' + (parseInt($('.month').val()) +1) + '/' + $('.day').val();
        $('#datos_hora188').removeAttr("disabled");
        $('#datos_hora099').removeAttr("disabled");
        $('#datos_hora144').removeAttr("disabled");


        if ((Date.parse(fecha)) == (Date.parse(fechaform))) {

            if (hora >= 9 && hora < 14) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora144').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora144').attr("checked", "checked");
                    }else{
                        $('.day').val(now.getDate() + 1);
                        $('#datos_hora099').attr("checked", "checked");
                    }
                }else{
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("checked", "checked");
                    $('#datos_hora188').removeAttr("disabled");
                }
            }

            if (hora >= 14 && hora < 18) {
                $('#datos_hora099').attr("disabled", "disabled");
                $('#datos_hora144').attr("disabled", "disabled");
                $('#datos_hora188').attr("checked", "checked");
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora188').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("checked");
                    }else{
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        if(now.getDate()==ultimodia.getDate()){
                            $('.day').val(1);
                            $('.month').val(now.getMonth() + 1);
                        }else{
                            $('.day').val(now.getDate() + 1);
                            $('#datos_hora099').removeAttr("disabled");
                            $('#datos_hora144').removeAttr("disabled");
                            $('#datos_hora188').removeAttr("disabled");
                        }
                        $('#datos_hora099').attr("checked", "checked");
                    }
                }
            }

            if ((hora >= 18 && hora <= 23) && (Date.parse(fecha)) == (Date.parse(fechaform))) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if(now.getDate()==ultimodia.getDate()){
                    $('.day').val(1);
                    $('.month').val(now.getMonth() + 1);
                    if(semana.getDay() == 6){
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                    }
                }else{
                    if (hora < 9) {
                        $('.day').val(now.getDate() + 1);
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora144').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                    }else{
                        $('.day').val(now.getDate() + 1);
                    }
                }
                $('#datos_hora099').attr("checked", "checked");
            }else{
                if (hora < 9) {
                    if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                        if($('.day').val() == 28 && $('.month').val() == 6){
                            $dianuevo = (parseInt($('.day').val()) + 2);
                        }else{
                            $dianuevo = (parseInt($('.day').val()) + 1);
                        }

                        $('.day').val($dianuevo);
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora099').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("disabled");
                        return false;
                    }
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora144').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                }
            }
        } else {
            if ((Date.parse(fecha)) < (Date.parse(fechaform))) {
                if(($('.day').val() == 1 && $('.month').val() == 0) || ($('.day').val() == 1 && $('.month').val() == 4) || ($('.day').val() == 28 && $('.month').val() == 6) || ($('.day').val() == 29 && $('.month').val() == 6) || ($('.day').val() == 25 && $('.month').val() == 11)){
                    if($('.day').val() == 28 && $('.month').val() == 6){
                        $dianuevo = (parseInt($('.day').val()) + 2);
                    }else{
                        $dianuevo = (parseInt($('.day').val()) + 1);
                    }

                    $('.day').val($dianuevo);
                    $('#datos_hora099').removeAttr("disabled");
                    $('#datos_hora188').removeAttr("disabled");
                    $('#datos_hora099').attr("checked", "checked");
                    $('#datos_hora144').removeAttr("disabled");
                    return false;
                }
                if (((parseInt($('.month').val()) +1)==4 || (parseInt($('.month').val()) +1)==6 || (parseInt($('.month').val()) +1)==9 || (parseInt($('.month').val()) +1)==11) && $('.day').val()==31) {
                    $('#datos_hora099').attr("disabled", "disabled");
                    $('#datos_hora144').attr("disabled", "disabled");
                    $('#datos_hora188').attr("disabled", "disabled");
                    $('#datos_hora099').removeAttr("checked");
                    $('#datos_hora144').removeAttr("checked");
                    $('#datos_hora188').removeAttr("checked");
                    $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                    return false;
                }
                if ((parseInt($('.month').val()) +1) == 2) { // bisiesto
                    var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                    if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                        return false;
                    }
                }
                $('#datos_hora099').removeAttr("checked");
                $('#datos_hora144').removeAttr("checked");
                $('#datos_hora188').removeAttr("checked");
                $('#datos_hora099').attr("checked", "checked");
                if(semana.getDay() == 0){
                    if($('.day').val() == 14 && $('.month').val() == 1){
                        $('#datos_hora099').removeAttr("disabled");
                        $('#datos_hora188').removeAttr("disabled");
                        $('#datos_hora099').attr("checked", "checked");
                        $('#datos_hora144').removeAttr("disabled");
                    }else{
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                    }
                }
            }else{
                if ((parseInt($('.month').val()) +1) == 2) { // bisiesto
                    var bisiesto = ($('.year').val() % 4 == 0 && ($('.year').val() % 100 != 0 || $('.year').val() % 400 == 0));
                    if ($('.day').val() > 29 || ($('.day').val()==29 && !bisiesto)) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("Febrero del " + $('.year').val() + " no contiene " + $('.day').val() + " dias!");
                        return false;
                    }else{
                        if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                            $('#datos_hora099').attr("disabled", "disabled");
                            $('#datos_hora144').attr("disabled", "disabled");
                            $('#datos_hora188').attr("disabled", "disabled");
                            $('#datos_hora099').removeAttr("checked");
                            $('#datos_hora144').removeAttr("checked");
                            $('#datos_hora188').removeAttr("checked");
                            $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                            return false;
                        }else{
                            $('#datos_hora099').attr("disabled", "disabled");
                            $('#datos_hora144').attr("disabled", "disabled");
                            $('#datos_hora188').attr("disabled", "disabled");
                            $('#datos_hora099').removeAttr("checked");
                            $('#datos_hora144').removeAttr("checked");
                            $('#datos_hora188').removeAttr("checked");
                        }
                    }
                }else{
                    if (((parseInt($('.month').val()) +1) == 4 || (parseInt($('.month').val()) +1) == 6 || (parseInt($('.month').val()) +1) == 9 || (parseInt($('.month').val()) +1) == 11) && $('.day').val() == 31) {
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                        $('.msgfechaentrega').html("El mes " + monthNames[$('.month').val()] + " no tiene 31 dÃ­as!");
                        return false;
                    }else{
                        $('#datos_hora099').attr("disabled", "disabled");
                        $('#datos_hora144').attr("disabled", "disabled");
                        $('#datos_hora188').attr("disabled", "disabled");
                        $('#datos_hora099').removeAttr("checked");
                        $('#datos_hora144').removeAttr("checked");
                        $('#datos_hora188').removeAttr("checked");
                    }
                }
            }
        }
    });

    /* Formularios */
    $("#perfil_datos_form").submit(function (e) {
        e.preventDefault();
        if ($(this).parsley('isValid')) {
            $.post("saveperfil", $('#perfil_datos_form').serialize(), function (data) {
                document.getElementById('perfil_datos_form').reset();
                parent.$('body').css({"overflow": ""});

                $.fancybox('public/image/actualizar.jpg', {
                    type: 'image',
                    padding: 0,
                    beforeClose: function () {
                        window.location.reload();
                    }
                });
            });
        }
        return false;

    });

    /*Formulario Correo*/
    $("#perfil_correo_form").submit(function(e){
        e.preventDefault();
        if ($(this).parsley('isValid')) {

            $.post("savecorreo", $('#perfil_correo_form').serialize(), function (data) {

                if(data==0){
                    document.getElementById('perfil_correo_form').reset();
                    parent.$('body').css({"overflow": ""});

                    $.fancybox('public/image/actualizar.jpg', {
                        type: 'image',
                        padding: 0,
                        beforeClose: function () {
                            window.location.reload();
                        }
                    });

                }else{
                    document.getElementById('perfil_correo_form').reset();
                    $("#valida_correo").css({"color":"red"}).html("* El Correo se Encuentra Registrado");
                }

            });

        }

    })



    /*Formulario ContraseÃ±a*/
    $("#perfil_contrasena_form").submit(function (e) {
        e.preventDefault();
        $('.msgclave').html('');
        if ($("#perfil_contrasena_nueva").val() != $("#perfil_contrasena_repetir").val()) {
            $("#perfil_contrasena_nueva").val("");
            $("#perfil_contrasena_repetir").val("");
            $(".msgclave").html("Las contraseÃ±as no Coinciden");
            return false;
        }

        if ($(this).parsley('isValid')) {
            $.post("actualizar-contrasena", $('#perfil_contrasena_form').serialize(), function (data) {
                if (data == 0) {
                    document.getElementById('perfil_contrasena_form').reset();

                    parent.$('body').css({"overflow": ""});

                    $.fancybox('public/image/actualizar.jpg', {
                        type: 'image',
                        padding: 0,
                        beforeClose: function () {
                            window.location.reload();
                        }
                    });
                } else {
                    $("#perfil_contrasena_actual").val("").focus();
                    $("#perfil_contrasena_actual").removeClass("parsley-success");
                    $("#perfil_contrasena_actual").addClass("parsley-error");
                    $(".msgclave").html("ContraseÃ±a Incorrecta");
                    return false;
                }

            });
        }
        return false;

    });


    /*Fechas para no olvidar*/

    $(".subcat").css({"opacity":"1"});
    /*$("#olvidar_catalogo").change(function () {
     $.post("subcategorias", {id: $(this).val()}, function (data) {
     if (data == "") {
     $("#olvidar_ocasiones").attr({'disabled': "disabled"});
     $("#olvidar_ocasiones").addClass("parsley-success");
     $(".subcat").css({"opacity": "0"});
     return false;
     }
     $("#olvidar_ocasiones").html(data);
     $(".subcat").css({"opacity": "1"});
     $("#olvidar_ocasiones").removeAttr("disabled");
     $("#olvidar_ocasiones").removeClass("parsley-success");
     });
     })*/

    /*Formulario mis direcciones*/

    $("#perfil_direcciones_form").submit(function (e) {
        e.preventDefault();
        if ($(this).parsley('isValid')) {
            $.post("savedirecciones", $('#perfil_direcciones_form').serialize(), function (data) {
                document.getElementById('perfil_direcciones_form').reset();
                $.fancybox('public/image/img-gracias.jpg', {'autoDimensions': false, 'scrolling': 'no', 'type': 'image', 'titleShow': false, 'overlayOpacity': 0.7, 'autoScale': false, 'padding': 0,
                    onClosed: function () {
                        window.location = window.location.href;
                    }});

            });
        }
        return false;

    });

    $("#cambia_form").submit(function (e) {
        e.preventDefault();
        $('.msgclave').html('');
        if ($(this).parsley('isValid')) {
            $.post("nuevaclave", $('#cambia_form').serialize(), function (data) {
                if(data==1){
                    $.fancybox('public/image/img-actualiza-clave.jpg', {
                        type: 'image',
                        padding: 0,
                        beforeClose: function () {
                            window.location = 'inicio';
                        }
                    });
                }else{
                    $('.msgclave').html("Ocurrio un problema al actualizar la contraseÃ±a, vuelva a intentarlo en unos minutos");
                }
            });
        }
        return false;

    });
    var falso = false;
    $("#carrito_datos_form").submit(function (e) {
        e.preventDefault();
        /*if (!statSend) {*/
        if (!falso) {
            $('.msgcarritoform').html('');
            if ($('#carrito_cantidad_form').serialize() == "") {
                $.fancybox('public/image/carrito-vacio.jpg', {
                    type: 'image',
                    padding: 0
                });
                return false;
            }

            if($('#totcar').val()<30){
                $.fancybox({href:'msgcarritomenor', padding: 0, margin: 0, scrolling: 'auto', width: 431, height: 321, centerOnScroll: false, hideOnOverlayClick: true, hideOnContentClick: false,
                    overlayShow: true, overlayOpacity: 0.5, overlayColor: '#000', titleShow: false, transitionIn: 'elastic', transitionOut: 'elastic', speedIn: 400, speedOut: 200,
                    showCloseButton: true, showNavArrows: false, enableEscapeButton: true, type: 'iframe',  closebtn: true,
                    onComplete: function () {
                        parent.$('body').css({"overflow": "hidden"});
                        setTimeout(function(){
                            $("html, body").animate({scrollTop:0});

                        }, 800);
                    },
                    onCancel    :   function() {
                        parent.$('body').css({"overflow-y": "scroll"});
                    },
                    onCleanup   :   function() {
                        parent.$('body').css({"overflow-y": "scroll"});
                    },
                    onClosed: function () {
                        parent.$('body').css({"overflow-y": "scroll"});
                        statSend = false;
                    }
                });
                return false;
            }



            $('input[name="datos_soltelefono"]').removeClass("parsley-error");
            $('input[name="datos_solcelular"]').removeClass("parsley-error");

            if($('input[name="datos_soltelefono"]').val()=='' && $('input[name="datos_solcelular"]').val()==''){
                setTimeout(function () {
                    $('input[name="datos_soltelefono"]').addClass("parsley-error");
                    $('input[name="datos_solcelular"]').addClass("parsley-error");
                }, 600);
                return false;
            }

            $('input[name="datos_soltelefono"]').addClass("parsley-success");
            $('input[name="datos_solcelular"]').addClass("parsley-success");

            if($('input[name="datos_informacion"]:checked').val()=='factura'){
                regExp = /^.*(?=.*[0-9])(?=.*[a-zA-ZÃ±Ã‘\s+]).*$/;
                if(!regExp.test($('input[name="datos_informacion_direccion"]').val())){
                    setTimeout(function () {
                        $('input[name="datos_informacion_direccion"]').removeClass("parsley-success");
                        $('input[name="datos_informacion_direccion"]').addClass("parsley-error");
                    }, 600);
                    return false;
                }
                setTimeout(function () {
                    $('input[name="datos_informacion_direccion"]').addClass("parsley-success");
                    $('input[name="datos_informacion_direccion"]').removeClass("parsley-error");
                }, 600);

            }
            if (($('.datos_informacion_dni').val().length != 8 && $('.datos_informacion_dni').val().length != 6) && $('input[name="datos_informacion"]:checked').val() == 'boleta') {
                setTimeout(function () {
                    $('input[name="datos_informacion_dni"]').removeClass("parsley-success");
                    $('input[name="datos_informacion_dni"]').addClass("parsley-error");
                }, 600);

                return false;
            }

            if ($('.datos_informacion_dni').val().length != 11 && $('input[name="datos_informacion"]:checked').val() == 'factura') {
                setTimeout(function () {
                    $('input[name="datos_informacion_dni"]').removeClass("parsley-success");
                    $('input[name="datos_informacion_dni"]').addClass("parsley-error");
                }, 600);
                return false;
            }
            var count = 0;
            $('input[name="datos_hora"]').each(function (i) {

                var checkedValue = $('input[name="datos_hora"]').eq(i).attr('checked');

                if(checkedValue!='checked'){
                    count = count + 1;
                }
            });

            if(count==3){
                $('.msgfechaentrega').html("Verifique la fecha y seleccione una hora de entrega");
                $('label[for="datos_hora09"]').css({"color":"#F50F0F"});
                $('label[for="datos_hora14"]').css({"color":"#F50F0F"});
                $('label[for="datos_hora18"]').css({"color":"#F50F0F"});
                return false;
            }

            $('label[for="datos_hora09"]').css({"color":"#969696"});
            $('label[for="datos_hora14"]').css({"color":"#969696"});
            $('label[for="datos_hora18"]').css({"color":"#969696"});

            if ($(this).parsley('isValid')) {
                statSend = true;
                var complementos = [];
                $(".carritoproductocomplemento").each(function(c){
                    complementos.push({
                        complemento:$('.carritoproductocomplemento').eq(c).val(),
                        ocasiones:$(".carritoproductoocasion").eq(c).val(),
                        carritocomplemento:$(".carritocomplemento").eq(c).val()
                    });
                });
                $.post('datos',$('#carrito_datos_form').serialize()+'&'+$.param({'complementos': complementos}));

                $.fancybox({
                    href: 'popup-datos',
                    type: 'ajax',
                    padding: 0,
                    autoWidth: true,
                    autoHeight: true,
                    topRatio: .25,
                    beforeShow: function(){
                        $('html').addClass('fancybox-margin fancybox-lock').css('position', 'fixed');
                    },
                    beforeClose: function(){
                        $('html').removeClass('fancybox-margin fancybox-lock').css('position', 'inherit');
                    }
                });
            }

        }  else {
            alert("El pago se estÃ¡ procesando, por favor espere...");
            return false;
        };

    });

    $('a').click(function(){
        if($(location).attr('pathname')=='/demos/florerias-unidas/web/mi-carrito-de-compras' && $('#fancybox-close').attr('style')!='display: none;'){
            /*var complementos = [];
             $(".carritoproductocomplemento").each(function(c){
             complementos.push({
             complemento:$('.carritoproductocomplemento').eq(c).val(),
             ocasiones:$(".carritoproductoocasion").eq(c).val()
             });
             });*/
            $.post('datos',$('#carrito_datos_form').serialize());
        }
    });

    $('.form_amigo').submit(function(e){
        e.preventDefault();
        if ($(this).parsley('isValid')) {
            $.post('recomendar',$('.form_amigo').serialize(),function(data){
                if(data==1){
                    parent.$.fancybox('public/image/graciaspor.jpg', {'autoDimensions': false, 'scrolling': 'no', 'type': 'image', 'titleShow': false, 'overlayOpacity': 0.7, 'autoScale': false, 'padding': 0, top: '-39px', left: '-39px'});
                }
            });
        }
    });

    /*jquery de pedido coiar .. al otro */

    $(".perfil_despacho").each(function(i){
        if($(".perfil_despacho").eq(i).children("ul").attr('class') == 'pedidoC'){

            $(".perfil_despacho").eq(i).find("li").eq(0).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"})
            $(".perfil_despacho").eq(i).find("li").eq(1).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(2).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(3).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});

        }else if($(".perfil_despacho").eq(i).children("ul").attr('class') == 'pedidoPC'){

            $(".perfil_despacho").eq(i).find("li").eq(0).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"})
            $(".perfil_despacho").eq(i).find("li").eq(1).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(2).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(3).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});

        }else if($(".perfil_despacho").eq(i).children("ul").attr('class') == 'pedidoR'){

            $(".perfil_despacho").eq(i).find("li").eq(0).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"})
            $(".perfil_despacho").eq(i).find("li").eq(1).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(2).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(3).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});

        }else if($(".perfil_despacho").eq(i).children("ul").attr('class') == 'pedidoA'){

            $(".perfil_despacho").eq(i).find("li").eq(0).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"})
            $(".perfil_despacho").eq(i).find("li").eq(1).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(2).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(3).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"});

        }else if($(".perfil_despacho").eq(i).children("ul").attr('class') == 'pedidoE'){

            $(".perfil_despacho").eq(i).find("li").eq(0).css({"background":"url(image/icon-despacho-equis.png) no-repeat center top"})
            $(".perfil_despacho").eq(i).find("li").eq(1).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(2).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"});
            $(".perfil_despacho").eq(i).find("li").eq(3).css({"background":"url(image/icon-despacho-check.png) no-repeat center top"});

        }

    });

    //$('.forma1').css({"top": "65px"});
    $('.clic').css({"color": "#F6901E"});
    /**/


    $("#chocolate").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:$("#user").height()+$("#header").height()+$("#detalle0").height()+$('#chocolat').position().top},400);
    });

    $("#peluche").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:$("#user").height()+$("#header").height()+$("#detalle0").height()+$('#peluch').position().top},400);
    });

    $("#globo").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:$("#user").height()+$("#header").height()+$("#detalle0").height()+$('#glob').position().top},400);
    });
    $("#licores").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:$("#user").height()+$("#header").height()+$("#detalle0").height()+$('#lico').position().top},400);
    });

    $(".content_item_form_complemento").each(function(i){
        $(".content_item_form_complemento").eq(i).submit(function(e){
            e.preventDefault();
            if($('.tipocomplemento').eq(i).val()=='G'){
                if (!$(this).parsley('isValid')) {
                    return false;
                }
            }
            var complementos = [];
            complementos.push({
                complemento:$('.ocasiones').eq(i).val(),
                ocasiones:$(".content_item_form_complemento fieldset").eq(i).children(".item_select").val(),
                producto:$('.idproducto').val()
            });

            $.post('agregacomplemento',{'carritoproducto':$('.carritoproducto').eq(i).val(), 'complementos': complementos},function(data){
                if(data==1){
                    parent.window.location = 'mi-carrito-de-compras';
                }
            });
        });
    });

    $('.perfil_fechas_eliminar').each(function(i){
        $('.perfil_fechas_eliminar').eq(i).click(function(e){
            e.preventDefault();
            $.post($('.perfil_fechas_eliminar').eq(i).attr('href'),function(data){
                if(data==1){
                    window.location.reload();
                }
            });
        });
    });


    $('#footer_recibe_form').submit(function(e){
        e.preventDefault();
        if ($(this).parsley('isValid')) {
            $('.msgsuscribete').html('');
            $.post('suscribirme',$('#footer_recibe_form').serialize(),function(data){
                if(data==1){
                    parent.$('body').css({"overflow": ""});

                    $.fancybox('public/image/suscribirte.jpg', {
                        type: 'image',
                        padding: 0,
                        beforeClose: function () {
                            window.location.reload();
                        }
                    });
                }

                if(data==2){
                    $('.msgsuscribete').html('Este correo ya se encuentra suscrito');
                }
            });
        }
    });
    /**/

    //plugin placeholder

    $("input,textarea").placeholder();


});



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-67744802-1', 'auto');
ga('send', 'pageview');




