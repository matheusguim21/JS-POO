import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";
import { Input } from "./Input.js";


const title =  new Component('h1', 'body',{textContent: 'Olá Mundo'} );
title.render()
console.log(title)
title.tag = 'h3';
title.build().render()


const form = new Form('body', {style:"background-color:#000; width: 400px; height: 600px; color:#fff;display:flex; flex-direction:column; justify-content:center; align-items:center ",})
 
const label= new Label('Nome Completo',form, {style:"width:60%; border:1px solid #fff", htmlFor:'nameInput'})

const input = new Input(form, {id:'nameInput', type:'text', name:'name' })

form.render()
form.addChildren(label, input)