---
title: "blng__RevenueAgreement__c"
domain: blng-dev
topic: blngrevenueagreementc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.647Z
estimatedTokens: 1418
keywords: [blng__RevenueAgreement__c, objects, revenue, schedule, agreement, useful, grouping, schedules, transaction, quickly, evaluate, amounts, blng, _RevenueAgreement, Calls]
---

# blng__RevenueAgreement__c

> Represents the objects with a revenue schedule related list. The revenue
         agreement is useful for grouping revenue schedules related to the same transaction, so that
         you can quickly evaluate revenue amounts for that transaction.

# blng\_\_RevenueAgreement\_\_c

Represents the objects with a revenue schedule related list. The revenue agreement is useful for grouping revenue schedules related to the same transaction, so that you can quickly evaluate revenue amounts for that transaction.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue agreement when multiple currencies are enabled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the revenue agreement. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The parent account that’s inherited from the order product.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__Contract__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fields that help customize your renewals and amendments.This field is a relationship field.Relationship Nameblng__Contract__rRefers ToContract |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue agreement. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA single revenue agreement is generated for an order product when the revenue schedule for that order product is created. Any amendment orders related to the original order product are also associated with the same revenue agreement.This field is a relationship field.Relationship Nameblng__OrderProduct__rRefers ToOrderItem |
| blng__Order__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order that a sales rep contracted to create or amend this contract record. The order is populated when it’s created and is updated only when a contract is amended.This field is a relationship field.Relationship Nameblng__Order__rRefers ToOrder |
| blng__TotalAllocatedRevenueAmtBillings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe total revenue impact from billing can vary from the subtotal and total amount (including tax) and is used when reallocating revenue across multiple transactions. Additionally, it can be configured to create revenue schedules based on this amount. |
| blng__TotalAllocatedRevenueAmtBookings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe total revenue impact from bookings can vary from the subtotal and total amount (including tax) and is used when reallocating revenue across multiple transactions. Additionally, it can be configured to create revenue schedules based on this amount. |
| blng__TotalRevenueBillings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe total revenue billing amount during a specific period. |
| blng__TotalRevenueBookings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe total revenue booking amount during a specific period. |
| blng__TotalRevenueExpectedAmtBillings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe revenue that finance operations users expect to come from billing. |
| blng__TotalRevenueExpectedAmtBookings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe revenue that finance operations users expect to come from bookings. |
| blng__TotalRevenueLiabilityAmtBillings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis user-defined field represents the revenue liability linked to the billing. The revenue liability amount may vary from the subtotal and total amount (including tax). Additionally, it can be set up to generate revenue schedules, using this field as the specified amount on the revenue schedule. |
| blng__TotalRevenueLiabilityAmtBookings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis user-defined field represents the revenue liability linked to the bookings. The revenue liability amount may vary from the subtotal and total amount (including tax). Additionally, it can be set up to generate revenue schedules, using this field as the specified amount on the revenue schedule. |
| blng__TotalRevenueMostLikelyAmtBillings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis user-defined field is the most likely revenue impact from billing for revenue calculations when the revenue amount is uncertain. This field can differ from the subtotal and total amount (with tax). |
| blng__TotalRevenueMostLikelyAmtBookings__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis user-defined field is the most likely revenue impact from bookings for revenue calculations when the revenue amount is uncertain. This field can differ from the subtotal and total amount (with tax). |
