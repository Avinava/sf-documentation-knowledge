---
title: "CreditMemoAddressGroup"
domain: revenue-cloud
topic: creditmemoaddressgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.212Z
estimatedTokens: 501
keywords: [CreditMemoAddressGroup, storage, buyer's, address, determine, tax, credit, amount, buyer, memo, issued, API, version, 62.0, later]
---

# CreditMemoAddressGroup

> Represents the storage of the buyer's address information, which is
         used to determine the tax credit amount for a buyer when a credit memo is issued. This
      object is available in API version 62.0 and later.

# CreditMemoAddressGroup

Represents the storage of the buyer's address information, which is used to determine the tax credit amount for a buyer when a credit memo is issued. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update()

## Special Access Rules

You need the Credit Memo Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe buyer's address. |
| CreditMemoAddressGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the credit memo address group. |
| CreditMemoId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the credit memo associated with the address group.This field is a relationship field.Relationship NameCreditMemoRelationship TypeMaster-detailRefers ToCreditMemo (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a credit memo address group record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a credit memo address group record. If this value is null, it’s possible that the user only accessed the credit memo address group record or a related list view (LastReferencedDate), but not viewed the credit memo address group record itself. |
