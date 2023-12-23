var qoute=[
    {'qoute':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, hic.",
      'auther': "--Elbert Hubbard"
},

{'qoute':"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, perferendis",
'auther': "--Frank Sinatra"
},

{'qoute':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sapiente",
'auther': "--Frank Sinatra"
},
]

function qoutes(){
    var num=Math.floor(Math.random()*qoute.length)
    console.log(num);
    document.getElementById("quote").innerHTML=qoute[num].qoute;
    document.getElementById("auther").innerHTML=qoute[num].auther;
}