let obj = {
    name:"muskan",
    age:23,
    getName : function(){
        console.log(this.name);
    }
};


obj.getName();