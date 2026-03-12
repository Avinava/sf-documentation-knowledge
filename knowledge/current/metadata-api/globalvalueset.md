---
title: "GlobalValueSet"
domain: metadata-api
topic: globalvalueset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.842Z
estimatedTokens: 706
keywords: [GlobalValueSet, metadata, picklist, shared, custom, isn’t, itself, contrast, ValueSet, extends, inherits, fullName, File, Suffix, Directory]
---

# GlobalValueSet

> Represents the metadata for a global picklist value set,
      which is the set of shared values that custom picklist fields can use. A global value set
      isn’t a field itself. In contrast, the custom picklist fields that are based on a global
      picklist are of type ValueSet. This type extends the  Metadata metadata type and inherits
    its fullName field.

# GlobalValueSet

Represents the metadata for a global picklist value set, which is the set of shared values that custom picklist fields can use. A global value set isn’t a field itself. In contrast, the custom picklist fields that are based on a global picklist are of type ValueSet. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

GlobalValueSet components have the suffix .globalValueSet and are stored in the globalValueSets folder.

## Version

GlobalValueSet components are available in API version 38.0 and later. In API version 37.0, this component is the GlobalPicklist type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| customValue | CustomValue[] | Requires at least one value. The list of values, or “global value set,” that’s defined for a global picklist. The global value set is inherited by any custom picklist field that uses that value set. Each value is of type customValue. A global value set can have up to 1,000 total values, including inactive values. |
| description | string | It’s useful to state the global value set’s purpose and which objects it’s intended for. Limit: 255 characters. |
| masterLabel | string | Required. A global value set’s name, which is defined when the global value set is created. Appears as Label in the user interface. |
| sorted | boolean | Required. Indicates whether a global value set is sorted in alphabetical order. By default this value is false. |

## Declarative Metadata Sample Definition

This UpsellGlobal.globalValueSet is an example of a GlobalValueSet component.

```

```

This example package.xml references the previous definition.

```

```

Any global value set created in API version 57.0 or later automatically has the \_\_gvs suffix appended to the developer name. When you make any CRUD-based call with the GlobalValueSet type, you must append the suffix to the fullName field when you reference the type.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<GlobalValueSet xmlns="http://soap.sforce.com/2006/04/metadata">
   <description>Updated:This is a basic global value set.</description>
   <masterLabel>UpsellGlobal</masterLabel>
   <customValue>
      <fullName>Maybe</fullName>
      <default>false</default>
      <label>Maybe</label>
   </customValue>
   <customValue>
      <fullName>No</fullName>
      <default>false</default>
      <label>No</label>
   </customValue>
   <customValue>
      <fullName>Yes</fullName>
      <default>false</default>
      <label>Yes</label>
   </customValue>
   <sorted>false</sorted>
</GlobalValueSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>UpsellGlobal</members>
        <name>GlobalValueSet</name>
    </types>
    <version>40.0</version>
</Package>
```

## Related Topics

- CustomValue (atlas.en-us.api_meta.meta/api_meta/meta_customvalue.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
