const  notePrototype = {
    title : "", 
    content :"",
    id: ""

}

function Note(title, content, id){
    this.title = title;
    this.content = content;
    this.id = id;
    this.date = new Date();
}
Note.prototype =notePrototype;

export default Note;