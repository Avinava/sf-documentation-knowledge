---
title: "Appointment Slots (GET)"
domain: salesforce-scheduler-developer-guide
topic: appointment-slots-get
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.266Z
estimatedTokens: 450
keywords: [Appointment, Slots, error, codes, code, messages, Salesforce, Scheduler, API, getAppointmentSlots, resource]
---

# Appointment Slots (GET)

> Contains the error codes and error code messages related with Salesforce Scheduler
      API for the getAppointmentSlots (GET)
    resource.

# Appointment Slots (GET)

Contains the error codes and error code messages related with Salesforce Scheduler API for the getAppointmentSlots (GET) resource.

This table lists HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | BAD_REQUEST | Specify either a workTypeGroupId or a workTypeId and try again. |
| 400 | BAD_REQUEST | This isn't a valid durationInMinutes value. Specify a valid duration in minutes for the durationInMinutes parameter. |
| 400 | BAD_REQUEST | AppointmentTopicTimeSlot is not accessible for the current user. |
| 400 | BAD_REQUEST | Looks like you don't have access to {WorkTypeGroup} or {WorkType} object. Your Salesforce admin can help with that. |
| 400 | BAD_REQUEST | Looks like you don't have access to {ServiceTerritory} object. Your Salesforce admin can help with that. |
| 400 | BAD_REQUEST | Looks like you don't have access to {ServiceResource} object. Your Salesforce admin can help with that. |
| 400 | BAD_REQUEST | Remove the primaryResourceId from the requiredResourceIds list and try again. |
| 400 | BAD_REQUEST | Provide a valid primaryResourceId and try again. |
| 400 | BAD_REQUEST | The maximum number of required service resources is 5. Reduce the number of service resources in your request and try again. |
| 400 | BAD_REQUEST | Provide a resource ID in the requiredResourceIds field, and try again. |
| 400 | BAD_REQUEST | Specify a valid workType and try again. |
| 400 | BAD_REQUEST | Provide an end time that's after the start time, and try again. |
| 400 | BAD_REQUEST | This isn't a valid startTime or endTime value. Specify a valid date and time for the startTime or endTime parameter. |
| 400 | BAD_REQUEST | There is no active workTypeGroup. |
