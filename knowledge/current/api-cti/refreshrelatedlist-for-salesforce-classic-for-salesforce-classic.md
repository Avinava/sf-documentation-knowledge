---
title: "refreshRelatedList() for Salesforce Classic for
                        Salesforce Classic"
domain: api-cti
topic: refreshrelatedlist-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.898Z
estimatedTokens: 387
keywords: [refreshRelatedList, Salesforce, Classic, listName, refreshed, otherwise, console, currently, Usage, Arguments, Sample, Code–JavaScript, Notes]
---

# refreshRelatedList() for Salesforce Classic for
                        Salesforce Classic

> Returns true if the related list with the given listName is refreshed, false otherwise. When this
                              method is called within the Salesforce console,
                              only the related list with the given list name in the currently
                              

# refreshRelatedList() for Salesforce Classic for Salesforce Classic

## Usage

Returns true if the related list with the given listName is refreshed, false otherwise. When this method is called within the Salesforce console, only the related list with the given list name in the currently focused view will be refreshed. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| listName | string | The name of the related list to refresh. For example, Contact for Contacts related list or Activity for Open Activities related list.Note that to refresh a custom related list created from a custom lookup field, listName must specify the ID of the custom lookup field. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | Returns true if the related list with the given name is refreshed, false otherwise. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Notes

-   This method cannot refresh related lists created from <apex:relatedList>.
-   This method cannot refresh a related list from an overridden Visualforce page in the Salesforce console.
-   If called from within the Salesforce console, this method will only search for the related list to refresh in the currently focused view.

## Code Examples

```
sforce.interaction.refreshRelatedList(listName:string, callback:function)
```

```apex
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/28.0/interaction.js"></script>
   <script type="text/javascript">
       function checkRefreshResult(result) {
           if (result.result) {
                  alert('The related list is refreshed!');
            } else {
                   alert('Cannot refresh the related list with the given listName! Make sure the listName is correct and the related list is on the page.');
           }
        }
       function refreshActivityRelatedList() {
                sforce.interaction.refreshRelatedList('Activity', checkRefreshResult);
        }

       function refreshHistoryRelatedList() {
                sforce.interaction.refreshRelatedList('History', checkRefreshResult);
        }

       function saveAndRefresh() {
                sforce.interaction.saveLog('Task', 'Subject=ImportantTask&WhatId=[15-character ID of an account to which you want to attach the task]', function(result) {
           if (result.result) {
                  refreshActivityRelatedList();
            } else {
                  alert('Could not save the object! Check the developer console for error messages.');
            }
      });
}
</script>
</head>
<body>
       <button onclick="refreshHistoryRelatedList();">Refresh History Related List</button>
       <button onclick="saveAndRefresh();">Save and Refresh</button>
</body>
</html>
```
