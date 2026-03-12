---
title: "LoyaltyProgramPartnerLedger"
domain: loyalty
topic: loyaltyprogrampartnerledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.297Z
estimatedTokens: 791
keywords: [LoyaltyProgramPartnerLedger, ledger, loyalty, program, credit, points, debit, prepaid, partner's, pack, postpaid, partner’s, point, balance, add]
---

# LoyaltyProgramPartnerLedger

> Represents the ledger used by a loyalty program to credit points to or debit
         points from a prepaid partner's points pack or from a postpaid partner’s point balance.
         This ledger can also be used to add or deduct the monetary value of points from the
         partner's postpaid bill. This object is available in API version 55.0 and later.

# LoyaltyProgramPartnerLedger

Represents the ledger used by a loyalty program to credit points to or debit points from a prepaid partner's points pack or from a postpaid partner’s point balance. This ledger can also be used to add or deduct the monetary value of points from the partner's postpaid bill. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date on which the loyalty program member transacts with the loyalty program partner. |
| LoyaltyLedgerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Specifies the type of the loyalty program partner ledger.This is a relationship field.Relationship NameLoyaltyLedgerRelationship TypeLookupRefers ToLoyaltyLedger |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The loyalty program member that’s related to the loyalty program partner ledger.This is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| LoyaltyProgramPartnerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The loyalty program partner that’s related to the loyalty program partner ledger.This is a relationship field.Relationship NameLoyaltyProgramPartnerRelationship TypeLookupRefers ToLoyaltyProgramPartner |
| Points | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The number of points credited to or debited from the loyalty program partner's points balance or postpaid account balance. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe promotion that’s related to the loyalty program partner ledger.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| TransactionJournalId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The transaction journal that’s related to the loyalty program partner ledger.This is a relationship field.Relationship NameTransactionJournalRelationship TypeLookupRefers ToTransactionJournal |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type of the loyalty program partner ledger.Possible values are:CreditCreditCancellation—Credit CancellationDebitDebitCancellation—Debit CancellationThe default value is Credit. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramPartnerLedgerChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
