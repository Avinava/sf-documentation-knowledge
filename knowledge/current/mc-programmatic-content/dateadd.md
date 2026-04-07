---
title: "DateAdd"
domain: mc-programmatic-content
topic: dateadd
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.294Z
estimatedTokens: 137
keywords: [DateAdd, Function, Ordinal, Date, add, yyyy, YYYY-MM-DD, numeric, Unit, **Overview**, **Syntax**, Usage]
---

# DateAdd

> DateAdd(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    Date
    Required
    Date to add using MM/dd/yyyy or YYYY-MM-DD values



    2
    numeric
    Required
    Integer to add



    3
    string
    Required
    Unit o

# DateAdd

## **Overview**

Returns the sum of a date and an integer, along with a time stamp.

### **Syntax**

DateAdd(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | Date | Required | Date to add using MM/dd/yyyy or YYYY-MM-DD values |
| 2 | numeric | Required | Integer to add |
| 3 | string | Required | Unit of time of the integer. Valid values include Y, M, D, H, and MI. |

### Usage

```
%%=DateAdd(@today, '1','D')=%%
```

The system returns tomorrow's date, along with a time stamp.

Last Updated: Jun 8, 2021
