---
title: "Engagement Attendee Create Input"
domain: omnistudio
topic: engagement-attendee-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.233Z
keywords: [Engagement, Attendee, Create, Input]
---

# Engagement Attendee Create Input

# Engagement Attendee Create Input

Input representation to create an engagement attendee record.

Root XML tag

<engagementAttendee>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFieldsList | Engagement Custom Fields Input[] | The custom fields and their values for engagement attendees. | Optional | 56.0 |
| endDateTime | String | The date and time when an engagement with an attendee ended. | Optional | 55.0 |
| engagementInteractionId | String | The ID of the associated engagement interaction record. | Required | 55.0 |
| externalAttendeeId | String | The external user related to an engagement, such as the customer or partner. | Optional | 55.0 |
| id | String | The ID of the engagement attendee record. | Required | 55.0 |
| internalAttendeeId | String | The internal user related to the engagement, such as the call center agent. | Optional | 55.0 |
| isAuthenticated | String | Indicates whether the initiating attendee of an engagement interaction was authenticated through IVR or Web channel (true) or not (false). | Required | 55.0 |
| isVerified | Boolean | Indicates whether the initiating attendee of the engagement interaction was verified (true) or not (false). | Required | 55.0 |
| ownerId | String | The Salesforce ID of the person who owns an engagement attendee record. | Required | 55.0 |
| role | String | The role of an engagement attendee. | Optional | 55.0 |
| startDateTime | String | The date and time when an engagement with an attendee started. | Required | 55.0 |
| verificationTime | String | The time when an attendee was verified for an engagement interaction. | Optional | 55.0 |