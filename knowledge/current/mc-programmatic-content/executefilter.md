---
title: "ExecuteFilter"
domain: mc-programmatic-content
topic: executefilter
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.209Z
estimatedTokens: 144
keywords: [ExecuteFilter, Function, Ordinal, External, key, filter, execute, **Overview**, **Syntax**]
---

> ExecuteFilter(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    External key of data filter to execute

# ExecuteFilter

## **Overview**

Executes a predefined data filter and returns a rowset containing the results. Use this function only in landing page contexts. You must use a data extension as the data source for the data filter. This function does not work with profile attributes.

### **Syntax**

ExecuteFilter(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | External key of data filter to execute |

### Usage

```
ExecuteFilter('ExampleDataFilter')
```

The system returns all applicable rowsets.

Last Updated: Jun 8, 2021
