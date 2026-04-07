---
title: "FormatDate"
domain: mc-programmatic-content
topic: formatdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.641Z
estimatedTokens: 272
keywords: [FormatDate, Function, Ordinal, receive, formatting, either, yyyy, YYYY-MM-DD, Date, **Overview**, **Syntax**]
---

> FormatDate(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Value to receive the specified formatting using either MM/dd/yyyy or YYYY-MM-DD format



    2
    string
    
    Date format string use

# FormatDate

## **Overview**

Formats a specified string as a date value.

### **Syntax**

FormatDate(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Value to receive the specified formatting using either MM/dd/yyyy or YYYY-MM-DD format |
| 2 | string |  | Date format string used to format the specified value. A value of l returns a long text value. A value of s returns a short text value. A value of iso returns an ISO-compliant value. A value of rfc returns a RFC-1123-compliant value. |
| 3 | string |  | Time format string used the formation the specified value |
| 4 | string |  | Culture code used to indicate the correct date format |

### Usage

Review [AMPscript Date and Time Formatting](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/dateTimeFormatting.htm) for available values.

```
%%=FormatDate("2012-10-05 03:21:34.567890", "MMM DD, YYYY", "HH:MM:SS.MMM", "en-US")=%%
```

System returns:

```
Oct 05, 2012 03:21:34.567
```

Last Updated: Jun 8, 2021
