---
title: "Format"
domain: mc-programmatic-content
topic: format
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.344Z
estimatedTokens: 355
keywords: [Function, Ordinal, Variable, compatible, yyyy, currency, **Overview**, **Syntax**, Usage, Items, apply, Choose, number, dec]
---

# Format

> Format(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Variable to format



    2
    string
    Required
    A C# compatible format string: 
MM/dd/yyyy
Cn - currency format where n represents the

# Format

## **Overview**

Formats the value according to the string you specify.

### **Syntax**

Format(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Variable to format |
| 2 | string | Required | A C# compatible format string:MM/dd/yyyyCn - currency format where n represents the number of decimal places |
| 3 | string |  | Indicates data format of value. Valid values include Date and Number. |
| 4 | string |  | Culture code used to indicate the correct date format. |

### Usage

There are multiple possibilities for displaying the date using this function.

For more information on formatting numeric strings, see the Microsoft help regarding the NumberFormatInfoClass.

Example 1

```
%%=Format(Now(),"MM/dd/yyyy")=%%
```

System returns today's date in MM/dd/yyyy format.

Example 2

```
%%=Format(@currency_variable,"$#,#.00;-$#,#.00")=%%
```

Example 3

```
%%=Format('2009-06-15T13:45:30', 'dddd dd MMMM h:mm', 'Date', 'fr-FR')=%%
```

System returns the formatted date localized for fr-FR.

```
lundi 15 juin 1:45
```

## Related Items

[Microsoft Help Regarding the DateTimeFormatInfo Class](http://msdn.microsoft.com/en-us/library/system.globalization.datetimeformatinfo.aspx)

[Microsoft Help Regarding the NumberFormatInfoClass Class](https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.aspx)

Last Updated: Jun 8, 2021

## Code Examples

```
Format(Now(),"MM/dd/yyyy");
Format(55, "C2"); // Returns "55.00"
```
