angular.module('textalkArbetsProv').
factory('articleService', function(){
    return {
        currentDisplayIndex: "",
        articles: {},
        stylePath: ""
    };
})
