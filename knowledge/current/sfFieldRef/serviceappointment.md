---
title: "ServiceAppointment"
domain: sfFieldRef
topic: serviceappointment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.298Z
estimatedTokens: 1257
keywords: [ServiceAppointment, appointment, work, customer, Service, Lightning, Scheduler, Intelligent, Management, Virtual, Care.This, API, version, 38.0, later]
---

# ServiceAppointment

> Represents an appointment to complete work for a customer in Field
			Service, Lightning Scheduler,Intelligent Appointment Management, and Virtual
		Care.This object is available in API version 38.0 and later.

# ServiceAppointment

Represents an appointment to complete work for a customer in Field Service, Lightning Scheduler,Intelligent Appointment Management, and Virtual Care.This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceAppointment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceappointment.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, Salesforce Scheduler Developer Guide, and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActualDuration | Actual Duration (Minutes) | double |  |  | 18 | 2 |
| ActualEndTime | Actual End | datetime |  |  |  |  |
| ActualStartTime | Actual Start | datetime |  |  |  |  |
| AdditionalInformation | Additional Information | string |  | 255 |  |  |
| Address | Address | address |  |  |  |  |
| AppointmentCategoryId | Appointment Category ID | reference |  | 18 |  |  |
| AppointmentInvitationId | Appointment Invitation ID | reference |  | 18 |  |  |
| AppointmentMode | Appointment Mode | picklist |  | 255 |  |  |
| AppointmentNumber | Appointment Number | string |  | 255 |  |  |
| AppointmentType | Appointment Type | picklist |  | 40 |  |  |
| ApptBookingInfoUrl | Appointment Booking URL | textarea |  | 4000 |  |  |
| ArrivalWindowEndTime | Arrival Window End | datetime |  |  |  |  |
| ArrivalWindowStartTime | Arrival Window Start | datetime |  |  |  |  |
| AttendeeCount | Attendee Count | int | 9 |  |  |  |
| AttendeeLimit | Attendee Limit | int | 9 |  |  |  |
| BundlePolicyId | Appointment Bundle Policy ID | reference |  | 18 |  |  |
| CancellationReason | Cancellation Reason | string |  | 255 |  |  |
| CheckedInTime | Checked In Time | datetime |  |  |  |  |
| City | City | string |  | 40 |  |  |
| Comments | Comment | string |  | 255 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DueDate | Due Date | datetime |  |  |  |  |
| Duration | Duration | double |  |  | 18 | 2 |
| DurationInMinutes | Duration in Minutes | double |  |  | 18 | 2 |
| DurationType | Duration Type | picklist |  | 255 |  |  |
| EarliestStartTime | Earliest Start Permitted | datetime |  |  |  |  |
| Email | Email | email |  | 80 |  |  |
| EngagementChannelTypeId | Engagement Channel Type ID | reference |  | 18 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| GroupAppointmentAccessType | Group Appointment Access Type | picklist |  | 255 |  |  |
| Id | Service Appointment ID | id |  | 18 |  |  |
| IsAnonymousBooking | Anonymous Booking | boolean |  |  |  |  |
| IsBundle | Bundle | boolean |  |  |  |  |
| IsBundleMember | Bundle Member | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsManuallyBundled | Manually Bundled | boolean |  |  |  |  |
| IsOffsiteAppointment | Offsite Appointment | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| ParentRecordStatusCategory | Parent Record Status Category | picklist |  | 255 |  |  |
| ParentRecordType | Parent Record Type | string |  | 50 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| ReceiptOrderId | Order ID | reference |  | 18 |  |  |
| RelatedBundleId | Related Bundle ID | reference |  | 18 |  |  |
| SchedEndTime | Scheduled End | datetime |  |  |  |  |
| SchedStartTime | Scheduled Start | datetime |  |  |  |  |
| ServiceNote | Service Note | textarea |  | 32000 |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| State | State/Province | string |  | 80 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeZone | Time Zone | picklist |  | 255 |  |  |
| Transaction | Transaction | string |  | 255 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
