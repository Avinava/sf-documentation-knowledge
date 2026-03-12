---
title: "ConnectApi.ActivationCollection"
domain: apex-reference
topic: connectapiactivationcollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.162Z
estimatedTokens: 234
keywords: [ConnectApi.ActivationCollection, collection, activations]
---

# ConnectApi.ActivationCollection

> Represents a collection of activations.

# ConnectApi.ActivationCollection

Represents a collection of activations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activations | List<ConnectApi.​ActivationRepresentation> | List of activations. | 60.0 |
| batchSize | Integer | Number of results returned. If unspecified, the default value is 20. | 60.0 |
| offset | Integer | Number of records to skip for the next request. | 60.0 |
| orderByExpression | String | Sort order for the result set. | 60.0 |

#### See Also

-   [getActivations()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivations_1 "Get activations.")

-   [getActivationsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivationsPaginated_1 "Get a paginated list of activations.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ActivationRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getActivations() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
- getActivationsPaginated(batchSize, offset, orderBy, filters) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
