---
title: "blng__TaxIntegration__c"
domain: blng-dev
topic: blngtaxintegrationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.777Z
estimatedTokens: 1049
keywords: [blng__TaxIntegration__c, interaction, Salesforce, external, tax, calculation, services, systems, blng, _TaxIntegration, Calls]
---

# blng__TaxIntegration__c

> Represents the interaction between Salesforce and external tax
         calculation services or systems.

# blng\_\_TaxIntegration\_\_c

Represents the interaction between Salesforce and external tax calculation services or systems.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AVA_BLNG__AvaTaxAccountNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account number required to connect to AvaTax, a tax compliance software service for tax calculations. |
| AVA_BLNG__AvaTaxLicenseKey__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe license key for AvaTax. |
| AVA_BLNG__CustomerCode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe customer code that’s important for tax calculations or integrations with tax services.Valid values are:IdNameThe default value is Id. |
| AVA_BLNG__DocCode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe document code relevant to tax calculations or reporting.Valid values are:IdNameThe default value is Id. |
| AVA_BLNG__Save_transactions_to_AvaTax__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether transactions are saved to AvaTax for tax calculation purposes (true) or not (false).The default value is true. |
| AVA_BLNG__TestMode__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the tax integration is operating in test mode (true) or not (false).The default value is true. |
| AVA_BLNG__Validate_Address__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether to validate the addresses for tax purposes, in conjunction with a third-party tax service Avalara (true) or not (false).The default value is true. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the tax integration record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax integration record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax integration record. If this value is null, it’s possible that the user only accessed the tax integration record or a related list view (LastReferencedDate), but not viewed the billing rule record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the tax integration. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the tax integration is active (true) or not (false). To deactivate the tax integration, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__Default__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe default value is false. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the tax integration. |
| blng__TaxEngine__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. An instance of a tax engine provider and the merchant credentials for a specific instance.Valid values are:Avalara AvaTaxStandardThe default value is Standard. |
