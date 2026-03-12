---
title: "ClaimFinancialSettings"
domain: metadata-api
topic: claimfinancialsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.704Z
estimatedTokens: 610
keywords: [ClaimFinancialSettings, Represents, configuration, settings, Insurance, Claim, Financial, Services., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative]
---

# ClaimFinancialSettings

> Represents the configuration settings for
			Insurance Claim Financial Services.

# ClaimFinancialSettings

Represents the configuration settings for Insurance Claim Financial Services.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ClaimFinancialSettings components have the suffix claimFinancialSettings and are stored in the ClaimFinancialSettings folder.

## Version

ClaimFinancialSettings components are available in API version 57.0 and later.

## Special Access Rules

To access this metadata type, you require access to either InsurancePolicyAdminAccess or InsuranceClaimMgmtAccess add-on license.

## Fields

| Field Name | Description |
| --- | --- |
| claimCovPendingAuthStatus | Field TypestringDescriptionRequired.The status of pending financial authority for claim coverage. |
| claimPendingAuthorityStatus | Field TypestringDescriptionRequired.The status of pending financial authority for claim. |
| clmCovPymtDtlPendAuthSts | Field TypestringDescriptionRequired.The status of pending financial authority for claim coverage payment detail. |
| masterLabel | Field TypestringDescriptionRequired.The unique label that identifies the claim financial settings throughout the Salesforce user interface. |

## Declarative Metadata Sample Definition

The following is an example of a ClaimFinancialSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

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

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
