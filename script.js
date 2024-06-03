let inps = document.querySelectorAll('input');
const form = document.forms[0];

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

form.onsubmit = (e) => {
    e.preventDefault();

    let fn = new FormData(form);
    let i = {
        name: fn.get('name'),
        phone: fn.get('phone'), 
        email: fn.get('email'),
        password: fn.get('password'), 
    }
    

    console.log(i);
}
