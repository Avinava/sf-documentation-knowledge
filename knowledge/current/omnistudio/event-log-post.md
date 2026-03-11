---
title: "Event Log (POST)"
domain: omnistudio
topic: event-log-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.920Z
keywords: [Event, Log, POST]
---

# Event Log (POST)

# Event Log (POST)

Log compliance check events for control. This API supports a maximum number of 25 logs per request. You can make up to 200,000 audit log API calls per year.

Resource

```

```

Resource Example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| controllogs | Compliance​Control Log Value[] | Control evaluation logs. | Required | 64.0 |

Response body for POST

[Compliance Logging Response](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_logging_response_output.htm "Output representation of compliance bulk logging results.")