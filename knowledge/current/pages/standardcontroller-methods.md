---
title: "StandardController Methods"
domain: pages
topic: standardcontroller-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.546Z
estimatedTokens: 488
keywords: [StandardController, instance]
---

# StandardController Methods

> The following are methods for StandardController. All are instance methods.

# StandardController Methods

The following are methods for StandardController. All are instance methods.

-   **[addFields(fieldNames)](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_addFields.htm)**
    When a Visualforce page is loaded, the fields accessible to the page are based on the fields referenced in the Visualforce markup. This method adds a reference to each field specified in fieldNames so that the controller can explicitly access those fields as well.
-   **[cancel()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_cancel.htm)**
    Returns the PageReference of the cancel page.
-   **[delete()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_delete.htm)**
    Deletes record and returns the PageReference of the delete page.
-   **[edit()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_edit.htm)**
    Returns the PageReference of the standard edit page.
-   **[getId()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_getId.htm)**
    Returns the ID of the record that is currently in context, based on the value of the id query string parameter in the Visualforce page URL.
-   **[getRecord()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_getRecord.htm)**
    Returns the record that is currently in context, based on the value of the id query string parameter in the Visualforce page URL.
-   **[reset()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_reset.htm)**
    Forces the controller to reacquire access to newly referenced fields. Any changes made to the record prior to this method call are discarded.
-   **[save()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_save.htm)**
    Saves changes and returns the updated PageReference.
-   **[view()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_view.htm)**
    Returns the PageReference object of the standard detail page.

## Related Topics

- addFields(fieldNames) (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_addFields.htm)
- cancel() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_cancel.htm)
- delete() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_delete.htm)
- edit() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_edit.htm)
- getId() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_getId.htm)
- getRecord() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_getRecord.htm)
- reset() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_reset.htm)
- save() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_save.htm)
- view() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_view.htm)
