---
title: "blng__PaymentAuthorization__c"
domain: blng-dev
topic: blngpaymentauthorizationc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.478Z
estimatedTokens: 1228
keywords: [blng__PaymentAuthorization__c, process, securing, authorization, customer's, bank, credit, card, issuer, charge, specific, amount, their, account, verifying]
---

# blng__PaymentAuthorization__c

> Represents the process of securing authorization from a customer's bank or
         credit card issuer to charge a specific amount to their account, verifying the availability
         of sufficient funds or credit.

# blng\_\_PaymentAuthorization\_\_c

Represents the process of securing authorization from a customer's bank or credit card issuer to charge a specific amount to their account, verifying the availability of sufficient funds or credit.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment authorization when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the payment authorization. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a payment authorization record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a payment authorization record. If this value is null, it’s possible that the user only accessed the payment authorization record or a related list view (LastReferencedDate), but not viewed the payment authorization record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the payment authorization. A name is a unique value that helps in identifying the specific allocation record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The unique identifier indicates the user or system responsible for managing or overseeing a specific payment authorization record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the customer who made the payment.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__Balance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the payment authorization. |
| blng__CurrentAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount authorized to be debited or captured. |
| blng__EffectiveEndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the payment authorization expires. |
| blng__EffectiveStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the payment authorization takes effect. |
| blng__GatewayReferenceDetails__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the payment authorization that can’t be stored in other fields on the payment record. |
| blng__GatewayReferenceNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment authorization transaction ID created by the payment gateway. |
| blng__NetPayments__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net amount of payments processed, excluding any fees or adjustments. This field is used to track the actual amount received from a transaction after all deductions. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the payment allocation invoice. |
| blng__OriginalAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount authorized for the transaction. |
| blng__PaymentGateway__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment gateway that processed the payment authorization.This field is a relationship field.Relationship Nameblng__PaymentGateway__rRefers Toblng__PaymentGateway__c |
| blng__PaymentMethod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method used by the customer to make the payment.This field is a relationship field.Relationship Nameblng__PaymentMethod__rRefers Toblng__PaymentMethod__c |
| blng__Source__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe origin or source of the payment authorization. Valid values are:GatewayManualThe default value is Manual. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the payment transaction. Valid values are:ActiveCanceledProcessedThe default value is Active. |
