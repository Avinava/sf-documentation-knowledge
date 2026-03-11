---
title: "TimeSlot Custom Fields"
domain: field-service
topic: timeslot-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.144Z
keywords: [TimeSlot, Custom, Fields, Supported, Calls, Special, Access, Rules, See]
---

# TimeSlot Custom Fields

# TimeSlot Custom Fields

Custom fields associated with a period of time on a specified day of the week during which field service work can be performed in Field Service. Operating hours consist of one or more time slots.

The standard fields are documented in the [TimeSlot](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_timeslot.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__Designated_Work_​Boolean_Fields__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe type of designated work time slot. To convert a regular time slot to a designated one, use the calendar editor in the Visualforce page instead of editing this field manually in the record page.Possible values are:None—DefaultAdditional values are added by the managed package when a time slot is converted to a designated work type. The values are the API names of the designated work boolean fields on the service appointment. |
| FSL__Slot_Color__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time slot color as it appears on the calendar editor in the Visualforce page. This field is populated by the system.Possible values are:AmberAsphaltBlackBlueBrownCyanGreenGreyIndigoLimeOrangePinkPurpleRedTealYellow |

#### See Also

-   [Salesforce Object Reference: TimeSlot](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_timeslot.htm "Salesforce Object Reference: TimeSlot - HTML (New Window)")