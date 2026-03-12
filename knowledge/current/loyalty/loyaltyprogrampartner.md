---
title: "LoyaltyProgramPartner"
domain: loyalty
topic: loyaltyprogrampartner
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.290Z
estimatedTokens: 1987
keywords: [LoyaltyProgramPartner, partners, associated, loyalty, program, accrual, partner, redemption, API, version, 51.0, later, Calls, Objects]
---

# LoyaltyProgramPartner

> Represents partners that are associated with a given loyalty program. Partners
      can be an accrual partner, a redemption partner, or both. This object is available in API
    version 51.0 and later.

# LoyaltyProgramPartner

Represents partners that are associated with a given loyalty program. Partners can be an accrual partner, a redemption partner, or both. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccrualCostperUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost per point associated with the transactions of accrual partner. This field is available in API version 52.0 and later. |
| AlertValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value that’s used to send an alert to a partner to indicate the minimum points required when the billing type is prepaid or the maximum outstanding amount when the billing type is postpaid. This field is available in API version 55.0 and later. |
| BillingType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the method in which the loyalty program partner is billed.Possible values are:PrepaidPostpaidThis field is available in API version 55.0 and later. |
| CreditedPoints | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of points credited to partners (using prepaid billing) for member redemptions, accrual cancellations, or any custom processes. This field is available in API version 55.0 and later. |
| DebitedPoints | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of points debited from the partner (using prepaid billing) for member accruals, redemption cancellations, or any custom processes. This field is available in API version 55.0 and later. |
| IsMemberLinkingAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a member is allowed to link with a partner (true) or not (false). When you allow linking, you must enter an effective start date.  The default value is false. |
| LastProcessedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date and time when the prepaid points balance or the outstanding postpaid bill amount for a partner was calculated. This field is available in API version 55.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyPartnerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Account ID of the loyalty program partner.This is a relationship field.Relationship NameLoyaltyPartnerRelationship TypeLookupRefers ToAccount |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the loyalty program.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| MemberLinkingEffEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date after which members can't be linked to a partner. |
| MemberLinkingEffStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which members can be linked to a partner. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty program partner. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartnerCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of the program partnership.Possible values are:AllianceBilateral |
| PartnerIndustry | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The industry type of the program partner. Picklist values aren't provided for this field and must be added based on the requirements of the organization. |
| PartnerStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the partner in the loyalty program. The default value is Active.Possible values are:ActiveInactivePending |
| PartnerType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of the program partnership.Possible values are:AccrualBothRedemption |
| PartnershipEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the partnership with the program ends. |
| PartnershipStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date on which the partnership with the program starts. |
| PointsBalance | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of points available with the loyalty program partner using prepaid billing. This field is available in API version 55.0 and later.This is a calculated field. |
| PostpaidBillAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of all credits minus debits for partner transactions from the partnership start date. A positive value indicates that the partner is liable to the program. A negative value indicates the program is liable to the partner. The total amount that either the partner is liable to pay to the program or the program is liable to pay to the partner. This field is available in API version 55.0 and later. |
| PurchasedPoints | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of points that the partner (using prepaid billing) has purchased across all their packs. This field is available in API version 55.0 and later. |
| RedemptionCostperUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost per point associated with the transactions of redemption partner. This field is available in API version 52.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramPartnerChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyProgramPartnerHistory (API version 52.0)](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[LoyaltyProgramPartnerOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

Sharing rules are available for the object.

[LoyaltyProgramPartnerShare (API version 52.0)](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- LoyaltyProgramPartnerChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
