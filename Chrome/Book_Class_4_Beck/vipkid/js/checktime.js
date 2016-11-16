;~function() {
    var counter= 0,
        timer = 1000,
		bookDate = 1,
		bookHour = 12,
		bookMinute = 0,
		bookSwitch = true;
		
	var newurl1 = 'http://www.vipkid.com.cn/parent/preschedule?teacherId=2126035&seaType=1&week=2',
		newurl2 = 'http://www.vipkid.com.cn/parent/preschedule?teacherId=1332296&seaType=1&week=2',
		newurl3 = 'http://www.vipkid.com.cn/parent/preschedule?teacherId=1136521&seaType=1&week=2',
		newurl4 = 'http://www.vipkid.com.cn/parent/preschedule?teacherId=25213&seaType=1&week=2';
		
	var urls = [newurl1, newurl2, newurl3, newurl4];
	
	var urltest = 'http://www.vipkid.com.cn/parent/preschedule?teacherId=25213&seaType=1&teacherName=&week=2';
	
	function callbackup(tab) {
		console.info(tab.status);
		chrome.tabs.executeScript(tab.id, {file: "js/jquery.1.9.1.min.js"});
		chrome.tabs.executeScript(tab.id, {file: "js/book.js"}, chrome.tabs.reload(tab.id));
	}
	
	function bookClass(){
		console.log("Start");
		var i = Math.round(Math.random()*3); 
		chrome.tabs.create({url:urls[i]}, callbackup);
		console.info("Done");
	}
	
	longtimer = setInterval(function() {
		var d = new Date();
		if (d.getDay() === bookDate) {		
			if (d.getHours() === bookHour) {
				if (d.getMinutes() == bookMinute) {
					if(bookSwitch) {
						console.info("OK, time is up.");
						bookClass();
						bookSwitch = false;
					}
				}
			}
		} else {
			bookSwitch = true;
		}
	}, timer);
}()