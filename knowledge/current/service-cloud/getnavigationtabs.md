---
title: "getNavigationTabs()"
domain: service-cloud
topic: getnavigationtabs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.590Z
estimatedTokens: 184
keywords: [getNavigationTabs, objects, navigation, tab, API, version, 31.0, later, Arguments, Sample, Code–Visualforce]
---

# getNavigationTabs()

> Returns all of the objects in the navigation tab. This
            method is only available in API version 31.0 or later.

# getNavigationTabs()

Returns all of the objects in the navigation tab. This method is only available in API version 31.0 or later.

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
| menuItems | object | The IDs of objects in the navigation tab. |
| success | boolean | true if returning the IDs of objects in the navigation tab was successful, false otherwise. |

## Code Examples

```
sforce.console.getNavigationTabs((optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var callback = function (result) { 
           var id;
              if (result.success) { 
                var tempItem = JSON.parse(result.items);
                for (var i = 0, len = tempItem.length; i < len; i++) {
           alert('Label:'+tempItem[i].label+'listViewURl:'+tempItem[i].listViewUrl+'navTabid:'
           +tempItem[i].navigationTabId+'Selected ' +tempItem[i].selected);
           }
              } else { 
                alert('something is wrong!');
                }
        };
        sforce.console.getNavigationTabs(callback);
    </script>
</apex:page>
```
