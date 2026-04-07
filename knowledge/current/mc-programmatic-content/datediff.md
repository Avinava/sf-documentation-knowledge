---
title: "DateDiff"
domain: mc-programmatic-content
topic: datediff
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.299Z
estimatedTokens: 145
keywords: [DateDiff, Function, Ordinal, Date, Starting, comparison, either, yyyy, YYYY-MM-DD, subtract, **Overview**, **Syntax**, Usage]
---

# DateDiff

> DateDiff(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    Date
    Required
    Starting date for comparison using either MM/dd/yyyy or YYYY-MM-DD format



    2
    Date
    Required
    Date to subtract from starting date 

# DateDiff

## **Overview**

Returns the difference between two dates.

### **Syntax**

DateDiff(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | Date | Required | Starting date for comparison using either MM/dd/yyyy or YYYY-MM-DD format |
| 2 | Date | Required | Date to subtract from starting date using either MM/dd/yyyy or YYYY-MM-DD format |
| 3 | string | Required | Unit of time of the difference. Valid values include Y, M, D, H, or MI |

### Usage

```
%%=DateDiff(@tomorrow,@today, 'D')=%%
```

System returns: 1

Last Updated: Jun 8, 2021
