---
title: "ProductConfigurationRule"
domain: revenue-cloud
topic: productconfigurationrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.112Z
estimatedTokens: 789
keywords: [ProductConfigurationRule, validation, inclusion, exclusion, rules, products, context, selling, process, quoting, configuration, ordering, API, version, 61.0]
---

# ProductConfigurationRule

> Represents the validation, inclusion, and exclusion rules for products in the
         context of the selling process. The selling process can be quoting, configuration, or
         ordering. This object is available in API version 61.0 and later.

# ProductConfigurationRule

Represents the validation, inclusion, and exclusion rules for products in the context of the selling process. The selling process can be quoting, configuration, or ordering. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, Nillable, SortDescription |
| ConfigurationRuleDefinition | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe configuration rule criteria and actions. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the configuration rule. |
| EffectiveFromDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time from which the configuration rules comes into effect. |
| EffectiveToDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time to which the configuration rules ceases to be in effect. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the configuration rule record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the configuration rule record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the configuration rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the configuraion rule owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessScope | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe scope of the configuration rule.Possible values are:BundleProductThe default value is Product. |
| RuleSubType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe segregation of products into subsets such that the configuration rules only apply to the products that fall under the ambit of the selected rule subtype.Possible values are:BundleProductBundleProductClassificationProductProductClassificationThe default value is Product. |
| RuleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the industry vertical or the feature of the industry vertical that’s using the configuration rule.Possible values are:ConfiguratorPromotionsThe default value is Configurator. |
| Sequence | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the order for executing the configuration rule. Rules with lower numbers run first when multiple rules are triggered at once. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe lifecycle status of the configuration rule.Possible values are:ActiveDraftInactiveThe default value is Draft. |
