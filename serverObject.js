//serverObject
var ServerObject =  function(responseObject)
{
    this.postObject = responseObject;
}
ServerObject.prototype.getPostFromIndex = function(index){
    return this.postObject.filter((v,i) => {return i === index})
};

ServerObject.prototype.updatedServerObject = function(newObject){
    this.postObject = newObject;
}

module.exports = {ServerObject : ServerObject}