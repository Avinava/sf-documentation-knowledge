---
title: "POST /contacts/v1/contacts/actions/delete?type=ids"
domain: mc-apis
topic: post-contactsv1contactsactionsdeletetypeids
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.930Z
estimatedTokens: 630
keywords: [POST, contacts, actions, delete?type=ids, Deletes, contact, operations, runs, asynchronously, OperationID, check, status, **Overview**, Usage]
---

# POST /contacts/v1/contacts/actions/delete?type=ids

> Deletes contacts based on specified contact ID values. This operations runs asynchronously. Use the OperationID value returned to check the status of the delete.

# POST /contacts/v1/contacts/actions/delete?type=ids

## **Overview**

Deletes contacts based on specified contact ID values. This operations runs asynchronously. Use the OperationID value returned to check the status of the delete.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| Values | array | Required | Array of contact ID values to delete |
| DeleteOperationType | string | Required | Type of delete operation to perform. Specify ContactAndAttributes to delete a contact from the entire account as long as no other channel references that contact. AttributesOnly is reserved for future use. |

### Usage

This request deletes contacts specified by the contact ID values passed in the values array.

This asynchronous process places the deletion call in a queue for processing. The queue processes only one deletion call at a time, and each process can take several hours to complete.

When deleting from a sendable data extension, the call limits each process to one million rows.

This route deletes contact information from the account, including the Email, MobileConnect, and MobilePush apps. This deletion occurs at the enterprise level.

A successful call suppresses any sends or other activities to the specified contacts for a specified number of days. Users may still see the contact record in Marketing Cloud, but you cannot include these suppressed contacts in any activities. After the specified number of days days, Marketing Cloud deletes the contact from all lists and sendable data extensions. You cannot restore any contact information associated with this delete process. Any subscriberID number assigned to the contact can be recycled in the future. For Enterprise accounts, this process deletes all information at the Enterprise level.

> To configure suppression number values, use the [Configure Settings for Deleting Contacts](atlas.en-us.noversion.mc-apis.meta/mc-apis/ContactsDeleteConfigStatus.htm) resource.

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/actions/delete?type=ids
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "values": [12345678, 12345679],
  "DeleteOperationType": "ContactAndAttributes"
}
```

**Example Response**

```js
{
  "operationInitiated": true,
  "operationID": 2,
  "requestServiceMessageID": "21d0d10d-a15a-413c-bc3e-8b43b185e551",
  "resultMessages": [],
  "serviceMessageID": "acb87f67-ec49-42af-a0bb-987ac6451560"
}
```

Last Updated: Jun 8, 2021

## Related Topics

- Configure Settings for Deleting Contacts (atlas.en-us.noversion.mc-apis.meta/mc-apis/ContactsDeleteConfigStatus.htm)
