class Node {
    constructor(value){
this.value=value;
this.links = [];
    }
addLinks(node){
    this.links.push(node);
}
removelinks(node){
    const index = this.links.indexOf(node)
    if(index > -1){
        this.links.splice(index,1)
        return node;
    }
}
getlinks(){
    return this.links;
}
islinks(node){
    return this.links.indexOf(node) > -1;
    }
}