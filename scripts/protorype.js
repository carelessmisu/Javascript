var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function(){
    return this.lastName + '' + this.firstName;
};

var men = new Member('裕太', '三須');
console.log(men.getName());

