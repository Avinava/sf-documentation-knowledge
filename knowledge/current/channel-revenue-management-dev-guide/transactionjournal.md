---
title: "TransactionJournal"
domain: channel-revenue-management-dev-guide
topic: transactionjournal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.742Z
estimatedTokens: 637
keywords: [TransactionJournal, transactions, processed, rebate, program, order, line, units, $1200, member, ABC, enterprises, API, version, 51.0]
---

# TransactionJournal

> The transactions that need to be processed for a rebate program. For example,
      order line for 1000 units of $1200 for member ABC enterprises. This object is available
    in API version 51.0 and later.

# TransactionJournal

The transactions that need to be processed for a rebate program. For example, order line for 1000 units of $1200 for member ABC enterprises. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account for which the transaction is made.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActivityDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate the transaction happened. |
| ErrorDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the error in the journal record. |
| JournalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the transaction was received. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionPolymorphic key to RebateProgramMember or LoyaltyMember. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the transaction. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe order quantity. |
|  |  |
| QuantityUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure associated with the record.This is a relationship field.Relationship NameQuantityUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
| RebatePgmReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference number of the rebate program. This field is available in API version 52.0 and later. |
| ShipToAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account for which the additional benefit is being offered for ship and debit program. This field is available in API version 52.0 and later.This is a relationship field.Relationship NameShipToAccountRelationship TypeLookupRefers ToAccount |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the transaction. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionType of journal record.Possible values are:LoyaltyRebates |
