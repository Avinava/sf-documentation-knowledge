---
title: "POST /interaction/v1/interactions/contactMembership"
domain: mc-apis
topic: post-interactionv1interactionscontactmembership
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.694Z
estimatedTokens: 247
keywords: [POST, interaction, interactions, contactMembership, journeys, journey, versions, contact, keys, **Overview**, Usage, Marketing, Cloud, Permissions]
---

# POST /interaction/v1/interactions/contactMembership

> Provides a list of journeys and journey versions for a list of contact keys.

# POST /interaction/v1/interactions/contactMembership

## **Overview**

Provides a list of journeys and journey versions for a list of contact keys.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ContactKeyList | array | Required | List of up to 50 contact keys. |

## Usage

### Required Marketing Cloud Permissions

-   Journey Builder, General and Automation
-   Interaction Studio, Access

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/contactMembership
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "ContactKeyList":["ContactKey_1", "ContactKey_2", "ContactKey_3"]
}
```

### Example Response

```js
HTTP/1.1 200 Ok
{
"results" : {
"contactMemberships" : [
    {
        "contactKey" : "ContactKey_1",
        "definitionKey" : "Uniqueue_Key",
        "version" : 1
    }
],
"contactsNotFound" : ["ContactKey_2", "ContactKey_3"]
}
}
```

Last Updated: Jun 8, 2021
