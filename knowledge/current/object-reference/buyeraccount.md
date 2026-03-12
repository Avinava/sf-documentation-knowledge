---
title: "BuyerAccount"
domain: object-reference
topic: buyeraccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.793Z
estimatedTokens: 1186
keywords: [BuyerAccount, account, enabled, buyer, Lightning, B2B, Commerce, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# BuyerAccount

> Represents an account that is enabled as a buyer for Lightning B2B
         Commerce. This object is available in API version 48.0 and later.

# BuyerAccount

Represents an account that is enabled as a buyer for Lightning B2B Commerce. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The BuyerAccount object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AvailableCredit | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of credit available to a buyer account.This is a calculated field. |
| BuyerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the buyer account.This is a relationship field.Relationship NameBuyerRelationship TypeLookupRefers ToAccountNoteThis field is unique within your organization. |
| BuyerStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the buyer account.Possible values are:ActiveInactiveOn HoldPendingThe default value is 'Pending'. |
| CommerceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of commerce that the buyer account is conducting, using the Commerce app.Possible values are:BuyerResellerSellerThe default value is 'Buyer'. |
| CreditLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe limit of credit available to the buyer account. |
| CreditStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type or status of the buyer account's credit ranking.Possible values are:Bad CreditDelinquentGood CreditOn HoldThe default value is 'Good Credit'. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO currency code associated with the buyer account record.Possible values are:USD—U.S. DollarThe default value is 'USD'. |
| CurrentBalance | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe balance carried by the buyer account. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the buyer account is active (true) or not (false).The default value is 'false'. |
| MaximumOrderLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum number of orders that can be placed by the buyer account. |
| MinimumOrderLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum number of orders that can be placed by the buyer account. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the buyer account. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the buyer account owner.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| PayerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the buyer account payer.This is a relationship field.Relationship NamePayerRelationship TypeLookupRefers ToAccount |
| SendToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of account that an order is sent to.This is a relationship field.Relationship NameSendToRelationship TypeLookupRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BuyerAccountFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BuyerAccountHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BuyerAccountShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BuyerAccountFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- BuyerAccountHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- BuyerAccountShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
