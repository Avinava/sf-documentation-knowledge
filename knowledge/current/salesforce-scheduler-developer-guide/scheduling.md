---
title: "Scheduling"
domain: salesforce-scheduler-developer-guide
topic: scheduling
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.521Z
estimatedTokens: 86
keywords: [Scheduling, Salesforce, Scheduler, REST, resources, corresponding, URIs, resource, API, version, 45.0, later]
---

# Scheduling

> Returns a list of available Salesforce Scheduler REST resources and corresponding URIs.
    This resource is available in REST API version 45.0 and later.

# Scheduling

Returns a list of available Salesforce Scheduler REST resources and corresponding URIs. This resource is available in REST API version 45.0 and later.

## Syntax

URI

/services/data/vXX.X/scheduling/

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

## Example

Example Response Body

```

```

## Code Examples

```
{
  "getAppointmentCandidates" : "/services/data/v66.0/scheduling/getAppointmentCandidates",
  "getAppointmentSlots" : "/services/data/v66.0/scheduling/getAppointmentSlots"
}
```
