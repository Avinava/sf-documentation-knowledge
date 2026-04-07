---
title: "SystemDateToLocalDate"
domain: mc-programmatic-content
topic: systemdatetolocaldate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.512Z
estimatedTokens: 141
keywords: [SystemDateToLocalDate, Function, Ordinal, Date, System, time, convert, **Overview**, **Syntax**, Usage, datetime, Local, date-time, date]
---

# SystemDateToLocalDate

> SystemDateToLocalDate(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    datetime
    Required
    Local date-time value to convert

# SystemDateToLocalDate

## **Overview**

Converts the passed system date time string or value to the local time of the account or user

### **Syntax**

SystemDateToLocalDate(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | datetime | Required | Local date-time value to convert |

## Example

This sample code retrieves an array of time zones based on the specified filter criteria. If you include no filter, the function will return an array of all time zones.

```
var timezones = DateTime.TimeZone.Retrieve({Property:"ID", SimpleOperator:"equals", Value:1});
```

Last Updated: Jun 8, 2021

## Code Examples

```
%%[
VAR @currentSystemTime
SET @currentSystemTime = NOW()
]%%
Local Time For User:  %%=SystemDateToLocalDate(@currentSystemTime)=%%
```

```
<script runat="server">
     var time = Now();
     var systemTime = Platform.Function.SystemDateToLocalDate(time);
</script>
```
