---
title: "BriefcaseRule"
domain: object-reference
topic: briefcaserule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.646Z
estimatedTokens: 783
keywords: [BriefcaseRule, rule, records, briefcase, definition, API, version, 50.0, later, Special, Access, Rules, Calls]
---

# BriefcaseRule

> Represents a rule that specifies records for a briefcase definition.
		This object is available in API version 50.0 and later.

# BriefcaseRule

Represents a rule that specifies records for a briefcase definition. This object is available in API version 50.0 and later.

## Special Access Rules

This object is read-only.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BriefcaseId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the briefcase definition. Label is Briefcase Definition ID.This field is a relationship field.Relationship NameBriefcaseRelationship TypeLookupRefers ToBriefcaseDefinition |
| FilterLogic | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe filter logic for record selection, for example, 1 AND 2 where 1 and 2 correspond to filter 1 and filter 2. Filter logic operators include AND and OR. Limited to 255 characters. Label is Filter Logic. |
| IsAscendingOrder | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the records should be sorted in ascending order. Label is Ascending. |
| OptionsIsRelatedFilesRule | TypebooleanPropertiesFilterDescriptionIndicates whether the briefcase rule is part of a hierarchical set of rules that configure the offline priming of file attachments. Available only for the Offline App (Salesforce Mobile App Plus). |
| OrderBy | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe field to order the records by, which determines how the records can be sorted. For example, AccountName or CreatedBy. Label is Order By. |
| ParentRuleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the parent rule of this briefcase rule. This field is a relationship field.Relationship NameParentRuleRelationship TypeLookupRefers ToBriefcaseRule |
| QueryScope | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. A group of records to restrict the scope of this rule.Possible values are:assignedToMeeverythingmineThe default value is everything (All Records). The value assignedToMe is available only for the ServiceAppointment object. |
| RecordLimit | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe record limit for the object. The recommended number for record limit is up to 500 records per object for optimal performance. The maximum number is 2000. Label is Limit. |
| RelationshipField | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe Salesforce object field that relates the briefcase rule to another briefcase rule. For example, an Account rule can be related to a Contact rule using the Account ID object field. In this example, the value for the briefcase rule's RelationshipField is AccountID. |
| RelationshipType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe relationship of the briefcase rule to another briefcase rule. Possible values are:ParentToChildChildToParent |
| TargetEntity | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe standard object, custom object, or custom metadata type that the briefcase rule selects records from. The UI label is Target Object. |
