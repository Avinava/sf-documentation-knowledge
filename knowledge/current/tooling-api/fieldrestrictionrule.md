---
title: "FieldRestrictionRule"
domain: tooling-api
topic: fieldrestrictionrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.794Z
estimatedTokens: 1348
keywords: [FieldRestrictionRule, visibility, rule, whether, visible, user, field’s, inclusion, PersonalInfo_EPIM, Enhanced, Personal, Management, setting, enabled, Spring]
---

# FieldRestrictionRule

> Represents a field visibility rule that controls whether a field is visible
         to a user, based on the field’s inclusion in the PersonalInfo_EPIM field set. If Enhanced
         Personal Information Management setting was enabled before Spring ’22, field visibility is
         based on the field’s compliance categorization. This object is available in API
      version 52.0 and later.

# FieldRestrictionRule

Represents a field visibility rule that controls whether a field is visible to a user, based on the field’s inclusion in the PersonalInfo\_EPIM field set. If Enhanced Personal Information Management setting was enabled before Spring ’22, field visibility is based on the field’s compliance categorization. This object is available in API version 52.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

-   To access this object, you must have the Manage Sharing permission.
-   To create and manage Employee field visibility rules, you must be assigned a Workplace Command Center permission set license and the Provides access to Workplace Command Center features system permission.
-   To create and manage User field visibility rules, you must enable Digital Experiences and the Enhanced Personal Information Management feature.

## Fields

| Field | Details |
| --- | --- |
| Classification | Typestring[]PropertiesFilterDescriptionRequired. The data classification compliance categorization or field set that is targeted by the rule. The rule applies to fields that are marked with this categorization or included in this field set. If you enabled Enhanced Personal Information Management before Spring ‘22 (API version 54.0), you can use Salesforce's default compliance categorization values or values that you add yourself. If you enabled Enhanced Personal Information Management after Spring ‘22 (API version 54.0), use the PersonalInfo_EPIM field set or a field set that you add yourself. |
| ClassificationType | TypeClassificationType (enumeration of type string)PropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of classification method used in your org. If you enabled Enhanced Personal Information Management before Spring ‘22 (API version 54.0), use ComplianceCategory. If you enabled Enhanced Personal Information Management after Spring ‘22, use FieldSet.ComplianceCategory—FieldSet—The default value is ComplianceCategory.Available in API version 54.0 and later. |
| Description | TypetextareaPropertiesFilter, Group, SortDescriptionRequired. The description of the rule. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the FieldRestrictionRule object.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EnforcementType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The type of rule.Possible values are:FieldRestrict—Field visibility rule. Only this value is valid.Restrict—Do not use.Scoping— Do not use. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionRequired. The full name of the associated FieldRestrictionRule in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the rule is active (true) or not (false). The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the field visibility rule. The value for this field is the language value of the org. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. Label for the field visibility rule. |
| Metadata | Typemns:FieldRestrictionRulePropertiesCreate, Nillable, UpdateDescriptionThe field visibility rule’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| RecordFilter | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The criteria that determine which fields are visible to the specified users. For example, the field can check if the logged-in user matches the Employee’s ID. |
| TargetEntity | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The object for which you're creating the rule. Only the Employee and User objects are supported. |
| UserCriteria | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The users that this rule applies to, such as all active users or users with a specified role or profile. |
| Version | TypeintPropertiesFilter, Group, SortDescriptionRequired. The rule's version number. |
