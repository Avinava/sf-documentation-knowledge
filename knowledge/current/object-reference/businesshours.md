---
title: "BusinessHours"
domain: object-reference
topic: businesshours
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.758Z
estimatedTokens: 1033
keywords: [BusinessHours, business, hours, support, organization, Escalation, rules, run, Calls, Special, Access, Usage]
---

# BusinessHours

> Specifies the business hours of your support organization. Escalation
      rules are run only during these hours.

# BusinessHours

Specifies the business hours of your support organization. Escalation rules are run only during these hours.

Limit a list view to a maximum of 10,000 business hours.

If business hours are associated with any Holiday records, then business hours and escalation rules associated with business hours are suspended during the dates and times specified as holidays.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

All users, even those without the “View Setup and Configuration” user permission, can view business hours via the API.

## Fields

| Field | Details |
| --- | --- |
| BusinessHoursId | TypereferencePropertiesFilter, Group, Nillable,SortDescriptionID of the BusinessHours associated with the SlaProcess. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the business hours is active (true) or not active (false). |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the business hours. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the business hours are set as the default business hours (true) or not (false). |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the business hours were last viewed. |
| FridayEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business closes. |
| FridayStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business opens. |
| MondayEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business closes. |
| MondayStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business opens. |
| SaturdayEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business closes. |
| SaturdayStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business opens. |
| SundayEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business closes. |
| SundayStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business opens. |
| ThursdayEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business closes. |
| ThursdayStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business opens. |
| TimeZoneSidKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe time zone of the business hours. |
| TuesdayEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business closes. |
| TuesdayStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business opens. |
| WednesdayEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business closes. |
| WednesdayStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime that business opens. |

## Usage

Use this object to specify the business hours at which your support team operates. Escalation rules only run during the business hours with which they are associated. To set business hours to 24-hours a day, set the times from midnight to midnight (00:00:00 ~ 00:00:00) on each day.

By default, business hours are set from 12:00 AM to 12:00 AM in the default time zone specified in your organization's profile.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
