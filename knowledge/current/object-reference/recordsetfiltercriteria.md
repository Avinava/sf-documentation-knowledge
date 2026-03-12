---
title: "RecordsetFilterCriteria"
domain: object-reference
topic: recordsetfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.057Z
estimatedTokens: 1262
keywords: [RecordsetFilterCriteria, filters, match, service, appointments, assets, criteria, recordset, filter, satisfy, matched, filtered, shifts, likewise, maintenance]
---

# RecordsetFilterCriteria

> Represents a set of filters that can be used to match service appointments or
      assets based on your criteria fields. For example, you can create recordset filter
    criteria so that only service appointments that satisfy the filter criteria are matched to the
    filtered shifts, and likewise only maintenance work rules that satisfy your criteria are matched
    to assets. This object is available in API version 50.0 and later. Assets and maintenance work
    rules are available in API version 52.0 and later.

# RecordsetFilterCriteria

Represents a set of filters that can be used to match service appointments or assets based on your criteria fields. For example, you can create recordset filter criteria so that only service appointments that satisfy the filter criteria are matched to the filtered shifts, and likewise only maintenance work rules that satisfy your criteria are matched to assets. This object is available in API version 50.0 and later. Assets and maintenance work rules are available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the recordset filter criteria. |
| FilteredObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe object used to define the filter criteria. Available in API version 52.0 or later.Possible values are:AssetServiceAppointment |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the recordset filter criteria is associated with shifts or maintenance work rules (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the recordset filter criteria was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the recordset filter criteria was last viewed. |
| LogicalOperator | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the logic to evaluate multiple recordset filter criteria rules. Available in API version 53.0 and later.Possible values are:ANDOR |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the recordset filter criteria. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the recordset filter criteria. |
| SourceObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe source object that the filtered criteria are applied to. Shifts and maintenance work rules are available in API version 52.0 and later. Appointment bundle objects are available in API version 53.0 and later.Possible values are:ApptBundleAggrPolicy—Appointment Bundle Aggregation PolicyApptBundleConfig—Appointment Bundle ConfigShiftContractLineOutcomeMaintenanceWorkRule |
| Usage Rate Field | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionStores the daily usage rate of the asset. The unit for the usage rate must be per day. |
| Usage Rate Unit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionDefines the rate for Usage Rate Field.Possible values are:DAYS |

## Usage

Let's say an employee is open to working a 9 am to 5 pm shift on a Sunday but only for emergency appointments. In this case, the SourceObject is Shift and the FilteredObject is ServiceAppointment. The service appointments available for that shift are filtered for emergency appointments using the RecordsetFilterCriteriaRule object.

RecordSetFilterCriteria isn’t available for report types.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[RecordsetFilterCriteriaFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RecordsetFilterCriteriaHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RecordsetFilterCriteriaOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[RecordsetFilterCriteriaShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RecordsetFilterCriteriaFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- RecordsetFilterCriteriaHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- RecordsetFilterCriteriaOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- RecordsetFilterCriteriaShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
