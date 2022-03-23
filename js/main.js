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

    // models container is listening for click event
    // and change the figure element class
    init : function () {
        this.modelsEl = document.querySelector('header .models');
        this.figureEl = document.querySelector('section#figure');
        this.modelsEl.addEventListener('click', (e) => {
            // console.log('removing', this.figureLastClass, 'class');
            this.figureEl.classList.remove(this.figureLastClass);
            const modelNewClass = e.target.innerText;
            // console.log('adding', modelNewClass, 'class');
            this.figureEl.classList.add(modelNewClass);
            this.figureLastClass = modelNewClass;
        })
    }
}

app.init();