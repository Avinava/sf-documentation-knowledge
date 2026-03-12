---
title: "ESignatureEnvelopeConfig"
domain: clm-developer-guide
topic: esignatureenvelopeconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.621Z
estimatedTokens: 647
keywords: [ESignatureEnvelopeConfig, notification-specific, settings, integrating, external, eSignature, providers, Parent, File, Suffix, Directory, Location, Version, Special, Access, API, version, 56.0, later, Calls]
---

# ESignatureEnvelopeConfig

> The notification-specific settings for integrating with external eSignature providers. This object is available in API version 56.0 and later.

# ESignatureEnvelopeConfig

The notification-specific settings for integrating with external eSignature providers. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpirationPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expiration period for signing. |
| ExpirationWarningPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days before expiration for warning notifications. |
| FirstReminderPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days between envelope delivery and the first reminder email. |
| IsExpirationEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether expiration is enabled.The default value is 'false'. |
| IsReminderEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether reminders are enabled.The default value is 'false'. |
| IsVendorDefaultNtfcnEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the envelope uses account default notification settings.The default value is 'false'. |
| ReminderIntervalPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval in days between reminder emails. |
| TargetObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object to which the eSignature applies, such as an Opportunity, Quote, or Order. |
| Vendor | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe eSignature provider, for example DocuSign. |
| VendorAccountIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe eSignature branding identifier. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ESignatureEnvelopeConfigChangeEvent

Change events are available for the object.

ESignatureEnvelopeConfigFeed

Feed tracking is available for the object.

ESignatureEnvelopeConfigHistory

History is available for tracked fields of the object.

ESignatureEnvelopeConfigOwnerSharingRule

Sharing rules are available for the object.

ESignatureEnvelopeConfigShare

Sharing is available for the object.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ESignatureEnvelopeConfig xmlns="http://soap.sforce.com/2021/10/metadata">
    <masterLabel>DocuSign_Contract</masterLabel>
    <targetObjectName>Contract</targetObjectName>
    <vendorAccountIdentifier>vai</vendorAccountIdentifier>
    <isExpirationEnabled>true</isExpirationEnabled>
    <expirationPeriod>2</expirationPeriod>
    <expirationWarningPeriod>2</expirationWarningPeriod>
    <isReminderEnabled>true</isReminderEnabled>
    <firstReminderPeriod>2</firstReminderPeriod>
    <reminderIntervalPeriod>2</reminderIntervalPeriod>
    <isVendorDefaultNtfcnEnabled>true</isVendorDefaultNtfcnEnabled>
    <vendor>DocuSign</vendor>
</ESignatureEnvelopeConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2021/10/metadata">
    <types>
        <members>*</members>
        <name>ESignatureEnvelopeConfig</name>
    </types>
    <version>54.0</version>
</Package>
```
