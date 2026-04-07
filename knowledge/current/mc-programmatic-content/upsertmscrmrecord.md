---
title: "UpsertMscrmRecord"
domain: mc-programmatic-content
topic: upsertmscrmrecord
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.892Z
estimatedTokens: 447
keywords: [UpsertMscrmRecord, Function, Ordinal, Dynamics, CRM, entity, record, upsert, **Overview**, **Syntax**, Usage]
---

# UpsertMscrmRecord

> UpsertMscrmRecord(1, 2, 3, 4, 5, 6, 7, 8, 9)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    The name of the Dynamics CRM entity for the record to upsert



    2
    string
    Required
    The field used to 

# UpsertMscrmRecord

## **Overview**

This function retrieves a single record from Microsoft Dynamics CRM, using the name and value pairs to filter the results. The function then sorts the results using the sort field and order provided. The process updates a found record with the applicable name and value pairs. If the process does not find a record, it creates one with all provided name and value pairs. This function returns the GUID of the updated or created record.

### **Syntax**

UpsertMscrmRecord(1, 2, 3, 4, 5, 6, 7, 8, 9)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | The name of the Dynamics CRM entity for the record to upsert |
| 2 | string | Required | The field used to sort the retrieve results |
| 3 | string | Required | The order used to sort the retrieve results |
| 4 | string | Required | The number of Name/Value pairs of fields used to retrieve |
| 5 | stringa | Required | Name of attribute to filter on the target entity |
| 6 | string | Required | Value of attribute to filter on the target entity |
| 7 | string | Required | The number of Name/Value pairs of fields used to update |
| 8 | stringa | Required | Name of attribute to update on the target entity |
| 9 | string | Required | Value of attribute to update on the target entity |

### Usage

```
UpsertMscrmRecord("account","createdon","DESC",1,"name","MarketingCloud",1,"address1_city","Indianapolis")
```

This example first checks to see if an account exists where the name equals “MarketingCloud”. If there is, it finds the one created most recently and sets the address1\_city of that record to “Indianapolis.” If there isn’t, it creates a record where the name is “MarketingCloud” and the address1\_city is “Indianapolis.”

Last Updated: Jun 8, 2021
