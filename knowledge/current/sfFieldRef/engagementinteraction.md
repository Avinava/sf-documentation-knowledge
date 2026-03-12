---
title: "EngagementInteraction"
domain: sfFieldRef
topic: engagementinteraction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.303Z
estimatedTokens: 616
keywords: [EngagementInteraction, interaction, service, representative, any, specialist, organization, organization’s, customer, Engagement, interactions, initiated, communication, channels, cover]
---

# EngagementInteraction

> Represents information about
         an interaction between a service representative or any other specialist in an organization
         and the organization’s customer. Engagement interactions can be initiated through
         communication channels and can cover one or more topics. For example, a customer can
         initiate an engagement interaction by calling a service representative to inquire about an
         insurance claim. This object is available in API version 55.0 and later.

# EngagementInteraction

Represents information about an interaction between a service representative or any other specialist in an organization and the organization’s customer. Engagement interactions can be initiated through communication channels and can cover one or more topics. For example, a customer can initiate an engagement interaction by calling a service representative to inquire about an insurance claim. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EngagementInteraction in the Industries Common Resources Developer Guide, Manufacturing Cloud Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttendeeVerificationTime | Attendee Verification Time | datetime |  |  |  |  |
| CommunicationChannel | Communication Channel | picklist |  | 255 |  |  |
| ContextId | Context ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Duration | Duration | string |  | 4000 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Engagement Interaction ID | id |  | 18 |  |  |
| InitiatingAttendeeId | InitiatingAttendee ID | reference |  | 18 |  |  |
| IsAttendeeAuthenticated | Is Attendee Authenticated | boolean |  |  |  |  |
| IsAttendeeVerified | Is Attendee Verified | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MappedState | Mapped State | picklist |  | 40 |  |  |
| Name | Name | string |  | 30 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PhoneNumber | Phone Number | phone |  | 40 |  |  |
| Reason | Reason | string |  | 765 |  |  |
| Sentiment | Sentiment | picklist |  | 255 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 100 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
