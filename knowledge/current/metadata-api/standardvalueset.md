---
title: "StandardValueSet"
domain: metadata-api
topic: standardvalueset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.343Z
estimatedTokens: 731
keywords: [StandardValueSet, standard, picklist, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative, Sample, Definition]
---

# StandardValueSet

> Represents the set of values in a standard picklist
      field. This type extends the Metadata metadata type and inherits its
                        fullName field.

# StandardValueSet

Represents the set of values in a standard picklist field. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

StandardValueSet components have the suffix .standardValueSet and are stored in the standardValueSets folder.

## Version

StandardValueSet components are available in API version 38.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| groupingStringEnum | string | Groups picklist and enumerated values. For example, for the picklist values of the Status field on the Service Appointment object, Done and Finished can both have a grouping string of Completed. Available in API version 41.0 and later. |
| sorted | boolean | Required. Indicates whether a global value set is sorted in alphabetical order. By default, this value is false. |
| standardValue | StandardValue[] | Defines each value in a standard picklist’s value set. The groupingString value is available in API version 38.0 and later.When you deploy a StandardValueSet, this array must contain at least one picklist value. Otherwise, you receive an error.NoteWhen setting standardValue on Record Types, including person account record types, new picklist values loaded into your organization through the Metadata API don’t display in the picklist UI by default. For users to see the new values, go to the Record Types list for the object containing the picklist field, click Edit, and add the new value to the Selected Fields list. |

## Declarative Metadata Sample Definition

The following example shows a StandardValueSet component that’s defined as the Stage standard picklist on a customized opportunity object.

```

```

For a list of standard value set names for standard picklists, see [StandardValueSet Names and Standard Picklist Fields](atlas.en-us.api_meta.meta/api_meta/standardvalueset_names.htm "In API version 38.0 and later, standard picklists are represented by the StandardValueSet type. In previous versions, standard picklists are represented by the CustomField type. This table lists the names of standard picklists as standard value sets and their corresponding field names.").

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<StandardValueSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>OpportunityStage</fullName> <!-- Enum name -->
    <standardValue>
       <fullName>Closed Abandoned</fullName>
    </standardValue>
    <standardValue>
       <fullName>Closed Won</fullName>
    </standardValue>
    <standardValue>
       <fullName>Closed Lost</fullName>
    </standardValue>
</StandardValueSet>

<CustomObject>
    <fullName>Opportunity</fullName>
    <fields>
       <fullName>StageName</fullName> <!-- field name -->
       <label>Stage</label>
       <type>Picklist</type>
    </fields>
    <label>ObjectWithValueSet</label>
    <pluralLabel>ObjectWithValueSet</pluralLabel>
    <sharingModel>ReadWrite</sharingModel>
</CustomObject>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- StandardValue[] (atlas.en-us.api_meta.meta/api_meta/meta_customvalue.htm)
- StandardValueSet Names and Standard Picklist Fields (atlas.en-us.api_meta.meta/api_meta/standardvalueset_names.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
