$(function(){
	$('._hamburger').click(function(){
		$('._nav').toggle()
	})

	$('._work').each(function(index) {
			if (index > 2) {
				$(this).hide()
			}
		})
	$('._more-projects').click(function(){
		$('._work').each(function(index) {
			if (index > 2) {
				$(this).show()
			}
		})
		$('._more-projects').hide()
	})
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cdCQoJy5faGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5fbmF2JykudG9nZ2xlKClcclxuXHR9KVxyXG5cclxuXHQkKCcuX3dvcmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdGlmIChpbmRleCA+IDIpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmhpZGUoKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdCQoJy5fbW9yZS1wcm9qZWN0cycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuX3dvcmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdGlmIChpbmRleCA+IDIpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnNob3coKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0JCgnLl9tb3JlLXByb2plY3RzJykuaGlkZSgpXHJcblx0fSlcclxufSkiXX0=
