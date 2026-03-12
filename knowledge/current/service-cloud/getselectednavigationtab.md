---
title: "getSelectedNavigationTab()"
domain: service-cloud
topic: getselectednavigationtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.604Z
estimatedTokens: 238
keywords: [getSelectedNavigationTab, selected, navigation, tab, API, version, 31.0, later, Arguments, Sample, Code–Visualforce]
---

# getSelectedNavigationTab()

> Returns the selected object in the navigation
            tab. This method is only available in API version 31.0 or later.

# getSelectedNavigationTab()

Returns the selected object in the navigation tab. This method is only available in API version 31.0 or later.

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
| navigationTabId | string | The object ID of the selected object. |
| listViewUrl | object | The list view URL of the selected object. |
| label | object | The label of the selected object. |
| selected | boolean | true if returning the selected field of the object was successful, false otherwise. |
| success | boolean | true if returning the object IDs was successful, false otherwise. |

## Code Examples

```
sforce.console.getSelectedNavigationTab((optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var callback = function (result) {}
            if (result.success) {
               alert('the navigation tab id is ' + result.navigationTabId + ' and navigation url is ' + result.listViewUrl);
                           } else {
               alert('something is wrong!');
            }
        };
        sforce.console.getSelectedNavigationTab(callback);
    </script>
</apex:page>
```
