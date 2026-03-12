---
title: "ConnectApi.ActivationAttribute"
domain: apex-reference
topic: connectapiactivationattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.156Z
estimatedTokens: 319
keywords: [ConnectApi.ActivationAttribute, activation, attribute, output]
---

# ConnectApi.ActivationAttribute

> Represents the activation attribute output.

# ConnectApi.ActivationAttribute

Represents the activation attribute output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activationPlatformAttrId | String | ID of the activation platform attribute. | 60.0 |
| attributeLabel | String | Label of the activation attribute. | 60.0 |
| attributeName | String | Name of the activation attribute. | 60.0 |
| curatedFieldId | String | Curated ID field for the activation attribute. | 60.0 |
| dataSourceType | String | Data source type for the activation attribute. | 60.0 |
| entityName | String | Entity name of the activation attribute. | 60.0 |
| filterExpression | ConnectApi.AttributeFilterExpression | Filter expression for the activation attribute. | 60.0 |
| path | List<ConnectApi.​QueryPathConfigList> | Query path for the activation attributes. | 60.0 |
| preferredName | String | Preferred name of the activation attribute. | 60.0 |
| refAttrDeveloperName | String | Developer name of the referrence attribute. | 60.0 |
| source | DataExportAttributeSourceEnum | Activation attribute source.DirectRelated | 60.0 |
| type | DataExportAttributeTypeEnum | Type of activation attribute.Computed_DimensionComputed_MeasureModelModel_RelatedNon_Aggregatable_Computed_Measure | 60.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.AttributeFilterExpression (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_attribute_filter_expression.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​QueryPathConfigList (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_path_config_list.htm)
- DataExportAttributeSourceEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- DataExportAttributeTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
