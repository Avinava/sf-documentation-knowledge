---
title: "IsPhoneNumber"
domain: mc-programmatic-content
topic: isphonenumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.190Z
estimatedTokens: 153
keywords: [IsPhoneNumber, Function, Ordinal, Phone, number, evaluate, **Overview**, **Syntax**, Usage]
---

# IsPhoneNumber

> IsPhoneNumber(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Phone number to evaluate

# IsPhoneNumber

## **Overview**

Returns a true or false result indicating whether the string value passed in is a valid phone number. This function uses the same phone number validation as the SMS components of the application.

### **Syntax**

IsPhoneNumber(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Phone number to evaluate |

### Usage

If the phone number 555-555-5555 is valid, then the function listed below will return a 'true' value. Otherwise, the function below returns a 'false' value.

```
IsPhoneNumber('5555555555')
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     Platform.Function.IsPhoneNumber("3175555555");
</script>
```

```
IsPhoneNumber("5555551212");
```
