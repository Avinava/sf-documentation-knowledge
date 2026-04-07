---
title: "BuildOptionList"
domain: mc-programmatic-content
topic: buildoptionlist
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.612Z
estimatedTokens: 184
keywords: [BuildOptionList, Function, Ordinal, Option, selected, Prese, **Overview**, **Syntax**, Usage]
---

# BuildOptionList

> BuildOptionList(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Option selected by default



    2
    string
    Required
    Value of first option on list



    3
    string
    Required
    Prese

# BuildOptionList

## **Overview**

Builds a list of options from which a message recipient can select. Repeat value and presentation names for all options on the list.

### **Syntax**

BuildOptionList(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Option selected by default |
| 2 | string | Required | Value of first option on list |
| 3 | string | Required | Presentation name of first option on list |

### Usage

```
SET @AttribA=2
%%=BuildOptionList(AttribA, '1', 'One', '2', 'Two', '3', 'Three')=%%
```

The system returns:

```html
<option value='1'>One</option>
<option value='2' selected='selected'>Two</option>
<option value='3'>Three</option>
```

Last Updated: Jun 8, 2021
