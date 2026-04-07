---
title: "InsertData"
domain: mc-programmatic-content
topic: insertdata
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.523Z
estimatedTokens: 172
keywords: [InsertData, Function, Ordinal, extension, insert, row, column, build, clause, **Overview**, **Syntax**]
---

> InsertData(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Data extension from which to insert specified row



    2
    string
    Required
    Name of column used to build insert clause



    3
  

# InsertData

## **Overview**

Inserts a row in a data extension. Returns the number of rows affected. Use this function with landing pages, SMS and MMS messages in MobileConnect, push messages in MobilePush, and messages in GroupConnect.

### **Syntax**

InsertData(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Data extension from which to insert specified row |
| 2 | string | Required | Name of column used to build insert clause |
| 3 | string | Required | Value of column used to build insert clause |

### Usage

```
InsertData('SomeDE','FirstName',FirstName,'LastName',LastName,'CreatedDate',NOW())
```

Last Updated: Jun 8, 2021
