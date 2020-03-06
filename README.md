# r-file-system
### Create file system using localStorage

## install

```
npm install r-file-system
```
## Usage

```
import RFile from 'r-file-system';
```

## Create or load file system

```
var fileSystem = new RFile('my file system');

```

in this case 'my file system' is file system name.
if a file system with this name is exist, it will loaded. but if not exist it will created.

## write file

```
var file = {name:'mohammad',family:'feiz',age:34}
fileSystem.write(file,'file1')
```

in this code we want write an object(file) width defined name('file1') in file system.
if in file system , there is a file with this name, this function will returned false
if you want to write this file with this name anyway,you can call update function.

## update file

```
var file = {name:'mohammad',family:'feiz',age:34}
fileSystem.update(file,'file1')

```

in this code we want update a file by name = 'file1'.
if in file system there is not a file with this name, this function will returned false.
else a file by name = 'file1' will be updated.

## read file

```
var file = fileSystem.read('file1');
```

in this code we want to read a file by name = 'file1'.
if in file system there is not a file with this name, this function will returned false.

## remove file

```
var allFiles = fileSystem.remove('file1');
```

in this code we want to remove a file by name = 'file1'.
if in file system there is not a file with this name, this function will returned false.
else, after removing file this function will return all files array.

## is exist file?

```
var exist = fileSystem.isExist('file1');
```

if in file system there is a file with name = 'file', this function will returned true , else false

## remove all files

```
fileSystem.removeAll();
```

## rename file

```
var state = fileSystem.rename('file1','new name');
```

in this code we want to change name of a file by name = 'file1' to 'new name'.
if there is not a file by name = 'file1', this function will returned 'file not found'.
if a file by name = 'new name' is exist, this function will returned 'exist name'.
else if all things is ok this function will returned true. 

## clear file system

```
fileSystem.clear();
```

after call this function, the file system will be removed from localStorage(clearStorage).

## get all files

```
var allFiles = fileSystem.getAll()
```

get all files in file system as an array.


## duplicate file

```
fileSystem.duplicate('file1','new name');
```

create a copy from file by name = 'file1' to a file by name = 'new name'.
if you dont send 'new name', the new file name will be 'file1 - copy'.
this function will nothing returned.

## remove empty

```
fileSystem.removeEmpty();
```

this code will removed all empty file or garbages.
