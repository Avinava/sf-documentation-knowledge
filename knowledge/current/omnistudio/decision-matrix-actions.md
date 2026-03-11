---
title: "Decision Matrix Actions"
domain: omnistudio
topic: decision-matrix-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.426Z
keywords: [Decision, Matrix, Actions, Supported, REST, HTTP, Methods, Note, Inputs, Outputs, Usage]
---

# Decision Matrix Actions

# Decision Matrix Actions

Invoke a decision matrix in a flow with the Decision Matrix Actions. A decision matrix is a user-defined table where you can look up an output based on the inputs you provide.

For example, you can look up a candidate’s eligibility to avail medical insurance in a decision matrix based on the candidate’s age and gender.

These actions are available in API version 55.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v55.0/actions/custom/runDecisionMatrix/{UniqueName}

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

The value of UniqueName is the unique identifier of the record, which is sourced from the name of a decision matrix.

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

Vary depending on the selected decision matrix.

## Outputs

Vary depending on the inputs of the selected decision matrix.

## Usage

Sample Request

Here’s an example POST request that has the inputs, such as, age and state:

```

```

Sample Response

Here’s an example response that has the premium and tax values based on the inputs provided in the example request.

```

```