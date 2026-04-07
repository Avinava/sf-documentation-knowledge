---
title: "Rows.Lookup"
domain: mc-programmatic-content
topic: rowslookup
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.589Z
estimatedTokens: 297
keywords: [Rows.Lookup, Function, Ordinal, Columns, search, data, uses, numeric, number, rows, ret, **Overview**, **Syntax**, Examples]
---

# Rows.Lookup

> Rows.Lookup(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Columns to search for data



    2
    string
    Required
    Values uses in search



    3
    numeric
    
    number of rows to ret

# Rows.Lookup

## **Overview**

Returns columns that match the specified values

### **Syntax**

Rows.Lookup(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Columns to search for data |
| 2 | string | Required | Values uses in search |
| 3 | numeric |  | number of rows to return |
| 4 | string |  | Order of rows to return |

## Examples

This sample code returns all rows in birthdayDE with a value of 25 for Age.

```
var testDE = DataExtension.Init("testDE");
var data = testDE.Rows.Lookup(["Age"], [25]);
```

This sample code returns the same rows in birthdayDE, but it limits the results to two rows and sorts the results by last name.

```
var testDE = DataExtension.Init("testDE");
var data = testDE.Rows.Lookup(["Age"], [25], 2, "LastName");
```

When initializing data extensions with Lookup() in an email, you must use the name of the data extension. When using the function in landing pages, you can use either the name or the external key of the data extension. Make the name and the external key the same value when creating the data extension to ensure you use the correct value at all times.

Last Updated: Jun 8, 2021
