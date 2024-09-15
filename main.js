function choesDvise(divise){

let checkUrwebsit = document.getElementById("checkUrwebsit");

switch (divise) {
    case 1:
        window.open(checkUrwebsit.value, "", `width=375, height=812`);
        break;
    case 2:
        window.open(checkUrwebsit.value, "", `width=412, height=869`);
        break;
    case 3:
        window.open(checkUrwebsit.value, "", `width=1024, height=1366`);
        break;
    case 4:
        window.open(checkUrwebsit.value, "", `width=1920, height=1080`);
        break;
    default:
        console.log("Invalid size selected");
}
}