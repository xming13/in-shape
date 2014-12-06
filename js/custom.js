
$(document).ready(function(){

    console.log('trying to print WONDER.oWonderGrid');
    console.log(WONDER.oWonderGrid)
    console.log(WONDER.oWonderGrid.modifYDOM);

    WONDER.oWonderGrid.modifYDOM = function () {

        console.log('attempt to override!');

        $('<div id="wonder-hide"></div><section id="wonder-content"><a href="#" class="close">Close</a><header></header><content><div class="mirror-left"><img src="" /><p></p></div><div class="mirror-right"><img src="" /><p></p></div></content></section>').appendTo("body");
        _hider = $("#wonder-hide");
        _content = $("#wonder-content");
        _contentClose = _content.find("a");
    };

});