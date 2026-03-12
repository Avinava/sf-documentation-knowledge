---
title: "PaymentLink"
domain: object-reference
topic: paymentlink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.602Z
estimatedTokens: 1807
keywords: [PaymentLink, link, merchant, share, customers, collect, payments, products, services, payment, embed, Salesforce, app, send, directly]
---

# PaymentLink

> A link that a merchant can share with customers to collect payments for
         products and services. The payment link, which you can embed into a Salesforce app or send
         directly to a customer, directs the customer to a Pay Now payment page. The page can show a
         total amount owed or an itemized list or products, shipping and tax charges, and a total
         amount owed. The customer enters their contact and payment details, and submits their
         payment. The amounts are shown in the store's currency. This object is available in
      API version 58.0 and later.

# PaymentLink

A link that a merchant can share with customers to collect payments for products and services. The payment link, which you can embed into a Salesforce app or send directly to a customer, directs the customer to a Pay Now payment page. The page can show a total amount owed or an itemized list or products, shipping and tax charges, and a total amount owed. The customer enters their contact and payment details, and submits their payment. The amounts are shown in the store's currency. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license with the Payments permission enabled for your org. Salesforce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayer account.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionAmount the payer owes. |
| CartId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the cart record.Relationship NameCartRelationship TypeLookupRefers ToWebcart |
| CollectionPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe collection plan associated with the payment link.This field is a relationship field.Available in API version 63.0 and later with Financial Services and Automotive Cloud.Relationship NameCollectionPlanRefers ToCollectionPlan |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescription3-digit ISO code for the payment currency that is shown on the Pay Now page. Possible values are:EUR – EuroGBP – British PoundUSD – US DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText on the Pay Now payment page that’s visible to your customers. This text can communicate any information you want. |
| Expiry Time | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the payment link expires. The time is based on the user’s time zone, not the org’s time zone. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record can be referenced and not viewed directly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentInitiationSource | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe origin of the payment, based on the information in the Payment Link record. |
| PaymentLinkNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number that identifies the payment link. |
| PaymentMethodSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the PaymentMethodSet object, which determines what payment methods are shown to the payer.This field is a relationship field.Relationship NamePaymentMethodSetRelationship TypeLookupRefers ToMerchAccPaymentMethodSet |
| PaymentScheduleItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment schedule item associated with the payment link.This field is a relationship field.Available in API version 63.0 and later with Financial Services and Automotive Cloud.Relationship NamePaymentScheduleItemRefers ToPaymentScheduleItem |
| PaymentUrl | TypeurlPropertiesFilter, Group, SortDescriptionUnique URL of the Pay Now page. This URL IS auto-generated, and not editable. |
| QrCodeImageId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionReference to the QR code image included in the payment link record.This field is a relationship field.Relationship NameQrCodeImageRelationship TypeLookupRefers ToContentVersion |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the payment link is active and can be used.Possible values are:ActiveDisabledThe default value is Active. |
| TaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of the tax for the purchase. This amount is shown on the Pay Now page. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle of the Pay Now page, indicating what is being paid. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates the type of payment link created, which the merchant can share with the customer to receive payment. The payment link also determines which Pay Now page is generated and what’s included on that page.Possible values are:CheckoutWithOrder (only for orgs with Payments and Commerce)—includes the amount owed based on the products you select, lists the products purchased, and calculates tax using the billing address and selected shipping options. After a customer makes a payment, this link type creates an order record.PredefinedAmount—shows only an amount due for products purchased. The merchant enters the amount due when creating the payment link.WithProducts—Deprecated. New payment links can't be created with this link type.The default value is PredefinedAmount. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionDetermines whether the payment link is used one time or multiple times before the configured expiration date and time.Possible values are:MultiUseSingleUseThe default value is MultiUse. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentLinkOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PaymentLinkShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PaymentLinkOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PaymentLinkShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
