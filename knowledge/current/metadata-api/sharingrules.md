---
title: "SharingRules"
domain: metadata-api
topic: sharingrules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.659Z
keywords: [SharingRules, Declarative, Metadata, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, SharingCriteriaRule, SharingGuestRule, Note, SharingOwnerRule, SharingTerritoryRule, AccountSharingRules, CampaignSharingRules, CaseSharingRules]
---

# SharingRules

# SharingRules

Represents the base container for sharing rules, which can be criteria-based, ownership-based, territory-based, or for guest user access. SharingRules enables you to share records with a set of users, using rules that specify the access level for the target user group.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. For more information, see “Sharing Rules” in Salesforce Help.

In API version 33.0 and later, retrieving, deleting, or deploying of all sharing rules in an organization is available. Wildcard support is also available. You can’t retrieve, delete, or deploy manual sharing rules or sharing rules by their type (owner, criteria-based, territory, or guest user).

## Declarative Metadata File Suffix and Directory Location

In API version 33.0 and later, components are stored in the sharingRules folder and their file name matches the object name with the suffix .sharingRules. Criteria-based, owner-based, territory-based, and guest user sharing rules are all contained in a object.sharingRule file.

Before API version 33.0, SharingRules components are stored in their corresponding object directory and the file name matches the object name. For example, the accountSharingRules directory contains an Account.sharingRules file for account sharing rules. SharingRules for custom objects are stored in the customObjectSharingRules directory, which contains files with the .sharingRules extension such as ObjA\_\_c.sharingRules, where ObjA refers to the developer name of a custom object type.

## Version

SharingRules components are available in API version 24.0 and later, but these components are no longer available in API version 33.0 and later: AccountSharingRules, CampaignSharingRules, CaseSharingRules, ContactSharingRules, LeadSharingRules, OpportunitySharingRules, AccountTerritorySharingRules, CustomObjectSharingRules, UserSharingRules.

