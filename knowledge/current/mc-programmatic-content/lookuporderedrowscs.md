---
title: "LookupOrderedRowsCS"
domain: mc-programmatic-content
topic: lookuporderedrowscs
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.230Z
estimatedTokens: 340
keywords: [LookupOrderedRowsCS, Function, Ordinal, data, extension, rows, numeric, Number, **Overview**, **Syntax**, Usage]
---

# LookupOrderedRowsCS

> LookupOrderedRowsCS(1, 2, 3, 4, 5)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension from which to return specified rows



    2
    numeric
    Required
    Number of rows to return. A v

# LookupOrderedRowsCS

## **Overview**

Returns a specified number of rows. Treats any string value in a case-sensitive manner. You can specify multiple additional field and value pairs as part of an AND clause. The function returns an empty set when no values match.

### **Syntax**

LookupOrderedRowsCS(1, 2, 3, 4, 5)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension from which to return specified rows |
| 2 | numeric | Required | Number of rows to return. A value less than 1 returns the default 2000 rows. This limitation enhances script performance. |
| 3 | string | Required | Defines order of return as field ASC or field DESC |
| 4 | string | Required | Field to use to build WHERE clause |
| 5 | string | Required | Value to use to build WHERE clause |

### Usage

```
%%[
SET @Rows = LOOKUPORDEREDROWS('CustomObject1',10,'Region','City','greenwood','SubscriberID', 100009)
SET @RowsCSF = LOOKUPORDEREDROWSCS('CustomObject1',10,'Region','City','greenwood','SubscriberID', 100009)
SET @RowsCST = LOOKUPORDEREDROWSCS('CustomObject1',10,'Region','City','Greenwood','SubscriberID', 100009)
]%%
Case Insensitive Test:
Row Count: %%=ROWCOUNT(@Rows) =%%
Case Sensitive Test:
Row Count No Match: %%=ROWCOUNT(@RowsCSF) =%%
Row Count Match: %%=ROWCOUNT(@RowsCST) =%%
```

Last Updated: Jun 8, 2021
