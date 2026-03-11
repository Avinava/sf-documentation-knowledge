---
title: "ExpressionSetObjectAlias"
domain: omnistudio
topic: expressionsetobjectalias
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.527Z
keywords: [ExpressionSetObjectAlias, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# ExpressionSetObjectAlias

# ExpressionSetObjectAlias

Represents the alias of the source object that's used in an expression set. This object is available in API version 56.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this object, users must have the Modify All Data permission, and the orgHasExpressionSet org permission.

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the data type of the object alias. This is a required field.Possible values are:JSONsObjectThe default value is sObject. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the expression set object alias. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe name of the expression set object alias. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language in which the expression set object alias is created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the expression set object alias. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionExpression set object alias metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| ObjectAlias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alias that corresponds to the source object that's used in an expression set. In the context of an expression set, this alias in a group that contains the aliases of fields from the source object. The length of the object alias can’t exceed 40 characters. This is a required field. |
| ObjectApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the source object associated with the alias that's being used in an expression set. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of application associated with the industry that's using an expression set.Possible values are:Bre–DefaultProductCategoryQualificationProductQualificationRecordAlertWhen Business Rules Engine is enabled for a Salesforce org, the default value is 'Bre’. Other usage types may be available to you depending on your industry solution and permission sets. |