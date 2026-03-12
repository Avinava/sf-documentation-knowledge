---
title: "getFocusedSubtabId()"
domain: service-cloud
topic: getfocusedsubtabid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.470Z
estimatedTokens: 217
keywords: [getFocusedSubtabId, subtab, which, browser, focused., example, case, account, ID., only, API, version, 25.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getFocusedSubtabId()

> Returns the ID of the subtab on which the browser is
            focused. For example, a case ID or account ID. This method is only available in API version 25.0 or
                later.

# getFocusedSubtabId()

Returns the ID of the subtab on which the browser is focused. For example, a case ID or account ID. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the subtab on which the browser is focused. If no subtab is open, the ID is null. |
| success | boolean | true if returning the ID of the focused subtab was successful; false if returning the ID of the focused subtab wasn't successful. |

## Code Examples

```
sforce.console.getFocusedSubtabId((optional)callback:Function)
```

```
<apex:page>
    <A HREF="#" onClick="testGetFocusedSubtabId();">
           Click here to get the ID of the focused subtab</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testGetFocusedSubtabId() {
            sforce.console.getFocusedSubtabId(showTabId);
        }
        var showTabId = function showTabId(result) {
                // Display the tab ID
            alert ('Tab ID: ' + result.id);
        };
    </script>
</apex:page>
```
