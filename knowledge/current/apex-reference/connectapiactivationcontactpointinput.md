---
title: "ConnectApi.ActivationContactPointInput"
domain: apex-reference
topic: connectapiactivationcontactpointinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.242Z
estimatedTokens: 243
keywords: [ConnectApi.ActivationContactPointInput, Represents, activation, contact, point, input.]
---

# ConnectApi.ActivationContactPointInput

> Represents the activation contact point input.

# ConnectApi.ActivationContactPointInput

Represents the activation contact point input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributesConfig | List< ConnectApi.ContactPointAttributeInput> | Attributes for the contact point. |  | 60.0 |
| entityName | String | Entity name for the contact point. |  | 60.0 |
| externalPlatformHashMethod | String | External platform hash method for the contact point. |  | 60.0 |
| filterExpression | List< ConnectApi.DMOFilterInput> | Filter expression for the contact point. |  | 60.0 |
| queryPathConfig | List< ConnectApi.QueryPathInputConfig> | Query path configuration list. |  | 60.0 |
| sourcesConfig | List< ConnectApi.ContactPointSourceInput> | Source configurations for the contact point. |  | 60.0 |
| type | ContactPointTypeRepresentationEnum | Type of contact point.EmailMaidOttPhonePushSubscriber_Key_EmailSubscriber_Key_PhoneWhatsApp |  | 60.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ContactPointAttributeInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contact_point_attribute.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.DMOFilterInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_d_m_o_filter.htm)
- ConnectApi.QueryPathInputConfig> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_path_config.htm)
- ConnectApi.ContactPointSourceInput> (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contact_point_source.htm)
- ContactPointTypeRepresentationEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
