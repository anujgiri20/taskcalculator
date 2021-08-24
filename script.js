var input1=document.createElement('input')
input1.setAttribute('value','1')
input1.setAttribute('type','button')
input1.addEventListener('click',foo1)



var input2=document.createElement('input')
input2.setAttribute('value','2')
input2.setAttribute('type','button')
input2.addEventListener('click',foo2)

var input3=document.createElement('input')
input3.setAttribute('value','3')
input3.setAttribute('type','button')
input3.addEventListener('click',foo3)

var input4=document.createElement('input')
input4.setAttribute('value','4')
input4.setAttribute('type','button')
input4.addEventListener('click',foo4)

var input5=document.createElement('input')
input5.setAttribute('value','5')
input5.setAttribute('type','button')
input5.addEventListener('click',foo5)

var input6=document.createElement('input')
input6.setAttribute('value','6')
input6.setAttribute('type','button')
input6.addEventListener('click',foo6)

var input7=document.createElement('input')
input7.setAttribute('value','7')
input7.setAttribute('type','button')
input7.addEventListener('click',foo7)

var input8=document.createElement('input')
input8.setAttribute('value','8')
input8.setAttribute('type','button')
input8.addEventListener('click',foo8)

var input9=document.createElement('input')
input9.setAttribute('value','9')
input9.setAttribute('type','button')
input9.addEventListener('click',foo9)

var input0=document.createElement('input')
input0.setAttribute('value','0')
input0.setAttribute('type','button')
input0.addEventListener('click',foo0)

var inputp=document.createElement('input')
inputp.setAttribute('value','+')
inputp.setAttribute('type','button')
inputp.addEventListener('click',foop)

var inputmul=document.createElement('input')
inputmul.setAttribute('value','*')
inputmul.setAttribute('type','button')
inputmul.addEventListener('click',foomul)

var inputsub=document.createElement('input')
inputsub.setAttribute('value','-')
inputsub.setAttribute('type','button')
inputsub.addEventListener('click',foosub)

var inputdiv=document.createElement('input')
inputdiv.setAttribute('value','/')
inputdiv.setAttribute('type','button')
inputdiv.addEventListener('click',foodiv)

var inputequal=document.createElement('input')
inputequal.setAttribute('value','=')
inputequal.setAttribute('type','button')
inputequal.addEventListener('click',fooequal)


var inputdis=document.createElement('input')
inputdis.setAttribute('type','text')
inputdis.setAttribute('id','result')


var inputclear=document.createElement('input')
inputclear.setAttribute('value','c')
inputclear.setAttribute('type','button')
inputclear.addEventListener('click',clear)

var table=document.createElement('table')
table.setAttribute('class','table')

var row1=document.createElement("tr")
var row2=document.createElement("tr")
var row3=document.createElement("tr")
var row4=document.createElement("tr")
var row5=document.createElement("tr")


function dis(val)
{
    document.getElementById("result").value+=val
}

var td11=document.createElement('td')

td11.append(inputdis)
td11.setAttribute('colspan','4')
row1.append(td11)
td11.setAttribute('class',"display")



var td21=document.createElement('td')

var td22=document.createElement('td')
var td23=document.createElement('td')
var td24=document.createElement('td')

td21.append(input1)
td22.append(input2)
td23.append(input3)
td24.append(inputp)

row2.append(td21,td22,td23,td24)


var td31=document.createElement('td')
var td32=document.createElement('td')
var td33=document.createElement('td')
var td34=document.createElement('td')
td21.style.borderTop= "0px"
td22.style.borderTop= "0px"
td23.style.borderTop= "0px"
td24.style.borderTop= "0px"
td11.style.borderTop= "0px"



td31.append(input4)
td32.append(input5)
td33.append(input6)
td34.append(inputsub)

row3.append(td31,td32,td33,td34)


var td41=document.createElement('td')
var td42=document.createElement('td')
var td43=document.createElement('td')
var td44=document.createElement('td')

td41.append(input7)
td42.append(input8)
td43.append(input9)
td44.append(inputdiv)

row4.append(td41,td42,td43,td44)



var td51=document.createElement('td')
var td52=document.createElement('td')
var td53=document.createElement('td')
var td54=document.createElement('td')

td51.append(inputclear)
td52.append(input0)
td53.append(inputequal)
td54.append(inputmul)

row5.append(td51,td52,td53,td54)


table.append(row1,row2,row3,row4,row5)


function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

td31.style.borderTop= "0px"
td32.style.borderTop= "0px"
td33.style.borderTop= "0px"
td34.style.borderTop= "0px"
td41.style.borderTop= "0px"
td42.style.borderTop= "0px"
td43.style.borderTop= "0px"
td44.style.borderTop= "0px"
td51.style.borderTop= "0px"
td52.style.borderTop= "0px"
td53.style.borderTop= "0px"
td54.style.borderTop= "0px"

row1.setAttribute('class','row1')
row2.setAttribute('class','row2')
row3.setAttribute('class','row3')
row4.setAttribute('class','row4')
row5.setAttribute('class','row5')


function foo1()
{
    dis("1")
}
function foo2()
{
    dis("2")
}
function foo3()
{
    dis("3")
}
function foo4()
{
    dis("4")
}
function foo5()
{
    dis("5")
}
function foo6()
{
    dis("6")
}
function foo7()
{
    dis("7")
}
function foo8()
{
    dis("8")
}
function foo9()
{
    dis("9")
}
function foo0()
{
    dis("0")
}
function foop()
{
 dis("+")   
}
function foomul()
{
    dis("*")
}
function foodiv()
{
    dis("/")
}
function foosub()
{
    dis("-")
}
function fooequal()
{
    solve()
}
function clear()
{
clr();
}

  function clr()
  {
      document.getElementById("result").value = ""
  }

var container=document.createElement('div')
container.setAttribute('class','container')
var divv=document.createElement('div')
divv.setAttribute('class','row')
var div1=document.createElement("div")
div1.setAttribute('class','col-lg-4')
div1.setAttribute('class','col-md-4')
div1.setAttribute('class','col-sm-4')

div1.append(table)
divv.append(div1)
container.append(divv)
document.body.append(container)