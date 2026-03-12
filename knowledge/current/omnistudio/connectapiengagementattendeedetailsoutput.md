---
title: "ConnectApi.EngagementAttendeeDetailsOutput"
domain: omnistudio
topic: connectapiengagementattendeedetailsoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.773Z
estimatedTokens: 317
keywords: [Output, representation, engagement, attendee, record]
---

# ConnectApi.EngagementAttendeeDetailsOutput

> Output representation to create an engagement attendee
    record.

# ConnectApi.EngagementAttendeeDetailsOutput

Output representation to create an engagement attendee record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| customFields | List<ConnectApi.EngagementCustomFieldsOutput> | The list of custom fields. | 56.0 |
| endDateTime | String | The end date and time of an engagement interaction. | 55.0 |
| engagementInteractionId | String | The ID of the engagement interaction associated with an engagement attendee record. | 55.0 |
| externalAttendeeId | String | The external attendee ID. | 55.0 |
| id | String | The engagement attendee record ID. | 55.0 |
| internalAttendeeId | String | The internal attendee ID. | 55.0 |
| isAuthenticated | Boolean | The value of the IsAuthenticated field for an EngagementAttendee. | 56.0 |
| isVerified | Boolean | The value of the IsVerified field for an EngagementAttendee. | 56.0 |
| ownerId | String | The Salesforce ID of the person who owns the engagement attendee record. | 55.0 |
| role | String | The role of the EngagementAttendee. | 56.0 |
| startDateTime | String | The start date and time of an engagement interaction. | 55.0 |
| verificationTime | String | The value of the VerificationTime field for an EngagementAttendee. | 56.0 |

## Related Topics

- ConnectApi.EngagementCustomFieldsOutput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_custom_field_output.htm)
