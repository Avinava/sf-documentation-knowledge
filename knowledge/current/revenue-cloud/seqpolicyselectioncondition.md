---
title: "SeqPolicySelectionCondition"
domain: revenue-cloud
topic: seqpolicyselectioncondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.478Z
estimatedTokens: 729
keywords: [SeqPolicySelectionCondition, condition, determine, sequence, policy, applied, record, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# SeqPolicySelectionCondition

> Represents the condition used to determine which sequence policy is
         applied to a record. This object is available in API version 65.0 and
      later.

# SeqPolicySelectionCondition

Represents the condition used to determine which sequence policy is applied to a record. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| ConditionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. A unique number that’s assigned to a condition in a sequence policy. |
| FilterField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The field used in the filter condition. |
| FilterFieldType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of the filter field.Valid values are:BooleanCurrencyDateDateTimeMultiPicklistNumberPercentPicklistReferenceText |
| FilterValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The value in the filter condition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a sequence policy selection condition record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a sequence policy selection condition record. If this value is null, it’s possible that the user only accessed the sequence policy selection condition record or a related list view (LastReferencedDate), but not viewed the sequence policy selection condition record itself. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The relational operator used to compare the filter field with the filter value.Valid values are:EqualsNot Equals |
| SequencePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The parent sequence policy associated with the sequence policy selection condition. Deleting a sequencing policy automatically removes all its associated criteria.This field is a relationship field.Relationship NameSequencePolicyRelationship TypeMaster-detailRefers ToSequencePolicy (the master object) |
| SequencePolicySelectionConditionName | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the sequence policy selection condition. |
