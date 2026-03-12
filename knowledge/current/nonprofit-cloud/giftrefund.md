---
title: "GiftRefund"
domain: nonprofit-cloud
topic: giftrefund
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.614Z
estimatedTokens: 1148
keywords: [GiftRefund, refund, gift, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftRefund

> Represents a refund of a gift. This object is available in API
      version 59.0 and later.

# GiftRefund

Represents a refund of a gift. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount of the refund. |
| Date | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date the transaction was refunded. |
| GatewayTransactionFee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction fee charged by the payment gateway. This field is available from API version 60.0 and later. |
| GiftTransactionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe gift transaction associated with this refund.This field is a relationship field.Relationship NameGiftTransactionRelationship TypeMaster-DetailRefers ToGiftTransaction |
| LastGatewayErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent error message that's received by the gateway. This field is available from API version 60.0 and later. |
| LastGatewayProcessedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the last processing attempt by the gateway. This field is available from API version 60.0 and later. |
| LastGatewayResponseCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent response code that's received by the gateway. This field is available from API version 60.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, auto-numbered name of the gift refund. |
| ProcessorTransactionFee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction fee charged by the payment processor. This field is available from API version 60.0 and later. |
| Reason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the refund.Possible values are:Donor RequestIncorrect Amount |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the refund.Possible values are:CompletedFailedInitiated |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftRefundChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[GiftRefundFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftRefundHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftRefundOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm) (API Version 64.0)

Sharing rules are available for the object.

[GiftRefundShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)(API Version 64.0)

Sharing is available for the object.
