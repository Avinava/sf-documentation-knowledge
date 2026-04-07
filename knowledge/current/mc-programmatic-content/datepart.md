---
title: "DatePart"
domain: mc-programmatic-content
topic: datepart
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.309Z
estimatedTokens: 120
keywords: [DatePart, Function, Ordinal, Date, retrieve, part, either, yyyy, YYYY-MM-DD, **Overview**, **Syntax**, Usage]
---

# DatePart

> DatePart(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    Date
    Required
    Date value used to retrieve a specified part using either MM/dd/yyyy or YYYY-MM-DD format



    2
    string
    Required
    The part of the date 

# DatePart

## **Overview**

Returns a specified part of a date.

### **Syntax**

DatePart(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | Date | Required | Date value used to retrieve a specified part using either MM/dd/yyyy or YYYY-MM-DD format |
| 2 | string | Required | The part of the date to retrieve. Valid values include Y, M, D, H, or MI |

### Usage

```
%%=Datepart('5/1/2008','year')=%%
```

System returns: 2008

Last Updated: Jun 8, 2021
