---
title: "blng__PaymentMapping__c"
domain: blng-dev
topic: blngpaymentmappingc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.506Z
estimatedTokens: 1054
keywords: [blng__PaymentMapping__c, process, associating, payment, purposes, blng, _PaymentMapping, Calls]
---

# blng__PaymentMapping__c

> Represents the process of associating payment types, methods, or purposes
         with other information.

# blng\_\_PaymentMapping\_\_c

Represents the process of associating payment types, methods, or purposes with other information.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment mapping record when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the payment mapping record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a payment mapping record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a payment mapping record. If this value is null, it’s possible that the user only accessed the payment mapping record or a related list view (LastReferencedDate), but not viewed the payment mapping itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the payment mapping record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount to be debited or captured. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice line associated with the payment mapping record.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRefers Toblng__InvoiceLine__c |
| blng__Invoice__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice associated with the payment mapping record.This field is a relationship field.Relationship Nameblng__Invoice__rRefers Toblng__Invoice__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the payment mapping record. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the payment mapping record.This field is a relationship field.Relationship Nameblng__OrderProduct__rRefers ToOrderItem |
| blng__Order__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the payment mapping record.This field is a relationship field.Relationship Nameblng__Order__rRefers ToOrder |
| blng__PaymentAuthorization__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorization record for this payment mapping. If there's a delayed capture (when the capture occurs after the authorization), all captures must be made against a previously successful authorization transaction.This field is a relationship field.Relationship Nameblng__PaymentAuthorization__rRefers Toblng__PaymentAuthorization__c |
| blng__QuoteLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote line associated with the payment mapping record.This field is a relationship field.Relationship Nameblng__QuoteLine__rRefers ToSBQQ__QuoteLine__c |
| blng__Quote__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote associated with the payment mapping record.This field is a relationship field.Relationship Nameblng__Quote__rRefers ToSBQQ__Quote__c |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the payment mapping.Valid values are:ActiveCanceledThe default value is Active. |
