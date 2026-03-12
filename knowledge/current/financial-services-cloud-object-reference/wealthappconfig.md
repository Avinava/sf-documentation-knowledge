---
title: "WealthAppConfig"
domain: financial-services-cloud-object-reference
topic: wealthappconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.739Z
estimatedTokens: 173
keywords: [WealthAppConfig, configuration, Financial, Services, Cloud, functionality, Calls]
---

# WealthAppConfig

> Represents configuration information for Financial Services Cloud
         functionality.

# WealthAppConfig

Represents configuration information for Financial Services Cloud functionality.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InteractionUpdateFrequency | TypedoublePropertiesCreate, Defaulted on create, Filter,Nillable, Sort, UpdateDescriptionFrequency (in minutes) with which the Last Interaction and Next Interaction dates are automatically updated. Default is 15 min. |
| RejectedReferralStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead status used to identify rejected referrals. |
