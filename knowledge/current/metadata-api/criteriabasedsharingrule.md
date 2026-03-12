---
title: "CriteriaBasedSharingRule"
domain: metadata-api
topic: criteriabasedsharingrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.395Z
estimatedTokens: 2852
keywords: [CriteriaBasedSharingRule, component, removed, API, version, 33.0, earlier, versions, SharingRules, instead, criteria-based, sharing, rule, share, records]
---

# CriteriaBasedSharingRule

> This component is removed as of API version
      33.0 and is available in earlier versions only. Use SharingRules instead. Represents a
      criteria-based sharing rule. CriteriaBasedSharingRule enables you to share records based on
      specific criteria.

# CriteriaBasedSharingRule

This component is removed as of API version 33.0 and is available in earlier versions only. Use [SharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm "Represents the base container for sharing rules, which can be criteria-based, ownership-based, territory-based, or for guest user access. SharingRules enables you to share records with a set of users, using rules that specify the access level for the target user group.") instead. Represents a criteria-based sharing rule. CriteriaBasedSharingRule enables you to share records based on specific criteria.

It extends the [BaseSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_basesharingrule.htm "This component is removed as of API version 33.0 and is available in earlier versions only. Use SharingBaseRule instead. Represents the base container for criteria-based and owner-based sharing rules.") metadata type and inherits its sharedTo field. For more information, see “Criteria-Based Sharing Rules Overview” in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can’t create a CrteriaBasedSharingRule component directly. Use the child components instead.

## Declarative Metadata File Suffix and Directory Location

CriteriaBasedSharingRule components are stored within the SharingRules component in the criteriaBasedRules field.

## Version

CriteriaBasedSharingRule components are available in API version 24.0 and later.

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object, and only users with the Manage Sharing permission can edit this object.

## Fields

The following information assumes that you’re familiar with implementing sharing rules for standard objects and custom objects. For more information on these fields, see Sharing Settings in Salesforce Help.

| Field | Field Type | Description |
| --- | --- | --- |
| criteriaItems | FilterItem[] | List that represents the criteria for the sharing rule. The possible values are:fieldoperationvalue |

## AccountCriteriaBasedSharingRule

Represents a criteria-based sharing rule for accounts. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

