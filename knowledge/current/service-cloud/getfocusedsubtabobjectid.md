---
title: "getFocusedSubtabObjectId()"
domain: service-cloud
topic: getfocusedsubtabobjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.475Z
estimatedTokens: 314
keywords: [getFocusedSubtabObjectId, subtab, which, browser, focused., example, case, account, ID., only, API, version, 24.0, later., Syntax, Arguments, Sample, Code–Visualforce, Note, Response]
---

# getFocusedSubtabObjectId()

> Returns the object ID of the subtab on which
            the browser is focused. For example, a case ID or account ID. This method is only
            available in API version 24.0 or later.

# getFocusedSubtabObjectId()

Returns the object ID of the subtab on which the browser is focused. For example, a case ID or account ID. This method is only available in API version 24.0 or later.

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
| id | string | The object ID of the subtab on which the browser is focused. If no subtab is open, the ID is null. |
| success | boolean | true if returning the object ID of the focused subtab was successful; false if returning the object ID of the focused subtab wasn't successful. |

## Code Examples

```
sforce.console.getFocusedSubtabObjectId((optional)callback:Function)
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testGetFocusedSubtabObjectId();">
           Click here to get the object ID of the focused subtab</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testGetFocusedSubtabObjectId() {
            sforce.console.getFocusedSubtabObjectId(showObjectId);
        }
            var showObjectId = function showObjectId(result) {
                // Display the object ID
            alert ('Object ID: ' + result.id);
        };
    </script>
</apex:page>
```
