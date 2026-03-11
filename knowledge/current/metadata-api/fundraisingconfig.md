---
title: "FundraisingConfig"
domain: metadata-api
topic: fundraisingconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:52.849Z
keywords: [FundraisingConfig, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# FundraisingConfig

# FundraisingConfig

Represents a collection of settings to configure the fundraising product.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

FundraisingConfig components have the suffix .fundraisingConfig and are stored in the fundraisingConfigs folder.

## Version

FundraisingConfig components are available in API version 58.0 and later.

## Special Access Rules

Your org must have Fundraising Access license as a part of the Nonprofit Cloud to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| donorMatchingMethod | Field TypeDonorMatchingMethod (enumeration of type string)DescriptionReserved for future use. |
| failedTransactionCount | Field TypeintDescriptionThe count of consecutive failed past transactions before the gift commitment status is changed to Failing. If set to 0, the status is never auto-changed to Failing. |
| householdSoftCreditRole | Field TypestringDescriptionReserved for future use. |
| installmentExtDayCount | Field TypeintDescriptionThe duration in the number of days before or after an unpaid transaction in a gift commitment is marked as another installment in the gift commitment schedule. The unpaid transaction within the grace period is considered a gift transaction. |
| isHshldSoftCrAutoCrea | Field TypebooleanDescriptionReserved for future use. |
| lapsedUnpaidTrxnCount | Field TypeintDescriptionThe count of consecutive unpaid past transactions before the gift commitment status is changed to Lapsed. If set to 0, the status is never auto-changed to Lapsed. |
| masterLabel | Field TypestringDescriptionA user-friendly name for FundraisingConfig, which is defined when the FundraisingConfig is created. |
| shouldClosePaidRcrCmt | Field TypebooleanDescriptionIndicates whether to automatically close a recurring gift commitment when it has no ongoing or future schedule and no unpaid transaction (true) or not (false).The default value is false. Available in API version 59.0 and later. |
| shouldCreateRcrSchdTrxn | Field TypebooleanDescriptionIndicates whether the next transaction in a recurring schedule is automatically created (true) or not (false).The default value is true. Available in API version 59.0 and later. |
| utmCampaignSrcObj | Field TypestringDescriptionName of the sObject of the campaign for which the donation was received. Available in API version 64.0 and later. |
| utmCampaignSrcObjField | Field TypestringDescriptionName of the field on the sObject in utmCampaignSrcObj of the campaign for which the donation was received. Available in API version 64.0 and later. |
| utmMediumSrcObj | Field TypestringDescriptionName of the sObject that stores data about the message channel from which the donation originated. Available in API version 64.0 and later. |
| utmMediumSrcObjField | Field TypestringDescriptionName of the field on the sObject in utmMediumSrcObj that stores data about the message channel from which the donation originated. Available in API version 64.0 and later. |
| utmSourceSrcObj | Field TypestringDescriptionName of the sObject that stores data about the source of a donation. Available in API version 64.0 and later. |
| utmSourceSrcObjField | Field TypestringDescriptionName of the field on the sObject in utmSourceSrcObj that stores data about the source of a donation. Available in API version 64.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a FundraisingConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```