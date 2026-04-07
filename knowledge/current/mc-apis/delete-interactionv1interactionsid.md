---
title: "DELETE /interaction/v1/interactions/{id}"
domain: mc-apis
topic: delete-interactionv1interactionsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.505Z
estimatedTokens: 394
keywords: [interaction, interactions, Deletes, journey, key, deleting, check, tag, unassociated, deleteTags, resource, **Overview**]
---

> Deletes a journey by ID or key. When deleting last version of a journey, check if the journey is associated with a tag and unassociated the tag using the deleteTags resource.

# DELETE /interaction/v1/interactions/{id}

## **Overview**

Deletes a journey by ID or key. When deleting last version of a journey, check if the journey is associated with a tag and unassociated the tag using the [deleteTags](atlas.en-us.noversion.mc-apis.meta/mc-apis/deleteTags.htm) resource.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | The ID of the journey to delete expressed in the form of a GUID (UUID). Required if not using a key. The ID deletes all versions of the journey, unless a versionNumber is provided. |
| key | string | Required | The key of the journey. Required if not using ID. Prefix the parameter with key:. For example, /interactions/key:{key}. |
| versionNumber | integer |  | Version number of the journey to delete. If no version is specified, ALL versions associated with the provided ID will be deleted. |

### Usage

**Example Request**

The following request will delete the journey specified with the ID request parameter. If you don't provide the versionNumber parameter, then **ALL** versions of the identified journey will be deleted. YOU CANNOT RECOVER THIS DATA.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /interaction/v1/interactions/{id}?versionNumber={versionNumber}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200 OK
```

**Example Error Response**

```js
HTTP/1.1 500
{
    "documentation": "",
    "errorcode": 500,
    "message": "Internal Server Error"
}
```

Last Updated: Jun 8, 2021

## Related Topics

- deleteTags (atlas.en-us.noversion.mc-apis.meta/mc-apis/deleteTags.htm)
