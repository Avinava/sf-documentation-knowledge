---
title: "LookupRowsCS"
domain: mc-programmatic-content
topic: lookuprowscs
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.653Z
estimatedTokens: 295
keywords: [LookupRowsCS, Function, Ordinal, extension, rows, Column, identify, **Overview**, **Syntax**]
---

> LookupRowsCS(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Name of data extension from which to return specified rows



    2
    string
    Required
    Column name used to identify rows to return

# LookupRowsCS

## **Overview**

Returns a rowset from a data extension where the field matches the specified value. The system treats strings as case-sensitive. Specify additional field value pairs as part of an AND clause. This function returns a maximum of 2000 rows. To better control the number or the order of returned rows, use the LookupOrderedRowsCS() function. This limitation enhances script performance.

### **Syntax**

LookupRowsCS(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Name of data extension from which to return specified rows |
| 2 | string | Required | Column name used to identify rows to return |
| 3 | string | Required | Value used to match rows to return |

### Usage

```
%%[ VAR @Rows, @RowsCSF, @RowsCST
SET @Rows = LOOKUPROWS('CustomObject1','City','greenwood')
SET @RowsCSF = LOOKUPROWSCS('CustomObject1','City','greenwood')
SET @RowsCST = LOOKUPROWSCS('CustomObject1','City','Greenwood')
]%%
Case Insensitive Test:
Row Count: %%=ROWCOUNT(@Rows) =%%
Case Sensitive Test:
Row Count No Match: %%=ROWCOUNT(@RowsCSF) =%%
Row Count Match: %%=ROWCOUNT(@RowsCST) =%%
```

Last Updated: Jun 8, 2021
