---
title: "UpdateSingleSalesforceObject"
domain: mc-programmatic-content
topic: updatesinglesalesforceobject
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.868Z
estimatedTokens: 298
keywords: [UpdateSingleSalesforceObject, Function, Ordinal, Lead, CustomObject, upd, **Overview**, **Syntax**, Usage]
---

# UpdateSingleSalesforceObject

> UpdateSingleSalesforceObject(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Type of object to update, such as Lead or CustomObject.



    2
    string
    Required
    The ID of the object to upd

# UpdateSingleSalesforceObject

## **Overview**

Updates a record in an object in your integrated Salesforce account. You can specify multiple additional field and value pairs as part of an AND clause. Returns 1 for success or 0 for failure.

### **Syntax**

UpdateSingleSalesforceObject(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Type of object to update, such as Lead or CustomObject. |
| 2 | string | Required | The ID of the object to update. |
| 3 | string | Required | The name of the field to update. |
| 4 | string | Required | The value to update the field with. |

### Usage

```
%%[
var @result
set @result = UpdateSingleSalesforceObject('Lead','00Q00003yAEj','Email','jcc@example.com')
]%%
The system updates the Email field on the Lead with ID 00Q00003yAEj to contain jcc@example.com.
```

To set a value within an existing record to NULL (setting Phone value to NULL in this example):

```
%%[
var @result
set @result = UpdateSingleSalesforceObject('Lead','00Q00003yAEj','fieldsToNull','Phone')
]%%
The system updates the Phone field for the Lead with ID 00Q00003yAEj to a blank/NULL value.
```

Last Updated: Jun 8, 2021
