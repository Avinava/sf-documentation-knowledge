---
title: "ConnectApi.ActivationAdditionalAttributesConfigInput"
domain: apex-reference
topic: connectapiactivationadditionalattributesconfiginput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.236Z
estimatedTokens: 338
keywords: [ConnectApi.ActivationAdditionalAttributesConfigInput, Represents, additional, attributes, configuration, market, segment, activation, input.]
---

# ConnectApi.ActivationAdditionalAttributesConfigInput

> Represents the additional attributes configuration for the market segment activation
  input.

# ConnectApi.ActivationAdditionalAttributesConfigInput

Represents the additional attributes configuration for the market segment activation input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| activationPlatformAttrId | String | Activation platform attribute ID. |  | 60.0 |
| dataSourceType | String | Type of data source. |  | 60.0 |
| entityName | String | Name of the entity. |  | 60.0 |
| filterExpression | List< ConnectApi.AttributeFilterInput> | Attribute filter expression. |  | 60.0 |
| isRolluppable | Boolean | Indicates whether the attribute can roll up (true) or not (false). |  | 60.0 |
| label | String | Label of the attribute. |  | 60.0 |
| name | String | Name of the attribute. |  | 60.0 |
| preferredName | String | Preferred name of the attribute. |  | 60.0 |
| queryPathConfig | List< ConnectApi.QueryPathInputConfig> | Query path from the activateOn entity to the additional attribute entity. |  | 60.0 |
| referenceAttributeName | String | Developer name of the reference attribute. |  | 60.0 |
| source | DataExportAttributeSourceEnum | Activation attribute source.DirectRelated |  | 60.0 |
| type | DataExportAttributeTypeEnum | Type of activation attribute.Computed_DimensionComputed_MeasureModelModel_RelatedNon_Aggregatable_Computed_Measure |  | 60.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.AttributeFilterInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_attribute_filter.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.QueryPathInputConfig> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm)
- DataExportAttributeSourceEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- DataExportAttributeTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
