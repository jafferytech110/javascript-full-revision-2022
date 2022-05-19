// a small text file stored on your computer to store and remember informaiton

// if cookies enabled
console.log(navigator.cookieEnabled)

//adding cookie
// document.cookie = "firstName = spongebob; expires=Sun, 1 January 2030 12:00:)) UTC; path=/"
// console.log(document.cookie)

deleteCookie('firstName')


setCookie('email','spong@gmail.com',365)

console.log(document.cookie)

// function to create vookies

function setCookie(name,value,expirationDate) {
    const date = new Date()
    date.setTime(date.getTime() + expirationDate * 24*60 *60*1000)
    let expires = `expires = ${date.toUTCString()}`
    document.cookie = `${name} = ${value}; ${expires}; path=/`
}

function deleteCookie(name) {
    setCookie(name,null,null)
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    let result
    cArray.forEach(ele => {
        if(ele.indexOf(name) == 0) {
            result = ele.substring(name.length+1)
        }
    })
    return result
}