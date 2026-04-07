---
title: "Field"
domain: mc-programmatic-content
topic: field
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.854Z
estimatedTokens: 224
keywords: [Function, Ordinal, Row, attribute, attribu, **Overview**, **Syntax**, Usage]
---

# Field

> Field(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Row from which to return the field, or object from which to return the attribute



    2
    string
    Required
    Name of the field or attribu

# Field

## **Overview**

Returns the specified field in the specified row or property value from an API object

### **Syntax**

Field(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Row from which to return the field, or object from which to return the attribute |
| 2 | string | Required | Name of the field or attribute to return |
| 3 | string |  | Indicates whether to return a NULL value or an error if the specified data extension field does not exist. Adding a `0` will return a `NULL` value if data extension field does not exist. Defaults to `1`. |

### Usage

```
%%=Field(@row, 'City')=%%
```

The system returns value of the City field in the row specified in the @row variable.

```
%%=Field(@subscriber, 'EmailAddress')=%%
```

The system returns the EmailAddress value from the @subscriber WSDL object.

Last Updated: Jun 8, 2021
