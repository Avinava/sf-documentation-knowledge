---
title: "TaxTreatment"
domain: object-reference
topic: taxtreatment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.803Z
estimatedTokens: 1188
keywords: [TaxTreatment, tax, treatment, how, Salesforce, external, engines, calculate, taxes, engine, calculation, IsTaxable, determines, whether, calculated]
---

# TaxTreatment

> A tax treatment contains details about how Salesforce and external engines
         calculate taxes, and the tax engine to use for tax calculation. The IsTaxable field
         determines whether tax is calculated for the product in the transaction. The tax code, tax
         engine, and product code are sent via API to the external tax calculation service. When you
         invoice an order item that has a tax treatment, the invoice line inherits the tax treatment
         from the order item’s related billing schedule. The invoice line’s TaxCode field is
         populated based on the code that the tax engine used for calculation. This object is
      available in API version 55.0 and later.

# TaxTreatment

A tax treatment contains details about how Salesforce and external engines calculate taxes, and the tax engine to use for tax calculation. The IsTaxable field determines whether tax is calculated for the product in the transaction. The tax code, tax engine, and product code are sent via API to the external tax calculation service. When you invoice an order item that has a tax treatment, the invoice line inherits the tax treatment from the order item’s related billing schedule. The invoice line’s TaxCode field is populated based on the code that the tax engine used for calculation. This object is available in API version 55.0 and later.

Each product requires a tax policy to determine whether to apply tax. The tax treatments determine how taxable products are taxed. Each tax policy requires at least one tax treatment. We recommend determining the taxation needs for each of your products and creating policies and treatments for each product accordingly. You can then assign your tax policies to the relevant products on your own or through automation.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_taxtreatment.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOptional user-defined description for providing more information about the tax treatment. |
| IsTaxable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether Subscription Management calculates tax for order items covered by the tax treatment. When this value is True, Subscription Management calls the CalculateTax API for the order item during order item creation.The default value is 'False'.This field is available when Subscription Management is enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionOptional user-defined name for the tax treatment. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionCode of the product that the tax treatment applies to. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the tax treatment.Possible values are:ActiveDraftInactive |
| TaxCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference code used when tax is calculated in an external tax engine. |
| TaxEngineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax engine for the tax treatment. A tax engine represents both an instance of a tax engine provider as well as the merchant credentials for that specific instance. When Subscription Management begins the tax calculation process for an order item, it uses the tax engine from the order item’s tax treatment.If the tax treatment’s IsTaxable value is True, the treatment requires a tax engine.This field is a relationship field.This field is available when Subscription Management is enabled.Relationship NameTaxEngineRelationship TypeLookupRefers ToTaxEngine |
| TaxPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment’s parent tax policy. A tax policy is a group of tax treatments, where each treatment represents a rule for how to invoice a customer for an order item. Tax policies are related to products, which pass the policy on to the resulting order items. When you activate an order, Subscription Management assigns a tax treatment to each order item based on the tax policy's DefaultTaxTreatmentId, then uses the tax treatment to calculate tax.This field is a relationship field.Relationship NameTaxPolicyRelationship TypeLookupRefers ToTaxPolicy |
