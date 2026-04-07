---
title: "DataExtensionRowCount"
domain: mc-programmatic-content
topic: dataextensionrowcount
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.777Z
estimatedTokens: 146
keywords: [DataExtensionRowCount, Function, Ordinal, data, extension, derive, row, count, **Overview**, **Syntax**, Usage]
---

# DataExtensionRowCount

> DataExtensionRowCount(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension from which to derive specified row count

# DataExtensionRowCount

## **Overview**

Returns the number of rows in the specified data extension. Use this function in place of a Lookup() call when only counting the number of rows in a data extension.

### **Syntax**

DataExtensionRowCount(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension from which to derive specified row count |

### Usage

The data extension example contains 31 rows. For this AMPscript, the system returns the value 31.

```
DataExtensionRowCount("example")
```

Last Updated: Jun 8, 2021
