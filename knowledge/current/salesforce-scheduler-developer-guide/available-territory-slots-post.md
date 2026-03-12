---
title: "Available Territory Slots (POST)"
domain: salesforce-scheduler-developer-guide
topic: available-territory-slots-post
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.271Z
estimatedTokens: 591
keywords: [Territory, Slots, POST, error, codes, code, messages, Salesforce, Scheduler, API, available-territory-slots, resource]
---

# Available Territory Slots (POST)

> Contains the error codes and error code messages related with Salesforce Scheduler
      API for the available-territory-slots (POST)
      resource.

# Available Territory Slots (POST)

Contains the error codes and error code messages related with Salesforce Scheduler API for the available-territory-slots (POST) resource.

This table lists HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | MISSING_ARGUMENT | Specify a serviceTerritoryId with either a workTypeGroupId or WorkTypeId. |
| 400 | INTERNAL_ERROR | You can't specify both requiredResourceIds and filterByResources in the request body. Specify one or the other and try again. |
| 400 | INVALID_INPUT | Specify either a workTypeGroupId or a WorkTypeId. |
| 400 | INVALID_INPUT | This isn't a valid workTypeGroupId value. Specify a valid ID for the workTypeGroupId parameter. |
| 400 | INVALID_INPUT | This isn't a valid workTypeId value. Specify a valid ID for the workTypeId parameter. |
| 400 | INVALID_INPUT | Specify either a workTypeId or a value for the durationInMinutes parameter. |
| 400 | INVALID_INPUT | This isn't a valid serviceTerritoryId value. Specify a valid ID for the serviceTerritoryId parameter. |
| 400 | INVALID_INPUT | This isn't a valid account ID. Specify a valid ID for the accountId parameter. |
| 400 | INTERNAL_ERROR | AppointmentSchedulingPolicy provided: {id} does not belong to AppointmentSchedulingPolicy. |
| 400 | INTERNAL_ERROR | Provide an end date that's after the start date, and try again. |
| 400 | INVALID_INPUT | This isn't a valid service resource Id in the filterByResources parameter. Specify a valid service resource ID in the filterByResources parameter. |
| 400 | INTERNAL_ERROR | Something went wrong. Ask your admin for help. |
| 400 | INSUFFICIENT_ACCESS | Looks like you don’t have access to the maxAppointments or workTypeGroup field in the TimeSlot object. Your Salesforce admin can help with that. |
| 400 | INSUFFICIENT_ACCESS | Looks like you don’t have access to the {Service Resource} object. Your Salesforce admin can help with that. |
| 400 | INTERNAL_ERROR | Specify a workTypeGroup with a custom_workType associated with an appointment category with a Scheduled type, and try again. |
| 400 | INTERNAL_ERROR | {id} (AppointmentTopicTimeSlot), is not accessible for the current user. |
| 403 | API_DISABLED_FOR_ORG | The Chatter Connect API is not enabled for this organization or user type. |
