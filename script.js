function clicki(val) {
    document.getElementById("disbox").value = document.getElementById("disbox").value + val
}
function clearInput() {
    document.getElementById("disbox").value = "";
}
function ans() {
    var r = document.getElementById("disbox").value
    var res = eval(r)

    document.getElementById("disbox").value = res

}