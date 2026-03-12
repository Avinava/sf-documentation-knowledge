---
title: "onTabSave()"
domain: service-cloud
topic: ontabsave
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.276Z
estimatedTokens: 684
keywords: [onTabSave, Registers, calls, callback, user, clicks, Save, subtab’s, Unsaved, Changes, dialog, box., call, setTabUnsavedChanges, method., notifies, console, custom, save, operation]
---

# onTabSave()

> Registers and calls a callback method when a user clicks
                Save in a subtab’s Unsaved Changes dialog box. When
            using this method, call setTabUnsavedChanges() in the callback method. This notifies
            the console that the custom save operation completed. In the call to setTabUnsavedChanges(), pass the first parameter as
                false to indicate a successful save or
                true to indicate an unsuccessful save. This
            method is only available in API version 28.0 or later.

# onTabSave()

Registers and calls a callback method when a user clicks **Save** in a subtab’s Unsaved Changes dialog box. When using this method, call [setTabUnsavedChanges()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settabdirty.htm "Sets the unsaved changes icon (Unsaved changes on tab icon ) on subtabs to indicate unsaved data. This method is only available in API version 23.0 or later.") in the callback method. This notifies the console that the custom save operation completed. In the call to setTabUnsavedChanges(), pass the first parameter as false to indicate a successful save or true to indicate an unsuccessful save. This method is only available in API version 28.0 or later.

Registering a callback method affects the user interface. When no save handler is registered, the user is presented with two options when closing a subtab with unsaved changes: **Continue** or **Cancel**. When a save handler is registered, the user is presented with three options when closing the subtab: **Save**, **Don’t Save**, or **Cancel**. In this scenario, the callback method registered is called when the user chooses **Save**.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_console)

#### Important

When using onTabSave() with setTabUnsavedChanges():

-   Calling sforce.console.setTabUnsavedChanges(false,...) closes the specified subtab. We recommend placing the call to sforce.console.setTabUnsavedChanges() at the end of the callback method, as any subsequent save logic might not execute.
-   onTabSave() works only on subtabs or their sidebar components. It doesn’t work on primary tabs.
-   *Not* calling sforce.console.setTabUnsavedChanges() will have a severe effect on the user interface. For example, closing a primary tab with a subtab for which sforce.console.setTabUnsavedChanges() has not been called prevents a Saving... modal dialog box from closing.
-   Any callback passed to sforce.console.setTabUnsavedChanges() will not execute if the specified tab saves successfully and closes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Calling onTabSave() from a custom console component prevents that component from refreshing when saving the subtab. ” in the Salesforce online help.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called to handle the save operation. |

## Sample Code–Visualforce

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| id | string | ID of the subtab being saved. |
| objectId | string | Object ID of the subtab being saved, if applicable; null otherwise. |

## Code Examples

```
sforce.console.onTabSave(callback:Function)
```

```
<apex:page>
    <a href="#" onClick="testOnTabSave();return false">
         Click here to register save handler</a> 
    
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testOnTabSave() {
            sforce.console.onTabSave(handleSave);
        }
    var handleSave = function handleSave(result) {
        alert('save handler called from tab with id ' + result.id +
             ' and objectId ' + result.objectId);
        //Perform save logic here
        
        //Mark tab as 'clean'
        sforce.console.setTabUnsavedChanges(false, undefined, result.id);
    };
  </script>
</apex:page>
```

## Related Topics

- setTabUnsavedChanges() (atlas.en-us.api_console.meta/api_console/sforce_api_console_settabdirty.htm)
