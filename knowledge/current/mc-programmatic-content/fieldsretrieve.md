---
title: "Fields.Retrieve"
domain: mc-programmatic-content
topic: fieldsretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.560Z
estimatedTokens: 301
keywords: [Fields.Retrieve, **Overview**, **Syntax**]
---

# Fields.Retrieve

# Fields.Retrieve

## **Overview**

Returns an array of JSON objects that describe the available fields in a data extension

### **Syntax**

Fields.Retrieve()

## Example

This code initializes a data extension and retrieves information on the fields.

```
var birthdayDE = DataExtension.Init("birthdayDE");
var fields = birthdayDE.Fields.Retrieve();
```
```
[
    {
        "Name":"FirstName",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":50,
        "Ordinal":0
        "DefaultValue":""
    },  {
        "Name":"LastName",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":50,
        "Ordinal":1
        "DefaultValue":""
    },  {
        "Name":"EmailAddress",
        "FieldType":"",
        "IsPrimaryKey":true,
        "MaxLength":100,
        "Ordinal":3,
        "DefaultValue":""
    },  {
        "Name":"Birthday",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":10,
        "Ordinal":4,
        "DefaultValue":""
    },    {
        "Name":"Age",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":3,
        "Ordinal":5,
        "DefaultValue":""
    }
]
```

Last Updated: Jun 8, 2021
