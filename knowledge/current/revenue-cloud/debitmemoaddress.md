---
title: "DebitMemoAddress"
domain: revenue-cloud
topic: debitmemoaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.296Z
estimatedTokens: 706
keywords: [DebitMemoAddress, buyer's, address, determine, tax, amount, buyer, debit, memo, issued, API, version, 65.0, later, Calls]
---

# DebitMemoAddress

> Represents the buyer's address information, which is used to
         determine the tax amount for a buyer when a debit memo is issued. This object is
      available in API version 65.0 and later.

# DebitMemoAddress

Represents the buyer's address information, which is used to determine the tax amount for a buyer when a debit memo is issued. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need Revenue Cloud Billing license and one of these permission sets to access this object.

-   Billing Admin permission set
-   Billing Operations User permission set
-   Payments Admin permission set
-   Payments Operation User permission set
-   Credit Memo Operations User permission set

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilterDescriptionThe billing or shipping address of the debit memo. |
| DebitMemoAddressNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated reference number for the debit memo address. |
| DebitMemoId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the debit memo associated with the address.This field is a relationship field.Relationship NameDebitMemoRelationship TypeMaster-detailRefers ToDebitMemo (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a debit memo address record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a debit memo address record. If this value is null, it’s possible that the user only accessed the debit memo address record or a related list view (LastReferencedDate), but not viewed the debit memo address record itself. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DebitMemoAddressHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DebitMemoAddressHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
