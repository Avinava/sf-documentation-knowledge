---
title: "Which Custom Lightning Component Attribute Types Are Supported in Flows?"
domain: lightning
topic: which-custom-lightning-component-attribute-types-are-supported-in-flows
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.235Z
estimatedTokens: 636
keywords: [Custom, Lightning, Component, Attribute, Flows, data, map, their, associated, collection, components]
---

# Which Custom Lightning Component Attribute Types Are Supported in Flows?

> Not all custom Lightning component data types are supported in flows. You can map only
  these types and their associated collection types between flows and custom Lightning
  components.

# Which Custom Lightning Component Attribute Types Are Supported in Flows?

Not all custom Lightning component data types are supported in flows. You can map only these types and their associated collection types between flows and custom Lightning components.

| Flow Data Type | Lightning Component Attribute Type | Valid Values |
| --- | --- | --- |
| Apex | Custom Apex Class | Apex classes that define @AuraEnabled fields. Supported data types in an Apex class are Boolean, Integer, Long, Decimal, Double, Date, DateTime, and String. Single values as well as Lists are supported for each data type. |
| Boolean | Boolean | True values: true, 1, or equivalent expressionFalse values: false, 0, or equivalent expression |
| Currency | Number | Numeric value or equivalent expression |
| Date | Date | "YYYY-MM-DD" or equivalent expression |
| Date/Time (API name is DateTime) | DateTime | "YYYY-MM-DDThh:mm:ssZ" or equivalent expression |
| Number | Number | Numeric value or equivalent expression |
| Multi-Select Picklist(API name is Multi-Select Picklist.) | String | String value or equivalent expression using this format:"Blue; Green; Yellow" |
| Picklist | String | String value or equivalent expression |
| Record, with a specified object(API name is SObject.) | The API name of the specified object, such as Account or Case | Map of key-value pairs or equivalent expression.Flow record values map only to attributes whose type is the specific object. For example, an account record variable can be mapped only to an attribute whose type is Account. Flow data types aren’t compatible with attributes whose type is Object. |
| Text(API name is Text.) | String | String value or equivalent expression |
| Time | Time | "hh:mm:ss.SSSZ" or equivalent expression |

#### See Also

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow Component - HTML (New Window)")

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")
