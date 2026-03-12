---
title: "Commerce Einstein Webstore Activities, Purge"
domain: chatterapi
topic: commerce-einstein-webstore-activities-purge
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.023Z
estimatedTokens: 265
keywords: [Commerce, Einstein, Webstore, Activities, Purge, Enqueue, job, activity, store]
---

# Commerce Einstein Webstore Activities, Purge

> Enqueue a job to purge Commerce Einstein activity for a
    store.

# Commerce Einstein Webstore Activities, Purge

Enqueue a job to purge Commerce Einstein activity for a store.

Resource

```

```

Available version

52.0-54.0

In version 55.0 and later, use [Commerce Einstein Webstore Activities, Purge](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_purge.htm "Enqueue a job to purge Commerce Einstein activity for a store.").

HTTP methods

POST

Request body for POST

Root XML tag

<job>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cookieId | String | ID of the cookie. Specify cookieId or userId, not both. | Required if userId isn’t specified | 52.0 |
| userId | String | ID of the user. Specify cookieId or userId, not both. | Required if cookieId isn’t specified | 52.0 |

Response body for POST

[Commerce Einstein Activity Purge Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_einstein_activity_purge_job.htm "Commerce Einstein activity purge job.")

## Code Examples

```
/commerce/einstein/webstores/webstoreId/activities/purge-jobs
```

```
{
"userId" :"005B0000000Ge16"
}
```

```
/commerce/webstores/webstoreId/ai/activities/purge-jobs
```

## Related Topics

- Commerce Einstein Webstore Activities, Purge (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_purge.htm)
- Commerce Einstein Activity Purge Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_einstein_activity_purge_job.htm)
