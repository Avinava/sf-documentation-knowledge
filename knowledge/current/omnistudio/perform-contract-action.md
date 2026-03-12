---
title: "Perform Contract Action"
domain: omnistudio
topic: perform-contract-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.373Z
estimatedTokens: 249
keywords: [Perform, Contract, Action, actions, status, REST, HTTP, Inputs, Output, Usage]
---

# Perform Contract Action

> Perform actions on a contract based on its status.

# Perform Contract Action

Perform actions on a contract based on its status.

This action is available in API version 61.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/performContractAction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| actionData | TypeStringDescriptionJSON expression that contains the additional data necessary to perform the action on the contract. |
| actionName | TypeIDDescriptionRequired.API name of the action to perform on the contract. |
| contractId | TypeBooleanDescriptionRequired.ID of the contract to perform the action on. |

## Output

| Output | Details |
| --- | --- |
| contractId | TypeStringDescriptionID of the contract the action was performed on. |

## Usage

Sample Input

This sample request is for the Perform Contract action.

```

```

Sample Output

This sample response is for the Perform Contract action.

```

```

## Code Examples

```
{
  "contractId": "800SG00000HtyxxYAB",
  "actionName": "activateContract"
  "actionData": "{"testField": "testVal"}"
}
```

```
{
  "contractId": [
    "800SB00000KLbHxxA1"
  ]
}
```
