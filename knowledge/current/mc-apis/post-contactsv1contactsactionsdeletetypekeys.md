---
title: "POST /contacts/v1/contacts/actions/delete?type=keys"
domain: mc-apis
topic: post-contactsv1contactsactionsdeletetypekeys
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:19.936Z
estimatedTokens: 632
keywords: [POST, contacts, actions, delete?type=keys, Deletes, contact, key, operation, runs, asynchronously, OperationID, check, status, **Overview**, Usage]
---

# POST /contacts/v1/contacts/actions/delete?type=keys

> Deletes contacts based on specified contact key values. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

# POST /contacts/v1/contacts/actions/delete?type=keys

## **Overview**

Deletes contacts based on specified contact key values. This operation runs asynchronously. Use the OperationID value returned to check the status of the delete.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| Values | array | Required | Array of contact key values to delete |
| DeleteOperationType | string | Required | Type of delete operation to perform. Specify ContactAndAttributes to delete a contact and all its attributes from the entire account and channels. AttributesOnly is reserved for future use. |

### Usage

This request deletes contacts specified by the contact key values passed in the values array.

This asynchronous process places the deletion call in a queue for processing. The queue processes only one deletion call at a time, and each process can take several hours to complete.

This resource deletes contact information from the account, including the Email, MobileConnect, MobilePush, and GroupConnect apps, as well as lists, audiences, journeys, and Einstein analytics. This deletion occurs at the enterprise level.

A successful request suppresses any sends or other activities to the specified contacts for a specified number of days. You may still see the contact record in Marketing Cloud, but you can't include these suppressed contacts in any activities. After the specified number of days, Marketing Cloud deletes the contact from all lists and sendable data extensions. You can't restore any contact information associated with this delete process. Any subscriberID number assigned to the contact can be recycled in the future. For Enterprise accounts, this process deletes all information at the Enterprise level.

> To configure suppression number values, use the [Configure Settings for Deleting Contacts](atlas.en-us.noversion.mc-apis.meta/mc-apis/ContactsDeleteConfigStatus.htm) resource.

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/actions/delete?type=keys
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "values": [
        "TEST_317-531-5555", "TEST_317-531-5556"
    ],
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
