---
title: "GetPortfolioItem"
domain: mc-programmatic-content
topic: getportfolioitem
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.915Z
estimatedTokens: 99
keywords: [GetPortfolioItem, Function, Ordinal, External, Key, Portfolio, item, **Overview**, **Syntax**, Usage]
---

# GetPortfolioItem

> GetPortfolioItem(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    External Key of the Portfolio item

# GetPortfolioItem

## **Overview**

Returns the text value of a Portfolio item.

### **Syntax**

GetPortfolioItem(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | External Key of the Portfolio item |

### Usage

Given the Portfolio item of example.gif:

```
GetPortfolioItem('example.gif')
```

The function returns the file.

Last Updated: Jun 8, 2021
