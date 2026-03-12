---
title: "DsarPolicyLog"
domain: object-reference
topic: dsarpolicylog
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.254Z
estimatedTokens: 910
keywords: [DsarPolicyLog, history, Data, Subject, Access, DSAR, policy, execution, requests, log, records, status, results, executed, policies]
---

# DsarPolicyLog

> Represents the history of Data Subject Access Request (DSAR) policy
         execution requests. This log records the status and results of executed DSAR policies for a
         customer. This object is available in API version 50.0 and later.

# DsarPolicyLog

Represents the history of Data Subject Access Request (DSAR) policy execution requests. This log records the status and results of executed DSAR policies for a customer. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object is for Privacy Center customers with the ReadAllData or PrivacyDataAccess permissions.

## Fields

| Field | Details |
| --- | --- |
| CompletionDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the data subject access request was completed. Available in API version 51.0 and later. |
| DataSubjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 15–18 character ID of the data subject making the request. Available in API version 51.0 and later. |
| DeletedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the file generated for the data subject’s request is deleted. Available in API version 51.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name of the policy.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| DownloadedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date and time when the data subject downloaded the file generated at their request. Available in API version 51.0 and later. |
| DsarError | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRepresents an error in generating the file for the data subject access request. Available in API version 51.0 and later. |
| DsarPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the DSAR policy. |
| FileURL | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe result of the DSAR policy execution. The URL links to a downloadable file that contains the customer data. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MasterLabel.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the policy. |
| RequestDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when a data subject requested access to their data in the org. Available in API version 51.0 and later. |
| RequestStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the policy execution.Possible values are:CompleteDeletedDownloadedExpiredFailedIn Progress |
| RequestUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the org employee or admin making the request on behalf of the data subject. Available in API version 51.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as the object.

[DsarPolicy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dsarpolicy.htm "Represents a Data Subject Access Request (DSAR) policy created in the Privacy Center managed package. DSAR policies anonymize or transfer personal data from your org at your customer’s request. This object is available in API version 50.0 and later.")

Sharing is available for the object.

## Related Topics

- DsarPolicy (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_dsarpolicy.htm)
