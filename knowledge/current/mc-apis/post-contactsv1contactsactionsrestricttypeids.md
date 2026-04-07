---
title: "POST /contacts/v1/contacts/actions/restrict?type=ids"
domain: mc-apis
topic: post-contactsv1contactsactionsrestricttypeids
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.400Z
estimatedTokens: 103
keywords: [POST, contacts, actions, restrict?type=ids, Restricts, processing, identified, ContactID, operation, runs, asynchronously, OperationID, check, status, **Overview**]
---

# POST /contacts/v1/contacts/actions/restrict?type=ids

> Restricts processing for contacts identified by ContactID values in the request. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

# POST /contacts/v1/contacts/actions/restrict?type=ids

## **Overview**

Restricts processing for contacts identified by ContactID values in the request. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| Values | array | Required | Array of contact IDs to restrict. |

Last Updated: Jun 8, 2021
