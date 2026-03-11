---
title: "Check-In Contract Document Version Action"
domain: omnistudio
topic: check-in-contract-document-version-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.417Z
keywords: [Check-In, Contract, Document, Version, Action, Supported, REST, HTTP, Methods, Inputs, Output, Usage]
---

# Check-In Contract Document Version Action

# Check-In Contract Document Version Action

Check-in a contract document version.

This action is available in API version 61.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/checkInContractDocumentVersion

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contractDocumentVersionId | TypeIDDescriptionRequiredID of the contract document version to check in. |
| isSaveWhenActionCompletes | TypeBooleanDescriptionRequiredIndicates whether to save the changes when the action completes (true) instead of when the flow ends (false). |

## Output

| Output | Details |
| --- | --- |
| checkedInContractDocumentVersionId | TypeStringDescriptionID of the contract document version that was checked in. |

## Usage

Sample Input

This sample request is for the Check-in Contract Document Version action.

```

```

Sample Output

This sample response is for the Check-in Contract Document Version action.

```

```