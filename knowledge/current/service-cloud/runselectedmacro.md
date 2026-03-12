---
title: "runSelectedMacro()"
domain: service-cloud
topic: runselectedmacro
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.366Z
estimatedTokens: 187
keywords: [runSelectedMacro, Executes, selected, macro, widget., only, API, version, 36.0, later., isn’t, supported, Lightning, Console., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# runSelectedMacro()

> Executes the selected macro in the macro widget. This
            method is only available in API version 36.0 or later. This method isn’t supported in
            Lightning Console.

# runSelectedMacro()

Executes the selected macro in the macro widget. This method is only available in API version 36.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that is called when the method is completed |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| cause | string | Explanation of function failure, if applicable |
| success | boolean | true if running the macro was successful; false otherwise |

## Code Examples

```
sforce.console.runSelectedMacro ((optional)callback:Function)
```

```
<apex:page>
    <A HREF="#" onClick="executeInWidget();return false">Click here to run a macro</A>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function executeInWidget() {
           sforce.console.runSelectedMacro();
        }
    </script>
</apex:page>
```
