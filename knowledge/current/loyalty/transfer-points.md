---
title: "Transfer Points"
domain: loyalty
topic: transfer-points
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.053Z
estimatedTokens: 661
keywords: [Transfer, Points, Transfers, source, loyalty, program, member, target, group, part, REST, HTTP, Inputs, Outputs]
---

# Transfer Points

> Transfers points from a source loyalty program member to a target loyalty program
  member, or to a group that the member is a part of.

# Transfer Points

Transfers points from a source loyalty program member to a target loyalty program member, or to a group that the member is a part of.

This action is available in API version 64.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/transferPoints

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| programName | TypeStringDescriptionRequired. The name of the loyalty program that the source and target members are a part of. |
| programCurrencyName | TypeIDDescriptionThe name of the non-qualifying currency for which points are transferred. |
| transferPoints | TypeIntegerDescriptionThe number of points that are transferred. |
| sourceProgramMembershipNumber | TypeIntegerDescriptionThe membership number of the loyalty program member from whom the points are transferred. Either the membership number or the member ID is mandatory. |
| sourceProgramMemberId | TypeIDDescriptionThe ID of the loyalty program member from whom the points are transferred. Either the membership number or the member ID is mandatory. |
| targetProgramMembershipNumber | TypeIntegerDescriptionThe membership number of the loyalty program member to whom the points are transferred. Either the membership number or the member ID is mandatory. |
| targetProgramMemberId | TypeIDDescriptionThe ID of the loyalty program member to whom the points are transferred. Either the membership number or the member ID is mandatory. |
| additionalInformation | TypeIDDescriptionThe additional information about the transfer of points. |

## Outputs

| Input | Details |
| --- | --- |
| programName | TypeStringDescriptionRequired. The name of the loyalty program that the source and target members are a part of. |
| programCurrencyName | TypeIDDescriptionThe name of the non-qualifying currency for which points are transferred. |
| pointsTransferred | TypeIntegerDescriptionThe number of points that are transferred. |
| sourceProgramMemberId | TypeIDDescriptionThe ID of the loyalty program member from whom the points are transferred. |
| targetProgramMemberId | TypeIDDescriptionThe ID of the loyalty program member to whom the points are transferred. |
| sourceTransactionJournalId | TypeIDDescriptionThe ID of the transaction journal that debited points from the source loyalty program member. |
| targetTransactionJournalId | TypeIDDescriptionThe ID of the transaction journal that credited points to the target loyalty program member. |

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
"inputs": [
{
"programName": "NTORules",
"sourceProgramMembershipNumber": "N01",
"targetProgramMembershipNumber": "N02",
"programCurrencyName": "NQP Fixed Negative Trace",
"transferPoints": 5,
"additionalInformation": "Tried Transfer Points testing"
}
]
}
```

```
{
"actionName":"transferPoints",
"errors":null,"invocationId":null,
"isSuccess":true,"outcome":null,
"outputValues":{
"targetTransactionJournalId":"0lVLT0000001ATa",
"programCurrencyName":"NQPFixed",
"programName":"Program001",
"pointsTransferred":10,
"sourceProgramMemberId":"0lMLT0000000OtZ",
"sourceTransactionJournalId":"0lVLT0000001ATZ",
"targetProgramMemberId":"0lMLT0000000OvB"},
"sortOrder":-1,"version":1
}
```
