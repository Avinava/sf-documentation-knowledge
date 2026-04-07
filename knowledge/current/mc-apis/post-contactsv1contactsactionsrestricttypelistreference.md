---
title: "POST /contacts/v1/contacts/actions/restrict?type=listReference"
domain: mc-apis
topic: post-contactsv1contactsactionsrestricttypelistreference
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.611Z
estimatedTokens: 344
keywords: [POST, contacts, actions, restrict?type=listReference, Restricts, processing, identified, listReference, operation, runs, asynchronously, OperationID, check, status, **Overview**]
---

> Restricts processing for contacts identified by listReference values in the request. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

# POST /contacts/v1/contacts/actions/restrict?type=listReference

## **Overview**

Restricts processing for contacts identified by listReference values in the request. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| targetList | object |  | Object used to identify list. Can include ListType and ListKey objects. |
| targetList.ListType | object |  | Object that includes list type information. Can include listTypeID or ListTypeKey. The only valid value for ListTypeID is 3, indicating a data extension. |
| targetList.listKey | string |  | ID used to identify the list in Marketing Cloud. |
| deleteListWhenCompleted | boolean |  | Indicates whether to delete the list after requesting it. This option does not apply to lists identified by ID, key, or reference. If this option is true, the process skips lists marked as not deletable, issues a warning, and continues processing remaining lists. |
| deleteListContentsWhenCompleted | boolean |  | Indicates whether to delete the contents of a list after requesting it. This option does not apply to lists identified by ID, key, or reference. If this option is true, the process skips lists marked as not deletable, issues a warning, and continues processing remaining lists. |

Last Updated: Jun 8, 2021
