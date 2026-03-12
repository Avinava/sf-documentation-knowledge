---
title: "ClaimFinancialSettings"
domain: financial-services-cloud-object-reference
topic: claimfinancialsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.141Z
estimatedTokens: 501
keywords: [ClaimFinancialSettings, configuration, settings, Insurance, Claim, Financial, Services, Parent, File, Suffix, Directory, Location, Version, Special, Access, API, version, 57.0, later, Calls]
---

# ClaimFinancialSettings

> Represents the configuration settings for Insurance Claim Financial Services. This object is available in API version 57.0 and later.

# ClaimFinancialSettings

Represents the configuration settings for Insurance Claim Financial Services. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ClaimCovPendingAuthStatus | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of pending financial authority for claim coverage. |
| ClaimPendingAuthorityStatus | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of pending financial authority for claim. |
| ClmCovPymtDtlPendAuthSts | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of pending financial authority for claim coverage payment detail. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the claim financial settings object. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the claim finanical settings. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionTne unique label that identifies the claim finanical settings throughout the Salesforce user interface. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ClaimFinancialSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <claimCovPendingAuthStatus>Pending Authority</claimCovPendingAuthStatus>
    <claimPendingAuthorityStatus>Pending Authority</claimPendingAuthorityStatus>
    <clmCovPymtDtlPendAuthSts>Pending Authority</clmCovPymtDtlPendAuthSts>
    <masterLabel>Claim Financial Settings</masterLabel>
</ClaimFinancialSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?><!--
  ~ Copyright 2022 salesforce.com, inc.
  ~ All Rights Reserved
  ~ Company Confidential
  -->
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ClaimFinancialSettings</name>
    </types>
    <version>57.0</version>
</Package>
```
