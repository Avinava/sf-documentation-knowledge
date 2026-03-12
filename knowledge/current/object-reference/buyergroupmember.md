---
title: "BuyerGroupMember"
domain: object-reference
topic: buyergroupmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.818Z
estimatedTokens: 331
keywords: [BuyerGroupMember, member, buyer, group, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# BuyerGroupMember

> Represents a member of a buyer group. This object is available
      in API version 55.0 and later.

# BuyerGroupMember

Represents a member of a buyer group. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout, describeSObjects(), getDeleted(), getUpdated(), query, retrieve(), undelete(), update(), upsert()

## Special Access Rules

The BuyerGroupMember object is available only if the Commerce Buyer and Entitlements Integrator permission is granted.

## Fields

| Field | Details |
| --- | --- |
| BuyerGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the buyer group to which the member belongs.BuyerGroupId is a relationship field.Relationship NameBuyerGroupRelationship TypeLookupRefers ToBuyerGroup |
| BuyerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the account or guest buyer profile.BuyerId is a polymorphic relationship field.Relationship NameBuyerRelationship TypeLookupRefers ToAccount, GuestBuyerProfile |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the buyer group member. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the member group or user.OwnerId is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
