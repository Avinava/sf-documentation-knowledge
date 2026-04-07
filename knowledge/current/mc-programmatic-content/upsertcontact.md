---
title: "UpsertContact"
domain: mc-programmatic-content
topic: upsertcontact
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.368Z
estimatedTokens: 329
keywords: [UpsertContact, Function, Ordinal, channel, contact, Possible, include, mobile, Primary, key, **Overview**, **Syntax**]
---

> UpsertContact(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    The channel to update for a contact. Possible values include: mobile



    2
    string
    Required
    Primary key type used to l

# UpsertContact

## **Overview**

Updates an existing contact in the specified channel with the specified primary key and primary key value. List as many attribute name and attribute values as necessary.

### **Syntax**

UpsertContact(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | The channel to update for a contact. Possible values include: mobile |
| 2 | string | Required | Primary key type used to locate contact. Possible values include: phone |
| 3 | string | Required | Value of primary key used to locate contact |
| 4 | string | Required | Name of attribute to upsert |
| 5 | string | Required | Value of attribute to upsert |

### Usage

The sample code below updates a Contact from a landing page.

```
%%[
Set @result = UpsertContact('mobile','phone',MOBILE_NUMBER,'_ZipCode','12342')
]%%
```

The function indicates success by returning a value of 0. The sample code below demonstrates how to take information from an SMS message. In this case, the Contact sent their ZIP code via SMS message and the \[MSG(0).NOUN(0)\] string captures that value:

```
%%[
Set @result = UpsertContact('mobile','phone',MOBILE_NUMBER,'_ZipCode',[MSG(0).NOUN(0)])
]%%
```

Again, the function indicates success by returning a value of 0.

Last Updated: Jun 8, 2021
