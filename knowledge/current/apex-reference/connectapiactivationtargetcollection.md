---
title: "ConnectApi.ActivationTargetCollection"
domain: apex-reference
topic: connectapiactivationtargetcollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.018Z
estimatedTokens: 258
keywords: [ConnectApi.ActivationTargetCollection, Represents, collection, activation, targets.]
---

# ConnectApi.ActivationTargetCollection

> Represents a collection of activation targets.

# ConnectApi.ActivationTargetCollection

Represents a collection of activation targets.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activationTargets | List<ConnectApi.ActivationTarget> | List of activation targets. | 60.0 |
| batchSize | Integer | Number of results returned. Values are from 1 through 200. | 60.0 |
| offset | Integer | Start offset of the next batch of results. | 60.0 |
| orderByExpression | String | Expression that determines the order of the results. | 60.0 |

#### See Also

-   [getActivationTargets()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargets_1 "Get a list of activation targets.")

-   [getActivationTargetsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargetsPaginated_2 "Get a paginated list of activation targets.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ActivationTarget (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getActivationTargets() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- getActivationTargetsPaginated(batchSize, offset, orderBy, filters) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
