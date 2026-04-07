---
title: "POST /contacts/v1/contacts/actions/restrict?type=keys"
domain: mc-apis
topic: post-contactsv1contactsactionsrestricttypekeys
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.405Z
estimatedTokens: 106
keywords: [POST, contacts, actions, restrict?type=keys, Restricts, processing, identified, ContactKey, operation, runs, asynchronously, OperationID, check, status, **Overview**]
---

# POST /contacts/v1/contacts/actions/restrict?type=keys

> Restricts processing for contacts identified by ContactKey values in the request. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

# POST /contacts/v1/contacts/actions/restrict?type=keys

## **Overview**

Restricts processing for contacts identified by ContactKey values in the request. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| Values | array | Required | Array of contact key values to restrict. |

Last Updated: Jun 8, 2021
