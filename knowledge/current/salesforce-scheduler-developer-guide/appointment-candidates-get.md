---
title: "Appointment Candidates (GET)"
domain: salesforce-scheduler-developer-guide
topic: appointment-candidates-get
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.260Z
estimatedTokens: 185
keywords: [Appointment, Candidates, error, codes, code, messages, Salesforce, Scheduler, API, getAppointmentSlots, resource]
---

# Appointment Candidates (GET)

> Contains the error codes and error code messages related with the Salesforce
      Scheduler API for getAppointmentSlots (GET)
      resource.

# Appointment Candidates (GET)

Contains the error codes and error code messages related with the Salesforce Scheduler API for getAppointmentSlots (GET) resource.

This table lists HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | MISSING_ARGUMENT | Specify either a workTypeGroupId or WorkTypeId. |
| 400 | MISSING_ARGUMENT | Specify a serviceTerritoryId with either a workTypeGroupId or WorkTypeId. |
| 400 | INVALID_INPUT | This isn't a valid workTypeGroupId value. Specify a valid ID for the workTypeGroupId parameter. |
| 400 | INVALID_INPUT | This isn't a valid serviceTerritoryId value. Specify a valid ID for the territoryId parameter. |
