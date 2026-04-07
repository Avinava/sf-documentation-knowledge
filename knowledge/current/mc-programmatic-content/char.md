---
title: "Char"
domain: mc-programmatic-content
topic: char
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.278Z
estimatedTokens: 296
keywords: [Char, Function, Ordinal, ASCII, character, code, numeric, Number, times, repeat, **Overview**, **Syntax**, Usage]
---

# Char

> Char(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    ASCII character code



    2
    numeric
    Required
    Number of times to repeat the ASCII character

# Char

## **Overview**

Returns the ASCII character specified by the ASCII character code in the first parameter. An optional second parameter specifies the number of times to repeat the return of the ASCII character.

### **Syntax**

Char(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | ASCII character code |
| 2 | numeric | Required | Number of times to repeat the ASCII character |

### Usage

Given the function below:

```
Char(65)
```

The system returns:

```
A
```

Given the function below:

```
Char(65,3)
```

The system returns:

```
AAA
```

Given the function below:

```
%%=CHAR(65)=%%%%=CHAR(66)=%%%%=CHAR(67)=%%
```

The system returns:

```
ABC
```

The code sample below pulls content from a data extension and replaces and carriage return-line feed combinations with an HTML

```
%%[
VAR @content, @replacedContent
/* This will pull the content out of the DE and replace any CR-LF's with HTML BR tags. */
SET @content = Lookup('ReplaceTest', 'Value', 'Key', '1')
SET @replacedContent = Replace(@content, Concat(CHAR(13), CHAR(10)), 'BR')
]%%
%%=V(@content)=%%
%%=V(@replacedContent)=%%
```

Last Updated: Jun 8, 2021
