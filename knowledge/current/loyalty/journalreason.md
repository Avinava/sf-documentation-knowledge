---
title: "JournalReason"
domain: loyalty
topic: journalreason
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:53.032Z
estimatedTokens: 499
keywords: [JournalReason, view, reason, action, created, transaction, journal, API, version, 51.0, later, Calls]
---

# JournalReason

> Represents a view that specifies the reason for the action that created a
      transaction journal. This object is available in API version 51.0 and later.

# JournalReason

Represents a view that specifies the reason for the action that created a transaction journal. This object is available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| IsActive | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies if the Journal Reason picklist values in the Transaction Journal entity are active.Possible values are:activedeleteInProgressinactive |
| JournalReasonType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionProvides the reason for the action that created a transaction journal.Possible values are:AccrualReversal—Accrual ReversalManualPointsAdjustment—Manual Points AdjustmentRedemptionReversal—Redemption Reversal |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the Journal Reason picklist. |

#### See Also

-   [*Salesforce Help*: Prerequisites for Managing Member Transactions](https://help.salesforce.com/s/articleView?id=xcloud.loyalty_journal_prerequisities.htm&language=en_US)
