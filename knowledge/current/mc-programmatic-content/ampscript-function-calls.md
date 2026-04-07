---
title: "AMPscript Function Calls"
domain: mc-programmatic-content
topic: ampscript-function-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.245Z
estimatedTokens: 916
keywords: [AMPscript, Function, Call, location, email, message, landing, SMS, want, result, script, appear, code, functions, surrounded, open, close, delimiters, ignored, system, execute, Outside, Block, Inside, Tag-based, Minimum, Full, Delimiter, Comparison, Constant, Attribute, Variable]
---

> Call the AMPscript at the location in the email message, landing page, or SMS message where you want the result of the script to appear. All AMPscript code and functions must be surrounded by open and close delimiters, or the code will be ignored by the system. Function calls will execute even if ou

# AMPscript Function Calls

Call the AMPscript at the location in the email message, landing page, or SMS message where you want the result of the script to appear. All AMPscript code and functions must be surrounded by open and close delimiters, or the code will be ignored by the system. Function calls will execute even if outside of a scripting statement, such as SET or IF. When using brackets before and after AMPscript delimiters, include spaces between those brackets and delimiters.

```
[content] %%[script]%% [content]
```

## Function Call Outside an AMPscript Block

Function calls outside of an AMPscript block must be introduced by the opening delimiter %%= and terminated by the closing delimiter =%%.

```
%%=LOWERCASE(Name)=%%

%%=UPSERTDE("ent.CustomObject4",2,"Region","None","Product",_SubscriberKey,"Available",0,
"Price",100.77,"Inventory",0,"ExpireDate",NOW(),"Url",CONCAT(SubscriberID," Upsert"))=%%
```

This AMPscript example demonstrates how to include multiple AMPscript references inside a single set of delimiters:

```
<a href="%%=RedirectTo(TreatAsContent(Concat(view_email_url,"&ep=20110902&oeid=20110902",Substring(Uppercase(Source),1,1))))=%%">
```

## Function Call Inside an AMPscript Block

Function calls within an AMPscript block should not include the opening (%%=) and closing (=%%) delimiters.

```
%%[ LOWERCASE(Name) ]%%
```

## Function Return Values

Function output can also be referenced in script and function calls. In the case of functions, this is implemented through nested function calls. For example:

```
%%=LOWERCASE(SUBSTRING(Name, 1, 5))=%%
```

To prevent infinitely looping AMPscript calls, you can’t call AMPscript functions recursively and will receive an error: 104 - RecursiveScriptError. Recursive conditions count against the subscriber error limit threshold or disposition the subscriber send as Errored/NotSent. This error applies to email, SMS, and push notifications but doesn’t apply to CloudPages.

## Tag-based Syntax for AMPscript

Tag-based syntax for AMPscript standardizes the syntax used to declare AMPscript blocks with the syntax of server-side JavaScript. This syntax eases the burden on developers to write in a different syntax when switching between AMPscript and server-side JavaScript. Use the information below to format your AMPscript calls. AMPscript calls are case-insensitive.

## Minimum Syntax

This sample illustrates the minimum syntax necessary to declare an AMPscript block.

```
<script runat=server language=ampscript>
    [INSERT AMPSCRIPT HERE]
</script>
```

## Full Syntax

This sample illustrates the complete syntax used to declare an AMPscript block.

```
<script runat=server language="ampscript" executioncontexttype="Post" executioncontextname=test>
    [INSERT AMPSCRIPT HERE]
</script>
```

The AMPscript block must be closed in the same syntax that opens it. For example, if you open a block using <script>, you must close it with </script> and not \]%%.

## Delimiter Comparison

The table below demonstrates the similarities between standard AMPscript delimiters and server-side delimiters.

| Standard AMPscript Delimiter | Tag-based AMPscript Delimiter |
| --- | --- |
| %%[ | <script runat=server language=ampscript> |
| %%[[type=post;name=blockname] | <script runat=server language=ampscript executioncontexttype="Post" executioncontextname=blockname> |
| ]%% | </script> |
| %%[]%% | <script runat=server language=ampscript /> |

## Using Function Calls

Functions accept any of these input types:

### Constant Value

```
LOWERCASE("Mary Smith")
```

### Attribute Value

```
LOWERCASE(Name)
```

### Variable Value

```
LOWERCASE(@Name)
```
