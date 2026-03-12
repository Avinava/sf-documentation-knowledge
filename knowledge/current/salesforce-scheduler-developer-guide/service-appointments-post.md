---
title: "Service Appointments (POST)"
domain: salesforce-scheduler-developer-guide
topic: service-appointments-post
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.591Z
estimatedTokens: 264
keywords: [Service, Appointments, POST, error, codes, code, messages, Salesforce, Scheduler, API, service-appointments, resource]
---

# Service Appointments (POST)

> Contains the error codes and error code messages related with Salesforce Scheduler
      API for the service-appointments (POST)
    resource.

# Service Appointments (POST)

Contains the error codes and error code messages related with Salesforce Scheduler API for the service-appointments (POST) resource.

This table lists HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | INTERNAL_ERROR | We couldn't find any resources for your request. Specify a different schedStartTime and schedEndTime and try again. |
| 400 | INVALID_API_INPUT | Only one assignedResource can have isPrimaryResource set to true. Check the request and try again. |
| 400 | INVALID_API_INPUT | You haven’t enabled the Schedule Appointments using Engagement Channels setting in your org. Contact your Salesforce admin for assistance. |
| 400 | INSUFFICIENT_ACCESS | Looks like you don't have access to the MaxAppointments field in the TimeSlot object. Your Salesforce admin can help with that. |
| 400 | INSUFFICIENT_ACCESS | Looks like you don't have access to ServiceAppointment object. Your Salesforce admin can help with that. |
