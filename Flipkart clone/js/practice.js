highlight = document.getElementsByClassName('highlight')
highlightblue = document.getElementsByClassName('highlightblue')

Array.from(highlight).forEach((element)=>{
     element.addEventListener('mouseover',(e)=>{
            width = e.target.clientWidth
            height = e.target.clientHeight
            e.target.style.width= (width + 8) + "px"
            e.target.style.height= (height + 8) + "px"
            
     })

     element.addEventListener('mouseout',(e)=>{
        width = e.target.clientWidth
        height = e.target.clientHeight
        e.target.style.width= (width - 8) + "px"
        e.target.style.height= (height - 8) + "px" 
     })
})

Array.from(highlightblue).forEach((element)=>{
     element.addEventListener('mouseover',(e)=>{
          e.target.nextElementSibling.style = 'color:blue;'
            
     })

     element.addEventListener('mouseout',(e)=>{
        e.target.nextElementSibling.style = 'color:black;'
     })
})

item = document.getElementsByClassName('item')


Array.from(item).forEach((element)=>{
element.addEventListener('click',()=>{
    location.href='description/';

})
})