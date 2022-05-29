var Member = function(){};

Member.prototype.sex = '男';
var men1 = new Member();
var men2 = new Member();

console.log(men1.sex + '|' + men2.sex);
men2.sex = '女';
console.log(men1.sex + '|' + men2.sex);
