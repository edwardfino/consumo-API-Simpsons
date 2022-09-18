const listUsers = async ()=> {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const users = await response.json();

    let tableBody=``;
    users.forEach((user, index) => {
        tableBody+=`<tr>
        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.quote}</td>
        <td class='centered'>${user.character}</td>
        <td class='centered'>${user.Image}</td>
        <td class='centered'>${user.characterDirection}</td>
        </tr>`;
           
    });
    document.getElementById("tableBody_Users").innerHTML =tableBody;
    

};


window.addEventListener("load",function(){
    listUsers();
   
});