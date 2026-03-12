---
title: "Custom Metadata Type __mdt __mdt"
domain: object-reference
topic: custom-metadata-type-mdt-mdt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.702Z
estimatedTokens: 1141
keywords: [Custom, Metadata, __mdt, record, API, version, 34.0, later, _mdt, Calls]
---

# Custom Metadata Type __mdt __mdt

> Represents a custom metadata record. This object is available
		in API version 34.0 and later.

# Custom Metadata Type \_\_mdt \_\_mdt

Represents a custom metadata record. This object is available in API version 34.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The object name is a variable with the syntax Custom Metadata Type\_\_mdt, where Custom Metadata Type is the Object Name for the custom metadata type associated with the custom metadata record. For example, PicklistUsage\_\_mdt represents a custom metadata record based on the PicklistUsage custom metadata type.

## Supported Calls

describeSObjects(), describeLayout(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Custom Field__c | TypeAny TypePropertiesFilter, Group, Nillable, SortDescriptionA custom field on the record. |
| DeveloperName | TypestringPropertiesDefaulted on create, Filter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| isProtected | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhen a custom metadata type’s records are released in a managed package, access to them is limited in specific ways.Code that’s in the same managed package as custom metadata records can read the records.Code that’s in the same managed package as custom metadata types can read the records that belong to that type.Code that’s in a managed package that doesn’t contain either the type or the protected record can’t read the protected records.Code that the subscriber creates and code that’s in an unmanaged package can’t read the protected records.The developer can modify protected records only with a package upgrade. The subscriber can’t read or modify protected records. The developer name of a protected record can’t be changed after release.Records that are hidden by these access rules are also unavailable to REST, SOAP, SOQL, and Setup. |
| Label | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe custom metadata record label. This label value is always the same as the MasterLabel value. |
| Language | TypestringPropertiesFilter, Group, restrictedPicklist, SortDescriptionThe language of the custom metadata record. This value is always the default language of the developing organization. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe primary label for the custom metadata record. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
| QualifiedApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA concatenation of the namespace prefix and developer name. The format is NamespacePrefix__DeveloperName. |
| SystemModStamp | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionDate and time when a user or automated process such as a trigger last modified this record. In this context, trigger refers to Salesforce code that runs to implement standard functionality, and not an Apex trigger. This field is available In API version 56.0 and later. |

#### See Also

-   [System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm "System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.")

-   [Field Types](atlas.en-us.object_reference.meta/object_reference/field_types.htm "In addition to the primitive data types, the API defines the following data types for fields.")

-   [API Field Properties](atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)

## Related Topics

- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- Field Types (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- API Field Properties (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
