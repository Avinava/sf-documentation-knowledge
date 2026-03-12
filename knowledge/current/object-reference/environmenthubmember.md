---
title: "EnvironmentHubMember"
domain: object-reference
topic: environmenthubmember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:08.746Z
estimatedTokens: 1143
keywords: [EnvironmentHubMember, member, organization, Environment, Hub, API, version, 29.0, later, Calls, Usage]
---

# EnvironmentHubMember

> Represents a member organization in the
    Environment Hub.
  This object is available in API version 29.0 and later.

# EnvironmentHubMember

Represents a member organization in the Environment Hub. This object is available in API version 29.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can create only 20 member orgs per day. If you need to create additional orgs, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com "HTML (New Window)"). For product, specify **Platform**. For topic, specify **AppExchange & Managed Packages**.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillable, UpdateDescriptionA brief description of this org. |
| DisplayName | TypestringPropertiesFilter, Group, Nillable,Sort, UpdateDescriptionThe name that the user has specified for this member org. |
| EnvironmentHubId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe Org ID of this member’s Environment Hub org. |
| Instance | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionName of the instance where the Environment Hub member org resides. |
| IsFedIdSsoMatchAllowed | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if single sign-on (SSO) has been enabled based on matching the Federation ID. The default is false. |
| IsSandbox | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the member org is a sandbox (true) or not (false). This field is available in API version 36.0 and later. |
| MemberEntity | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique Org ID of the member org for this record. |
| MemberType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of member org for this record. Possible values include Branch Org, Patch Org, Release Org, Sandbox Org, Trialforce Management Org, and Trialforce Source Org.NoteOnly one member type at a time is stored. Member type is determined according to this hierarchy: (1) Sandbox, (2) Release, (3) Trialforce Source Org (TSO), (4) Patch, (5) Branch, and (6) Trialforce Management Org (TMO). For example, if an org is both a sandbox and a TMO, the value of MemberType is Sandbox Org. |
| Name | TypestringPropertiesDefaulted on create, Filter, idLookup, SortDescriptionThe name of the member org for this record. |
| OrgEdition | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe org’s edition, for example, Enterprise Edition or Unlimited Edition. |
| OrgStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe licensing or creation status of this org. Possible values include Active, Demo, Deleted, Free, Inactive, and Trial. |
| Origin | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method by which this org was added to the Environment Hub. Possible values are autoDiscovered, userAdded, and provisioned. |
| SSOMappedUsers | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of mapped users in this member org. This field is available in API version 36.0 and later. |
| ServiceProviderId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service provider for this member org. This field is available in API version 36.0 and later. |
| ShouldAddRelatedOrgs | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the connection of related orgs to the hub. Possible values are done, notRequested, pending, and requested. |
| ShouldEnableSSO | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIf SSO should be enabled when this member org is added. The default is false. |
| SsoStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIf SSO has been enabled for this org. Possible values are:Enabled—Single sign-on is enabled.Disabled—Single sign-on is disabled.Pending—Single sign-on is in the process of being enabled.Failed—Single sign-on enablement failed. Contact Salesforce support for assistance. |
| SsoUsernameFormula | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe custom formula for matching users in the hub and member orgs. |

## Usage

Use this object to access and modify settings of member orgs in the Environment Hub.
