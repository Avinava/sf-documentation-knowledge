---
title: "ConnectApi.EngagementAttendeeCreateInput"
domain: psc-api
topic: connectapiengagementattendeecreateinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.601Z
estimatedTokens: 500
keywords: [Input, representation, engagement, attendee, record]
---

# ConnectApi.EngagementAttendeeCreateInput

> Input representation to create an engagement attendee
    record.

# ConnectApi.EngagementAttendeeCreateInput

Input representation to create an engagement attendee record.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFieldsList | List<ConnectApi.EngagementCustomFieldsInput> | The custom fields and their values for engagement attendees. | Optional | 56.0 |
| endDateTime | String | The date and time when the engagement with the attendee ends. | Optional | 55.0 |
| engagementInteractionId | String | The Engagement Interaction ID related to the attendee. |  | 55.0 |
| externalAttendeeId | String | The external user related to the engagement, such as the customer or partner. To avoid an error, either this field or the InternalAttendeeId field must have a value. The value must be an account, contact, or lead. |  | 55.0 |
| id | String | The ID field for an EngagementAttendee record. | Required | 55.0 |
| internalAttendeeId | String | The internal user related to the engagement, such as the call center agent. To avoid an error, either this field or the ExternalAttendeeId field must have a value. The value must be a user. |  | 55.0 |
| isAuthenticated | Boolean | Indicates whether the initiating attendee of the engagement interaction was authenticated through interactive voice response (IVR) or Web channel (true) or not (false). The default value is false. |  | 55.0 |
| isVerified | Boolean | Indicates whether the initiating attendee of the engagement interaction was verified (true) or not (false). The default value is false. |  | 55.0 |
| ownerId | String | The Salesforce ID of the person who owns this engagement attendee record. |  | 55.0 |
| role | String | The role of an engagement attendee. The possible values are:OnBehalfSelf |  | 56.0 |
| startDateTime | String | The date and time when the engagement with the attendee starts. | Required | 55.0 |
| verificationTime | String | The time when the attendee was verified for the engagement interaction. |  | 55.0 |

## Related Topics

- ConnectApi.EngagementCustomFieldsInput (atlas.en-us.psc_api.meta/psc_api/apex_connectapi_input_custom_fields.htm)
