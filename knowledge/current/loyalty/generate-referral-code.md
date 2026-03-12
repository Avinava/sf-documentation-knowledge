---
title: "Generate Referral Code"
domain: loyalty
topic: generate-referral-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.962Z
estimatedTokens: 228
keywords: [Generate, Referral, Code, loyalty, program, member, REST, HTTP, Inputs, Outputs]
---

# Generate Referral Code

> Generate a referral code for a loyalty program member.

# Generate Referral Code

Generate a referral code for a loyalty program member.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

If a loyalty program member already has a referral code, generating another code replaces the existing one.

This action is available in API version 57.0 and later for users with the Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/generateMemberReferralCode

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypeStringDescriptionRequired. ID of the loyalty program member to generate the referral code for.NoteSpecify an array of member IDs in the JSON request to generate referral codes for multiple members. |

## Outputs

None.

## Example

**Sample Request**

```

```

## Code Examples

```
{
   "inputs":[{
      "LoyaltyProgramMemberId":"0lMxx0000A000001EAA"
   }, {
      "LoyaltyProgramMemberId":"0lQxx0000B000001EBS"
   }]
}
```
