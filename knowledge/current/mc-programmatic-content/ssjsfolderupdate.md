---
title: "ssjs_folderUpdate"
domain: mc-programmatic-content
topic: ssjsfolderupdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.760Z
estimatedTokens: 111
keywords: [ssjs_folderUpdate, Function, Ordinal, Attributes, regarding, folder, change, **Overview**, **Syntax**]
---

# ssjs_folderUpdate

> (1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Attributes regarding folder to change

## **Overview**

Updates the folder and returns a status

### **Syntax**

(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Attributes regarding folder to change |

## Example

This sample code updates the Name attribute of the folder to the specified value:

```
var myFolder = Folder.Init("myFolder");
var status = myFolder.Update({ "Name" : "Updated Folder Name" });
```

Last Updated: Jun 8, 2021
