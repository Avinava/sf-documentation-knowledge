---
title: "ExpsSetObjectAliasFieldVw"
domain: omnistudio
topic: expssetobjectaliasfieldvw
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.999Z
keywords: [ExpsSetObjectAliasFieldVw, Supported, Calls, Special, Access, Rules, Fields]
---

# ExpsSetObjectAliasFieldVw

# ExpsSetObjectAliasFieldVw

Represents the virtual object that provides a consolidated view of source object and its alias, and the source object fields and their aliases that are used in an expression set. This object is used to check the permission level required to access the underlying object fields associated with their field aliases. This object is available in API version 56.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To view this object, users need access to the source object, the usage type, and the field level security associated with the object field aliases in the object.

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| ExpsSetDefVerVarField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIdentifies the variable to which this field belongs. This is a required field. |
| FieldAlias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alias associated with the object field that's used in the expression set. The field alias can be up to 30 characters in length. This is a required field. |
| InstalledPackageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the package used to add the record to the org. This is a required field. |
| LastModifiedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the user who modified the alias last. This is a required field. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package. This is a required field.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. This is a required field.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ObjectAlias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alias that corresponds to the source object whose fields are used in an expression set. In the context of an expression set, this alias is a group that contains the aliases for fields from the source object. This is a required field. |
| ObjectApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the source object associated with the object field aliases that are used in an expression set. |
| SourceFieldDataType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe data type of the source object for which the object alias is defined. This is a required field.Possible values are:ActionOutputBooleanCurrencyDateDateTimeDecisionMatrixDecisionTableNumericPercentSobjectSubExpressionTextThe default value is Text. |
| SourceFieldDecimalScale | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of decimal places applied to the value in the source field that's of the type Currency, Percent, or Number. |
| SourceFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the source object field associated with a field alias that's used in an expression set. This is a required field. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of application associated with the industry that's using an expression set.Possible values are:Bre–DefaultWhen Business Rules Engine is enabled for a Salesforce org, the default value is 'Bre’. Other usage types may be available to you depending on your industry solution and permission sets. |