---
title: "OwnerSharingRule"
domain: metadata-api
topic: ownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.871Z
keywords: [OwnerSharingRule, Note, Declarative, Metadata, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, AccountOwnerSharingRule, CampaignOwnerSharingRule, CaseOwnerSharingRule, ContactOwnerSharingRule, LeadOwnerSharingRule, OpportunityOwnerSharingRule, AccountTerritorySharingRule]
---

# OwnerSharingRule

# OwnerSharingRule

Represents an ownership-based sharing rule. OwnerSharingRule enables you to share records owned by a set of users with another set, using rules that specify the access level of the target user group. This component is removed as of API version 33.0 and is available in earlier versions only.

OwnerSharingRule extends the [BaseSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_basesharingrule.htm "This component is removed as of API version 33.0 and is available in earlier versions only. Use SharingBaseRule instead. Represents the base container for criteria-based and owner-based sharing rules.") metadata type and inherits its SharedTo field. For more information, see “Sharing Rules” in the Salesforce online help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can’t create a OwnerSharingRule component directly. Use the child components instead.

## Declarative Metadata File Suffix and Directory Location

OwnerSharingRules components are stored within the SharingRules component in the ownerRules field.

## Version

OwnerSharingRules components are available in API version 24.0 and later.

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object, and only users with the Manage Sharing permission can edit this object.

## Fields

The following information assumes that you are familiar with implementing sharing rules for standard objects and custom objects. For more information on these fields, see “Sharing Settings” in the Salesforce online help.

| Field | Field Type | Description |
| --- | --- | --- |
| sharedFrom | SharedTo | Required. Specifies the record owners. |
| sharedTo | SharedTo | Required. Specifies who the record should be shared with. |
| fullName | string | The unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |

## AccountOwnerSharingRule

Represents a sharing rule for an account with users other than the owner. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

AccountOwnerSharingRule is used by the ownerRules field in [AccountSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#AccountSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| accountAccessLevel | ShareAccessLevelNoNone (enumeration of type string) | Required. A value that represents the level of access that a group or role has to the account. The possible values are:ReadEditAll |
| caseAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that a group or role has to cases associated with the account. The possible values are:NoneReadEdit |
| contactAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that a group or role has to contacts associated with the account. The possible values are:NoneReadEdit |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |
| opportunityAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that a group or role is granted for any associated opportunity. The possible values are:NoneReadEdit |

## CampaignOwnerSharingRule

Represents a sharing rule for a campaign with users other than the owner. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

CampaignOwnerSharingRule is used by the ownerRules field in [CampaignSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#CampaignSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| campaignAccessLevel | ShareAccessLevelNoNone (enumeration of type string) | A value that represents the level of access that a group or role is granted for a campaign. The possible values are:ReadEditAll |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Name for the sharing rule. Corresponds to Label in the user interface. |

## CaseOwnerSharingRule

Represents a sharing rule for a case with users other than the owner. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

CaseOwnerSharingRule is used by the ownerRules field in [CaseSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#CaseSharingRules). All the following fields are required.

| Field | Field Type | Description |
| --- | --- | --- |
| caseAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of access that a group or role is granted for a case. The possible values are:ReadEdit |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## ContactOwnerSharingRule

Represents a sharing rule for a contact with users other than the owner. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

ContactOwnerSharingRule is used by the ownerRules field in [ContactSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#ContactSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| contactAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of access that a group or role is granted for a contact. The possible values are:ReadEdit |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## LeadOwnerSharingRule

Represents a sharing rule for a lead with users other than the owner. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

LeadOwnerSharingRule is used by the ownerRules field in [LeadSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#LeadSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| leadAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of access that a group or role is granted for a lead. The possible values are:ReadEdit |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## OpportunityOwnerSharingRule

Represents a sharing rule for an opportunity with users other than the owner. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

OpportunityOwnerSharingRule is used by the ownerRules field in [OpportunitySharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#OpportunitySharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| opportunityAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of access that a group or role is granted for an opportunity. The possible values are:ReadEdit |

## AccountTerritorySharingRule

Represents a rule for sharing an account within a territory. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

AccountTerritorySharingRule is used by the ownerRules field in [AccountTerritorySharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#AccountTerritorySharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| accountAccessLevel | ShareAccessLevelNoNone (enumeration of type string) | Required. A value that represents the level of access that a Territory or TerritoryAndSubordinates group is granted for an account territory. The possible values are:ReadEditAll |
| caseAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that a Territory or TerritoryAndSubordinates group is granted for all child cases to an account. The possible values are:NoneReadEdit |
| contactAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that a Territory or TerritoryAndSubordinates group is granted for all related contacts on an account. The possible values are:NoneReadEdit |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |
| opportunityAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that a Territory or TerritoryAndSubordinates group is granted for all opportunities associated with an account. The possible values are:NoneReadEdit |

## CustomObjectOwnerSharingRule

Represents a sharing rule for custom objects. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

CustomObjectOwnerSharingRule is used by the ownerRules field in [CustomObjectSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#CustomObjectSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| accessLevel | string | Required. A value that represents the level of access that a group or role is granted to a custom object. The possible values are:ReadEditAll |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## UserMembershipSharingRule

Represents a sharing rule to share members of a group with another group of users. It extends the OwnerSharingRule metadata type and inherits its fullName, sharedFrom, and sharedTo fields.

UserMembershipSharingRule is used by the ownerRules field in [UserSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#UserSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |
| userAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of access that a group or role is granted for a user. The possible values are:ReadEdit |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_cbsrule.htm "CriteriaBasedSharingRule")