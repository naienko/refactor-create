function pressPlay() {

//This checks for a name in the field
	if (genForm.nameArea.value == "") {
	alert("You must enter a character name.")
	genForm.nameArea.focus()
	return false
	} 
else 
personName = document.genForm.nameArea.value

//This sets the gender
var male = 0;
var female = 0;
var aeris = 0;

	for (i = 0; i < genForm.one.length; i++) if (genForm.one[i].checked) value = genForm.one[i].value;
		if (value == "2") { 
			male++;
		}
		if (value == "1") { 
			female++;
		}

var safeSex = "aeris"; 
i = aeris;

if (female> i) { safeSex = "female"; i = female; genderType = 1; }
if (male> i) { safeSex = "male"; i = male; genderType = 2; }

//This sets if the character is an anime character
var anime = 0;
var human = 0;
var tifa = 0;

	for (i = 0; i < genForm.two.length; i++) if (genForm.two[i].checked) value = genForm.two[i].value;
		if (value == "1") { 
			anime++;
		}
		if (value == "2") { 
			human++;
		}

var colorStyle = "tifa"; 
i = tifa;

if (anime> i) { colorStyle = "anime"; i = anime; colorType = 1; }
if (human> i) { colorStyle = "normal"; i = human; colorType = 2; }

//This sets skin colour
skinTone = new Array("porcelain pale",
		"porcelain rose",
		"creamy peach",
		"rose peach",
		"rose golden",
		"golden tan",
		"tan",
		"dark tan",
		"deep brown",
		"black")
skinCt = skinTone.length
randomSkin = Math.floor((Math.random() * skinCt))
descSkin = skinTone[randomSkin]

//This sets voice based on gender
girlTone = new Array("high soprano",
		"mezzosoprano",
		"high alto",
		"low alto",
		"contralto",
		"operatic soprano")
maleTone = new Array("low alto",
		"tenor",
		"bass",
		"treble",
		"baritone")

if (genderType == 1) {
girlCt = girlTone.length
randomVoice = Math.floor((Math.random() * girlCt))
descVoice = girlTone[randomVoice]
}
else {
	if (genderType == 2) {
	maleCt = maleTone.length
	randomVoice = Math.floor((Math.random() * maleCt))
	descVoice = maleTone[randomVoice]
	}
}

//This sets eye colour based on character type
animeEye = new Array("ice blue",
		"crystal blue",
		"true blue",
		"dark grayblue",
		"dark blue",
		"sea bluegreen",
		"bluegreen",
		"dark bluegreen",
		"teal",
		"dark graygreen",
		"true green",
		"pale green",
		"dark hazel",
		"hazel green",
		"olive green",
		"light brown",
		"true brown",
		"dark brown",
		"black",
		"silver",
		"gray",
		"gold",
		"amber",
		"true violet",
		"dark violet",
		"red",
		"russet",
		"lavender",
		"magenta",
		"hot pink",
		"pink",
		"purple")

humanEye = new Array("ice blue",
		"crystal blue",
		"true blue",
		"dark grayblue",
		"dark blue",
		"sea bluegreen",
		"bluegreen",
		"dark bluegreen",
		"teal",
		"dark graygreen",
		"true green",
		"pale green",
		"dark hazel",
		"hazel green",
		"olive green",
		"light brown",
		"true brown",
		"dark brown",
		"gray")

if (colorType == 1) {
animeEyeCt = animeEye.length
randomEye = Math.floor((Math.random() * animeEyeCt))
descEye = animeEye[randomEye]
}
else {
	if (colorType == 2) {
	humanEyeCt = humanEye.length
	randomEye = Math.floor((Math.random() * humanEyeCt))
	descEye = humanEye[randomEye]
	}
}

//This sets the shape of the face
faceShape = new Array("square",
		"round",
		"oval",
		"heart",
		"triangle")
shapeCt = faceShape.length
randomShape = Math.floor((Math.random() * shapeCt))
descFace = faceShape[randomShape]

//This sets build based on gender
girlBuild = new Array("dancer\'s",
		"big-boned",
		"medium",
		"slender and fragile",
		"sensual",
		"curvaceous",
		"muscled")
maleBuild = new Array("dancer\'s",
		"big-boned",
		"slender and fragile",
		"medium",
		"muscled",
		"football player")

if (genderType == 1) {
girlBCt = girlBuild.length
randomBuild = Math.floor((Math.random() * girlBCt))
descBuild = girlBuild[randomBuild]
}
else {
	if (genderType == 2) {
	maleBCt = maleBuild.length
	randomBuild = Math.floor((Math.random() * maleBCt))
	descBuild = maleBuild[randomBuild]
	}
}

//This sets identifying marks
specMark = new Array("facial scar",
		"body scar",
		"limp",
		"Vulcan eyebrows",
		"tattoo",
		"body piercing",
		"freckles",
		"slanted eyes",
		"eye-glasses",
		"long nails",
		"strong chin",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark")
markCt = specMark.length
randomMark = Math.floor((Math.random() * markCt))
descMark = specMark[randomMark]

//This sets more identifying marks
spec2Mark = new Array("facial scar",
		"body scar",
		"limp",
		"Vulcan eyebrows",
		"tattoo",
		"body piercing",
		"freckles",
		"slanted eyes",
		"eye-glasses",
		"long nails",
		"strong chin",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark",
		"no mark")
mark2Ct = spec2Mark.length
random2Mark = Math.floor((Math.random() * mark2Ct))
desc2Mark = spec2Mark[random2Mark]

if (random2Mark == randomMark) {
	mark2Ct = spec2Mark.length
	random2Mark = Math.floor((Math.random() * mark2Ct))
	desc2Mark = spec2Mark[random2Mark]
	}

//This sets height
bodyHeight = new Array("4\'11\"",
		"5\'0\"",
		"5\'1\"",
		"5\'2\"",
		"5\'3\"",
		"5\'4\"",
		"5\'5\"",
		"5\'6\"",
		"5\'7\"",
		"5\'8\"",
		"5\'9\"",
		"5\'10\"",
		"5\'11\"",
		"6\'0\"",
		"6\'1\"",
		"6\'2\"",
		"6\'3\"",
		"6\'4\"")
heightCt = bodyHeight.length
randomHeight = Math.floor((Math.random() * heightCt))
descHeight = bodyHeight[randomHeight]

//This sets hair colour based on character type
animeHair = new Array("black with red highlights",
		"black with blue highlights",
		"black with silver highlights",
		"black with green highlights",
		"black with purple highlights",
		"black with brown highlights",
		"dark brown",
		"golden brown",
		"true brown",
		"sepia brown",
		"dark blonde",
		"honey blonde",
		"gold blonde",
		"silver blonde",
		"silver",
		"sea green",
		"purple",
		"lavender",
		"pink",
		"brilliant red",
		"orange",
		"true green",
		"medium blue",
		"midnight blue",
		"auburn",
		"true red",
		"strawberry blonde")

humanHair = new Array("black with red highlights",
		"black with silver highlights",
		"black with brown highlights",
		"dark brown",
		"golden brown",
		"mousy brown",
		"true brown",
		"sepia brown",
		"dark blonde",
		"honey blonde",
		"gold blonde",
		"light blonde",
		"silver blonde",
		"mousy blonde",
		"brown red",
		"auburn",
		"true red",
		"light red",
		"strawberry blonde")

if (colorType == 1) {
animeHairCt = animeHair.length
randomHair = Math.floor((Math.random() * animeHairCt))
descHair = animeHair[randomHair]
}
else {
	if (colorType == 2) {
	humanHairCt = humanHair.length
	randomHair = Math.floor((Math.random() * humanHairCt))
	descHair = humanHair[randomHair]
	}
}

//This sets hair type
hairFlavour = new Array("straight",
		"slightly wavy",
		"very wavy",
		"slightly curly",
		"curly",
		"unmanageably curly")
flavourCt = hairFlavour.length
randomFlavour = Math.floor((Math.random() * flavourCt))
descFlavour = hairFlavour[randomFlavour]

//This sets bangs
hairBangs = new Array("short bangs",
		"no bangs",
		"high pointed bangs",
		"bangs that cover one eye")
bangsCt = hairBangs.length
randomBangs = Math.floor((Math.random() * bangsCt))
descBangs = hairBangs[randomBangs]

//This sets the side the hair parts on
hairPart = new Array("leftside part",
		"rightside part",
		"center part",
		"no part")
partCt = hairPart.length
randomPart = Math.floor((Math.random() * partCt))
descPart = hairPart[randomPart]

//This sets female hair style
function girlStyleGo() {
hairDown = new Array("forehead",
		"ear",
		"chin",
		"shoulder blade",
		"midback",
		"waist",
		"knee")
shortStyle = new Array("pageboy",
		"braided half ponytail",
		"duchess braid",
		"braided tieback",
		"butterfly clipup",
		"half ponytail",
		"half french braid")
longStyle = new Array("braid",
		"braided ponytail",
		"braided half ponytail",
		"duchess braid",
		"braided tieback",
		"twin braids",
		"braided coronet",
		"braided bun",
		"rope braid",
		"french twist",
		"bun",
		"butterfly clipup",
		"half ponytail",
		"twin tails",
		"low ponytail",
		"high ponytail",
		"twin french braids",
		"french braid with bun",
		"half french braid",
		"french braid",
		"dutch braid",
		"dutch french braid")
lengthCt = hairDown.length
lstyleCt = longStyle.length
sstyleCt = shortStyle.length
randomDown = Math.floor((Math.random() * lengthCt))

if (randomDown == 0) {
descStyle = "no style"
}
else {
	if (randomDown == 1) {
	randomStyle = Math.floor((Math.random() * sstyleCt))
	descStyle = shortStyle[randomStyle]
	}
	else {
		if (randomDown == 2) {
	randomStyle = Math.floor((Math.random() * sstyleCt))
	descStyle = shortStyle[randomStyle]
	}
else {
	randomStyle = Math.floor((Math.random() * lstyleCt))
	descStyle = longStyle[randomStyle]
		}
	}
}

descDown = hairDown[randomDown] 
}

//This sets male hair style
function maleStyleGo() {
hairDown = new Array("forehead",
		"ear",
		"chin",
		"shoulder blade",
		"midback",
		"waist",
		"knee")
shortStyle = new Array("pageboy",
		"braided half ponytail",
		"half ponytail")
longStyle = new Array("braid",
		"braided ponytail",
		"braided half ponytail",
		"half ponytail",
		"low ponytail",
		"high ponytail",
		"french braid",
		"dutch braid",
		"dutch french braid")
lengthCt = hairDown.length
lstyleCt = longStyle.length
sstyleCt = shortStyle.length
randomDown = Math.floor((Math.random() * lengthCt))

if (randomDown == 0) {
descStyle = "no style"
}
else {
	if (randomDown == 1) {
	randomStyle = Math.floor((Math.random() * sstyleCt))
	descStyle = shortStyle[randomStyle]
	}
	else {
		if (randomDown == 2) {
	randomStyle = Math.floor((Math.random() * sstyleCt))
	descStyle = shortStyle[randomStyle]
	}
else {
	randomStyle = Math.floor((Math.random() * lstyleCt))
	descStyle = longStyle[randomStyle]
		}
	}
}

descDown = hairDown[randomDown] 
}

//This runs a hair style based on gender
function genderHair() {
if (genderType == 1) {
girlStyleGo()
}
	else {
		if (genderType == 2) {
		maleStyleGo()
		}
	}
}

genderHair()

//This writes the info to a new page
parent.loadloc.document.write("<HTML><HEAD>");
parent.loadloc.document.write("<TITLE>" + personName + "\'s Appearance<\/TITLE>");
parent.loadloc.document.write("<LINK REL=stylesheet TYPE='text\/css' HREF='visions.css'>");
parent.loadloc.document.write("<\/HEAD>");
parent.loadloc.document.write("<BODY>");	
parent.loadloc.document.write("Your character\'s name is " + personName + ".<BR>Gender\: " + safeSex + "<BR>Style\: " + colorStyle + "<BR><BR>Face Shape\: " + descFace + "<BR>Skin Tone\: " + descSkin + "<BR>Eye Colour\: " + descEye + "<BR>Hair Colour\: " + descHair + "<BR>Hair Characteristics\: " + descFlavour + ", " + descDown + " length, " + descStyle + ", " + descBangs + ", " + descPart + "<BR>Height\: " + descHeight + "<BR>Build\: " + descBuild + "<BR>Special Marks\: " + descMark + ", " + desc2Mark + "<BR>Voice\: " + descVoice);
parent.loadloc.document.write("<BR><A HREF='javascript:history.go(+1)' STYLE='float:right\;'>&gt;&gt;</A><A HREF='javascript:history.go(-1)'>&lt;&lt;</A>");
parent.loadloc.document.write("<\/BODY><\/HTML>");
parent.loadloc.document.close()

}