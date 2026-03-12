---
title: "NamedFilter"
domain: metadata-api
topic: namedfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:43.303Z
estimatedTokens: 1582
keywords: [NamedFilter, metadata, associated, lookup, filter, definitions, component, removed, API, version, 30.0, previous, versions, now, represented]
---

# NamedFilter

> Represents the metadata associated with a lookup filter. This metadata
            type
            is used to create, update, or delete lookup filter definitions. This
            component has been removed as of API version 30.0 and is only available in previous API
            versions. The metadata associated with a lookup
                filter is now represented by the lookupFilter field in the CustomField
                component.

# NamedFilter

Represents the metadata associated with a lookup filter. This metadata type is used to create, update, or delete lookup filter definitions. This component has been removed as of API version 30.0 and is only available in previous API versions. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField component.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. You can also use this metadata type to work with customizations of lookup filters on standard fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The namedFilter appears as a child of the target object of the associated lookup field.

## Declarative Metadata File Suffix and Directory Location

Lookup filters are defined as part of the custom object or standard object definition. See [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.") for more information.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Version

Lookup filters are available in API version 17.0 and later. However, the NamedFilter type was removed in API version 30.0. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField type.

## Fields

Unless otherwise noted, all fields are creatable, filterable, and nillable.

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether the lookup filter is active. |
| booleanFilter | string | Specifies advanced filter conditions. |
| description | string | A description of what this filter does. |
| errorMessage | string | The error message that appears if the lookup filter fails. |
| field | string | Required. The fullName of the custom or standard field associated with the lookup filter. You can associate one relationship field with each lookup filter, and vice versa.NoteYou can’t update a field associated with a lookup filter. |
| filterItems | FilterItems[] | Required. The set of filter conditions. |
| infoMessage | string | The information message displayed on the page. Use to describe things the user might not understand, such as why certain items are excluded in the lookup filter. |
| fullName | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This value can’t be null. |
| isOptional | boolean | Required. Indicates whether the lookup filter is optional. |
| name | string | Required. The name of the lookup filter. If you create this field in the user interface, a name is automatically assigned. If you create this field through Metadata API, you must include the name field. |
| sourceObject | string | The object that contains the lookup field that uses this lookup filter. Set this field if the lookup filter references fields on the source object. |

Lookup filters use additional data types. For more information, see [Metadata Field Types](atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm "These field types extend the field types described in the Salesforce Object Reference.").

## FilterItems

FilterItems contains the following properties:

| Field | Field Type | Description |
| --- | --- | --- |
| field | string | Represents the field specified in the filter. |
| operation | FilterOperation (enumeration of type string) | Represents the filter operation for this filter item. Valid values are enumerated in FilterOperation. |
| value | string | Represents the value of the filter item being operated upon, for example, if the filter is my_number_field__c > 1, the value of value is 1. |

## FilterOperation

Here’s an enumeration of type string that lists different filter operations. Valid values are:

-   equals
-   notEqual
-   lessThan
-   greaterThan
-   lessOrEqual
-   greaterOrEqual
-   contains
-   notContain
-   startsWith
-   includes
-   excludes

## Declarative Metadata Sample Definition

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_listview.htm "ListView")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm "Picklist (Including Dependent Picklist)")

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")

-   [Picklist (Including Dependent Picklist)](atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm "Deprecated. Represents a picklist (or dependent picklist) definition for a custom field in a custom object or a custom or standard field in a standard object, such as an account.")

-   [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.")

-   [CustomField](atlas.en-us.api_meta.meta/api_meta/customfield.htm "Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
....
    <namedfilters>
        <fullName>nf_Acc</fullName>
        <active>true</active>
        <booleanFilter>1 OR 2</booleanFilter>
        <field>Account.lk__c</field>
        <filterItems>
            <field>Account.Phone</field>
            <operation>notEqual</operation>
            <value>x</value>
        </filterItems>
        <filterItems>
            <field>Account.Fax</field>
            <operation>notEqual</operation>
            <value>y</value>
        </filterItems>
        <name>Acc</name>
        <sourceObject>Account</sourceObject>
    </namedfilters>
....
</CustomObject>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- Metadata Field Types (atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_listview.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm)
- Picklist (Including Dependent Picklist) (atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm)
- CustomField (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
