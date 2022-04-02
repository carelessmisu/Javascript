function hoge() {
    var args = Array.from(arguments);
    console.log(args.join(' ／ '));
}
hoge('Angular', 'React', 'Backbone');