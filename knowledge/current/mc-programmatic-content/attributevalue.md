---
title: "AttributeValue"
domain: mc-programmatic-content
topic: attributevalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.564Z
estimatedTokens: 158
keywords: [AttributeValue, Function, Ordinal, attribute, **Overview**, **Syntax**, Usage]
---

# AttributeValue

> AttributeValue(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of attribute to return

# AttributeValue

## **Overview**

Returns the value of a subscriber attribute.

### **Syntax**

AttributeValue(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of attribute to return |

### Usage

Combined with a Lookup call to get the name of an attribute, you can retrieve an attribute's value and pass it into a variable. For example, this code retrieves the value of zipcode.

```
VAR @AttributeName, @AttributeValue
SET @AttributeName = Lookup('PostalCode','zipcode','PostalCode',Indianapolis)
SET @AttributeValue = AttributeValue(@AttributeName)
```

Last Updated: Jun 8, 2021
