function myFunction () {
    var myMusic = {
        001: {
            "artist": "Billy Joel",
            "tittle": "Piano Man",
            "relase_year": 1973,
            "formats": {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            "gold": true
        },
        002: {
            "artist" : "Cunami",
            "tittle": "Dzungla",
            "relase_year" : 2020,
            "id" : 002,
            "formats" : {
                1: "YT",
                2: "SP",
                3: "DE" 
            }

        }
    };
    
    
};

console.log(myFunction[1].artist);
module.exports = myFunction;