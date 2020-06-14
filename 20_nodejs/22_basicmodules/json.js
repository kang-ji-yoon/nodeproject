var singer = {
    name: "여자친구",
    members: ["신비","유주","소원","엄지","예린","은하"],
    songs: {
        song: [
            {
                title: "너 그리고 나",
                year: 2016
            },
            {
                title: "시간을 달려서",
                year: 2015
            }
        ]
    }
}
var str = JSON.stringify(singer);    // 객체 -> 문자열 생성
console.log(str);
console.log(typeof str);

var parsed = JSON.parse(str);        // 문자열 -> 객체 생성
console.log(parsed);
console.log(typeof parsed);

console.log(parsed.songs.song[0].title);   // 너 그리고 나 출력
console.log(parsed.songs.song[1].year);    // 2015 출력