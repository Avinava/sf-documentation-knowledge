---
title: "CareBenefitVerifySettings"
domain: metadata-api
topic: carebenefitverifysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.000Z
keywords: [CareBenefitVerifySettings, Important, Parent, Type, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CareBenefitVerifySettings

# CareBenefitVerifySettings

Represents the configuration settings for benefit verification requests.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CareBenefitVerifySettings components have the suffix .careBenefitVerifySettings and are stored in the careBenefitVerifySettings folder.

## Version

CareBenefitVerifySettings components are available in API version 52.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| codeSetType | Field TypestringDescriptionSpecifies the code set type for the benefits verification service type codes. |
| defaultNpi | Field TypestringDescriptionDefault National Provider Identifier to be used in the benefits verification request. |
| generalPlanServiceTypeCode | Field TypestringDescriptionService type code for the plan benefits as a whole. |
| isDefault | Field TypebooleanDescriptionIndicates whether this record is the default verification service (true) or not (false). |
| masterLabel | Field TypestringDescriptionRequired.Name of the benefits verification service. |
| organizationName | Field TypestringDescriptionSpecifies the organization name for the benefits verification request service. |
| serviceApexClass | Field TypestringDescriptionApex class used to access the benefits verification service. |
| serviceNamedCredential | Field TypestringDescriptionCredential used to access the benefits verification service. |
| serviceTypeSourceSystem | Field TypestringDescriptionService type code for the plan benefits as a whole. |
| uriPath | Field TypestringDescriptionLink to payer endpoint. |

## Declarative Metadata Sample Definition

This is an example of a CareBenefitVerifySettings component.

```

```

This is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").