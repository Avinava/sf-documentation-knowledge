---
title: "StandardSetController Methods"
domain: pages
topic: standardsetcontroller-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.593Z
estimatedTokens: 1061
keywords: [StandardSetController, instance]
---

# StandardSetController Methods

> The following are methods for StandardSetController. All are instance methods.

# StandardSetController Methods

The following are methods for StandardSetController. All are instance methods.

-   **[cancel()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_cancel.htm)**
    Returns the PageReference of the original page, if known, or the home page.
-   **[first()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_first.htm)**
    Changes the set of records that the controller returns to the first page of records.
-   **[getCompleteResult()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getCompleteResult.htm)**
    Indicates whether there are more records in the set than the maximum record limit. If this is false, there are more records than you can process using the list controller. The maximum record limit is 10,000 records.
-   **[getFilterId()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getFilterId.htm)**
    Returns the ID of the filter that is currently in context.
-   **[getHasNext()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getHasNext.htm)**
    Indicates whether there are more records after the current page set.
-   **[getHasPrevious()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getHasPrevious.htm)**
    Indicates whether there are more records before the current page set.
-   **[getListViewOptions()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getListViewOptions.htm)**
    Returns a list of the listviews available to the current user.
-   **[getPageNumber()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getPageNumber.htm)**
    Returns the page number of the current page set. Note that the first page returns 1.
-   **[getPageSize()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getPageSize.htm)**
    Returns the number of records included in each page set.
-   **[getRecord()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getRecord.htm)**
    Returns the sObject that represents the changes to the selected records. This retrieves the prototype object contained within the class, and is used for performing mass updates.
-   **[getRecords()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getRecords.htm)**
    Returns the list of sObjects in the current page set. This list is immutable, i.e. you can't call clear() on it.
-   **[getResultSize()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getResultSize.htm)**
    Returns the number of records in the set.
-   **[getSelected()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getSelected.htm)**
    Returns the list of sObjects that have been selected.
-   **[last()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_last.htm)**
    Changes the set of records that the controller returns to the last page of records.
-   **[next()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_next.htm)**
    Changes the set of records that the controller returns to the next page of records.
-   **[previous()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_previous.htm)**
    Changes the set of records that the controller returns to the previous page of records.
-   **[save()](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_save.htm)**
    Inserts new records or updates existing records that have been changed. After this operation is finished, it returns a PageReference to the original page, if known, or the home page.
-   **[setFilterID(filterId)](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_setFilterID.htm)**
    Sets the filter ID of the controller.
-   **[setpageNumber(pageNumber)](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_setpageNumber.htm)**
    Sets the page number.
-   **[setPageSize(pageSize)](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_setPageSize.htm)**
    Sets the number of records in each page set.
-   **[setSelected(selectedRecords)](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_setSelected.htm)**
    Set the selected records to the records specified in the selectedRecords argument.

## Related Topics

- cancel() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_cancel.htm)
- first() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_first.htm)
- getCompleteResult() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getCompleteResult.htm)
- getFilterId() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getFilterId.htm)
- getHasNext() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getHasNext.htm)
- getHasPrevious() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getHasPrevious.htm)
- getListViewOptions() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getListViewOptions.htm)
- getPageNumber() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getPageNumber.htm)
- getPageSize() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getPageSize.htm)
- getRecord() (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_getRecord.htm)
