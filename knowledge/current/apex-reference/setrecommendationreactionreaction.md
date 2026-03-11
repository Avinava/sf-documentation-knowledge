---
title: "setRecommendationReaction(reaction)"
domain: apex-reference
topic: setrecommendationreactionreaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.419Z
keywords: [setRecommendationReaction, reaction, Record, user, reactions, recommendations., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setRecommendationReaction(reaction)

> Record user reactions to recommendations.

### setRecommendationReaction(reaction)

Record user reactions to recommendations.

#### API Version

45.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationReaction setRecommendationReaction(ConnectApi.RecommendationReactionInput reaction)

#### Parameters

reaction

Type: [ConnectApi.RecommendationReactionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_n_b_a_reaction.htm#apex_connectapi_input_n_b_a_reaction "A reaction to a recommendation produced by a recommendation strategy.")

A ConnectApi.RecommendationReactionInput object representing a reaction to a recommendation produced by a recommendation strategy.

#### Return Value

Type: [ConnectApi.RecommendationReaction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction.htm#apex_connectapi_output_n_b_a_reaction "A reaction to a recommendation produced by a recommendation strategy")