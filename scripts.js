let triviaRepository = (function () {
    
    //array of categories
    const categories = [ "General Knowledge", "TV", "Movies", "History", "Science"]


    let genQList = [];
    let genapiUrl = 'https://opentdb.com/api.php?amount=20&category=9&type=multiple';

    let tvQList = [];
    let tvapiUrl = 'https://opentdb.com/api.php?amount=20&category=14&type=multiple';

    let movieQList = [];
    let movieapiUrl = 'https://opentdb.com/api.php?amount=20&category=11&type=multiple';

    let histQList = [];
    let histapiUrl = 'https://opentdb.com/api.php?amount=20&category=23&type=multiple';

    let sciQList = [];
    let sciapiUrl = 'https://opentdb.com/api.php?amount=20&category=17&type=multiple';


    //functions to get list of q's from each api

    function loadGenList() {
        return fetch(genapiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                add(genQ);
            });
        })
    }
    
    function loadTvList() {
        return fetch(tvapiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                add(tvQ);
            });
        })
    }

    function loadMovieList() {
        return fetch(movieapiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                add(movieQ);
            });
        })
    }

    function loadHistList() {
        return fetch(histapiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                add(histQ);
            });
        })
    }

    function loadSciList() {
        return fetch(sciapiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item){
                add(sciQ);
            })
        })
    }






    // add function
    function add () {

    }




    //return functions
    return {
        add: add,
    };

})();
