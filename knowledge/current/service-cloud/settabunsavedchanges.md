---
title: "setTabUnsavedChanges()"
domain: service-cloud
topic: settabunsavedchanges
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.516Z
estimatedTokens: 546
keywords: [setTabUnsavedChanges, unsaved, changes, icon, subtabs, indicate, data, API, version, 23.0, later, Arguments, Sample, Code, Later–Visualforce]
---

# setTabUnsavedChanges()

> Sets the unsaved changes icon ( )
            on subtabs to indicate unsaved data. This method is only available in API version 23.0
            or later.

# setTabUnsavedChanges()

Sets the unsaved changes icon (![Unsaved changes on tab icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2FdirtyIndicator.png&folder=api_console) ) on subtabs to indicate unsaved data. This method is only available in API version 23.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| unsaved | boolean | If true, the tab is marked as having unsaved changes. |
| callback | function | JavaScript method that’s called upon completion of the method. |
| subtabId | string | The ID of the subtab that is marked as having unsaved changes.This argument is only available in API version 25.0 or later. |

## Sample Code API Version 23.0 or Later–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/apex/HTViewHelpDoc?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in the Salesforce help.

## Response

This method returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if update was successful; false if update wasn't successful. |

## Sample Code API Version 25.0 or Later–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

This example is only set to run if the Visualforce page is inside an application-level custom component. For more information, see [Methods for Application-Level Custom Console Components](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_app_components.htm).

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if returning the focused subtab ID was successful; false if if returning the focused subtab ID wasn't successful. |

## Code Examples

```
sforce.console.setTabUnsavedChanges(unsaved:Boolean, callback:Function, (optional)subtabId:String)
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testSetTabUnsavedChanges();return false">
           Click here to indicate this tab has unsaved changes</A> 

<apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetTabUnsavedChanges() { 
            sforce.console.setTabUnsavedChanges(true, displayResult);
        };
        function displayResult(result) {
             if (result.success) {
                 alert('Tab status has been successfully updated');
             } else {
                 alert('Tab status couldn’t be updated');
             }
        }

    </script>
</apex:page>
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testSetTabUnsavedChanges();return false">
           Click here to indicate this tab has unsaved changes</A> 

    <apex:includeScript value="/support/console/25.0/integration.js"/>
    <script type="text/javascript">
         function testSetTabUnsavedChanges() {
            sforce.console.getFocusedSubtabId(setTabDirty);
        };
         function setTabDirty(result) {
            sforce.console.setTabUnsavedChanges(true, displayResult, result.id);
        };
         function displayResult(result) {
            if (result.success) {
                 alert('Tab status has been successfully updated');
             } else {
                 alert('Tab status couldn’t be updated');
             }
        };
    </script>
</apex:page>
```

## Related Topics

- Methods for Application-Level Custom Console
                    Components (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_app_components.htm)
