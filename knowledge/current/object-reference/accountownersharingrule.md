---
title: "AccountOwnerSharingRule"
domain: object-reference
topic: accountownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.618Z
estimatedTokens: 1219
keywords: [AccountOwnerSharingRule, rules, sharing, account, User, owner, Calls, Special, Access, Usage]
---

# AccountOwnerSharingRule

> Represents the rules for sharing an account with a User other than the
      owner.

# AccountOwnerSharingRule

Represents the rules for sharing an account with a User other than the owner.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To programmatically update owner sharing rules, we recommend that you use Metadata API. Contact Salesforce customer support to enable access to this object for your org.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, UpdateDescriptionA value that represents the type of sharing being allowed. The possible values are:ReadEditAll (This value isn’t valid for creating or updating.) |
| CaseAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of access granted to the target Group for all child cases. The possible values are:NoneReadEdit |
| ContactAccessLevel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA value that represents the type of access granted to the target Group, UserRole, or User for any associated contacts. The possible values are:NoneReadEditNoteWhen DefaultContactAccess is set to Controlled by Parent, you can’t create or update this field. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sharing rule. Maximum size is 1000 characters. This field is available in API version 29.0 and later. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Rule Name in the user interface.This field is available in API version 24.0 and later.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the source group. An Account owned by a User in the source Group triggers the rule to give access. |
| OpportunityAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of access granted to the target Group for any associated Opportunity. The possible values are:NoneReadEdit |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the user interface. Limited to 80 characters. Corresponds to Label on the user interface. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the User or Group being granted access. |

## Usage

Use this object to manage the sharing rules for accounts. General sharing and territory management-related sharing use this object. For example, the following code creates an account owner sharing rule between two public groups, which can also contain portal users.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original territory management feature is now unavailable. For more information, see [The Original Territory Management Module Will Be Retired in the Summer ’21 Release](https://help.salesforce.com/articleView?id=The-original-Territory-Management-module-will-be-retired-in-the-Summer-20-release&language=en_US&type=1). The information in this topic applies to the original territory management feature only, and not to Enterprise Territory Management.

#### See Also

-   [Account](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm "Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners).")

-   [AccountShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm "Represents a sharing entry on an account.")

-   [*Metadata API Developer Guide*: SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm "
    Metadata API Developer Guide: SharingRules - html (New Window)")

## Code Examples

```
AccountOwnerSharingRule rule = new AccountOwnerSharingRule();
rule.setName("RuleName"); // Set the sharing rule name
rule.setDeveloperName("RuleDeveloperName"); // Set the sharing rule developer name
rule.setGroupId("00Gx00000000000"); // Set the group of users to share records from 
rule.setUserOrGroupId("00Gx00000000001"); // Set the group of users to share records to
rule.setAccountAccessLevel("Edit");
rule.setOpportunityAccessLevel("Read");
rule.setCaseAccessLevel("None");
connection.create(rule);
```

## Related Topics

- Account (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm)
- AccountShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)
