/*这里就是个函数，传入参数就ok了，。。。确实我感觉这个没什么高级的地方，我现在只能做成这样了，望谅解。。
 allObj是一个单独的参数，而otherObj是一个数组形式的参数*/
function allSelect (allObj,otherObj) {
	allObj.onclick = function(){
		for (var i = 0; i < otherObj.length; i++) {
			if (allObj.checked == true) {
				otherObj[i].checked = true;
			}
			else{
				otherObj[i].checked = false;
			}
		};
	}
}