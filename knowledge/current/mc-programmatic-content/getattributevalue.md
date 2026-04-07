---
title: "GetAttributeValue"
domain: mc-programmatic-content
topic: getattributevalue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.172Z
estimatedTokens: 151
keywords: [GetAttributeValue, Function, Ordinal, attribute, sendable, data, extension, **Overview**, **Syntax**]
---

# GetAttributeValue

> GetAttributeValue(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    The specified attribute or sendable data extension field

# GetAttributeValue

## **Overview**

Returns the value from the specified attribute or sendable data extension field

### **Syntax**

GetAttributeValue(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | The specified attribute or sendable data extension field |

## Example

This example retrieves the email address for the contact and writes it into the HTTP Response header:

```
<script runat=server>
     var contactEmail = Platform.Variable.GetAttributeValue('EmailAddr');
     Platform.Response.Write(contactEmail);
</script>
```

Last Updated: Jun 8, 2021
