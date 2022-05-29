var Area = function(){}; // コンンストラクター

Area.version = '1.0'; // 静的プロパティの定義

    // 静的メソッドtriangleの定義
Area.triangle = function(base, height) {
    return base * height / 2;
}

    // 静的メソッドのdiamondの定義
Area.diamond = function(width, height) {
    return width * height / 2;
}

console.log('Areaクラスのバージョン:' + Area.version); // 結果：1.0
console.log('三角形の面積：' + Area.triangle(5, 3)); // 結果：7.5

var a = new Area();
console.log('菱形の面積:' + a.diamond(10.2));
