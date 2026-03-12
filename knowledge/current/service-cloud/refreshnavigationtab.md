---
title: "refreshNavigationTab()"
domain: service-cloud
topic: refreshnavigationtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.364Z
estimatedTokens: 160
keywords: [refreshNavigationTab, Refreshes, selected, navigation, tab, API, version, 31.0, later, Arguments, Sample, Code–Visualforce]
---

# refreshNavigationTab()

> Refreshes the selected navigation tab. This method
            is only available in API version 31.0 or later.

# refreshNavigationTab()

Refreshes the selected navigation tab. This method is only available in API version 31.0 or later.

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
| success | boolean | true if refreshing the navigation tab was successful, false otherwise. |

## Code Examples

```
sforce.console.refreshNavigationTab((optional)callback:Function)
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
        sforce.console.refreshNavigationTab(callback); 
    </script>
</apex:page>
```
