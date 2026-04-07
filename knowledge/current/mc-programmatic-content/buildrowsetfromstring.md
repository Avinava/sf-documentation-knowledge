---
title: "BuildRowSetFromString"
domain: mc-programmatic-content
topic: buildrowsetfromstring
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.951Z
estimatedTokens: 396
keywords: [BuildRowSetFromString, Function, Ordinal, rowset, Character, delimiter, comma, **Overview**, **Syntax**]
---

> BuildRowSetFromString(1, 2)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Value used to create rowset



    2
    string
    Required
    Character used as delimiter, such as a comma.

# BuildRowSetFromString

## **Overview**

Creates a rowset from a character string by splitting the string at the specified delimiter.

### **Syntax**

BuildRowSetFromString(1, 2)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Value used to create rowset |
| 2 | string | Required | Character used as delimiter, such as a comma. |

### Usage

```
BuildRowsetFromString('123|456|789', '|')
```

Returns a rowset with three rows. However, this function returns the rowset in one column, and this column doesn't have an assigned name:

```
123 456 789
```

The sample code below demonstrates how to pass and process attribute names:

```
%%[
Var @queryparams
Var @row
Var @name
Var @value
Set @queryparams = BuildRowsetFromString(QueryParameter('names'),'|')
for @i = 1 to Rowcount(@queryparams) do
Set @row = Row(@queryparams, @i)
Set @name = Field(@row,1)
Set @value = QueryParameter(@name)
]%%
Passed <b>name:</b> %%= v(@name) =%% with <b>value:</b> %%= v(@value) =%%<br/>
%%[
next @i
]%%
```

When passed the input below:

```
names=career|firstname|lastname&career=marketer&firstname=Angela&lastname=Ruiz
```

The AMPscript returns the following:

```
Passed name: career with value: marketer
Passed name: firstname with value: Angela
Passed name: lastname with value: Ruiz
```

Because this function returns the rowset in one column, and this column does not have an assigned name, you refer to the column within a function using an ordinal number:

```
Field(Row(BuildRowSetFromString('123|456', '|'), 1), 1)
```

Last Updated: Jun 8, 2021
