var Elixir = require('laravel-elixir');
var gulp   = require('gulp');
var shell  = require('gulp-shell');

var Task = Elixir.Task;

Elixir.extend('laroute', function () {
	new Task('laroute', function () {
		return (
			gulp.src('')
				.pipe(shell('php artisan laroute:generate'))
		);
	})
	.watch('./app/Http/routes.php');
});
