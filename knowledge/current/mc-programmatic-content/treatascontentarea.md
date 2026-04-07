---
title: "TreatAsContentArea"
domain: mc-programmatic-content
topic: treatascontentarea
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.826Z
estimatedTokens: 442
keywords: [TreatAsContentArea, Function, Ordinal, Key, identify, content, second, distinct, text, HTML, versions, **Overview**, **Syntax**, Usage]
---

# TreatAsContentArea

> TreatAsContentArea(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Key value used to identify the content specified in the second string. Use the same key to identify distinct text and HTML versions o

# TreatAsContentArea

## **Overview**

Treats content retrieved from a data extension or other source as though it is fixed content coming from a content area.

### **Syntax**

TreatAsContentArea(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Key value used to identify the content specified in the second string. Use the same key to identify distinct text and HTML versions of the content, as the function treats a key in a text content as distinct from a key in a HTML context. The application processes all keys in a case-insensitive manner. |
| 2 | string | Required | Content stored for an email send under the key specified in the first string. Retrieve content using the HTTPGET() or Lookup() AMPscript functions. |
| 3 | string |  | Impression region name for the virtual content area used for tracking purposes |

### Usage

The sample code below pulls content from a data extension and saves it for reuse as a virtual content area under the key VirtualCA1:

```
%%=TreatAsContentArea('VirtualCA1', Lookup('DEName', 'DEContentColumn','KeyField', KeyValue))=%%
```

The sample code below pulls content from a data extension and saves it for reuse as a virtual content area under a key specified through the KeyValue attribute or data extension field.

```
%%=TreatAsContentArea(KeyValue, Lookup('DEName', 'DEContentColumn','KeyField', KeyValue))=%%
```

The sample code below pulls content from a data extension, saves it for reuse as a virtual content area under the key VirtualCA1, and assigns it the impression region name of Impression Region One:

```
%%=TreatAsContentArea('VirtualCA1', Lookup('DEName', 'DEContentColumn','KeyField', KeyValue), 'Impression Region One')=%%
```

Last Updated: Jun 8, 2021
