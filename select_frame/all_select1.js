//这个是用的面向对象的方法做的，传入参数我就直接通过id和tagName，传入其他参数应该还可以通过继承来实现。。。
function Allselect (allClickId,otherClickTagName){
	this.all_select = document.getElementById(allClickId);
	this.other_click = document.getElementsByTagName(otherClickTagName);
}
Allselect.prototype.selectAll = function() {
	var _this = this;
	_this.all_select.onclick = function(){
		for (var i = 0; i < _this.other_click.length; i++) {
			if (_this.all_select.checked == true) {
				_this.other_click[i].checked = true;
			}
			else{
				_this.other_click[i].checked == false;
			};
		};
	};
};