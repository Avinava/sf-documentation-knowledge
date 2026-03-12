---
title: "setSelectedNavigationTab()"
domain: service-cloud
topic: setselectednavigationtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.499Z
estimatedTokens: 205
keywords: [setSelectedNavigationTab, navigation, tab, specific, URL, API, version, 31.0, later, Arguments, Sample, Code–Visualforce]
---

# setSelectedNavigationTab()

> Sets the navigation tab with a specific ID or
            URL. This method is only available in API version 31.0 or later.

# setSelectedNavigationTab()

Sets the navigation tab with a specific ID or URL. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |
| navigatorTabId | string | The ID of the navigation tab to be selected. |
| url | string | The URL of the navigation tab to be selected. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the navigation tab with a specific ID or URL was successful, false otherwise. |

## Code Examples

```
sforce.console.setSelectedNavigationTab((optional)callback, navigatorTabId:(optional)string, url:(optional)string)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var callback = function (result) {} 
            if (result.success) {
              alert('Successful');
            } else {
              alert('something is wrong!');
            }
        };
        sforce.console.setSelectedNavigationTab(callback,'nav-tab-4');
    </script>
</apex:page>
```
