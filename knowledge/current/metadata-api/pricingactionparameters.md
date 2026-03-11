---
title: "PricingActionParameters"
domain: metadata-api
topic: pricingactionparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.029Z
keywords: [PricingActionParameters, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# PricingActionParameters

# PricingActionParameters

Represents the pricing action that's associated with a context definition and pricing procedure.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PricingActionParameters components have the suffix .pricingActionParameters and are stored in the pricingActionParameters folder.

## Version

PricingActionParameters components are available in API version 60.0 and later.

## Special Access Rules

This metadata type is available with Salesforce Pricing.

## Fields

| Field Name | Description |
| --- | --- |
| contextDefinition | Field TypestringDescriptionRequired.Context definition record that's associated with the pricing action. |
| contextMapping | Field TypestringDescriptionRequired.Context mapping record that's associated with the pricing action. |
| developerName | Field TypestringDescriptionRequired.Unique name of the pricing action parameter record.The name must begin with a letter and use only alphanumeric characters and underscores. The name must not include spaces, end with an underscore, or have two consecutive underscores. |
| effectiveFrom | Field TypedateTimeDescriptionRequired.Date and time from when the pricing action becomes effective. |
| effectiveTo | Field TypedateTimeDescriptionDate and time till when the pricing action is in effect. |
| masterLabel | Field TypestringDescriptionRequired.Master label of the pricing action parameter. |
| objectName | Field TypestringDescriptionName of the object that's associated with the pricing action. Valid values are:CaseContractOpportunityOrderQuoteSalesAgreementWorkOrder |
| pricingProcedure | Field TypestringDescriptionPricing procedure record that's associated with this pricing action. |

## Declarative Metadata Sample Definition

The following is an example of a PricingActionParameters component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").