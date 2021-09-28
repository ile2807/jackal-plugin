# Jackal 

Jackal is a VS Code extension that enables using [Jackal-postman](https://www.npmjs.com/package/jackal-postman) features inside VS Code

## Usage
All commands are accessible when right clicking on the EXPLORER on a *.json postman collection. The same commands are also available on right click on an open tab of *.json postman collection in the file editor. All commands are located under the Jackal submenu.

![Example](https://github.com/ile2807/jackal-plugin/raw/main/src/images/contextMenuExample.png)

## Features

Currently supported features from Jackal-postman are:

|Command   |Behavior   |
|---|---|
|Append smart test assertions|Adds response validation asserts to all requests of the source collection and saves to the output collection. ***Smart tests are generated by using the saved responses as [examples](https://learning.postman.com/docs/sending-requests/responses/) in the collection***. This command analyses the saved responses and creates tests to match those values. Currently this command supports only JSON and XML response testing.|
|Append HTTP 200 test assertions      |Adds test asserts (to check if response HTTP code is 200) to all requests of the source collection and saves to the output collection.| 
|Remove duplicate requests   |All repeating occurrences of absolutely the same requests (including name) will be removed, only one will remain. The remaining instance is the first occurrence that the cleanup algorithm encounters while analyzing. Scope of comparing duplicates is the whole collection with all folders and subfolders. |
|Remove unused collection variables   |Removes all unused collection variables from the collection. It goes through the whole collection and looks for used variables. Then removes all collection variables that are not referenced anywhere in the collection.|
|Append request payload hash| Appends code in PreRequest code that hashes the request body with `hashPassword` variable value. This hash is then added to the request as `PayloadHash` header. 
|Append missing collection variables|Appends missing collection variables that are referenced in any request, but are not present in the collection.|
|Generate MD descriptions in collection|Generates MD descriptions on collection and requests, the description is in MD format and is saved in the output collection file. This command saves the MD descriptions in the collection file. To export these descriptions in a separate MD file use `Export MD document from collection`.|
|Export MD document from collection|Creates summary Markdown document from all the collection descriptions. ***This feature does not automatically generate descriptions***.  It only collects descriptions of all elements of the collection and creates one summary Markdown file.|


## Versions
### 1.0.0

Initial release of the extension
