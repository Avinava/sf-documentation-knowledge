---
title: "ConnectApi.ContactPointConfig"
domain: apex-reference
topic: connectapicontactpointconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.773Z
estimatedTokens: 248
keywords: [ConnectApi.ContactPointConfig, Represents, activation, contact, point, configuration, output.]
---

# ConnectApi.ContactPointConfig

> Represents an activation contact point configuration output.

# ConnectApi.ContactPointConfig

Represents an activation contact point configuration output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activationContactPointFieldConfig | ConnectApi.ActivationContactPointsFieldConfig | Contact point field configurations. | 60.0 |
| activationContactPointSourcesConfig | ConnectApi.ActivationContactPointsSourceConfig | Contact point source configurations. | 60.0 |
| contactPointFilterExpression | ConnectApi.ContactPointFilterExpression | Contact point filter expression. | 60.0 |
| contactPointPath | String | Contact point path. | 60.0 |
| contactPointType | ContactPointTypeRepresentationEnum | Type of contact point.EmailMaidOttPhonePushSubscriber_Key_EmailSubscriber_Key_PhoneWhatsApp | 60.0 |
| entityId | String | ID of the entity. | 60.0 |
| entityName | String | Name of the entity. | 60.0 |
| queryPathConfigList | List<ConnectApi.​QueryPathConfigList> | List of query path configurations. | 60.0 |

## Related Topics

- ConnectApi.ActivationContactPointsFieldConfig (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_contact_points_field_config.htm)
- ConnectApi.ActivationContactPointsSourceConfig (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_contact_points_source_config.htm)
- ConnectApi.ContactPointFilterExpression (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_contact_point_filter_expression.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ContactPointTypeRepresentationEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​QueryPathConfigList (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_path_config_list.htm)
