var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

var men = new Member('裕太', '三須');

// インスタンス化の後にメソッドを追加
Member.prototype.getName = function(){
    return this.lastName + '' + this.firstName;
};

console.log(men.getName());

