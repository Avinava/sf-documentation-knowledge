---
title: "AppointmentInvitation"
domain: sfFieldRef
topic: appointmentinvitation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.796Z
estimatedTokens: 471
keywords: [AppointmentInvitation, appointment, invitation, that’s, created, customers, booking, appointments, API, version, 55.0, later]
---

# AppointmentInvitation

> Represents information about an appointment invitation that’s created
         for customers who can use it for booking appointments. This object is available in API
      version 55.0 and
      later.

# AppointmentInvitation

Represents information about an appointment invitation that’s created for customers who can use it for booking appointments. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AppointmentInvitation in the Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppointmentTopicId | Appointment Topic ID | reference |  | 18 |  |  |
| AppointmentTopicType | Appointment Topic Type | string |  | 50 |  |  |
| AppointmentType | Appointment Type | picklist |  | 40 |  |  |
| BookingEndDate | Booking End Date | date |  |  |  |  |
| BookingStartDate | Booking Start Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EngagementChannelTypeId | Engagement Channel Type ID | reference |  | 18 |  |  |
| Id | Appointment Invitation ID | id |  | 18 |  |  |
| InvitationIdentifier | Invitation Identifier | string |  | 36 |  |  |
| InvitationNumber | Invitation Number | string |  | 255 |  |  |
| InvitationUrl | Invitation URL | url |  | 255 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UrlExpiryDate | URL Expiration Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
