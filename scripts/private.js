function Triangle(){
    // プライベートプロパティの定義
    var _base;
    var _height;

    // プライペートメソッドの定義 (引数が正の数値であるかをチェック)
    var _checkArgs = function(val) {
        return (typeof val === 'number' && val > 0);
    }

    // プライベートメンバーにアクセスするためのメソッドを定義
    this.setBase = function(base) {
        if (_checkArgs(base)) {_base = base;}
    }
    this.getBase = function() {return _base;}

    this.setHeight = function(height) {
        if (_checkArgs(height)) {_height = height}
    }
    this.getHeight = function() { return _height}
}

// プライベートメンバーにアクセスしない普通のメソッドを定義
Triangle.prototype.getAria = function(){
    return this.getBase() * this.getHeight() / 2;
}
var t = new Triangle();
t_base = 10;
t_height = 2;
console.log('三角形の面積:' + t.getAria());

t.setBase(10);
t.setHeight(2);
console.log('三角形の底辺:' + t.getBase());
console.log('三角形の高さ:' + t.getHeight());
console.log('三角形の面積:' + t.getAria());
