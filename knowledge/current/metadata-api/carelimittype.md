---
title: "CareLimitType"
domain: metadata-api
topic: carelimittype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.318Z
estimatedTokens: 503
keywords: [CareLimitType, characteristics, limits, benefit, provision, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# CareLimitType

> Defines the characteristics of limits on benefit provision.

# CareLimitType

Defines the characteristics of limits on benefit provision.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CareLimitType components have the suffix .careLimitType and are stored in the careLimitTypes folder.

## Version

CareLimitType components are available in API version 52.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. |
| limitType | Field TypestringDescriptionSource of limit on benefit provision, such as a co-insurance requirement. |
| masterLabel | Field TypestringDescriptionRequired.Name of the limit type. |
| metricType | Field TypeCareLimitTypeMetricType (enumeration of type string)DescriptionMetric to be used for calculating and displaying the benefit limit, such as number of visits, amount spent, or percentage of allowed expenditure.Valid values are:AmountMoneyPercentageText |

## Declarative Metadata Sample Definition

This is an example of a CareLimitType component.

```

```

This is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CareLimitType xmlns="http://soap.sforce.com/2006/04/metadata">
    <limitType>test</limitType>
    <masterLabel>test</masterLabel>
    <metricType>Money</metricType>
    <isProtected>false</isProtected>
</CareLimitType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>CareLimitType</name>
    </types>
    <version>52.0</version>
</Package>
```
