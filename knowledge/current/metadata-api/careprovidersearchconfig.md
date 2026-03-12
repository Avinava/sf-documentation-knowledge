---
title: "CareProviderSearchConfig"
domain: metadata-api
topic: careprovidersearchconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.325Z
estimatedTokens: 414
keywords: [CareProviderSearchConfig, appear, care, provider, search, results, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# CareProviderSearchConfig

> Represents the information about the fields that appear in
      care provider search results. This type extends the Metadata
      metadata type and inherits its fullName field.

# CareProviderSearchConfig

Represents the information about the fields that appear in care provider search results. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

CareProviderSearchConfig components have the suffix .careProviderSearchConfig and are stored in the careProviderSearchConfigs folder.

## Version

CareProviderSearchConfig components are available in API version 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| isActive | boolean | Indicates whether this configuration is active (true) or not (false). |
| isProtected | boolean | An auto-generated value that doesn’t currently impact the behavior of the metadata type. |
| mappedObject | ProviderSearch​ObjectMapping (enumeration of type string) | Required. Indicates mapped objects.Possible values are;HealthCarePractitionerFacilityHealthCareProvider |
| masterLabel | string | Required. Name of the care provider. |
| sourceField | string | API name of the field that is copied to the target object. |
| targetField | string | API name of the field to copy the data to. |

## Declarative Metadata Sample Definition

The following is an example of a CareProviderSearchConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CareProviderSearchConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <sourceField>Test1__c</sourceField>
    <targetField>Test1__c</targetField>
    <mappedObject>HealthcareProvider</mappedObject>
    <isProtected>false</isProtected>
    <isActive>true</isActive>
    <masterLabel>testlabel</masterLabel>
</CareProviderSearchConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>HealthcareProvider.Test1__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>CareProviderSearchableField.Test1__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>Test</members>
        <name>CareProviderSearchConfig</name>
    </types>
    <version>48.0</version>
</Package>
```
