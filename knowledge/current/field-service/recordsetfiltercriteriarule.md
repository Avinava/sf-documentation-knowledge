---
title: "RecordsetFilterCriteriaRule"
domain: field-service
topic: recordsetfiltercriteriarule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.814Z
keywords: [RecordsetFilterCriteriaRule, Supported, Calls, Special, Access, Rules, Fields, Usage]
---

# RecordsetFilterCriteriaRule

# RecordsetFilterCriteriaRule

Represents a rule using fields from the designated source object to create filters on the filtered, or target, object. RecordsetFilterCriteriaRule is associated with the RecordsetFilterCriteria object. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| CriteriaField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe field the filter rule is applied to. Asset fields are available in API version 52.0 and later.Possible values are derived from the source object’s standard and custom fields. Possible standard source objects are Asset and ServiceAppointment. The format is, for example, Asset.PricingSource or ServiceAppointment.GroupAppointmentAccessType. All standard and custom fields are allowed except those with these field types:encryptedstringmultipicklisttextareaurl |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the recordset filter criteria rule was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the recordset filter criteria rule was last viewed. |
| NextOccurence | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field’s value is compared to the Usage Field to determine if the rule is true.Possible values are derived from the source object’s standard and custom fields. Possible standard source objects are Asset and ServiceAppointment. The format is, for example, Asset.PricingSource or ServiceAppointment.GroupAppointmentAccessType. All standard and custom fields are allowed except those with these field types:encryptedstringmultipicklisttextareaurl |
| Operator | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe relational operator between CriteriaField and Value. Available in API version 52.0 or later.Possible values are:Equals—DefaultGreaterOrEqualGreaterThanLessOrEqualLessThan |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the RecordsetFilterCriteria record to associate this rule with. |
| RecordsetFilterCriteriaRuleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe automatically assigned number of the recordset filter criteria rule. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of criteria rule. Possible values are:Criteria—DefaultUsageUsageCounter— Usage(Counter)UsageDuration— Usage(Duration) |
| Value | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe expected value of CriteriaField applied to the filter rule. |
| Usage Rate Field | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionStores the daily usage rate of the asset. The unit for the usage rate must be per day. Possible values are derived from the source object’s standard and custom fields. Possible standard source objects are Asset and ServiceAppointment. The format is, for example, Asset.PricingSource or ServiceAppointment.GroupAppointmentAccessType. |
| Usage Rate Unit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionDefines the rate for Usage Rate Field.Possible values are:DAYS |

## Usage

If you want to create a filter rule for service appointments with a dispatched status, set CriteriaField to ServiceAppointment.Status and Value to Dispatched. Then add the ID from a RecordsetFilterCriteria record to RecordsetFilterCriteriaId to associate this rule with a filter criteria for shifts.