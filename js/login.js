const login = document.querySelector('#login')
login.addEventListener('submit',(e)=>{
    e.preventDefault()

    const lemail = document.querySelector('#email').value
    const lpassword = document.querySelector('#password').value
    const User = JSON.parse(localStorage.getItem('users'))||[]
    const validUser = User.find(user => user.email === lemail && user.password === lpassword)

    if(!validUser){
        return alert('Usuario y/o contraseña incorrecta')
    }
        alert('Welcome user.email')
        localStorage.setItem('login_success', JSON.stringify(validUser))
        window.location.href = 'index.html'

})
