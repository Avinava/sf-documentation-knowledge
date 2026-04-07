---
title: "RegExMatch"
domain: mc-programmatic-content
topic: regexmatch
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.454Z
estimatedTokens: 372
keywords: [RegExMatch, Function, Ordinal, search, Regular, expression, **Overview**, **Syntax**, Usage]
---

# RegExMatch

> RegExMatch(1, 2, 3, 4)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String to search



    2
    string
    Required
    Regular expression to use in the search



    3
    string
    Required
    Name or

# RegExMatch

## **Overview**

Allows you to use a regular expression to search for information in a string. Use any value from the .NET RegexOptions enumeration, such as IgnoreCase and Multiline.

### **Syntax**

RegExMatch(1, 2, 3, 4)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String to search |
| 2 | string | Required | Regular expression to use in the search |
| 3 | string | Required | Name or ordinal of the matching group to return |
| 4 | string | Required | Repeating string parameter of regular expression options to use |

### Usage

The sample AMPscript below shows how to assign regular expressions and use the RegExMatch function to search a string for results.

```
%%[
VAR @sourceStr, @regEx1, @regEx2
SET @sourceStr = 'ABC_123_DEF_456';
/* RegEx without group names */
SET @regEx1 = '.*_([0-9]+)_.*_([0-9]+)'
/* RegEx with group names */
SET @regEx2 = '.*_(?<FirstNumber>[0-9]+)_.*_(?<SecondNumber>[0-9]+)'
]%%
By Group ID:
Group 1:  %%=RegExMatch(@sourceStr, @regEx1, 1)=%%
Group 2:  %%=RegExMatch(@sourceStr, @regEx1, '2')=%%
By Group Name:
First Number:   %%=RegExMatch(@sourceStr, @regEx2, 'FirstNumber')=%%
Second Number:  %%=RegExMatch(@sourceStr, @regEx2, 'SecondNumber')=%%
%%[
/* Check for possible match. */
VAR @result
SET @result = RegExMatch('ABC_dEF_GHI', '.*_(D..)_.*', 0, 'IgnoreCase', 'Multiline')
IF Length(@result) > 0 THEN]%%
Matched!
%%[ ELSE ]%%
No match...
%%[ ENDIF ]%%
```

Last Updated: Jun 8, 2021
