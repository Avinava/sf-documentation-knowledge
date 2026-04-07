---
title: "OutputLine"
domain: mc-programmatic-content
topic: outputline
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.735Z
estimatedTokens: 231
keywords: [OutputLine, Function, Ordinal, code, produces, results, system, **Overview**, **Syntax**]
---

> OutputLine(value)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    value
    
    Required
    The code that produces the results to be output by the system

# OutputLine

## **Overview**

Returns the results of AMPscript code executed within a code block, such as Concat() or V()), and includes the results inside the rendered content. The function also appends a CRLF following the results. The function does not return any passed direct literals.

### **Syntax**

OutputLine(value)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| value |  | Required | The code that produces the results to be output by the system |

### Usage

```
%%[ var @output
Set @output = "My output"
OutputLine(Concat(@output," is a success!")) ]%%
```

System outputs:

```
My output is a success!
```

> The system appends a CRLF character to the string of text, not an HTML break tag (
> ). In a text context, this character creates a new line. In an HTML context, this character creates a new line in the original SMTP message but not a rendered new line.

Last Updated: Jun 8, 2021
