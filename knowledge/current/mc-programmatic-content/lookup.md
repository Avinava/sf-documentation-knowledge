---
title: "Lookup"
domain: mc-programmatic-content
topic: lookup
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.620Z
estimatedTokens: 192
keywords: [Lookup, Function, Ordinal, extension, column, val, **Overview**, **Syntax**, retrieve, array, Requi]
---

> Lookup(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension



    2
    string
    Required
    Name of column from which to retrieve value



    3
    string or array
    Requi

# Lookup

## **Overview**

Retrieves the value of a specific field from a column in the specified data extension.

### **Syntax**

Lookup(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension |
| 2 | string | Required | Name of column from which to retrieve value |
| 3 | string or array | Required | String value with name to match for row containing lookup value. You can also include an array of column names for use in a filter. |
| 4 | string or array | Required | String value used to match lookup value. You can also include an array of column values for use in a filter. |

## Example

The example returns the value in the Phone field from the CustomerData data extension for the row with the SubscriberKey value of acruz@example.com.

```
<script runat="server">
     var phoneNumber = Platform.Function.Lookup('CustomerData','Phone','SubscriberKey','acruz@example.com');
</script>
```

The example returns the value in the Phone field from the CustomerData data extension for the row with the FirstName value of Angela and the last name value of Cruz.

```
<script runat="server">
     var phoneNumber = Platform.Function.Lookup('CustomerData','Phone',['FirstName','LastName'],['Angela','Ruiz'];
</script>
```

Last Updated: Jun 8, 2021

## Code Examples

```
%%=Lookup('PostalCode','City','PostalCode',46016)=%%
```
