---
title: "Service Cloud Voice Aura Toolkit Next Best Action"
domain: voice-developer-guide
topic: service-cloud-voice-aura-toolkit-next-best-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.772Z
estimatedTokens: 610
keywords: [Service, Cloud, Voice, Aura, Toolkit, Best, Action, Give, reps, recommendations, real, time]
---

# Service Cloud Voice Aura Toolkit Next Best Action

> Give your reps recommendations in real time with Next Best Action.

# Service Cloud Voice Aura Toolkit Next Best Action

Give your reps recommendations in real time with Next Best Action.

To incorporate Next Best Action into your Service Cloud Voice solution, follow these instructions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

Next Best Action has [usage-based entitlements](https://help.salesforce.com/articleView?id=nba_perms_and_entitlements.htm&language=en_US). Invoking recommendations in Service Cloud Voice counts towards that usage.

1.  Build a [recommendation strategy](https://help.salesforce.com/articleView?id=nba_recommendations_app.htm&type=5&language=en_US) that uses the filter element and $Request variable. The $Request variable is a map containing key value pairs. For example, if the recommendation strategy receives the data {intent: "refund"} then $Request.intent evaluates to "refund". To learn more, see [Write an Expression](https://help.salesforce.com/articleView?id=nba_strategy_expressions.htm&type=5&language=en_US).
2.  Enable real time recommendations in your [Actions & Recommendations deployment](https://help.salesforce.com/articleView?id=console_lex_guided_action_list_component.htm&type=5&language=en_US) and select the strategy you just built.
3.  Invoke Einstein Next Best Action with a record ID and key:value pairs in the updateNextBestActions() function parameters. Recommendations are displayed for record pages matching the provided ID. The value given to a particular key can be retrieved in the Recommendation Strategy using $Request.key in the filter element.

The following filter element expression shows recommendations that contain a particular keyword in the recommendation name. To learn more, see [Write an Expression](https://help.salesforce.com/articleView?id=nba_strategy_expressions.htm&type=5&language=en_US).

```

```

The following code invokes the next best action function.

```

```

Sample function call:

```

```

#### See Also

-   [*Salesforce Help:* Einstein Next Best Action](https://help.salesforce.com/articleView?id=einstein_next_best_action.htm&language=en_US "Salesforce Help: Einstein Next Best Action - HTML (New Window)")

-   [*Salesforce Help:* Einstein Next Best Action Entitlements](https://help.salesforce.com/articleView?id=nba_perms_and_entitlements.htm&language=en_US "Salesforce Help: Einstein Next Best Action Entitlements - HTML (New Window)")

## Code Examples

```
$Request.key != '' && CONTAINS(Name, $Request.key)
```

```
cmp.find('voiceToolkitApi').updateNextBestActions(recordId, params);
```

```
cmp.find('voiceToolkitApi')
   .updateNextBestActions('0LQxx0000004GcSGAU', { intent: 'refund' });
```
