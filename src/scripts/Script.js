function OpenCloseList() {
    let buttonIsclicked = document.getElementById('dropdownlist');

    if (buttonIsclicked.style.display != "flex")
        buttonIsclicked.style.display = "flex";
    else buttonIsclicked.style.display = "none";
}

function SavedMode() {
    OpenCloseList();
    if (localStorage.getItem('ModeSave')) {
        let Mode = localStorage.getItem('ModeSave');
        ChangeMode(Mode);
    }
    else {
        localStorage.setItem('ModeSave', 'Light');
        document.getElementById("NavImage").src = "src\\assets\\logitechLight.png";
    }
}

function ChangeMode(Mode) {
    if (Mode == "Dark") {
        localStorage.setItem('ModeSave', 'Dark');
        document.getElementById("NavImage").src = "src\\assets\\logitechDark.png";
        document.documentElement.style.setProperty('--header-background-color', '#2f313e');
        document.documentElement.style.setProperty('--header-box-shadow-color', '#494C60');
        document.documentElement.style.setProperty('--nav-text-color', '#CCCCCC');
        document.documentElement.style.setProperty('--nav-background-color-hover', '#373949');
        document.documentElement.style.setProperty('--nav-text-color-hover', '#EEEEEE');
        document.documentElement.style.setProperty('--body-background-color', '#20222b');
        document.documentElement.style.setProperty('--wrapping-container-card-line-color', '#373949');
        document.documentElement.style.setProperty('--single-card-box-shadow-color', '#484c6080');
        document.documentElement.style.setProperty('--single-card-title-text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--single-card-description-text-color', '#CCCCCC');
        document.documentElement.style.setProperty('--single-card-buttons-box-shadow-color', '#5F637E');
        document.documentElement.style.setProperty('--single-card-buttons-text-color', '#000000');
        document.documentElement.style.setProperty('--single-card-badge-text-color', '#000000');
        document.documentElement.style.setProperty('--dropdown-box-shadow-color', '#373949');
        document.documentElement.style.setProperty('--dropdown-text-color', '#2f313e');
        document.documentElement.style.setProperty('--dropdown-content-box-shadow-color', '#373949');
        document.documentElement.style.setProperty('--footer-background-color', '#2f313e');
        document.documentElement.style.setProperty('--footer-text-color', '#CCCCCC');
        OpenCloseList();
    }

    if (Mode == "Light") {
        localStorage.setItem('ModeSave', 'Light');
        document.getElementById("NavImage").src = "src\\assets\\logitechLight.png";
        document.documentElement.style.setProperty('--header-background-color', '#F2F2F2');
        document.documentElement.style.setProperty('--header-box-shadow-color', '#00000033');
        document.documentElement.style.setProperty('--nav-text-color', '#777777');
        document.documentElement.style.setProperty('--nav-background-color-hover', '#ddd');
        document.documentElement.style.setProperty('--nav-text-color-hover', 'black');
        document.documentElement.style.setProperty('--body-background-color', 'white');
        document.documentElement.style.setProperty('--wrapping-container-card-line-color', '#F2F2F2');
        document.documentElement.style.setProperty('--single-card-box-shadow-color', '#00000033');
        document.documentElement.style.setProperty('--single-card-title-text-color', '#black');
        document.documentElement.style.setProperty('--single-card-description-text-color', '#777777');
        document.documentElement.style.setProperty('--single-card-buttons-box-shadow-color', '#00000033');
        document.documentElement.style.setProperty('--single-card-buttons-text-color', 'white');
        document.documentElement.style.setProperty('--single-card-badge-text-color', 'white');
        document.documentElement.style.setProperty('--dropdown-box-shadow-color', '#00000033');
        document.documentElement.style.setProperty('--dropdown-text-color', 'white');
        document.documentElement.style.setProperty('--dropdown-content-box-shadow-color', '#00000033');
        document.documentElement.style.setProperty('--footer-background-color', '#F2F2F2');
        document.documentElement.style.setProperty('--footer-text-color', '#777777');
        OpenCloseList();
    }
}
