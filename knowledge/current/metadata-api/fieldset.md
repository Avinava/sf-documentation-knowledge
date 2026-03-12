---
title: "FieldSet"
domain: metadata-api
topic: fieldset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.457Z
estimatedTokens: 609
keywords: [FieldSet, grouping, describing, user's, middle, business, title, Version, FieldSetItem, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# FieldSet

> Represents a field set. A field set is a grouping of
            fields. For example, you could have a field set that contains fields describing a user's
            first name, middle name, last name, and business title.

# FieldSet

Represents a field set. A field set is a grouping of fields. For example, you could have a field set that contains fields describing a user's first name, middle name, last name, and business title.

Field sets can be referenced on Visualforce pages dynamically. If the page is added to a managed package, administrators can add, remove, or reorder fields in a field set to modify the fields presented on the Visualforce page without modifying any code.

## Version

FieldSet components are available in API version 21.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| availableFields | FieldSetItem[] | An array containing all the possible fields in the field set. |
| description | string | Required. A description provided by the developer that describes the field set. This is required. |
| displayedFields | FieldSetItem[] | An array containing all the fields that are presented on the Visualforce page. The order in which a field is listed determines the order of appearance on the page. |
| label | string | Required. The label used to reference the field set. |

## FieldSetItem

FieldSetItem represents an individual field in a field set.

| Field | Field Type | Description |
| --- | --- | --- |
| field | string | Required. The name of a field in a standard or custom object. |
| isFieldManaged | boolean | Read-only. Denotes whether the field was added to the field set via a managed or unmanaged package. |
| isRequired | boolean | Read-only. Indicates whether the field is universally required (true) or not (false). |

## Declarative Metadata Sample Definition

A sample XML definition of a FieldSet component is shown below.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/customfield.htm "CustomField")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_historyretentionpolicy.htm "HistoryRetentionPolicy")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldSets>
        <fullName>FieldSetNames</fullName>
        <availableFields>
            <field>MiddleName__c</field>
        </availableFields>
        <availableFields>
            <field>Title__c</field>
        </availableFields>
        <description>FieldSet containing how to properly address someone</description>
        <displayedFields>
            <field>FirstName__c</field>
        </displayedFields>
        <displayedFields>
            <field>LastName__c</field>
        </displayedFields>
        <label>FieldSet Names</label>
    </fieldSets>
</CustomObject>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_historyretentionpolicy.htm)
