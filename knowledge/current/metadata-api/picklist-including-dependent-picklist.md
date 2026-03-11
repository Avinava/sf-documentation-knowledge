---
title: "Picklist (Including Dependent Picklist)"
domain: metadata-api
topic: picklist-including-dependent-picklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.952Z
keywords: [Picklist, Including, Dependent, Version, Declarative, Metadata, File, Suffix, Directory, Location, Fields, Java, Sample, Definition, Wildcard, Support, Manifest]
---

# Picklist (Including Dependent Picklist)

# Picklist (Including Dependent Picklist)

Deprecated. Represents a picklist (or dependent picklist) definition for a custom field in a custom object or a custom or standard field in a standard object, such as an account.

## Version

Use this type in API version 37.0 and earlier only. Picklists for custom fields in custom objects are available in API version 12.0 and later. Picklists for custom or standard fields in standard objects, such as accounts, are available in API version 16.0 and later.

In API version 38.0 and later, Picklist is replaced by [ValueSet](atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm#valueSet) on the CustomField type.

## Declarative Metadata File Suffix and Directory Location

Picklist definitions are included in the custom object and field with which they’re associated.

## Fields

Picklist contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| controllingField | string | The fullName of the controlling field if controllingField is a dependent picklist. A dependent picklist works in conjunction with a controlling picklist or checkbox to filter the available options. The value chosen in the controlling field affects the values available in the dependent field. This field is available in API version 14.0 and later. |
| picklistValues | PicklistValue[] | Required. Represents a set of values for a picklist. |
| restrictedPicklist | boolean | Indicates whether the picklist’s value list is restricted. With a restricted picklist, only an admin can add or change values; users can’t load or remove values through the API. By default this value is false.This field is available in API version 37.0 and later. |
| sorted | boolean | Indicates whether values are sorted (true), or not (false). By default this value is false. |

## Java Sample

The following sample uses a picklist. For a complete sample of using a picklist with record types and profiles, see [Profile](atlas.en-us.api_meta.meta/api_meta/meta_profile.htm "Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.").

```

```

## Declarative Metadata Sample Definition

The following sample shows usage for picklists, including dependent picklists, in a custom object. The isAmerican\_\_c checkbox controls the list of manufacturers shown in the manufacturer\_\_c picklist. The manufacturer\_\_c checkbox in turn controls the list of models shown in the model\_\_c picklist.

```

```

The following sample shows usage for the standard Stage field in opportunities.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/namedfilter.htm "NamedFilter")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_profilesearchlayouts.htm "ProfileSearchLayouts")