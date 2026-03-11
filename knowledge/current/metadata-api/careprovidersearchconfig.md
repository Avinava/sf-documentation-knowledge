---
title: "CareProviderSearchConfig"
domain: metadata-api
topic: careprovidersearchconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.007Z
keywords: [CareProviderSearchConfig, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition]
---

# CareProviderSearchConfig

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