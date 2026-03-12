---
title: "selectMacro()"
domain: service-cloud
topic: selectmacro
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.428Z
estimatedTokens: 203
keywords: [selectMacro, Selects, displays, specific, macro, widget, API, version, 36.0, later, isn’t, Lightning, Console, Arguments, Sample]
---

# selectMacro()

> Selects and displays a specific macro in the macro
            widget. This method is only available in API version 36.0 or later. This method isn’t
            supported in Lightning Console.

# selectMacro()

Selects and displays a specific macro in the macro widget. This method is only available in API version 36.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that is called when the method is completed |
| macroID | string | ID of the macro that’s selected |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| cause | string | Explanation of function failure, if applicable |
| success | boolean | true if selecting the macro was successful; false otherwise |

## Code Examples

```
sforce.console.selectMacro(macroId:String, (optional)callback:Function)
```

```
<apex:page>
    <A HREF="#" onClick="openInWidget('0JZ00123456789A');return false">Click here to select a macro</A>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function openInWidget(id) {
            sforce.console.selectMacro(id);
        }
    </script>
</apex:page>
```