AccountCriteriaBasedSharingRule is used by the criteriaBasedRules field in [AccountSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#AccountSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| accountAccessLevel | ShareAccessLevelNoNone (enumeration of type string) | Required. A value that represents the level of access that the user or group has to the account. The possible values are:ReadEditAll |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| caseAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that the user or group has to cases associated with the account. The possible values are:NoneReadEdit |
| contactAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that the user or group has to contacts associated with the account. The possible values are:NoneReadEdit |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |
| opportunityAccessLevel | ShareAccessLevelNoAll (enumeration of type string) | Required. A value that represents the level of access that a target group is granted for any associated opportunity. The possible values are:NoneReadEdit |

## CampaignCriteriaBasedSharingRule

Represents a criteria-based sharing rule for campaigns. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

CampaignCriteriaBasedSharingRule is used by the criteriaBasedRules field in [CampaignSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#CampaignSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters. This field is available in API version 29.0 and later. |
| campaignAccessLevel | ShareAccessLevelNoNone (enumeration of type string) | Required. A value that represents the level of access that a target group is granted for a campaign. The possible values are:ReadEditAll |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## CaseCriteriaBasedSharingRule

Represents a criteria-based sharing rule for cases. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

CaseCriteriaBasedSharingRule is used by the criteriaBasedRules field in [CaseSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#CaseSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| caseAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of access being granted for a case. The possible values are:ReadEdit |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## ContactCriteriaBasedSharingRule

Represents a criteria-based sharing rule for contacts. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

ContactCriteriaBasedSharingRule is used by the criteriaBasedRules field in [ContactSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#ContactSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| contactAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of access being granted to the target group, role, or user for a contact. The possible values are:ReadEdit |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## LeadCriteriaBasedSharingRule

Represents a criteria-based sharing rule for leads. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

LeadCriteriaBasedSharingRule is used by the criteriaBasedRules field in [LeadSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#LeadSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters. This field is available in API version 29.0 and later. |
| leadAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of allowed access. The possible values are:ReadEdit |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## OpportunityCriteriaBasedSharingRule

Represents a criteria-based sharing rule for opportunities. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

OpportunityCriteriaBasedSharingRule is used by the criteriaBasedRules field in [OpportunitySharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#OpportunitySharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| opportunityAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the level of allowed access. The possible values are:ReadEdit |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## CustomObjectCriteriaBasedSharingRule

Represents a criteria-based sharing rule for custom objects. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

CustomObjectCriteriaBasedSharingRule is used by the criteriaBasedRules field in [CustomObjectSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#CustomObjectSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| accessLevel | string | Required. A value that represents the type of allowed sharing. The possible values are:ReadEditAll |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |

## UserCriteriaBasedSharingRule

Represents a criteria-based sharing rule for users. It extends the CriteriaBasedSharingRule metadata type and inherits its criteriaItems field.

UserCriteriaBasedSharingRule is used by the criteriaBasedRules field in [UserSharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm#UserSharingRules).

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Represents the filter logic of the sharing rule. |
| description | string | Represents the description of the sharing rule. Maximum of 1000 characters.This field is available in API version 29.0 and later. |
| name | string | Required. Name for the sharing rule. Corresponds to Label in the user interface. |
| userAccessLevel | ShareAccessLevelReadEdit (enumeration of type string) | Required. A value that represents the type of allowed sharing. The possible values are:ReadEdit |

## Declarative Metadata Sample Definition

The following is the definition of two owner-based sharing rules and one criteria-based sharing rule containing two criteria items. The file name corresponds to the Account.sharingRules file under the accountSharingRules directory.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_basesharingrule.htm "BaseSharingRule")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_ownersharingrule.htm "OwnerSharingRule")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountSharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
  <ownerRules>
    <fullName>G1Dev_G2New</fullName>
    <sharedTo>
      <group>G2New</group>
    </sharedTo>
    <sharedFrom>
      <group>G1Dev</group>
    </sharedFrom>
    <accountAccessLevel>Read</accountAccessLevel>
    <caseAccessLevel>None</caseAccessLevel>
    <contactAccessLevel>Read</contactAccessLevel>
  </ownerRules>
    <fullName>G2New_R1New</fullName>
    <sharedTo>
      <roleAndSubordinates>R1New</roleAndSubordinates>
    </sharedTo>
    <sharedFrom>
      <group>G2New</group>
    </sharedFrom>
    <accountAccessLevel>Edit</accountAccessLevel>
    <caseAccessLevel>Read</caseAccessLevel>
    <contactAccessLevel>Edit</contactAccessLevel>
    <name>G2New_R1New</name>
    <opportunityAccessLevel>None</opportunityAccessLevel>
  </ownerRules>
  <criteriaBasedRules>
    <fullName>AccountCriteria</fullName>
    <sharedTo>
      <group>G1</group>
    </sharedTo>
    <criteriaItems>
      <field>BillingCity</field>
      <operation>equals</operation>
      <value>San Francisco</value>
    </criteriaItems>
    <criteriaItems>
      <field>MyChkBox__c</field>
      <operation>notEqual</operation>
      <value>False</value>
    </criteriaItems>
    <accountAccessLevel>Read</accountAccessLevel>
    <booleanFilter>1 OR 2</booleanFilter>
    <caseAccessLevel>None</caseAccessLevel>
    <contactAccessLevel>Read</contactAccessLevel>
    <name>AccountCriteria</name>
    <opportunityAccessLevel>None</opportunityAccessLevel>
  </criteriaBasedRules>
</AccountSharingRules>
```

## Related Topics

- SharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
- BaseSharingRule (atlas.en-us.api_meta.meta/api_meta/meta_basesharingrule.htm)
- FilterItem (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- AccountSharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
- CampaignSharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
- CaseSharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
- ContactSharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
- LeadSharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
- OpportunitySharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
- CustomObjectSharingRules (atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm)
