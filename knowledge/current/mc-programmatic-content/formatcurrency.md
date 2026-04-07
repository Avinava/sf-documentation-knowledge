---
title: "FormatCurrency"
domain: mc-programmatic-content
topic: formatcurrency
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.349Z
estimatedTokens: 355
keywords: [FormatCurrency, Function, Ordinal, numeric, receive, formatting, ISO, culture, code, indicate, correct, currency, **Overview**, **Syntax**, Usage]
---

# FormatCurrency

> FormatCurrency(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    numeric
    Required
    Value to receive the specified formatting



    2
    string
    Required
    ISO culture code used to indicate the correct currency

# FormatCurrency

## **Overview**

Formats a specified string as a currency value. This function rounds the numbers up if the specified format uses fewer decimal points than the value itself and the remaining numbers total 5 or more. The function rounds the numbers down if the specified format uses fewer decimal points than the value itself and the remaining numbers total less than 5.

### **Syntax**

FormatCurrency(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | numeric | Required | Value to receive the specified formatting |
| 2 | string | Required | ISO culture code used to indicate the correct currency unit |
| 3 | numeric |  | The number of decimal places to include in the formatted value |
| 4 | string |  | The currency symbol to use with the value. This value overrides the value specified by the culture code. |

### Usage

This function rounds the numbers up if the specified format uses fewer decimal points than the value itself and the remaining numbers are 5 or greater. The function rounds the numbers down if the specified format uses fewer decimal points than the value itself and the remaining numbers total less than 5.

Example 1

```
%%=FormatCurrency(1234.567,"en-US")=%%
```

System returns:

```
$1234.57
```

Example 2

```
%%=FormatCurrency(-12300099.45678,"fr_FR",3,"*$*")=%%
```

System returns:

```
-12 300 099,457 *$*
```

Last Updated: Jun 8, 2021
