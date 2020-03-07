export default function RFile(name){
  var a = {
    init(name){
      this.name = name;
      this.files = localStorage.getItem(name);
      if(this.files === undefined || this.files === null){
        localStorage.setItem(this.name,'[]');
        this.files = '[]';
      }
      this.files = JSON.parse(this.files);
    },
    set(){
      localStorage.setItem(this.name,JSON.stringify(this.files))
    },
    getDefaultName(){
      var index = 1;
      while(this.getIndexByName(`untitle ${index}`) !== -1){index++;}
      return `untitle ${index}`;
    },
    getAll(){return this.files;},
    read(name){
      var index = this.getIndexByName(name);
      return index === -1?false:this.files[index];
    },
    getIndexByName(name){
      for(var i = 0; i < this.files.length; i++){if(this.files[i].name === name){return i;}}
      return -1;
    },
    isExist(name){
      return this.getIndexByName(name) === -1?false:true;
    },
    write(file,name = this.getDefaultName()){
      var index = this.getIndexByName(name);
      if(index !== -1){return false;} 
      var createDate = new Date().toGMTString(); 
      this.files.push({name,file,createDate});
      this.set();
      return true;
    },

    update(file,name){
      var index = this.getIndexByName(name);
      if(index === -1){return false;}
      var lastModifyDate = new Date().toGMTString(); 
      this.files[index].file = file;
      this.files[index].lastModifyDate = lastModifyDate;
      this.set();
      return true;
    },
    remove(name){
      var index = this.getIndexByName(name);
      if(index === -1){return false;}
      this.files.splice(index,1);
      this.set();
      return this.files;
    },
    removeAll(){
      this.files = [];
      this.set();
    },
    rename(name,newName){
      var index = this.getIndexByName(name);
      if(index === -1){return 'file not found';}
      var file = this.files[index];
      index = this.getIndexByName(newName);
      if(index !== -1){return 'exist name';}
      file.name = newName;
      this.set();
      return true;
    },
    clear(){
      localStorage.removeItem(this.name);
    },
    removeEmpty(){
      for(var i = 0; i < this.files.length; i++){
        var file = this.files[i];
        if(file === ''){this.files.splice(i,1); i--;}
        if(Array.isArray(file) && !file.length){this.files.splice(i,1); i--;}
        if(typeof file === 'object' && !Object.keys(file).length){this.files.splice(i,1); i--;}
      }
    },
    duplicate(name,newName){
      newName = newName || name + ' - copy';
      var index = this.getIndexByName(name);
      if(index === -1){return false;}
      var file = this.files[index];
      this.write(file,newName);
    }
  };
  a.init(name);
  return {
    write:a.write.bind(a),
    read:a.read.bind(a),
    update:a.update.bind(a),
    remove:a.remove.bind(a),
    removeAll:a.removeAll.bind(a),
    removeEmpty:a.removeEmpty.bind(a),
    rename:a.rename.bind(a),
    getAll:a.getAll.bind(a),
    clear:a.clear.bind(a),
    isExist:a.isExist.bind(a),
    duplicate:a.duplicate.bind(a)
  };
}
