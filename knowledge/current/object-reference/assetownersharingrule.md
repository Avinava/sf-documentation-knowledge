---
title: "AssetOwnerSharingRule"
domain: object-reference
topic: assetownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.005Z
estimatedTokens: 757
keywords: [AssetOwnerSharingRule, rules, sharing, Asset, users, owner, API, version, 33.0, later, Calls, Special, Access, Usage]
---

# AssetOwnerSharingRule

> Represents the rules for sharing an Asset with users other than the
         owner. This object is available in API version 33.0 and later.

# AssetOwnerSharingRule

Represents the rules for sharing an Asset with users other than the owner. This object is available in API version 33.0 and later.

## Supported Calls

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To enable access to this object for your org, contact Salesforce customer support. However, we recommend that you instead use Metadata API to programmatically update owner sharing rules because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| AssetAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of sharing being allowed. The possible values are:ReadEdit |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sharing rule. Maximum size is 1000 characters. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Rule Name in the user interface.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the source group. Cases owned by users in the source group trigger the rule to give access. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the user interface. Limited to 80 characters. Corresponds to Label on the user interface. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the target user or group. Target users or groups are given access. |

## Usage

Use this object to manage the sharing rules for assets. General sharing uses this object.

#### See Also

-   [*Metadata API Developer Guide*: SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm "
    Metadata API Developer Guide: SharingRules - HTML (New Window)")
