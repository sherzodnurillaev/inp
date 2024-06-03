let inps = document.querySelectorAll('input')

const nameRegex = {
    name: /^[A-Za-z]+$/,
    phone: /^(\+998)?[ -]?(\d{2})?[ -]?(\d{3})[ -]?(\d{4})$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^.{8,}$/,
} 

inps.forEach((inp, y) => {
    inp.onkeyup = () => {
        let text = inp.name
        let tes = nameRegex[text]
        if (tes.test(inp.value)) {
            inp.style.border = '1px solid grey'
        } else {
            inp.style.border = '2px solid red'
        }
    }
})
