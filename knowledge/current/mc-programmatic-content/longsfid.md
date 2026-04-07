---
title: "LongSFID"
domain: mc-programmatic-content
topic: longsfid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.608Z
estimatedTokens: 100
keywords: [LongSFID, Function, Ordinal, 15-character, Salesforce, **Overview**, **Syntax**]
---

> LongSFID(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    The 15-character Salesforce ID

# LongSFID

## **Overview**

Returns the 18-character Salesforce ID from a shortened 15-character version.

### **Syntax**

LongSFID(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | The 15-character Salesforce ID |

### Usage

The example below returns the value of 0036000000QKv5TAAT.

```
%%=LongSFID('0036000000QKv5T')=%%
```

Last Updated: Jun 8, 2021
