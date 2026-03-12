---
title: "Candidates"
domain: rest-api
topic: candidates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.211Z
estimatedTokens: 208
keywords: [Candidates, Describes, result, Get, Appointments, request.]
---

# Candidates

> Describes the result of Get Appointments Candidates request.

# Candidates

Describes the result of Get Appointments Candidates request.

List of available service resources.

| Name | Type | Description |
| --- | --- | --- |
| endTime | String | The end time of the appointment time slot. |
| engagementChanneltypeIds | String[] | The engagement channel type ID associated with this resource for that time slot. This field is available in API version 56.0 and later. |
| resources | String[] | List of service resource IDs that are available.ImportantAt present, only one resource is returned on this list. If there is more than one resource included in a territory, a new child object is added for each resource in the response JSON body. |
| startTime | String | The start time of the appointment time slot. |
| territoryId | String | The service territory associated with this resource. |
