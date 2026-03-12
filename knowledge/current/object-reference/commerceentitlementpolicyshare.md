---
title: "CommerceEntitlementPolicyShare"
domain: object-reference
topic: commerceentitlementpolicyshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.654Z
estimatedTokens: 674
keywords: [CommerceEntitlementPolicyShare, entitlement, rule, sharing, products, prices, users, owner, API, version, 49.0, later, Calls, Special, Access]
---

# CommerceEntitlementPolicyShare

> Represents the entitlement rule for sharing products and prices with users
      other than the owner. This object is available in API version 49.0 and later.

# CommerceEntitlementPolicyShare

Represents the entitlement rule for sharing products and prices with users other than the owner. This object is available in API version 49.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The CommerceEntitlementPolicyShare object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values are:All—OwnerEdit—Read/WriteRead—Read Only |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID of the parent entitlement policy. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Possible values are:CompliantCollaboration—Compliant Data SharingGuestParentImplicit—Associated guest user sharingGuestPersonImplicit—Associated Guest User SharingGuestRule—Guest User Sharing RuleImplicitChild—Account SharingImplicitParent—Associated record owner or sharingImplicitPerson—Person ContactManual—Manual SharingOwnerRule—Sharing RuleSurveyShare—Survey Sharing RuleTeam—Sales TeamTerritory—Territory Assignment RuleTerritory2AssociationManual—Territory ManualTerritory2Forecast—Territory assignment for forecasting and reportingTerritoryManual—Territory ManualTerritoryRule—Territory Sharing Rule |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID of the associated user or buyer group. |
