---
title: "Run Config Rules Action"
domain: revenue-cloud
topic: run-config-rules-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.995Z
estimatedTokens: 383
keywords: [Run, Config, Rules, Action, rules, specific, quote, order, based, context, transaction, process, steps, part, configuration, directly, within, Flow., action, decouples]
---

# Run Config Rules Action

> Run rules for a specific quote or order based on a context ID or
            transaction ID, and process other steps that are part of the configuration directly
            within a Flow. This action decouples rule execution from configurations to enable
            independent execution of rules and for easier retrieval of responses.

# Run Config Rules Action

Run rules for a specific quote or order based on a context ID or transaction ID, and process other steps that are part of the configuration directly within a Flow. This action decouples rule execution from configurations to enable independent execution of rules and for easier retrieval of responses.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/runConfigRules

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| transactionContextId | TypestringDescriptionUnique identifier for the transaction context. |
| transactionId | TypestringDescriptionRequired.Unique identifier for the transaction. |

## Outputs

| Output | Details |
| --- | --- |
| configRuleResult | TypeApex-definedDescriptionAn runtime_industries_cpq.ConfigRuleResult record that contains the configuration rule execution results including validation messages, product recommendations, visibility rules, and errors from rule processing. |
| transactionContextId | TypestringDescriptionUnique identifier for the transaction context. |

## Example

POST

This example shows a sample request to run rules for the specified quote based on the transaction context ID and transaction ID.

```

```

This example shows a sample successful response.

```

```

Here's a sample input to call this invocable action by using transactionContextId property from Apex code.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "transactionContextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
      "transactionId": "0Q0DU0000005tJh0AI"
    }
  ]
}
```

```
[
  {
    "actionName": "runConfigRules",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "transactionContextId": "0000000p18dq18g0029175793402786243c3d5ea94c241f09c11388ac1b865f9",
      "configRuleResult": {
        "visibilityRules": [
          {
            "stiId": "0QLxx0000004CU0GAM",
            "prcId": "PRC1",
            "attributeId": "Color",
            "attributePicklistValueId": "Red",
            "target": "Attribute",
            "scope": "Product",
            "type": "Hide"
          },
          {
            "stiId": "0QLxx0000004CU0GAM",
            "prcId": "PRC2",
            "attributeId": "Size",
            "attributePicklistValueId": "Large",
            "target": "Attribute",
            "scope": "Bundle",
            "type": "Disable"
          }
        ],
        "transactionContextId": "0000000p18dq18g0029175793402786243c3d5ea94c241f09c11388ac1b865f9",
        "productRecommendationRules": [
          {
            "referenceId": "CORE_BUNDLE_001",
            "productIds": [
              "01t000000001234",
              "01t000000005678"
            ]
          }
        ],
        "messageRules": [
          {
            "stiId": "0QLxx0000004CU0GAM",
            "severity": "INFO",
            "messages": [
              "Product configuration validated successfully"
            ]
          },
          {
            "stiId": "0QLxx0000004CU0GAM",
            "severity": "INFO",
            "messages": [
              "All required attributes are configured"
            ]
          },
          {
            "stiId": "0QLxx0000004CU0GAM",
            "severity": "INFO",
            "messages": [
              "Bundle compatibility check passed"
            ]
          }
        ],
        "errors": []
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

```apex
// Create the invocable action with namespace
Invocable.Action action = Invocable.Action.createStandardAction('runConfigRules');
            
// Set input parameters using setInvocationParameter
String contextId = '008d27d7-e004-4906-a949-ee7d7c323c77';
System.debug('Setting transactionContextId parameter with value: ' + contextId);
            
// Use the exact parameter name format from the debug output
action.setInvocationParameter('transactionContextId', contextId);
            
// Debug the action parameters
System.debug('Action parameters: ' + action);
            
// Execute the action
System.debug('Invoking action...');
List<Invocable.Action.Result> results = action.invoke();
            
System.debug('Number of results: ' + results.size());
```
