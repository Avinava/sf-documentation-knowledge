---
title: "DateParse"
domain: mc-programmatic-content
topic: dateparse
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.304Z
estimatedTokens: 155
keywords: [DateParse, Function, Ordinal, date, derive, DateTime, Determines, whether, system, UTC, valu, **Overview**, **Syntax**, Usage]
---

# DateParse

> DateParse(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    date
    Required
    Date string used to derive the DateTime object



    2
    boolean
    
    Determines whether the system returns the object in UTC format. A valu

# DateParse

## **Overview**

Returns a DateTime object from a date string.

### **Syntax**

DateParse(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | date | Required | Date string used to derive the DateTime object |
| 2 | boolean |  | Determines whether the system returns the object in UTC format. A value of true returns the DateTime object as UTC. |

### Usage

```
DateParse('2009/10/17 02:30PM')
```

System returns a local time of 2:30pm.

```
DateParse('2009/10/17 2:30PM-4:00',1)
```

System returns 6:30pm as the UTC time based off of the local time value.

Last Updated: Jun 8, 2021
