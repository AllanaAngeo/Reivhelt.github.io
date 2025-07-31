function SelectAbtMe(){
    document.getElementById("footer").innerText = "IT WORKS";}
function SelectJournal(){
    document.getElementById("NaviName").innerText = "Journal"}
function SelectBlog(){
    document.getElementById("navibox").innerHTML = "<iframe id="navibox" src="navibox.html#blog" scrolling="no"></iframe>";
    document.getElementById("EntryContent").src = "Blogs/BlogLanding.html";}
function SelectPort(){
    document.getElementById("NaviName").innerText = "Portfolio"}
function SelectAlbum(){
    document.getElementById("NaviName").innerText = "Albums"}

function EntryContentChange(newpage) {
								document.getElementById("EntryContent").src = newpage;
						}
