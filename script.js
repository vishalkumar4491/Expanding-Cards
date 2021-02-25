const panels = document.querySelectorAll(".panel");

panels.forEach(function(panel){
    panel.addEventListener('click', function(){
        // remove all the active classes from all
        removeClasses()
        // adding the class 'active' 
        panel.classList.add('active')
    })
})


function removeClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}