// JavaScript Document
var WEB = "https://www.floreriasunidas.com/";
var TITULOWEB = 'FLORERÃAS UNIDAS - '

function fb_click(url){
    u=(url != '' && url != '#') ? WEB+''+url : location.href;t=document.title;window.open(
        'https://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer',
        'toolbar=0,status=0,width=626,height=436');
    return false;
}
function megusta(id,url){
    u=(url != '' && url != '#') ? WEB+''+url : location.href;
    var str = '<iframe src="https://www.facebook.com/plugins/like?href='+u+'&amp;locale=es_ES&amp;layout=button_count&amp;show_faces=true&amp;width=120&amp;action=like&amp;font=arial&amp;colorscheme=light" scrolling="no" frameborder="0" style="border:none;width:120px;height:22px; margin-top: 0px;"></iframe>'
    //document.getElementById(id).innerHTML = str
    id.replaceWith(str)
}

function enviaramigo(url){
    var u=(url != '' && url != '#') ? WEB+url : location.href;
    $.fancybox(WEB+'pop_enviar_amigo?pag='+u+'',{'autoDimensions': false,'width': 300,'height': 320,'type': 'iframe','scrolling': 'no', 'titleShow': false, 'overlayOpacity': 0.5,'autoScale': false, 'margin' : 0, 'padding' : 0,onComplete: function () {
        $('body').css({"overflow": "hidden"});
        $('fancybox-overlay').css({'background-color':'#000000'});
        setTimeout(function(){$("html, body").animate({scrollTop:0});}, 800);
    },
        onClosed: function () {
            $('body').css({"overflow": ""});
        }})
}
function open_twitter(url,tit){
    titulo=(tit != '') ? TITULOWEB+tit : document.title;
    u=(url != '' && url != '#') ? WEB+''+url : location.href;
    window.open("https://www.twitter.com/intent/tweet?text=A+mi+me+gusta+"+titulo.replace(/ /g,"+",titulo)+"&url="+u,"Twitter","toolbar=0, status=0, width=550, height=420");
}

function gplus_click(url){
    u=(url != '' && url != '#') ? WEB+''+url : location.href;t=document.title;window.open(
        'https://plus.google.com/share?url='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer',
        'toolbar=0,status=0,width=500,height=436');
    return false;
}

function open_linkedin(url){
    u=(url != '' && url != '#') ? WEB+''+url : location.href;t=document.title;window.open(
        'https://ayuda.linkedin.com/app/answers/detail/a_id/3628/~/compartir-contenidos-de-actualizaciones-de-otras-personas');

    return false;
}

var rs = function(){
    if($("#detalle_foto_redes").length > 0){
        $("#detalle_foto_redes").each(function(){
            $(this).find("a").eq(0).click(function(e){ e.preventDefault(); fb_click($(this).attr("href")) })
            $(this).find("a").eq(1).click(function(e){ e.preventDefault(); open_twitter($(this).attr("href"),$(this).attr("title")) })
            $(this).find("a").eq(2).click(function(e){ e.preventDefault(); enviaramigo($(this).attr("href")) })
            megusta($(this).find("a").eq(3),$(this).find("a").eq(3).attr("href"))
        })
    }
}
$(document).on("ready",rs);

