/**
 * Tangram app
 * 
 */
const app = { 
    // container for all tangram models
    modelsEl : null,
    // container for the drawn figure of the selected model
    figurEl : null,
    // last CSS class for the figure element
    figureLastClass : null,
    // logo reset
    logo : null,

    // models container is listening for click event
    // and change the figure element class
    init : function () {
        this.modelsEl = document.querySelector('header .models');
        this.figureEl = document.querySelector('section#figure');
        this.logo = document.querySelector('header .logo');
        this.logo.addEventListener('click', (e) => {
            this.figureEl.classList.remove(this.figureLastClass);
        })
        this.modelsEl.addEventListener('click', (e) => {
            this.figureEl.classList.remove(this.figureLastClass);
            let modelNewClass="";
            // if click on li instead of img silhouette, we search for child's id
            if (e.target.children.length != 0){
                modelNewClass = e.target.children[0].id;
            }
            else {
                modelNewClass = e.target.id;
            }
            this.figureEl.classList.add(modelNewClass);
            this.figureLastClass = modelNewClass;
        })
    }
}

app.init();