---
title: "DsarPolicy"
domain: object-reference
topic: dsarpolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.245Z
estimatedTokens: 520
keywords: [DsarPolicy, Data, Subject, Access, DSAR, policy, created, Privacy, Center, managed, package, policies, anonymize, transfer, personal]
---

# DsarPolicy

> Represents a Data Subject Access Request (DSAR) policy created in the
         Privacy Center managed package. DSAR policies anonymize or transfer personal data from your
         org at your customer’s request. This object is available in API version 50.0 and
         later.

# DsarPolicy

Represents a Data Subject Access Request (DSAR) policy created in the Privacy Center managed package. DSAR policies anonymize or transfer personal data from your org at your customer’s request. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object is for Privacy Center customers with the ReadAllData or PrivacyDataAccess permissions.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDescription of the policy. The description is limited to 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name of the policy.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this policy can be used (true) or not (false) for data subject (customer) requests. The default value is false. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MasterLabel.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the policy. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as the object.

[DsarPolicyLog](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dsarpolicylog.htm "Represents the history of Data Subject Access Request (DSAR) policy execution requests. This log records the status and results of executed DSAR policies for a customer. This object is available in API version 50.0 and later.")

Sharing is available for the object.

## Related Topics

- DsarPolicyLog (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dsarpolicylog.htm)
