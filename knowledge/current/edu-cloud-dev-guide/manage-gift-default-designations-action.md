---
title: "Manage Gift Default Designations Action"
domain: edu-cloud-dev-guide
topic: manage-gift-default-designations-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.669Z
estimatedTokens: 282
keywords: [Manage, Gift, Designations, Action, Creates, manages, Designation, records, entry, associated, campaign, opportunity, commitment, REST, HTTP]
---

# Manage Gift Default Designations Action

> Creates and manages Gift Default Designation records for a gift entry
      associated with a campaign, opportunity, or gift commitment.

# Manage Gift Default Designations Action

Creates and manages Gift Default Designation records for a gift entry associated with a campaign, opportunity, or gift commitment.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/manageGiftDefaultDesignations

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| giftDefaultDesignationIds | TypesObjectDescriptionRequired.A collection of Gift Default Designation record IDs that are to be modified or deleted. |
| parentRecordId | TypeIDDescriptionRequired.The ID of the parent record like a campaign, opportunity, or gift commitment associated with the gift default designation IDs in giftDefaultDesignationIds. |

## Outputs

None.

## Example

Here’s a request for the Manage Gift Default Designations action.

```

```

Here’s a response for the Manage Gift Default Designations action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftDefaultDesignationIds": [
        {
          "GiftDesignationId": "6gdRM0000004CD0YAM",
          "AllocatedPercentage": 100
        }
      ]
    }
  ],
  "parentRecordId": "6gcRM00000001UNYAY"
}
```

```
[
  {
    "actionName": "manageGiftDefaultDesignations",
    "errors": null,
    "isSuccess": true,
    "outputValues": null,
    "version": 1
  }
]
```
