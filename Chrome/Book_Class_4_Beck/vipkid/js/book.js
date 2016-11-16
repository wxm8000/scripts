(function(){
	//row 22 is 20:00
	var rowid = 22;
	var classes = document.getElementById("ykteacher").getElementsByTagName("tr")[rowid].getElementsByTagName("td");
	var classMon = classes[0].childNodes;
	var classWen = classes[2].childNodes;
	var classThu = classes[3].childNodes;
	function bookClass(node) {
		var listIn = node.attributes['onclick'].textContent.slice(16,-1).split(",");
		$.ajax({
			type: "POST",
			url: '/parent/book',
			data: {
				'onlineClassId':paserInt(listIn[3]),
				'oldOnlineClassId':paserInt(listIn[4]),
				'courseType':'MAJOR'},
		});
	}
	if (classMon.length === 5) {
		bookClass(classMon[3]);
	}
	if (classWen.length === 5) {
		bookClass(classWen[3]);
	}
	if (classThu.length === 5) {
		bookClass(classThu[3]);
	}
})();