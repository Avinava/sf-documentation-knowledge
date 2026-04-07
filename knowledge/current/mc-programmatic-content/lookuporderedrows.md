---
title: "LookupOrderedRows"
domain: mc-programmatic-content
topic: lookuporderedrows
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.224Z
estimatedTokens: 257
keywords: [LookupOrderedRows, Function, Ordinal, data, extension, rows, numeric, Number, val, **Overview**, **Syntax**, Usage, want, retu, Examples]
---

# LookupOrderedRows

> LookupOrderedRows(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension from which you want to return specified rows



    2
    numeric
    Required
    Number of rows to retu

# LookupOrderedRows

## **Overview**

Retrieves the value of a specific field from a column in the specified data extension.

### **Syntax**

LookupOrderedRows(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension from which you want to return specified rows |
| 2 | numeric | Required | Number of rows to return. A value less than 1 returns the default 2000 rows. This limitation enhances script performance. |
| 3 | string | Required | Indicates how to order returned rows, including the value and ASC or DESC |
| 4 | string | Required | Field to use to build WHERE clause. |
| 5 | string | Required | Value to use to build WHERE clause. |

## Examples

```
<pre><code>Set @rows2 = LookupOrderedRows(&quot;Cars&quot;,4,&quot;Horsepower Desc&quot;,&quot;MPG&quot;,Field(@cardata,&quot;MPG&quot;))</code></pre>

<p>This call returns the 4 rows from the Cars data extension with the highest horsepower that match the value specified by MPG.</p>
```

Last Updated: Jun 8, 2021

## Code Examples

```
Set @rows2 = LookupOrderedRows("Cars",4,"Horsepower Desc","MPG",Field(@cardata,"MPG"))
```
