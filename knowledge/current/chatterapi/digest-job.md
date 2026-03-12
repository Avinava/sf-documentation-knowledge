---
title: "Digest Job"
domain: chatterapi
topic: digest-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.269Z
estimatedTokens: 116
keywords: [Digest, Job, successfully, enqueued, API]
---

# Digest Job

> Represents a successfully enqueued API digest job
    request.

# Digest Job

Represents a successfully enqueued API digest job request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| period | String | Time period that’s included in a Chatter email digest. Values are:DailyDigest—The email includes up to the 50 latest posts from the previous day.WeeklyDigest—The email includes up to the 50 latest posts from the previous week. | Small, 37.0 | 37.0 |
