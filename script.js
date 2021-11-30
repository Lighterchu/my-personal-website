function ShowProjects()
{
    var x = document.getElementById("showing-projects");
    if (x.style.display === "none") {
        console.log("none")
      x.style.display = "none";
    } else {
        console.log("block")
      x.style.display = "block";
    }
}