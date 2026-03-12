---
title: "BillingArrangementLine"
domain: revenue-cloud
topic: billingarrangementline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.667Z
estimatedTokens: 645
keywords: [BillingArrangementLine, Represents, billing, account, profile, percentage, amount, invoiced., arrangement, line, results, separate, invoice, addressed, selected, account., API, version, 66.0, later.]
---

# BillingArrangementLine

> Represents the billing account, billing profile, and the percentage of
         billing amount to be invoiced. Each billing arrangement line results in a separate invoice
         addressed to the selected billing account. This object is available in API version
      66.0 and later.

# BillingArrangementLine

Represents the billing account, billing profile, and the percentage of billing amount to be invoiced. Each billing arrangement line results in a separate invoice addressed to the selected billing account. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the account that's related to the billing arrangement line.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| BillingAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the billing account record that's related to the billing arrangement line.This field is a relationship field.Relationship NameBillingAccountRefers ToBillingAccount |
| BillingArrangementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the billing arrangement record that's related to the billing arrangement line.This field is a relationship field.Relationship NameBillingArrangementRelationship TypeMaster-detailRefers ToBillingArrangement (the master object) |
| BillingArrangementLineName | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, Sort |
| BillingPercentage | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionRequired. The percentage of the billing amount to be assigned to the billing account of the billing arrangement line. |
| ShouldBillRemainder | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the remainder percentage must be billed to the billing account of the billing arrangement line (true) or not (false).The default value is false. |
| VersionNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA numerical value indicating the current version of the billing arrangement record. The version number increases when new billing arrangement line records are added or existing billing arrangement line records are updated. |
