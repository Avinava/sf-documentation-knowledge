---
title: "CreateMscrmRecord"
domain: mc-programmatic-content
topic: createmscrmrecord
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.114Z
estimatedTokens: 238
keywords: [CreateMscrmRecord, Function, Ordinal, Dynamics, CRM, entity, record, Number, pairs, **Overview**, **Syntax**]
---

> CreateMscrmRecord(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of Dynamics CRM entity for record to create



    2
    string
    Required
    Number of name and value pairs of fields to p

# CreateMscrmRecord

## **Overview**

Creates a single Dynamics CRM record in the target entity. Returns the GUID of the created record. Include multiple name and value pairs as necessary.

### **Syntax**

CreateMscrmRecord(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of Dynamics CRM entity for record to create |
| 2 | string | Required | Number of name and value pairs of fields to populate on created record |
| 3 | string | Required | Name of attribute to populate on created record |
| 4 | string | Required | Value of attribute to populate on created record |

### Usage

```
%%[

/* Sample Code - this creates a new Contact record */

var @contact_guid

set @contact_guid = createmscrmrecord('contact', 3, 'firstname', 'bob', 'lastname', 'testcontact', 'emailaddress1', 'bob@example.com')

]%%

<p>GUID of new Contact:</p><br>

%%=v(@contact_guid)=%%
```

Last Updated: Jun 8, 2021
