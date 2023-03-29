const  notePrototype = {
    title : "", 
    content :"",
    id: "",
    isPinned: false

}

function Note(title, content, id){
    this.title = title;
    this.content = content;
    this.id = id;
    this.date = new Date();
}
Note.prototype =notePrototype;

export default Note;