---
title: "EngagementAttendee"
domain: sfFieldRef
topic: engagementattendee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.242Z
estimatedTokens: 480
keywords: [EngagementAttendee, attendee, engagement, customer, initiates, interaction, calling, service, representative, inquire, insurance, claim, stores, API, version]
---

# EngagementAttendee

> Represents information about an
         attendee of an engagement. For example, when a customer initiates an engagement interaction
         by calling a service representative to inquire about an insurance claim, this object stores
         information about the customer and the service representative. This object is
      available in API version 55.0 and later

# EngagementAttendee

Represents information about an attendee of an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, this object stores information about the customer and the service representative. This object is available in API version 55.0 and later

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EngagementAttendee in the Industries Common Resources Developer Guide, Manufacturing Cloud Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| EngagementId | Engagement ID | reference |  | 18 |  |  |
| ExternalAttendeeId | External Attendee ID | reference |  | 18 |  |  |
| Id | Engagement Attendee ID | id |  | 18 |  |  |
| InternalAttendeeId | Internal Attendee ID | reference |  | 18 |  |  |
| IsAuthenticated | Is Authenticated | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsVerified | Is Verified | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 30 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Role | Role | picklist |  | 255 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationTime | Verification Time | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
