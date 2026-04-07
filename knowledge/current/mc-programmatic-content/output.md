---
title: "Output"
domain: mc-programmatic-content
topic: output
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.668Z
estimatedTokens: 162
keywords: [Function, Ordinal, Code, produce, results, system, **Overview**, **Syntax**]
---

> Output(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Code used to produce results output by system

# Output

## **Overview**

Returns the results of AMPscript code executed within a code block, such as Concat() or V(), and includes the results inside the rendered content. The function does not return any passed direct literals.

### **Syntax**

Output(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Code used to produce results output by system |

### Usage

```
%%[ var @output
Set @output = 'My output'
OutputLine(Concat(@output,' is a success!')) ]%%
```

System outputs:

```
My output is a success!
```

Note that the system outputs the CRLF after the string of text.

Last Updated: Jun 8, 2021
