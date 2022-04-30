function Home() {
    Component.call(this, `<div class="Home container"> 
        <header class="Home__header">
            <h2>no user loged => </h2>
            <button class="my">My Notes</button>
            <button class="edit">Edit my Notes</button>
            <button class="Home__logout">Logout</button>
        </header>

        <ul class="Home__list Container"></ul>

        <footer class="Home__footer Container">
            <button class="Home__addSticker">+</button>
        </footer>
    </div>`)
// LA CLAVE DE TODO ESTA AQUI ><
    // const editNotes = this.container.querySelector('.Home__editNotes')
    
    // editNotes.addEventListener('click', () => {
    //     const deleteList = this.container.querySelector('.Home__list')
    
    //     deleteList.innerHTML = ''
    // })

    

    const logoutButton = this.container.querySelector('.Home__logout')

    logoutButton.addEventListener('click', () => {
        delete sessionStorage.username
        
        app.remove(home)
        app.add(login)
    })

    const addStickerButton = this.container.querySelector('.Home__addSticker')
    
    addStickerButton.addEventListener('click', () => {      // en caso de click crea un nuevo sticker
        
        const sticker = new Sticker

        sticker.onClose(() => {  // ejecuto la funcion onclose de sticker que esta pendiente del boton close, y hace lo siguiente
            this.remove(sticker)
        })

        sticker.onSubmit(() => {
            this.remove(sticker)
        })

        this.add(sticker)

    })
    
    let list

    if (sessionStorage.username) {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setName(user.name)
        })


        retrieveNotes(sessionStorage.username, (error, data) => {
            if (error) {
                alert(error.message)
                return
            }
            
            
            if(list)
                this.remove(list)

            list = new List
            this.add(list)  // añado lista a home

            data.forEach(result => { 
                const li = document.createElement('li')
                li.classList.add('note');
                const h = document.createElement('h2')
                h.innerText = result.text

                li.appendChild(h)

                list.container.appendChild(li)
            })
        })
    }




    // boton edit   
    // -borra la lista de notas
    // -crea un OBJETO lista con stickers editables

    const edit = this.container.querySelector('.edit')
    edit.addEventListener('click', () => {

        if(list)
            this.remove(list)  // borro las listas actuales

        list = new List
        this.add(list)  // añado lista a home

        // genero las nuevas con edit
        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)
                return
            }

            notes.forEach(result => { 
                const li = document.createElement('li')
                li.classList.add('Sticker__form');
                const sticker = new Sticker
                sticker.container.querySelector('textarea').innerText = result.text

                li.appendChild(sticker.container)
                list.container.appendChild(li)
            })
        })
    })



    // boton my notes 
    // -borra la lista de notas
    // -crea un OBJETO lista con notas no editables

    const my = this.container.querySelector('.my')
    my.addEventListener('click', () => {

        if(list)
            this.remove(list)  // borro las listas actuales

        list = new List
        this.add(list)  // añado lista a home

        // genero las nuevas con edit
        retrieveNotes(sessionStorage.username, (error, data) => {
            if (error) {
                alert(error.message)
                return
            }

            data.forEach(result => { 
                const li = document.createElement('li')
                li.classList.add('note');
                const h = document.createElement('h2')
                h.innerText = result.text

                li.appendChild(h)

                list.container.appendChild(li)
            })
        })
    })
}


chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    title.innerText = `Hello!,  ${name} 📝`
}