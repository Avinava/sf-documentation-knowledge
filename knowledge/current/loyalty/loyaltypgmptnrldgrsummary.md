---
title: "LoyaltyPgmPtnrLdgrSummary"
domain: loyalty
topic: loyaltypgmptnrldgrsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.189Z
estimatedTokens: 708
keywords: [LoyaltyPgmPtnrLdgrSummary, aggregated, ledger, loyalty, program, credit, points, debit, prepaid, partner's, pack, add, deduct, monetary, postpaid]
---

# LoyaltyPgmPtnrLdgrSummary

> Represents the aggregated ledger used by a loyalty program to credit points
         to or debit points from a prepaid partner's points pack. This ledger can also be used to
         add or deduct the monetary value of points from the postpaid partner's bill. This
      object is available in API version 55.0 and later.

# LoyaltyPgmPtnrLdgrSummary

Represents the aggregated ledger used by a loyalty program to credit points to or debit points from a prepaid partner's points pack. This ledger can also be used to add or deduct the monetary value of points from the postpaid partner's bill. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date on which points that are part of the associated loyalty program partner prepaid pack are debited or credited. For postpaid billing, it is the date when the postpaid amount of the loyalty program partner is debited or credited. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyPgmPtnrPrepaidPackId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe loyalty program partner prepaid pack associated with the loyalty program partner ledger.This is a relationship field.Relationship NameLoyaltyPgmPtnrPrepaidPackRelationship TypeLookupRefers ToLoyaltyPgmPtnrPrepaidPack |
| LoyaltyProgramPartnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program partner associated with the loyalty program.This is a relationship field.Relationship NameLoyaltyProgramPartnerRelationship TypeMaster-detailRefers ToLoyaltyProgramPartner |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the loyalty program partner ledger summary. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the loyalty program partner ledger.Possible values are:PendingPartner doesn't have the adequate balance and hence the ledger is pending to be processed.ProcessedPartner's ledger is processed.The default value is Pending. |
| TotalPoints | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The number of points debited from or credited to the associated loyalty program partner's prepaid pack or postpaid bill amount. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type of the loyalty program partner ledger.Possible values are:CreditCreditCancellation—Credit CancellationDebitDebitCancellation—Debit CancellationThe default value is Credit. |
