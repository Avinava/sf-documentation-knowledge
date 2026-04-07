---
title: "ExecuteFilterOrderedRows"
domain: mc-programmatic-content
topic: executefilterorderedrows
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.215Z
estimatedTokens: 252
keywords: [ExecuteFilterOrderedRows, Function, Ordinal, External, key, filter, execute, numeric, Maximum, number, rows, ret, **Overview**, **Syntax**]
---

> ExecuteFilterOrderedRows(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    External key of data filter to execute



    2
    numeric
    Required
    Maximum number of rows to return. A value of 0 ret

# ExecuteFilterOrderedRows

## **Overview**

Executes a predefined data filter and returns a rowset containing the results. You must use a data extension as the data source for the data filter. This function does not work with profile attributes. This function also allows you to control the sort order and maximum number of rows in the resulting rowset. Use this function only with landing pages and SMS messages.

### **Syntax**

ExecuteFilterOrderedRows(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | External key of data filter to execute |
| 2 | numeric | Required | Maximum number of rows to return. A value of 0 returns all rows. |
| 3 | string | Required | Name of column used to sort resulting rowset |

### Usage

```
ExecuteFilter('ExampleDataFilter',5,'IsActive')
```

The system returns all applicable rowsets. The function returns only five rows, and those rows use the IsActive column to sort the resulting rowset.

Last Updated: Jun 8, 2021
