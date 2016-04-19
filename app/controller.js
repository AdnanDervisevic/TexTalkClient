angular.module('textalkArbetsProv').
controller('MainController', ['QueryService', 'articleService', '$scope', '$routeParams',
function(QueryService, articleService, $scope, $routeParams) {
    $scope.article = {};
    $scope.articles = {};
    $scope.stylePath = "";
    $scope.themes =
    [
        {  label: 'Light' },
        {  label: 'Dark' }
    ];

    if (articleService.stylePath === "") {
        $scope.stylePath = selectTheme('Light');
    }

    function selectTheme (theme) {
        articleService.stylePath = 'styles/light/style.css';

        if (theme === 'Dark') {
            articleService.stylePath = 'styles/dark/style.css';
        }
        console.warn(articleService.stylePath);
    }

    function initialize (data){
        if (angular.isUndefined(articleService.articles.length)) {
            articleService.articles = data;
            $scope.articles = articleService.articles;
        }

        getArticle();
    }

    articleService.currentDisplayIndex = $routeParams.displayIndex;

    QueryService.query('GET', 'GetArticles',{},{}).then(function (getArticles) {
            initialize(getArticles.data)
    });

    $scope.themeSelect = function(theme) {
        if (theme.label === 'Light') {
            selectTheme('Light');
        }
        else {
            selectTheme('Dark');
        }
    }

    function getArticle() {
        for (var i = 0; i < articleService.articles.length; i++) {
            if(articleService.articles[i].DisplayIndex == $routeParams.displayIndex) {
                $scope.article = articleService.articles[i];
            }
        }
    };
}]);
