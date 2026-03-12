---
title: "IndustriesSettings"
domain: health-cloud-object-reference
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.816Z
estimatedTokens: 1458
keywords: [IndustriesSettings, settings, Health, Cloud.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Special, Access]
---

# IndustriesSettings

> Represents settings for Health Cloud.This type extends the Metadata metadata type and inherits its
                        fullName field.

# IndustriesSettings

Represents settings for Health Cloud.This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for details.

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings are available in API version 47.0 and later.

## Special Access Rules

Users need the Health Cloud permissions to access the settings available in editions with Health Cloud.

## Fields for Health Cloud

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAuthorizationCustomSharingPCU | boolean | Indicates whether to enable custom sharing to give your users access to view and manage electronic consent forms. Users with a Customer Community Plus license can share Authorization Form Texts and Data Use Purpose records with Accounts, Contracts, and Users specified in the Information Authorization Request record. |
| enableCandidateMatching | boolean | Indicates whether to enable Candidate Matching to automatically match candidates to clinical trials. |
| enableCareMgmtSlackAccess | boolean | Indicates whether Care Coordination for Slack app is enabled for your org (true) or not (false). Available in API version 56.0 and later. |
| enableClinicalDataModel | boolean | Indicates whether Clinical Data Model is enabled for your org (true) or not (false). The default is false. Available in API version 51.0 and later. |
| enableContactCenterAccess | boolean | Indicates whether Contact Center for Health Cloud app is enabled for your org (true) or not (false). The default is false. Available in API version 56.0 and later. |
| enableCustomFlowsOnCycleCount | boolean | Indicates whether Custom Flows on Cycle Count page for the Health Cloud app is enabled for your org (true) or not (false). Available in API version 56.0 and later. |
| enableCustomFlowsOnExpiryPage | boolean | Indicates whether Custom Flows on Expiry page for Health Cloud app is enabled for your org (true) or not (false). Available in API version 56.0 and later. |
| enableDiseaseSurveillancePref | boolean | Indicates whether the disease surveillance preference that monitors infectious diseases is enabled (true) or not (false). Available in API version 64.0 and later. |
| enableHcCorePatientConsole | boolean | Indicates whether to enable the OOTB Health Cloud Console App for Patients viewing. |
| enableHcStdRelationshipJunctions | boolean | Indicates whether to start using the core group membership settings instead of the ones coming from package for existing managed customers or for new ones to start using the relationships from core directly. |
| enableHlsClinicalDcsnSuptAccessOrgPreference | boolean | Indicates whether to enable Clinical Decision Support capabilities (OOTB IP, Data Model, and others.) (true) or not (false). |
| enableHlsFhirSubscriptionSetting | boolean | Indicates whether to enable Documentation Template Rule (DTR) processes, data model underneath, and others for processing DTR use cases for Utilization Management & Clinical Decision Support users. |
| enableIndustriesLPIPreference | boolean | Indicates whether Industries Licensing, Permitting, and Inspections (LPI) feature is enabled for your org (true) or not (false). The default is false. This field is available in editions where Health Cloud is enabled. Available in API version 63.0 and later. |
| enableLifeSciencesClinialTrialManagement | boolean | Indicates whether to enable participant recruitment and enrollment to help organizations design and execute clinical trials and manage trial participant journeys. |
| enableMedicationManagementEnabled | boolean | Indicates whether Medication Management is enabled for your org (true) or not (false). The default is false.This field is available in API version 53.0 and later. |
| enableMedicalDeviceEnabled | boolean | Indicates whether the Intelligent Sales features are enabled (true) or not (false). |
| enableMedRecSetting | boolean | Indicates whether Medication Reconciliation is enabled for your org (true) or not (false). The default is false. This field is available in API version 54.0 and later. |
| enableMultipleCareProgramEnrolleeOrgPref | boolean | Indicates whether Multiple Care Program Enrollee is enabled for your org (true) or not (false). Available in API version 49.0 and later. |
| enableProviderSearchSyncOrgPref | boolean | Indicates whether provider data search is synced every six hours (true) or not (false). The default is false. This field is available in editions where Health Cloud is enabled. |
| enableRosterFileFeatureOrgPreference | boolean | Indicates whether this is the org pref used for the roster file in Provider Network Management (true) or not (false). The default is false. |
| enableTrialManagementConsentManagement | boolean | Indicates whether to enable consent management to help organizations take consent from prospective or enrolled candidates before storing their data. |
| enableUMPayerAppAccessOrgPreference | boolean | Indicates whether to enable the OOTB Console Utilization Management (UM) Payers App for UM Payers App Enablement. This setting can be enabled by Customers. |
| enableVisitInventoryEnabled | boolean | Indicates whether the visit data model is enabled (true) or not (false). |
| IsHomeHealthEnabled | boolean | Indicates whether users can schedule and execute visits for the home healthcare services they provide for their patients (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableClinicalDataModel>true</enableClinicalDataModel>
    <enableContactCenterAccess>true</enableContactCenterAccess>
    <enableCareMgmtSlackAccess>true</enableCareMgmtSlackAccess>
    <enableCustomFlowsOnExpiryPage>true</enableCustomFlowsOnExpiryPage>
    <enableCustomFlowsOnCycleCount>true</enableCustomFlowsOnCycleCount>
    <enableMultipleCareProgramEnrolleeOrgPref>false</enableMultipleCareProgramEnrolleeOrgPref>
    <enableMedicalDeviceEnabled>true</enableMedicalDeviceEnabled>
    <enableMedicationManagementEnabled>true</enableMedicationManagementEnabled>
    <enableMedRecSetting>true</enableMedRecSetting>
    <enableProviderSearchSyncOrgPref>true</enableProviderSearchSyncOrgPref>
    <enableVisitInventoryEnabled>true</enableVisitInventoryEnabled>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Industries</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```
