---
title: "ExpsSetObjectAliasFieldVw"
domain: sfFieldRef
topic: expssetobjectaliasfieldvw
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.708Z
estimatedTokens: 424
namespace: NamespacePrefix
keywords: [ExpsSetObjectAliasFieldVw, virtual, consolidated, view, source, alias, their, aliases, expression, check, permission, level, access, underlying, associated]
---

# ExpsSetObjectAliasFieldVw

> Represents the virtual object that provides a consolidated view of
         source object and its alias, and the source object fields and their aliases that are used
         in an expression set. This object is used to check the permission level required to access
         the underlying object fields associated with their field aliases. This object is
      available in API version 56.0 and later.

**Namespace:** `NamespacePrefix`

# ExpsSetObjectAliasFieldVw

Represents the virtual object that provides a consolidated view of source object and its alias, and the source object fields and their aliases that are used in an expression set. This object is used to check the permission level required to access the underlying object fields associated with their field aliases. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ExpsSetObjectAliasFieldVw in the Expression Set Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| DurableId | External Id | string |  | 255 |  |  |
| ExpsSetDefVerVarField | Expression Set Definition Version Variable Field | string |  | 18 |  |  |
| FieldAlias | Field Alias | string |  | 255 |  |  |
| Id | Expression Set Object Alias Field View Id | id |  | 18 |  |  |
| InstalledPackageName | Installed Package Name | string |  | 240 |  |  |
| LastModifiedBy | Last Modified By | string |  | 255 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ManageableState | Manageable State | picklist |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 255 |  |  |
| ObjectAlias | Object Alias | string |  | 255 |  |  |
| ObjectApiName | Object API Name | string |  | 80 |  |  |
| SourceFieldDataType | Source Field Data Type | picklist |  | 255 |  |  |
| SourceFieldDecimalScale | Source Field Decimal Scale | int | 9 |  |  |  |
| SourceFieldName | Source Field Name | string |  | 255 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
