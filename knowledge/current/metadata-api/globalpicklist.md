---
title: "GlobalPicklist"
domain: metadata-api
topic: globalpicklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.324Z
estimatedTokens: 643
keywords: [GlobalPicklist, Represents, picklist, set, shared, values, custom, fields, use., contrast, based, CustomValue., extends, Metadata, metadata, inherits, its, fullName, field., Important]
---

# GlobalPicklist

> Represents a global picklist, or the set of shared
      picklist values that custom picklist fields can use. In contrast, the custom picklist fields
      that are based on a global picklist are of type CustomValue. This type extends the Metadata metadata type and inherits its
        fullName field.

# GlobalPicklist

Represents a global picklist, or the set of shared picklist values that custom picklist fields can use. In contrast, the custom picklist fields that are based on a global picklist are of type CustomValue. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

GlobalPicklist components have the suffix .globalPicklist and are stored in the globalPicklist folder.

## Version

GlobalPicklist components are available in API version 37.0 only. In API version 38.0 and later, GlobalPicklist is replaced by the [GlobalValueSet](atlas.en-us.api_meta.meta/api_meta/meta_globalvalueset.htm "Represents the metadata for a global picklist value set, which is the set of shared values that custom picklist fields can use. A global value set isn’t a field itself. In contrast, the custom picklist fields that are based on a global picklist are of type ValueSet. This type extends the Metadata metadata type and inherits its fullName field.") type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | It’s useful to state the global picklist’s purpose, and which objects it’s intended for. Limit: 255 characters. |
| globalPicklistValues | GlobalPicklistValue[] | Requires at least one value. The list of values, or “picklist value set,” that’s defined for a global picklist. The picklist value set is inherited by any custom picklist field that’s based on that global picklist. Each value is of type GlobalPicklistValue. A global picklist can have up to 1,000 total values, including inactive values. |
| masterLabel | string | Required. A global picklist’s name, which is defined when the global picklist is created. Appears as Label in the user interface. |
| sorted | string | Indicates whether a global picklist’s value set is sorted in alphabetical order. By default this value is false. |

## Declarative Metadata Sample Definition

This Territories.globalPicklist is an example of a GlobalPicklist component.

```

```

This example package.xml references the previous definition.

```

```

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<GlobalPicklist xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Updated:This is a basic global picklist</description>
    <globalPicklistValues>
        <fullName>Northwest</fullName>
        <default>false</default>
    </globalPicklistValues>
    <globalPicklistValues>
        <fullName>Northeast</fullName>
        <default>false</default>
    </globalPicklistValues>
    <globalPicklistValues>
        <fullName>South</fullName>
        <default>true</default>
    </globalPicklistValues>
    <globalPicklistValues>
        <fullName>Southwest</fullName>
        <default>false</default>
        <isActive>false</isActive>
    </globalPicklistValues>
    <masterLabel>Territories</masterLabel>
    <sorted>true</sorted>
</GlobalPicklist>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Territories</members>
        <name>GlobalPicklist</name>
    </types>
    <version>37.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- GlobalValueSet (atlas.en-us.api_meta.meta/api_meta/meta_globalvalueset.htm)
- GlobalPicklistValue (atlas.en-us.api_meta.meta/api_meta/meta_globalpicklistvalue.htm)
