---
title: "InvoiceAddressGroup"
domain: revenue-cloud
topic: invoiceaddressgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.474Z
estimatedTokens: 344
keywords: [InvoiceAddressGroup, Represents, storage, buyer's, address, information., API, version, 62.0, later., Important, Supported, Calls, Special, Access, Rules, Fields]
---

# InvoiceAddressGroup

> Represents the storage of the buyer's address information. This
      object is available in API version 62.0 and later.

# InvoiceAddressGroup

Represents the storage of the buyer's address information. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Special Access Rules

You need the Billing Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe buyer's address. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| InvoiceAddressGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the invoice address group. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the invoice associated with the address group.This field is a relationship field.Relationship NameInvoiceRelationship TypeMaster-detailRefers ToInvoice (the master object) |
