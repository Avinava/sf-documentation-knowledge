---
title: "IsEmailAddress"
domain: mc-programmatic-content
topic: isemailaddress
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.174Z
estimatedTokens: 155
keywords: [IsEmailAddress, Function, Ordinal, Email, address, validate, **Overview**, **Syntax**, Usage, evaluate]
---

# IsEmailAddress

> IsEmailAddress(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Email address to validate

# IsEmailAddress

## **Overview**

Returns a true or false result indicating whether the string value passed in contains a valid email address. This function uses the same email validation logic as the rest of the application.

### **Syntax**

IsEmailAddress(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Email address to validate |

### Usage

If the email address joe@example.com is valid, then the function listed below will return a 'true' value. Otherwise, the function below returns a 'false' value.

```
IsEmailAddress('joe@example.com')
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     Platform.Function.IsEmailAddress("acruz@example.com");
</script>
```

```
IsEmailAddress("acruz@example.com");
```
