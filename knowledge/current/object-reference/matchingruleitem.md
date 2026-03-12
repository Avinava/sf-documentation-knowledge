---
title: "MatchingRuleItem"
domain: object-reference
topic: matchingruleitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.750Z
estimatedTokens: 748
keywords: [MatchingRuleItem, criteria, matching, rule, identify, duplicate, records, API, version, 33.0, later, Calls, Special, Access, Rules]
---

# MatchingRuleItem

> Represents criteria used by a matching rule to identify duplicate
			records. This object is available in API version 33.0 and later.

# MatchingRuleItem

Represents criteria used by a matching rule to identify duplicate records. This object is available in API version 33.0 and later.

A matching rule item determines which field the matching rule uses to identify a duplicate record. It also determines the method used to compare value that two records have for the field. For example, a matching rule item might specify that the Email field values of two records must match exactly in order for the records to be considered duplicates.

When a matching rule has multiple matching rule items, it means that multiple fields must match in order for the records to be identified as dupcliates.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| BlankValueBehavior | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies how blank fields affect whether the fields being compared are considered matches. Valid values are:MatchBlanksNullNotAllowed (default) |
| Field | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates which field to compare when determining if a record is similar enough to an existing record to be considered a match. |
| MatchingMethod | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefines how the fields are compared. Choose between the exact matching method and various fuzzy matching methods. Valid values are:ExactFirstNameLastNameCompanyNamePhoneCityStreetZipTitleFor details on each matching method, see “Matching Methods Used with Matching Rules” in the Salesforce Help. |
| MatchingRuleId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID for the matching rule.This is a relationship field.Relationship NameMatchingRuleRelationship TypeLookupRefers ToMatchingRule |
| SortOrder | TypeintPropertiesFilter, Group, SortDescriptionThe order of the matching rule items for a matching rule. |

## Usage

Use the Salesforce SOAP API to retrieve and view details about MatchingRule and MatchingRuleItem. Use the Salesforce Metadata API to create, update, or delete these objects.

#### See Also

-   [MatchingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_matchingrule.htm "Represents a matching rule that is used to identify duplicate records. This object is available in API version 33.0 and later.")

-   [DuplicateRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicaterule.htm "Represents a duplicate rule for detecting duplicate records.")


-   [MatchingRule in the Salesforce Metadata API Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_matchingrule.htm " MatchingRule in the Salesforce Metadata API Developer's
    Guide - HTML (New Window)")

## Related Topics

- MatchingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_matchingrule.htm)
- DuplicateRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_duplicaterule.htm)
