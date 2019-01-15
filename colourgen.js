function makeShade() {

newColour = new Array("1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"0")
colourCt = newColour.length

randomRed = Math.floor((Math.random() * colourCt))
redRate = newColour[randomRed]

randomGreen = Math.floor((Math.random() * colourCt))
greenRate = newColour[randomGreen]

randomBlue = Math.floor((Math.random() * colourCt))
blueRate = newColour[randomBlue]

//This writes the info to a new page
parent.loadloc.document.write("<HTML><HEAD>");
parent.loadloc.document.write("<TITLE>Random Colour<\/TITLE>");
parent.loadloc.document.write("<LINK REL=stylesheet TYPE='text\/css' HREF='visions.css'>");
parent.loadloc.document.write("<\/HEAD>");
parent.loadloc.document.write("<BODY>");	
parent.loadloc.document.write("<TABLE CLASS='gen' ALIGN='center'><TR><TD>");
parent.loadloc.document.write("colour=#" + redRate + redRate + greenRate + greenRate + blueRate + blueRate + "<\/TD><\/TR>");
parent.loadloc.document.write("<TR><TD BGCOLOR=#" + redRate + redRate + greenRate + greenRate + blueRate + blueRate + ">&nbsp\;");
parent.loadloc.document.write("<\/TD><\/TR><\/TABLE>");
parent.loadloc.document.write("<BR><A HREF='javascript:history.go(+1)' STYLE='float:right\;'>&gt;&gt;</A><A HREF='javascript:history.go(-1)'>&lt;&lt;</A>");
parent.loadloc.document.write("<\/BODY><\/HTML>");
parent.loadloc.document.close()

}