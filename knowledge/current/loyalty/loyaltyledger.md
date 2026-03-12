---
title: "LoyaltyLedger"
domain: loyalty
topic: loyaltyledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.060Z
estimatedTokens: 926
keywords: [LoyaltyLedger, Records, points, credited, debited, member, across, transactions, API, version, 51.0, later, Calls]
---

# LoyaltyLedger

> Records the points that have been credited or debited for a member across the
      transactions. This object is available in API version 51.0 and later.

# LoyaltyLedger

Records the points that have been credited or debited for a member across the transactions. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the transaction was performed by the loyalty program member. |
| AdditionalNotes | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe notes about the transactions performed by the loyalty program members. |
| Correlation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of any Salesforce or external record.The field lets you store IDs that are up to 15 characters. If you store IDs that are fewer than 15 characters and use the field to query the object, add spaces after your query term to ensure that the query term is 15 characters. |
| EscrowPointsCreditDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the escrow points are credited to the points balance for the loyalty ledger. This field is available in API version 53.0 and later. |
| EventType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the loyalty transaction.Possible values are:CreditDebitExpiryTransferThe default value is 'Credit'. |
| ExpiryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the transaction expires. |
| Flow | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the flow. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyPgmCrcySubtypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLoyalty program currency subtype associated with the loyalty ledger. This field is available in API version 61.0 and later.This field is a relationship field.Relationship NameLoyaltyPgmCrcySubtypeRelationship TypeLookupRefers ToLoyaltyPgmCurrencySubtype |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loyalty program currency.This is a relationship field.Relationship NameLoyaltyProgramCurrencyRelationship TypeLookupRefers ToLoyaltyProgramCurrency |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loyalty program member.This is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| Points | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe points available for the loyalty program member. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe promotion that's applied to the associated transaction resulting in the credit or debit of points. This field is available in API version 52.0 and laterThis is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| TransactionJournalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the transaction journal.This is a relationship field.Relationship NameTransactionJournalRelationship TypeLookupRefers ToTransactionJournal |
