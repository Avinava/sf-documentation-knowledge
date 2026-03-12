---
title: "focusNavigationTab()"
domain: service-cloud
topic: focusnavigationtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.443Z
estimatedTokens: 159
keywords: [focusNavigationTab, Focuses, browser, navigation, tab, API, version, 31.0, later, Arguments, Sample, Code–Visualforce]
---

# focusNavigationTab()

> Focuses the browser on the navigation tab. This method
            is only available in API version 31.0 or later.

# focusNavigationTab()

Focuses the browser on the navigation tab. This method is only available in API version 31.0 or later.

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

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if returning the object IDs was successful; false otherwise. |

## Code Examples

```
sforce.console.focusNavigationTab((optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var callback = function (result) {} 
            if(result.success){
            alert('success');
        }
        else{
        alert('Something is wrong.');
        }
    };
        sforce.console.focusNavigationTab(callback);
    </script>
</apex:page>
```
