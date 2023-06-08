localStorage.setItem('name' , 'Bob')
localStorage.removeItem('name')



sessionStorage.setItem('name' , 'John')
//sessionStorage.setItem('name' , 'aloic')
//console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')


document.cookie = 'name = kyloe; expires=' + new Date(2076,0,2)
.toUTCString()

document.cookie = 'lastName = jenner; expires=' + new Date(2076,0,2)
.toUTCString()


document.cookie = 'MiddleName = Mash; expires=' + new Date(2076,0,2)
.toUTCString()
