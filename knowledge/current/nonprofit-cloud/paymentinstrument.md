---
title: "PaymentInstrument"
domain: nonprofit-cloud
topic: paymentinstrument
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:01.718Z
estimatedTokens: 1254
keywords: [PaymentInstrument, Payment, Instrument, transaction, API, version, 60.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PaymentInstrument

> Represents the details related to the Payment Instrument used to
         complete the transaction. This object is available in API version 60.0 and
      later.

# PaymentInstrument

Represents the details related to the Payment Instrument used to complete the transaction. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users

## Fields

| Field | Details |
| --- | --- |
| AccountHolderName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the Payment Instrument Holder. |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account or PersonAccount that is using the payment instrument.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BankAccountHolderType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines if the bank account holder is an individual or a company. |
| BankAccountNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe bank account number used for payment. |
| BankAccountType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the Bank Account. |
| BankCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode of bank associated with the bank account. |
| BankName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of bank associated with the bank account. |
| CardBrand | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe credit card brand, network, or issuer. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code. This field is hidden when multicurrency is off.Possible values are:AUD—Australian DollarGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| DigitalWalletProvider | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider of the digital wallet. |
| ExpiryMonth | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExpire month if payment method is credit card. |
| ExpiryYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExpire year if payment method is credit card. |
| GatewayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the payment gateway. |
| GatewayReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference number from the gateway for this payment instrument. |
| Last4 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast 4 digits of payment method. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, auto-numbered name of the payment instrument. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentProcessorName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the payment processor. |
| ProcessorReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference of the payment processor associated with the payment instrument. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the payment instrument.Possible values are:ACHBACS DebitBECS DebitBancontactCredit CardPayPalSEPA Direct DebitVenmoiDEAL |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentInstrumentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PaymentInstrumentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

History is available for tracked fields of the object.

[PaymentInstrumentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing is available for the object.
