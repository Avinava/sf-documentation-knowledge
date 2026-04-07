---
title: "Rows.Add"
domain: mc-programmatic-content
topic: rowsadd
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.583Z
estimatedTokens: 234
keywords: [Rows.Add, Function, Ordinal, include, row, array, rows, **Overview**, **Syntax**, Examples]
---

# Rows.Add

> Rows.Add(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    object
    Required
    Information to include in row or array of rows

# Rows.Add

## **Overview**

Adds a row or array of rows to the initialized data extension

### **Syntax**

Rows.Add(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | object | Required | Information to include in row or array of rows |

## Examples

This sample code adds a row to the birthdayDE data extension.

```
var birthdayDE = DataExtension.Init("birthdayDE");
birthdayDE.Rows.Add({FirstName:"Angel",LastName:"Ruiz",EmailAddress:"aruiz@example.com",Age:24,Birthday:"11/29/1980"});
```

This sample code adds an array of rows to the birthdayDE data extension.

```
var arrContacts =  [
      {Email:"jdoe@example.com",FirstName:"John",LastName:"Doe"},
      {Email:"aruiz@example.com",FirstName:"Angel",LastName:"Ruiz"}
     ];

var birthdayDE = DataExtension.Init("birthdayDE");
birthdayDE.Rows.Add(arrContacts);
```

The function returns the number of rows affected by the call.

Last Updated: Jun 8, 2021
