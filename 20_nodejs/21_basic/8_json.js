const singer = {
    name : "아이즈원",
    members : ["권은비","사쿠라","이채연","강혜원","최예나","김채원","김민주","나코","히토미","조유리","안유진","장원영" ],
    songs : [
        {
            title: "Fiesta",
            year: 2020
        },
        {
            title: "Violeta",
            year: 2019
        },
        {
            title: "LaVienRose",
            year: 2018
        }
    ]
};

//조유리 출력
console.log(singer.members[9]);
//비올레타 출력
console.log(singer.songs[1].title);

//json object -> string(http, tcp/ip)
const str = JSON.stringify(singer)
console.log(str);

// string -> json object
console.log(JSON.parse(str));
