---
title: "FormatNumber"
domain: mc-programmatic-content
topic: formatnumber
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.361Z
estimatedTokens: 346
keywords: [FormatNumber, Function, Ordinal, numeric, receive, formatting, Currency, Decimal, **Overview**, **Syntax**, Usage]
---

# FormatNumber

> FormatNumber(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    Value to receive the specified formatting.



    2
    string
    Required
    Valid format type value: 

C - Currency

D - Decimal

E - 

# FormatNumber

## **Overview**

This function rounds decimal numbers up if the specified format uses fewer decimal points than the value itself and the remaining numbers are 5 or greater. The function rounds decimal numbers down if the specified format uses fewer decimal points than the value itself and the remaining numbers total less than 5. Integers outside the range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 print in scientific notation.

### **Syntax**

FormatNumber(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | Value to receive the specified formatting. |
| 2 | string | Required | Valid format type value:C - CurrencyD - DecimalE - ExponentialF - Fixed pointG - GeneralN - NumberP - PercentR - Round-trip (format ensures value parsed to string can be parsed back to numeric value)X - HexadecimalYou can optionally follow this code with a number to indicate the precision of the number. For example, a currency value with a precision of 2 uses the parameter C2. |
| 3 | string |  | Culture code used to indicate the correct date format |

### Usage

Example 1

```
%%=FormatNumber(1234.567,"C2","en-US")=%%
```

System returns this value:

```
$1234.57
```

Example 2

```
%%=FormatNumber(-12300099.45678,"N","fr-FR")=%%
```

System returns this value:

```
-12 300 099,46
```

Last Updated: Jun 8, 2021