In API version 33.0 and later, use [SharingCriteriaRule](#SharingCriteriaRule), [SharingOwnerRule](#SharingOwnerRule) and [SharingTerritoryRule](#SharingTerritoryRule).

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object, and only users with the Manage Sharing permission can edit this object.

## Fields

The following information assumes that you’re familiar with implementing sharing rules for standard objects and custom objects. For more information on these fields, see “Sharing Settings” in Salesforce Help.

| Field | Field Type | Description |
| --- | --- | --- |
| sharingCriteriaRules | SharingCriteriaRule[] | An array of criteria-based sharing rules. Available in API version 33.0 and later. |
| sharingGuestRules | SharingGuestRule[] | An array of guest user sharing rules. Available in API version 47.0 and later. |
| sharingOwnerRules | SharingOwnerRule[] | An array of ownership-based sharing rules. Available in API version 33.0 and later. |
| sharingTerritoryRules | SharingTerritoryRule[] | An array of territory-based sharing rules. Available in API version 33.0 and later. |

## SharingCriteriaRule

Defines a criteria-based sharing rule. It extends [SharingBaseRule](atlas.en-us.api_meta.meta/api_meta/meta_sharingbaserule.htm "Represents sharing rule settings such as access level and to whom access is granted.") and inherits all its fields. Available in API version 33.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Advanced filter conditions that are specified for the sharing rule. |
| criteriaItems | FilterItem[] | An array of the boolean criteria (conditions) for the sharing rule. |
| includeRecordsOwnedByAll | boolean | Required. Indicates whether records owned by users who can’t have an assigned role are included in the records shared (true) or not (false). Examples of users who can’t have an assigned role are high-volume users and system users such as automated process users.or Salesforce system users.You can’t edit this field after the sharing rule is created. |

## SharingGuestRule

Defines a guest user sharing rule. It extends [SharingBaseRule](atlas.en-us.api_meta.meta/api_meta/meta_sharingbaserule.htm "Represents sharing rule settings such as access level and to whom access is granted.") and inherits all its fields, except accountSettings. Available in API version 47.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

For SharingGuestRule, the accessLevel field can be set only to Read.

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Advanced filter conditions that are specified for the sharing rule. Available in API version 48.0 and later. |
| criteriaItems | FilterItem[] | An array of the boolean criteria (conditions) for the sharing rule. Available in API version 48.0 and later. |
| includeHVUOwnedRecords | boolean | Required. Indicates whether records owned by high-volume community or site users are included in the records shared (true) or not (false). By default, only records owned by authenticated users, guest users, and queues are included in sharing rules. This field has a default value of false. Available in API version 52.0 and later.You can’t edit this field after the sharing rule is created. |

## SharingOwnerRule

Defines an ownership-based sharing rule. It extends [SharingBaseRule](atlas.en-us.api_meta.meta/api_meta/meta_sharingbaserule.htm "Represents sharing rule settings such as access level and to whom access is granted.") and inherits all its fields. Available in API version 33.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| sharedFrom | SharedTo | Required. Specifies the record owners.If you’re using Sales Territories, use modelName.territoryName for the shared-to and shared-from territory and territoryAndSubordinates values on the SharedTo type, where:modelName equals the name of the active territory model in the API.territoryName equals the territory’s name in the API. |

## SharingTerritoryRule

Defines a territory-based sharing rule. It extends [SharingOwnerRule](#SharingOwnerRule) and inherits all its fields. Available in API version 33.0 and later.

## AccountSharingRules

Represents the sharing rules for accounts. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | AccountCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | AccountOwnerSharingRule[] | List that defines user membership-based rules. |

## CampaignSharingRules

Represents the sharing rules for campaigns. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | CampaignCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | CampaignOwnerSharingRule[] | List that defines user membership-based rules. |

## CaseSharingRules

Represents the sharing rules for cases. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | CaseCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | CaseOwnerSharingRule[] | List that defines user membership-based rules. |

## ContactSharingRules

Represents the sharing rules for contacts. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | ContactCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | ContactOwnerSharingRule[] | List that defines user membership-based rules. |

## LeadSharingRules

Represents the sharing rules for leads. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | LeadCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | LeadOwnerSharingRule[] | List that defines user membership-based rules. |

## OpportunitySharingRules

Represents the sharing rules for opportunities. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | OpportunityCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | OpportunityOwnerSharingRule[] | List that defines user membership-based rules. |

## AccountTerritorySharingRules

Represents the sharing rules for account territories in the original territory management feature. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| rules | AccountTerritorySharingRule[] | List that defines user membership-based rules. The list of acceptable values for the sharedFrom fields are:territoryterritoryAndSubordinates |

## CustomObjectSharingRules

Represents the sharing rules for custom objects. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | CustomObjectCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | CustomObjectOwnerSharingRule[] | List that defines user membership-based rules. |

## UserSharingRules

Represents the sharing rules for users. With user sharing rules, you can share members of a group with members of another group. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaBasedRules | UserCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| membershipRules | UserMembershipSharingRule[] | List that defines user membership-based rules. |

## Declarative Metadata Sample Definition

For retrieving sharing rules, see package.xml sample at SharingRules.

The following sample XML definition represents a criteria-based sharing rule in API version 33.0.

```

```

The following sample XML definition represents an ownership-based sharing rule in API version 33.0.

```

```

The following sample XML definition represents a territory-based sharing rule in API version 33.0.

```

```

The following is the definition of two account owner-based sharing rules in API version 32.0 and earlier. The file name corresponds to Account.sharingRules under the accountSharingRules directory. In this definition, ownerRules corresponds to [AccountOwnerSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_ownersharingrule.htm#AccountOwnerSharingRule).

```

```

The following is the definition of a user criteria-based sharing rule and a user membership-based sharing rule in API version 32.0 and earlier. The file name corresponds to User.sharingRules under the userSharingRules directory.

```

```

The following shows a sample package.xml file.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

1.  [BaseSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_basesharingrule.htm)  
    This component is removed as of API version 33.0 and is available in earlier versions only. Use SharingBaseRule instead. Represents the base container for criteria-based and owner-based sharing rules.
2.  [CriteriaBasedSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_cbsrule.htm)  
    This component is removed as of API version 33.0 and is available in earlier versions only. Use [SharingRules](# "Represents the base container for sharing rules, which can be criteria-based, ownership-based, territory-based, or for guest user access. SharingRules enables you to share records with a set of users, using rules that specify the access level for the target user group.") instead. Represents a criteria-based sharing rule. CriteriaBasedSharingRule enables you to share records based on specific criteria.
3.  [OwnerSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_ownersharingrule.htm)  
    Represents an ownership-based sharing rule. OwnerSharingRule enables you to share records owned by a set of users with another set, using rules that specify the access level of the target user group. This component is removed as of API version 33.0 and is available in earlier versions only.