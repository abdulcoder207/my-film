const errorBtn = document.querySelectorAll('.error-btn');

errorBtn.forEach(link =>{
    link.addEventListener('click', (e) => {
        alert('Belum tersedia');
        e.preventDefault()
        });
})


function Search(){
    const query = document.getElementById("search-input").value.toLowerCase();
    const movieCard = document.querySelectorAll(".movie-card");

    movieCard.forEach(card =>{
        const title = card.querySelector(".movie-title").textContent.toLowerCase();
        if(title.includes(query)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    })
}
