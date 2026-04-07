---
title: "LocalDateToSystemDate"
domain: mc-programmatic-content
topic: localdatetosystemdate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.408Z
estimatedTokens: 165
keywords: [LocalDateToSystemDate, Function, Ordinal, Local, time, convert, **Overview**, **Syntax**, Usage, datetime, date-time, date]
---

# LocalDateToSystemDate

> LocalDateToSystemDate(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Local time to convert

# LocalDateToSystemDate

## **Overview**

Converts a local datetime string or object to the system time.

### **Syntax**

LocalDateToSystemDate(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Local time to convert |

### Usage

```
%%[
VAR @currentSystemTime
SET @currentSystemTime = NOW()
]%%
Local Time For User:  %%=SystemDateToLocalDate(@currentSystemTime)=%%
Converted Back to System Time %%=LocalDateToSystemDate(@currentSystemTime)=%%
```

The system returns the local time based off of the value contained in the `@currentSystemTime` variable, then converts it back to system time.

Last Updated: Jun 8, 2021

## Code Examples

```
var myDateTime = new Date();
var convertedDateTime = DateTime.LocalDateToSystemDate(myDateTime);
```

```
<script runat="server">
     var time = Now();
     var systemTime = Platform.Function.LocalDateToSystemDate(time);
</script>
```
