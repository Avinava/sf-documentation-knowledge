---
title: "AddMscrmListMember"
domain: mc-programmatic-content
topic: addmscrmlistmember
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.527Z
estimatedTokens: 162
keywords: [AddMscrmListMember, Function, Ordinal, GUID, record, add, marketing, receiving, **Overview**, **Syntax**, Usage]
---

# AddMscrmListMember

> AddMscrmListMember(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    GUID of record to add to marketing list



    2
    string
    Required
    GUID of marketing list receiving the record

# AddMscrmListMember

## **Overview**

Adds the indicated record to the indicated marketing list. Does not return a value.

### **Syntax**

AddMscrmListMember(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | GUID of record to add to marketing list |
| 2 | string | Required | GUID of marketing list receiving the record |

### Usage

```
%%[
/* Adds a lead, contact or account to a marketing list */
var @guid, @list_guid
set @guid = '2E438216-2DEE-DD11-AB3E-005056AD58C4'
set @list_guid = '0A167EEC-6436-DD11-B7BE-000E7F30252C'
AddMscrmListMember(@guid, @list_guid)
]%%
```

Last Updated: Jun 8, 2021
