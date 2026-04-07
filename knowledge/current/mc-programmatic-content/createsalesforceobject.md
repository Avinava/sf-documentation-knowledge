---
title: "CreateSalesforceObject"
domain: mc-programmatic-content
topic: createsalesforceobject
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.767Z
estimatedTokens: 260
keywords: [CreateSalesforceObject, Function, Ordinal, record, Lead, CustomObject, numeric, Number, spec, **Overview**, **Syntax**, Usage]
---

# CreateSalesforceObject

> CreateSalesforceObject(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Type of object to create a record in, such as Lead or CustomObject



    2
    numeric
    Required
    Number of fields spec

# CreateSalesforceObject

## **Overview**

Creates a record in your integrated Salesforce account and returns the ID of the record created. This function works only for an account integrated with a Salesforce account.

### **Syntax**

CreateSalesforceObject(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Type of object to create a record in, such as Lead or CustomObject |
| 2 | numeric | Required | Number of fields specified to add in the record |
| 3 | string | Required | Name of field |
| 4 | string | Required | Value of field. |

### Usage

> The object types and field names in this example may not match your implementation. Use the object types and field names that are specific to your account.

```
%%[ var @id
set @id=CreateSalesforceObject('lead', 2, 'FirstName', 'Chris', 'LastName', 'Cruz')
]%%
```

The system creates a lead in the integrated Salesforce account where the FirstName field contains Chris and the LastName field contains Cruz.

Last Updated: Jun 8, 2021
