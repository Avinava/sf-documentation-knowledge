---
title: "reopenLastClosedTab()"
domain: service-cloud
topic: reopenlastclosedtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.406Z
estimatedTokens: 167
keywords: [reopenLastClosedTab, Reopens, closed, primary, tab, any, subtabs, were, open, moment, API, version, 35.0, later, Arguments]
---

# reopenLastClosedTab()

> Reopens the last closed primary tab, and any of its
            subtabs that were open, the moment it was closed. This method is only available in API
            version 35.0 or later.

# reopenLastClosedTab()

Reopens the last closed primary tab, and any of its subtabs that were open, the moment it was closed. This method is only available in API version 35.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the tab was reopened, false otherwise. |

## Code Examples

```
sforce.console.reopenLastClosedTab()
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        
        var  = callback = function (result) {
            if (result.success) {
                alert('Last tab was re-opened!');
            } else {
                alert('No tab was re-opened.');
            }
        };

        function reopenLastClosedTabTest() { 
               sforce.console.reopenLastClosedTab(callback);
        }
        
  </script>
  <A HREF="#" onClick="reopenLastClosedTabTest(); return false">Re-open Last Closed Tab</A>
</apex:page>
```
