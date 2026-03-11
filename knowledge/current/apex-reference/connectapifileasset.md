---
title: "ConnectApi.FileAsset"
domain: apex-reference
topic: connectapifileasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.877Z
keywords: [ConnectApi.FileAsset, See]
---

# ConnectApi.FileAsset

# ConnectApi.FileAsset

An asset file.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| baseAssetUrl | String | Base download URL of the asset. | 45.0 |
| baseUnauthenticated​AssetUrl | String | Base download URL of the asset for unauthenticated users if isVisibleByExternalUsers is true, otherwise null. | 45.0 |
| id | String | ID of the asset. | 45.0 |
| isVisibleBy​ExternalUsers | Boolean | Indicates whether unauthenticated users can see the asset file (true) or not (false). | 45.0 |
| masterLabel | String | Label of the asset. | 45.0 |
| name | String | Unique name of the asset. | 45.0 |
| namespacePrefix | String | Namespace prefix of the package containing the asset. | 45.0 |
| type | String | Type of asset. | 45.0 |

#### See Also

-   [ConnectApi.Recommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_proposition.htm "A Next Best Action recommendation object.")
    
-   [ConnectApi.NBANativeRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_proposition_recommendation.htm "A record the user is recommended to take action on.")