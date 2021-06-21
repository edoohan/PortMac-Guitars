function openGuitarDropdown() {

    // opening the category items
    
    const guitarCategory = document.getElementsByClassName('guitar-categories');
    if (guitarCategory.length > 0) {
        guitarCategory[0].classList.add('active');
    }

    // placing the right svg
    const guitarDropdownOpen = document.getElementsByClassName('guitar-dropdown-open');
    if (guitarDropdownOpen.length >0) {
        guitarDropdownOpen[0].classList.add('active');
    }

    // closing display of arrow
const guitarDropdownClosed = document.getElementsByClassName('guitar-dropdown-closed');
    if (guitarDropdownClosed.length >0) {
        guitarDropdownClosed[0].classList.remove('active');
    }

}

function closeGuitarDropdown() {

    // closing the category items
    const guitarCategory = document.getElementsByClassName('guitar-categories');
    if (guitarCategory.length > 0) {
        guitarCategory[0].classList.remove('active');
    }

    // placing the right svg
    const guitarDropdownOpen = document.getElementsByClassName('guitar-dropdown-open');
    if (guitarDropdownOpen.length >0) {
        guitarDropdownOpen[0].classList.remove('active');
    }

    // opening display of arrow
const guitarDropdownClosed = document.getElementsByClassName('guitar-dropdown-closed');
    if (guitarDropdownClosed.length >0) {
        guitarDropdownClosed[0].classList.add('active');
    }

}

function openMenuDropdown () {

    // opening dropdown menu
    closeMenuDropdownSearch()
    const menuDropdown = document.getElementsByClassName ('dropdown-menu');
    if (menuDropdown.length > 0) {
        menuDropdown [0].classList.add('active');

    }
}

function closeMenuDropdown (){
           // closing dropdown menu
           const menuDropdown = document.getElementsByClassName ('dropdown-menu');
           if (menuDropdown.length > 0) {
               menuDropdown [0].classList.remove('active');
    }
}


function openMenuDropdownSearch () {
    console.log ("test");
    closeMenuDropdown ()
    // opening search dropdown menu
    const menuDropdown = document.getElementsByClassName ('dropdown-search-menu');
    if (menuDropdown.length > 0) {
        menuDropdown [0].classList.add('active');

    }
}

function closeMenuDropdownSearch (){
           // closing search dropdown menu
           const menuDropdown = document.getElementsByClassName ('dropdown-search-menu');
           if (menuDropdown.length > 0) {
               menuDropdown [0].classList.remove('active');
    }
}

function closeDropdown () {
    closeMenuDropdownSearch();
    closeMenuDropdown();
}

