const  notePrototype = {
    title : "", 
    content :""

}

function Note(title, content){
    this.title = title;
    this.content = content;
    this.date = new Date();
}
Note.prototype =notePrototype;

export default Note;