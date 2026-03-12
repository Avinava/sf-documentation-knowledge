---
title: "BriefcaseRuleFilter"
domain: object-reference
topic: briefcaserulefilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.651Z
estimatedTokens: 355
keywords: [BriefcaseRuleFilter, filter, criteria, briefcase, rule, API, version, 50.0, later, Special, Access, Rules, Calls]
---

# BriefcaseRuleFilter

> Represents a filter criteria for a briefcase rule. This object is
    available in API version 50.0 and later.

# BriefcaseRuleFilter

Represents a filter criteria for a briefcase rule. This object is available in API version 50.0 and later.

## Special Access Rules

This object is read-only.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BriefcaseRuleId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the briefcase rule. |
| FilterOperator | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The comparison operator for this rule filter.Possible values are:d—Ends withe— Equalsg—Greater thanh—Greater than or equali—Likel—Less thanm—Less than or equals—Starts with |
| FilterSeqNumber | TypeintPropertiesFilter, Group, SortDescriptionRequired. The filter number. When you apply multiple filters, the filters are numbered sequentially, 1, 2, 3, and so on. |
| FilterValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value for the field and criteria. For example, true or false for a boolean field whose criteria or filter operator is Equals. Capitalization matters with date filter operators. Be sure to specify date literals in uppercase. Some valid date literals include TODAY, YESTERDAY and TOMORROW. |
| TargetEntityField | TypepicklistPropertiesRestricted picklistDescriptionRequired. The field to filter by. Compound fields and encrypted fields aren’t supported. Label is Field. |
