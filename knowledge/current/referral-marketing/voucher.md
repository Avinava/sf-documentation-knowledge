---
title: "Voucher"
domain: referral-marketing
topic: voucher
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.329Z
estimatedTokens: 1547
keywords: [Voucher, that’s, issued, advocate, referred, friend, API, version, 59.0, later, Calls, Associated, Objects]
---

# Voucher

> Represents the details of a voucher that’s issued to an advocate or
         to a referred friend. This object is available in API version 59.0 and
      later.

# Voucher

Represents the details of a voucher that’s issued to an advocate or to a referred friend. This object is available in API version 59.0 and later.

Referral Marketing automatically issues vouchers to advocates when their referrals sign up and issues vouchers to referrals when they complete their first purchase.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the business account associated with the advocate or referred party who is issued the voucher for a B2B referral program.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the contact associated with the advocate or referred friend who is issued the voucher for a B2C referral program.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| DiscountPercent | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe percentage of the discount that the voucher offers to the referred party it is issued to. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date from which the referred party can redeem the voucher. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the voucher expires and is no longer available for redemption. |
| FaceValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount amount that the voucher offers to the referred party it is issued to. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the loyalty program member associated with the advocate who is issued the voucher.This field is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the issued voucher. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the referral promotion that issued to voucher.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| Reason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the voucher was issued. |
| RedeemedValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value that the advocate or referred party has already redeemed from the voucher. This field is only valid for vouchers that are issued using a FixedValue type voucher definition. |
| RemainingValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe value that the advocate or referred party is yet to redeem from the voucher. This field is only valid for vouchers that are issued using a FixedValue type voucher definition. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the voucher.Possible values are:CancelledExpiredIssuedRedeemedThe default value is Issued. |
| TransactionJournalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the transaction journal that represents the advocate or referred party event for which the voucher was issued.This field is a relationship field.Relationship NameTransactionJournalRelationship TypeLookupRefers ToTransactionJournal |
| UseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the advocate or the referred party used the voucher. |
| VoucherCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of the voucher. |
| VoucherDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the voucher definition that was used to issue the voucher.This field is a relationship field.Relationship NameVoucherDefinitionRelationship TypeLookupRefers ToVoucherDefinition |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VoucherHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[VoucherOwnerSharingRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[VoucherShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VoucherHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
- VoucherOwnerSharingRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm)
- VoucherShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
