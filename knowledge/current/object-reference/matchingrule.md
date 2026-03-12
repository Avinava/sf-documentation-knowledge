---
title: "MatchingRule"
domain: object-reference
topic: matchingrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.744Z
estimatedTokens: 889
keywords: [MatchingRule, matching, rule, identify, duplicate, records, API, version, 33.0, later, Calls, Special, Access, Rules, Usage]
---

# MatchingRule

> Represents a matching rule that is used to identify duplicate
   records.
		This object is available in API version 33.0 and later.

# MatchingRule

Represents a matching rule that is used to identify duplicate records. This object is available in API version 33.0 and later.

A matching rule compares field values to determine whether a record is similar enough to existing records to be considered a duplicate. For example, a matching rule can specify that if the Email and Phone values of two records match exactly, the records are possible duplicates. Your organization uses matching rules with duplicate rules to define what happens when duplicates are identified.

If the rule is for a Person Account, SobjectSubType is automatically set to PersonAccount.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| BooleanFilter | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies filter logic conditions. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the matching rule. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name for the matching rule.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language selected for your organization. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe name of the matching rule. |
| MatchEngine | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe match engine used by the matching rule. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix for matching rules for your organization. |
| RuleStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The activation status of the matching rule. Values are:InactiveDeactivatingDeactivationFailedActiveActivatingActivationFailedImportantThe only valid values you can declare when deploying a package are Active and Inactive. |
| SobjectSubtype | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionRead-only. Indicates if the matching rule is defined for the Person subtype of Account. Valid values are:PersonAccountNoneIf the rule is for a Person Account, SobjectSubType is automatically set to PersonAccount. |
| SobjectType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object for the matching rule. |

## Usage

Use the Salesforce API to retrieve and view details about MatchingRule and MatchingRuleItem. Use the Salesforce Metadata API to create, update, or delete these objects.

#### See Also

-   [MatchingRuleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_matchingruleitem.htm "Represents criteria used by a matching rule to identify duplicate records. This object is available in API version 33.0 and later.")

-   [DuplicateRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicaterule.htm "Represents a duplicate rule for detecting duplicate records.")


-   [MatchingRule in the Salesforce Metadata API Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_matchingrule.htm " MatchingRule in the Salesforce Metadata API Developer's
    Guide - HTML (New Window)")

## Related Topics

- MatchingRuleItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_matchingruleitem.htm)
- DuplicateRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicaterule.htm)
