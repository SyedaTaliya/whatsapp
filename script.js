axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function(response) {
        // handle success
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {

            let msg = response.data[i];

            document.querySelector("ul").innerHTML +=
                `
        <li>
            <div class="whatsapp-profilepic">
                <img src=${msg.profilePic}>
            </div>
            <div class="whatsapp-contact">
                <div class="whatsapp-head">
                    <span class="whatsapp-name">${msg.name}</span>
                    <span class="whatsapp-time">${msg.time}</span>
                </div>
                <div class="whatsapp-message">
                    <span class="whatsapp-msglines">${msg.firstLine}</span>
                    <span class="whatsapp-unread" style="">${msg.numbUnread}</span>
                </div>
            </div>
        </li>
        `

            if (msg.numbUnread === 0) {
                document.querySelector(".whatsapp-unread").style = "display: none";
            }
            else{
                console.log("hello");
            }
        }
        


    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });