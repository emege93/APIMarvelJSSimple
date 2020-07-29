const marvel = {
    render:() => {

 

        const urlAPI = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=7a223801639512aa33a05f17b668c180&hash=0cb41251b618902745425a61f26205e4';

        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const event of json.data.results){
                console.log(json);
                let urlEvent = event.urls[0].url;
                contentHTML += `
                <div class="col-md-4">
                    <a href="${urlEvent}" target="_blank">
                        <img src="${event.thumbnail.path}.${event.thumbnail.extension}" alt="${event.title}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${event.title}</h3>
                </div>
                `;
            }
            container.innerHTML = contentHTML;
        });
    }
};
marvel.render();