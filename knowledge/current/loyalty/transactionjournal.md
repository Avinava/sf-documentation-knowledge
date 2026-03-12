---
title: "TransactionJournal"
domain: loyalty
topic: transactionjournal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.607Z
estimatedTokens: 3432
keywords: [TransactionJournal, loyalty, transactions, track, activities, member, behavior, adjustments, API, version, 51.0, later, Calls, Usage, Associated]
---

# TransactionJournal

> Represents information about loyalty transactions that track activities, member
      behavior, and adjustments. This object is available in API version 51.0 and later.

# TransactionJournal

Represents information about loyalty transactions that track activities, member behavior, and adjustments. This object is available in API version 51.0 and later.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=loyalty)

#### Warning

You can add up to 50 custom fields in the TransactionJournal object.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date of the transaction. |
| BookedFareClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class of ticket service that the member booked. |
| BookedRoomType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of room the member booked. |
| BookingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the member booked a reservation or purchased goods or services. |
| Brand | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe hotel chain where the member stayed or the brand of the purchased or rented goods or services. |
| Channel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel the member used for transactions. |
| CouponId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe coupon that's applied as a part of a promotion to provide discounts on the transaction. This field is available in API version 66.0 and later.This field is a relationship field.Relationship NameCouponRefers ToCoupon |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code of the monetary currency in which the transaction took place.Possible values are:USDThe default value is USD. |
| Destination | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ending location for a member's trip or the place where an order shipped to. |
| Distance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe miles or kilometers traveled by a member or an order's shipping distance. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date associated with the transaction. |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the engagement channel that the customer used for the purchase. This field is available in API version 61.0 and later.This field is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| ErrorDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the error. |
| EscrowPointsCreditDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the escrow points are credited to the associated loyalty program member's point balance. This field is available in API version 53.0 and later. |
| Establishment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the location where the member stayed or purchased goods or services. |
| ExternalTransactionNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe transaction number from the external systems. |
| FlightNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe airline flight number the member booked. |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the industry. |
| InvoiceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the invoice was generated. |
| IsParentTransaction | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the transaction journal represents the primary activity within a group of activities. This field is available in API version 60.0 and later.The default value is false. |
| JournalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date of the journal. |
| JournalReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason for the action that created a transaction journal. This field can store up to 999 values. After the field reaches 999 values, rename existing values that you no longer use instead of deleting values and adding new ones.Possible values are:Accrual Cancelation Requested by MemberOrder CanceledProduct ReturnedProduct or Service UnavailableRedemption Cancelation Requested by MemberResolve Disputed PointsService Recovery |
| JournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subtype of journal transaction.This is a relationship field.Relationship NameJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| JournalTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of journal transaction.This is a relationship field.Relationship NameJournalTypeRelationship TypeLookupRefers ToJournalType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe loyalty program associated with the transaction.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| MemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe member associated with the transaction.This field is a polymorphic relationship field.Relationship NameMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autogenerated number of the transaction journal. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the transaction.This is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order items associated with the transaction.This is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |
| Origin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe starting location for a member's trip or the place where an order shipped from. |
| PartnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionParticipating partners where members can add or redeem points.This is a relationship field.Relationship NamePartnerRelationship TypeLookupRefers ToLoyaltyProgramPartner |
| PaymentMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe member's payment method. |
| ProductCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of the product associated with the transaction.This is a relationship field.Relationship NameProductCategoryRelationship TypeLookupRefers ToProductCategory |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the transaction.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe promotion associated with the transaction journal. This field is available in API version 52.0 and later.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe length of the booked stay or the order quantity. |
| QuantityUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the booked stay or the order quantity.This is a relationship field.Relationship NameQuantityUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
| RedeemedPointsExpirationInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe details of the fixed type non-qualifying points that are redeemed in a transaction journal and their corresponding expiration dates. This field is available in API version 55.0 and later.RedeemedPointsExpirationInformation isn't able in the Object Manager and can't be customized. |
| ReferredMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person the member referred.This is a relationship field.Relationship NameReferredMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| ReferredPartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact or account associated with the transaction journal. The contact ID belongs to the person whose activity the transaction journal represents. This field is available in API version 60.0 and later.Relationship NameReferredPartyRelationship TypeLookupRefers ToAccount, Contact |
| RelatedCorporateMembershipId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe corporate membership associated with the transaction.This is a relationship field.Relationship NameRelatedCorporateMembershipRelationship TypeLookupRefers ToLoyaltyProgramMember |
| RelatedJournalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related journal entry associated with this transaction.This is a relationship field.Relationship NameRelatedJournalRelationship TypeLookupRefers ToTransactionJournal |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date associated with the transaction. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the transaction.Possible values are:CancelledErrorPendingProcessed |
| TotalPromotionDiscount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total discount provided by the associated promotion for the activity that the transaction journal represents. This field is available in API version 61.0 and later. |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFor reservations, the total fees or prepaid balance. For goods and services, the total purchase price. |
| TransactionLocation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the loyalty member purchased goods or services. |
| TransactionSourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the retail store where the activity that the transaction journal represents has taken place. This field is available in API version 60.0 and later.This field is a relationship field.Relationship NameTransactionSourceLocationRelationship TypeLookupRefers ToRetailStore |
| TraveledFareClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class of ticket service that the member traveled. |
| Unique Identifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the transaction journal. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of usage.Possible values are:LoyaltyRebatesUnifiedPromotions—This value is available in API version 60.0 and later. |
| VoucherCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe voucher code generated by an external system. |

## Usage

You can query Transaction Journal records in your org using a combination of these indexed fields:

-   ActivityDate
-   ExternalTransactionNumber
-   Id
-   JournalTypeId
-   LoyaltyProgramId
-   MemberId
-   OrderId
-   RelatedJournalId
-   UsageType

The TransactionJournal object in most orgs can store millions of records. A limited set of TransactionJournal fields are indexed to help optimize operations on the TransactionJournal object.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TransactionJournalChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

## Related Topics

- TransactionJournalChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
