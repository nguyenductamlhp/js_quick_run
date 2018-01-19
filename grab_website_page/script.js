function run() {
    alert("Hello World")
}
function grab_website_page() {
    console.log("grab_website_page");
    var url = "https://www.viettelpost.com.vn/Tracking?KEY=";
    var code = "420324830"
    var link = url + code;
    console.log(link);
    $.get(url + code, function(response) {
        console.log(response);
    });
}