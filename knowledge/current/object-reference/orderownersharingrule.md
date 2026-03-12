---
title: "OrderOwnerSharingRule"
domain: object-reference
topic: orderownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.991Z
estimatedTokens: 769
keywords: [OrderOwnerSharingRule, rule, determines, order, sharing, access, order’s, owners, Calls, Special, Rules, Usage]
---

# OrderOwnerSharingRule

> Represents a rule which determines order sharing access for the order’s
   owners.

# OrderOwnerSharingRule

Represents a rule which determines order sharing access for the order’s owners.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To enable access to this object for your org, contact Salesforce customer support. However, we recommend that you instead use Metadata API to programmatically update owner sharing rules because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| CreatedById | TypereferencePropertiesDefaulted on create, Filter, Group, SortDescriptionID of the creator of the order owner sharing rule. |
| CreatedDate | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionDate when the order owner sharing rule was created. |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the order owner sharing rule. Maximum length is 1,000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the developer of the order owner sharing rule. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the group whose orders are shared. |
| Id | TypeIDPropertiesDefaulted on create, Filter, Group, idLookup, SortDescriptionID of the order owner sharing rule. |
| LastModifiedById | TypereferencePropertiesDefaulted on create, Filter, Group, SortDescriptionID of the user who last modified the order owner sharing rule. |
| LastModifiedDate | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionDate when the order owner sharing rule was last modified. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Namefield, Sort, UpdateDescriptionName of the order owner sharing rule. Maximum length is 80 characters. |
| OrderAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAccess level for the order owner sharing rule. |
| SystemModstamp | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionSystem modification time for the order owner sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group with whom order access is shared. |

## Usage

Use this object to manage the sharing rules for orders. For example, the following code creates an order owner sharing rule between two public groups, which can also contain portal users.

```

```

#### See Also

-   [*Metadata API Developer Guide*: SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm "
    Metadata API Developer Guide: SharingRules - HTML (New Window)")

## Code Examples

```
OrderOwnerSharingRule rule = new OrderOwnerSharingRule();
rule.setName("RuleName"); // Set the sharing rule name
rule.setDeveloperName("RuleDeveloperName"); // Set the sharing rule developer name
rule.setGroupId("00Gx00000000000"); // Set the group of users to share records from 
rule.setUserOrGroupId("00Gx00000000001"); // Set the group of users to share records to
rule.setOrderAccessLevel("Edit");
connection.create(rule);
```
