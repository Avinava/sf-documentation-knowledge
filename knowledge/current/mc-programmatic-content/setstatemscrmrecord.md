---
title: "SetStateMscrmRecord"
domain: mc-programmatic-content
topic: setstatemscrmrecord
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.801Z
estimatedTokens: 227
keywords: [SetStateMscrmRecord, Function, Ordinal, GUID, record, state, status, Dynamics, CRM, entity, stri, **Overview**, **Syntax**]
---

> SetStateMscrmRecord(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    GUID of the record to set state and status for



    2
    string
    Required
    Name of Dynamics CRM entity



    3
    stri

# SetStateMscrmRecord

## **Overview**

This function sets state and status of the indicated record and provides -1 as the status value for the default status of the state. Returns no value. Some entities, including Opportunity, require special CRM requests to change their state. This function will not work for those entities.

### **Syntax**

SetStateMscrmRecord(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | GUID of the record to set state and status for |
| 2 | string | Required | Name of Dynamics CRM entity |
| 3 | string | Required | State to set, such as Active or Inactive |
| 4 | string | Required | Status to set, such as 0 or 1 |

### Usage

```
%%[

/* sample code to change the state of an account to inactive */
SetStateMscrmRecord("00000000-0000-0000-0000-000000000001", "account", "Inactive", "-1")

]%%
```

Last Updated: Jun 8, 2021
