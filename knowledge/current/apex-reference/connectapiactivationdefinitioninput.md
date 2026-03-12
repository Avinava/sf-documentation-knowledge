---
title: "ConnectApi.ActivationDefinitionInput"
domain: apex-reference
topic: connectapiactivationdefinitioninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.254Z
estimatedTokens: 834
keywords: [ConnectApi.ActivationDefinitionInput, Represents, activation, definition, input.]
---

# ConnectApi.ActivationDefinitionInput

> Represents the activation definition input.

# ConnectApi.ActivationDefinitionInput

Represents the activation definition input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| activationTargetName | String | Name of the activation target. Either activationTargetName or dataExportDefinitionId must be present. |  | 60.0 |
| activationTargetSubjectConfig | ActivationTargetSubjectConfigInputRepresentation | Subject configuration for the activation target. |  | 60.0 |
| attributeLimitingExpressionConfig | List<ConnectApi.AttributeLimitingExpressionInput> | Limiting expression configuration for the activation. |  | 63.0 |
| attributesConfig | List< ConnectApi.ActivationAdditionalAttributesConfigInput> | Additional attributes for the activation. |  | 60.0 |
| contactPointsConfig | List<ConnectApi.ActivationContactPointInput> | Contact points configuration for the activation target. |  | 60.0 |
| curatedEntity | CuratedEntityInputRepresentation | Curated entity details for the activation. |  | 60.0 |
| customerFileSource | ActivationPlatformCustomerFileSourceEnum | Customer file source of the activation platform.First_And_Third_PartyFirst_PartyThird_Party |  | 60.0 |
| dataExportDefinitionId | String | Activation target ID for the activation. Either activationTargetName or dataExportDefinitionId must be present. |  | 60.0 |
| dataSourcesConfig | List< ConnectApi.DataSourceNameConfigInput> | Data source configuration for the activation. |  | 60.0 |
| dataSpaceName | String | Data space name for the activation. |  | 60.0 |
| description | String | Description of the activation. |  | 60.0 |
| directDmoFiltersConfig | List< ConnectApi.DMOFilterInput> | Direct DMO filters for the activation. |  | 60.0 |
| limitValue | Integer | Audience limit value for the activation. |  | 63.0 |
| marketSegmentId | String | Segment ID of the segment the activation needs to be created against. Either marketSegmentID or segmentApiName must be present. |  | 60.0 |
| name | String | Name of the activation. |  | 60.0 |
| refreshType | String | Indicates the refresh type for the activation, either Full or Incremental . |  | 60.0 |
| relatedDmoFiltersConfig | List< ConnectApi.DMOFilterInput> | DMO filters on related attributes for the activation. |  | 60.0 |
| segmentApiName | String | Developer name of the segment the activation needs to be created against. Either marketSegmentID or segmentApiName must be present. |  | 60.0 |
| shouldExcludeDeletes | Boolean | Indicates whether to exclude records removed since the last refresh (true) or not (false) . |  | 60.0 |
| shouldExcludeUpdates | Boolean | Indicates whether to exclude records modified since the last refresh (true) or not (false) . |  | 60.0 |
| staticDataConfig | List< ConnectApi.StaticDataInput> | Configuration of static data, which adds metadata or campaign details in the ouput. For example, campaignId or campaignName. |  | 60.0 |

#### See Also

-   [createActivation(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_createActivation_1 "Create an activation.")

-   [updateActivation(activationId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_updateActivation_1 "Update an activation by ID.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ActivationTargetSubjectConfigInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target_subject_config.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.AttributeLimitingExpressionInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_attribute_limiting_expression.htm)
- ConnectApi.ActivationAdditionalAttributesConfigInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_additional_attributes_config.htm)
- ConnectApi.ActivationContactPointInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_contact_point.htm)
- CuratedEntityInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_curated_entity.htm)
- ActivationPlatformCustomerFileSourceEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.DataSourceNameConfigInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_data_source_name_config.htm)
- ConnectApi.DMOFilterInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_d_m_o_filter.htm)
