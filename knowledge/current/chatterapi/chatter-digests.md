---
title: "Chatter Digests"
domain: chatterapi
topic: chatter-digests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.698Z
estimatedTokens: 417
keywords: [Chatter, Digests, Control, daily, weekly, email, sent]
---

# Chatter Digests

> Control when daily and weekly Chatter email digests are
    sent.

# Chatter Digests

Control when daily and weekly Chatter email digests are sent.

The times when Chatter sends email digests are not configurable in the UI. To control when email digests are sent and to use this resource, contact Salesforce to enable API-only Chatter Digests.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=chatterapi)

#### Warning

Enabling API-only Chatter Digests disables the scheduled digests for your org. You must call the API for your users to receive their digests.

Resource

```

```

Available version

37.0

Requires Chatter

Yes

HTTP methods

POST

Request body for POST

Root XML tag

<digestJob>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| period | String | Time period that’s included in a Chatter email digest. Values are:DailyDigest—The email includes up to the 50 latest posts from the previous day.WeeklyDigest—The email includes up to the 50 latest posts from the previous week. | Required | 37.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| period | String | Time period that’s included in a Chatter email digest. Values are:DailyDigest—The email includes up to the 50 latest posts from the previous day.WeeklyDigest—The email includes up to the 50 latest posts from the previous week. | Required | 37.0 |

Response body for POST

[Digest Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_digest_job.htm "Represents a successfully enqueued API digest job request.")

## Code Examples

```
/chatter/digests
```

```
{
   "period":"DailyDigest"
}
```

## Related Topics

- Digest Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_digest_job.htm)
