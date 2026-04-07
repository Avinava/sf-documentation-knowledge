---
title: "UpdateMscrmRecords"
domain: mc-programmatic-content
topic: updatemscrmrecords
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.356Z
estimatedTokens: 270
keywords: [UpdateMscrmRecords, Function, Ordinal, Microsoft, Dynamics, CRM, entity, receiving, updated, records, Comma-separated, **Overview**, **Syntax**]
---

> UpdateMscrmRecords(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of Microsoft Dynamics CRM entity receiving the updated records



    2
    string
    Required
    Comma-separated list of r

# UpdateMscrmRecords

## **Overview**

Updates one or more records in a Microsoft Dynamics CRM entity. Also returns the number of succesfully updated records. Include multiple name and value pairs for attributes to update on the target records as necessary.

### **Syntax**

UpdateMscrmRecords(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of Microsoft Dynamics CRM entity receiving the updated records |
| 2 | string | Required | Comma-separated list of record GUIDs to update |
| 3 | string | Required | Name of attribute to update on target records |
| 4 | string | Required | Value of attribute to update on target records |

### Usage

```
%%[
/* Sample Code - this updates several lead records to have Web as a Lead Source Code in Dynamics CRM */
var @records_updated
set @records_updated = updatemscrmrecords('lead', '2E438216-2DEE-DD11-AB3E-005056AD58C4,0A167EEC-6436-DD11-B7BE-000E7F30252C', 'leadsourcecode', '8')
]%%
<p>Count of records updated:</p><br>
%%=v(@records_updated)=%%
```

Last Updated: Jun 8, 2021
