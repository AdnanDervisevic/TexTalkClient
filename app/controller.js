angular.module('textalkArbetsProv').
controller('MainController', ['QueryService', 'articleService', '$scope', '$routeParams', '$http',
function(QueryService, articleService, $scope, $routeParams, $http) {
    $scope.article = {};
    $scope.articles = {};
    $scope.introduction = true;
    $scope.stylePath = "";
    $scope.themes =
    [
        {  label: 'Light' },
        {  label: 'Dark' },
        { label: 'Textalk' },
        { label: 'Firewatch' }
    ];

    $scope.themeSelect = function(theme) {
        articleService.stylePath = 'styles/' + theme.label.toLowerCase() + '/style.css';
    }

    if (articleService.stylePath === "") {
        $scope.stylePath = $scope.themeSelect({label: 'light'});
    }

    function initialize (data){
        if (angular.isUndefined(articleService.articles.length)) {
            articleService.articles = data;
            $scope.articles = articleService.articles;
        }

        getArticle();
    }

    articleService.currentDisplayIndex = $routeParams.displayIndex;

    //QueryService.query('GET', 'GetArticles',{},{}).then(function (getArticles) {
    //        initialize(getArticles.data);
    //});

    $http.get('/articles/articles.json').then(function (jsonArticles){
        initialize(jsonArticles.data.Articles.Article)
    });

    function getArticle() {
        for (var i = 0; i < articleService.articles.length; i++) {
            if(articleService.articles[i].DisplayIndex == $routeParams.displayIndex) {
                $scope.article = articleService.articles[i];
            }
        }
        $scope.articles = articleService.articles;
    };
}]);
