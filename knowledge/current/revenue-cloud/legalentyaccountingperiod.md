---
title: "LegalEntyAccountingPeriod"
domain: revenue-cloud
topic: legalentyaccountingperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.722Z
estimatedTokens: 1283
keywords: [LegalEntyAccountingPeriod, junction, legal, entity, accounting, period, API, version, 62.0, later, Calls, Special, Access, Rules, Associated]
---

# LegalEntyAccountingPeriod

> Represents a junction between a legal entity and an accounting
         period. This object is available in API version 62.0 and later.

# LegalEntyAccountingPeriod

Represents a junction between a legal entity and an accounting period. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Accounts Receivables Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the accounting period record that's related to a legal entity accounting period.This field is a relationship field.Relationship NameAccountingPeriodRefers ToAccountingPeriod |
| ClosureStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the closure stage of the legal entity accounting period. This field is available in API version 65.0 and later.Valid values are:CloseLegalEntityAccountingPeriodCompletedOpenCreateGeneralLedgerAccountingPeriodSummariesCreateUnrealizedGainOrLossTransactionJournals |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a legal entity accounting period record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a legal entity accounting period record. If this value is null, it’s possible that the user only accessed the legal entity accounting period record or a related list view (LastReferencedDate), but not viewed the legal entity accounting period record itself. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the legal entity record that's related to a legal entity accounting period.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. The auto-generated name of a legal entity accounting period. The name is a combination of the names of the legal entity and the accounting period. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the user who owns a legal entity accounting period record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. The status of a legal entity accounting period record.Valid values are:ClosedErrorOpenPendingClosurePendingReopenReopened |
| TotalAssetsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total assets for a legal entity accounting period is a roll up summary of the closing balances of the general ledger accounting period summary records that are related to an asset type general ledger account. This field is available in API version 65.0 and later. |
| TotalEquitiesAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total equities for a legal entity accounting period is a roll up summary of the closing balances of the general ledger accounting period summary records that are related to an equity type general ledger account. This field is available in API version 65.0 and later. |
| TotalExpensesAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total expenses for a legal entity accounting period is a roll up summary of the closing balances of the general ledger accounting period summary records that are related to an expense type general ledger account. This field is available in API version 65.0 and later. |
| TotalLiabilitiesAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total liabilities for a legal entity accounting period is a roll up summary of the closing balances of the general ledger accounting period summary records that are related to a liability type general ledger account. This field is available in API version 65.0 and later. |
| TotalRevenueAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total revenue for a legal entity accounting period is a roll up summary of the closing balances of the general ledger accounting period summary records that are related to a revenue type general ledger account. This field is available in API version 65.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LegalEntyAccountingPeriodShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LegalEntyAccountingPeriodShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
