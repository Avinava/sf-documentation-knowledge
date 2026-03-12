---
title: "MatchingRule"
domain: tooling-api
topic: matchingrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.024Z
estimatedTokens: 560
keywords: [MatchingRule, Setup, specifying, DuplicateJob, instances, share, DuplicateJobDefinition., Tooling, API, version, 42.0, later., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# MatchingRule

> Setup object specifying a MatchingRule to
            use with DuplicateJob instances that share a DuplicateJobDefinition. Available in
            Tooling API version 42.0 and later.

# MatchingRule

Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition. Available in Tooling API version 42.0 and later.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

GET and POST

## Fields

| Field | Details |
| --- | --- |
| BooleanFilter | TypestringPropertiesFilter, Group, Nillable, SortDescriptionBoolean logic between conditions for the MatchingRule. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the MatchingRule. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name for the MatchingRule.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language in the user’s personal settings. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the MatchingRule. |
| MatchEngine | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field can contain one value: the match engine used by the matching rule. Valid values are ExactMatchEngine and FuzzyMatchEngine. Default value is ExactMatchEngine. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. |
| RuleStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe status of the MatchingRule. Valid values are Active or Inactive. |
| SobjectSubtype | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe object subtype. Valid values are Person Account or None. |
| SobjectType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object type:Account, Contact, or Lead. |
