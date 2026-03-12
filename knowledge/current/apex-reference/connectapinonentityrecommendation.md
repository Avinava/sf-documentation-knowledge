---
title: "ConnectApi.NonEntityRecommendation"
domain: apex-reference
topic: connectapinonentityrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.092Z
estimatedTokens: 235
keywords: [ConnectApi.NonEntityRecommendation, recommendation, non-Salesforce, entity, such, application., Important]
---

# ConnectApi.NonEntityRecommendation

> A recommendation for a non-Salesforce entity, such as an
      application.

# ConnectApi.NonEntityRecommendation

A recommendation for a non-Salesforce entity, such as an application.

Subclass of [ConnectApi.AbstractRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_recommendation.htm "A Chatter, custom, or static recommendation.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

ConnectApi.NonEntityRecommendation isn’t used in version 34.0 and later. In version 34.0 and later, [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm "A Chatter, custom, or static recommendation.") is used for all recommendations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| displayLabel | String | Localized label of the non-entity object. | 32.0 |
| motif | ConnectApi.Motif | Motif for the non-entity object. | 32.0 |

## Related Topics

- ConnectApi.AbstractRecommendation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_recommendation.htm)
- ConnectApi.EntityRecommendation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Motif (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm)
