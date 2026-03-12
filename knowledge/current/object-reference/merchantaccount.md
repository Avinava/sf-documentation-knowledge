---
title: "MerchantAccount"
domain: object-reference
topic: merchantaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.772Z
estimatedTokens: 1720
keywords: [MerchantAccount, bank, account, lets, merchant, accept, payments, variety, payment, including, credit, debit, cards, digital, wallets]
---

# MerchantAccount

> A type of bank  account that lets a merchant accept payments from a
         variety of payment methods, including credit or debit cards, or digital wallets. A
         Salesforce Payments merchant account is linked to an underlying payment gateway to process
         payments This object is available in API version 56.0 and later.

# MerchantAccount

A type of bank account that lets a merchant accept payments from a variety of payment methods, including credit or debit cards, or digital wallets. A Salesforce Payments merchant account is linked to an underlying payment gateway to process payments This object is available in API version 56.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license and Payments must be enabled for your org. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation about the merchant account. |
| CountryIsoCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionCountry where the legal entity representing the account is. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionContains the ISO code for any currency allowed by the organization. Available only for organizations with multi-currency enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user can have accessed this record or list view but not viewed it. |
| Mode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe operational mode of the merchant account. This field determines the account’s ability to accept payments. For production, the account must be in Live mode.Possible values are:Connected– Merchant account is active but it can’t accept payments. This option is only valid in production orgs.Live– Merchant account is active and can accept payments. This option is only valid in production orgs.Test –Merchant account is active but not able to accept payments. This option is only valid in sandbox orgs, and the account can accept only test transactions. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the merchant account. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionName of the individual or group assigned to the merchant account.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionMerchant account is active and can accept payments.Possible values are:DisabledEnabledThe default value is Disabled. |
| PayoutStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionMoney can be moved from the payment provider account to the designated merchant account.Possible values are:DisabledEnabledThe default value is Disabled. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the state of the merchant account.Possible values are:Active - The merchant account can accept payments.Complete - PaymentStatus and DepositStatus are enabled and all the required information is provided.Enabled - PaymentStatus and PayoutStatus are enabled, but the payment provider requires more information later. If the merchant doesn't provide the information, then the account becomes restricted. The time limit that the merchant has to provide the information is longer than the RestrictedSoon state.Pending - The merchant account exists but it can’t accept payments. This option maintains backward compatibility for accounts that were created with API version 55.0 and earlier.Rejected - The account is rejected and an explanation is provided.Restricted - PaymentStatus, PayoutStatus, or both are disabled, so the merchant account’s operation is limited.Restricted Soon - PaymentStatus and PayoutStatus are enabled, but the payment provider requires more information. If the merchant doesn't provide the information in a specific time period, then the account becomes restricted. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MerchantAccountChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[MerchantAccountFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MerchantAccountHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MerchantAccountOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[MerchantAccountShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MerchantAccountChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- MerchantAccountFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- MerchantAccountHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- MerchantAccountOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- MerchantAccountShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
