---
title: "getEnclosingPrimaryTabObjectId()"
domain: service-cloud
topic: getenclosingprimarytabobjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.564Z
estimatedTokens: 315
keywords: [getEnclosingPrimaryTabObjectId, current, primary, tab, subtab, case, account, works, API, version, 24.0, later, Arguments, Sample, Code–Visualforce]
---

# getEnclosingPrimaryTabObjectId()

> Returns the object ID of the current
            primary tab, which contains a subtab. For example, a case ID or account ID. This method
            works within a primary tab or subtab. This method is only available in API version 24.0
            or later.

# getEnclosingPrimaryTabObjectId()

Returns the object ID of the current primary tab, which contains a subtab. For example, a case ID or account ID. This method works within a primary tab or subtab. This method is only available in API version 24.0 or later.

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the current primary tab that contains this subtab. |
| success | boolean | true if returning the enclosing primary tab was successful; false if returning the enclosing primary tab wasn't successful. |

## Code Examples

```
sforce.console.getEnclosingPrimaryTabObjectId((optional)callback:Function)
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testGetEnclosingPrimaryTabObjectId();">
           Click here to get enclosing primary tab object ID</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testGetEnclosingPrimaryTabObjectId() {
            sforce.console.getEnclosingPrimaryTabObjectId(showObjectId);
        }
            var showObjectId = function showObjectId(result) {
                // Display the object ID
            alert ('Object ID: ' + result.id);
        };
    </script>
</apex:page>
```
