---
title: "DuplicateRule"
domain: object-reference
topic: duplicaterule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.292Z
estimatedTokens: 713
keywords: [DuplicateRule, duplicate, rule, detecting, records, Calls, Special, Access, Rules, Usage]
---

# DuplicateRule

> Represents a duplicate rule for detecting duplicate
		records.

# DuplicateRule

Represents a duplicate rule for detecting duplicate records.

## Supported Calls

describeSObjects(), describeLayout(), query(), retrieve(), search()

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name for the duplicate rule.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a duplicate rule is active (true) or not (false). This field is read only. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language for the duplicate rule. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. This field is available in API version 41.0 or later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for the duplicate rule. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SobjectSubtype | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe subtype of object the duplicate rule is defined for. This field is available in API version 39.0 or later.Possible values are:NonePersonAccountThe default value is None. |
| sObjectType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of object the duplicate rule is defined for.Possible values are:AccountContactIndividualLead |

## Usage

You can use the API to view a duplicate rule’s details. To create, edit, or delete duplicate rules, use the UI.

Use DuplicateRule to get the sObject type.

DuplicateRule is unavailable in some orgs.
