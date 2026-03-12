---
title: "Core Calls"
domain: api
topic: core-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.357Z
estimatedTokens: 1089
keywords: [Core, Calls, API, alphabetical, order, brief, Click, call, usage, Samples]
---

# Core Calls

> A list of supported calls in the API in alphabetical order, and provides a brief
		description for each. Click a call name to see syntax, usage, and more information for that
		call.

# Core Calls

A list of supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

For a list of Apex-related calls, see [Apex-Related Calls](atlas.en-us.api.meta/api/call_apex_list.htm "The following table lists supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call."), for a list of describe calls, see [Describe Calls](atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm "Lists supported describe calls in the API."), and for a list of utility calls, see [Utility Calls](atlas.en-us.api.meta/api/utility_calls.htm "This topic describes API calls that your client applications can invoke to obtain the system timestamp, user information, and change user passwords.").

| Call | Description |
| --- | --- |
| convertLead() | Converts a Lead into an Account, Contact, or (optionally) an Opportunity. |
| create() | Adds one or more new individual objects to your organization’s data. |
| delete() | Deletes one or more individual objects from your organization’s data. |
| deleteByExample() | Deletes objects from your organization’s data using an sObject as a template for what to delete. All data in a big object matching the values in the sObject templates are deleted. |
| emptyRecycleBin() | Delete records from the recycle bin immediately. |
| executeListView() | Executes a list view’s SOQL query to retrieve data, labels, and actions from a list view. |
| findDuplicates() | Performs rule-based searches for duplicate records. The input is an array of sObject, each of which specifies the values to search for and the type of object that supplies the duplicate rules. The output identifies the detected duplicates for each object that supplies the duplicate rules. findDuplicates() applies the rules to the values to do the search. The output identifies the detected duplicates for each sObject. |
| findDuplicatesByIds() | Performs rule-based searches for duplicate records. The input is an array of IDs, each of which specifies the records for which to search for duplicates. The output identifies the detected duplicates for each object that supplies the duplicate rules. findDuplicatesByIds() applies the rules to the record IDs to do the search. The output identifies the detected duplicates for each ID. |
| getDeleted() | Retrieves the IDs of individual objects of the specified object that have been deleted since the specified time. For information on IDs, see ID Field Type. |
| getUpdated() | Retrieves the IDs of individual objects of the specified object that have been updated since the specified time. For information on IDs, see ID Field Type. |
| invalidateSessions() | Ends one or more sessions specified by sessionId. |
| login() | Logs in to the login server and starts a client session. |
| logout() | Ends the session of the logged-in user. |
| merge() | Merges records of the same object type. |
| performQuickActions() | Executes quick actions of type create or update. |
| process() | Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. |
| query() | Executes a query against the specified object and returns data that matches the specified criteria. |
| queryAll() | Same as query(), but includes deleted and archived items. |
| queryMore() | Retrieves the next batch of objects from a query. |
| retrieve() | Retrieves one or more objects based on the specified object IDs. |
| search() | Executes a text search in your organization’s data. |
| undelete() | Undelete records identified with queryAll(). |
| update() | Updates one or more existing objects in your organization’s data. |
| upsert() | Creates objects and updates existing objects; matches on a custom field to determine the presence of existing objects. |

## Samples

The samples in this section are based on the enterprise WSDL file. They assume that you have already imported the WSDL file and created a connection. To learn how to do so, see the [Quick Start](atlas.en-us.api.meta/api/sforce_api_quickstart_steps.htm) tutorial.

## Related Topics

- Apex-Related Calls (atlas.en-us.api.meta/api/call_apex_list.htm)
- Describe Calls (atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm)
- Utility Calls (atlas.en-us.api.meta/api/utility_calls.htm)
- convertLead() (atlas.en-us.api.meta/api/sforce_api_calls_convertlead.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- deleteByExample() (atlas.en-us.api.meta/api/sforce_api_calls_deletebyexample.htm)
- emptyRecycleBin() (atlas.en-us.api.meta/api/sforce_api_calls_emptyrecyclebin.htm)
- executeListView() (atlas.en-us.api.meta/api/sforce_api_calls_executelistview.htm)
- findDuplicates() (atlas.en-us.api.meta/api/sforce_api_calls_findduplicates.htm)
