---
title: "Associate Scorecard Procurement Items"
domain: netzero-cloud-dev-guide
topic: associate-scorecard-procurement-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.314Z
estimatedTokens: 227
keywords: [Associate, Scorecard, Procurement, Items, supplier, management, active, Special, Access, Rules]
---

# Associate Scorecard Procurement Items

> Associate procurement items from supplier management to the active
      scorecard.

# Associate Scorecard Procurement Items

Associate procurement items from supplier management to the active scorecard. Only procurement items with an unpopulated lookup can be associated with the scorecard. The API collects the procurement items that lie in between the StartDate and the EndDate as per the scorecard.

## Special Access Rules

To use this resource, you must have read access on the SustainabilityScorecard object and write access to corresponding procurement items. Also enable AllowSCExternalEngMgmt in your Salesforce organization.

Resource

```

```

Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Response body for POST

[SC Scorecard Associate Scorecard](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_s_c_scorecard_associate_scorecard_output.htm "Output representation of the associate scorecard request.")

## Code Examples

```
/connect/sustainability/supplier-management/associate-procurement-items/${scorecardId}
```

```
https://yourInstance.salesforce.com/services/data/v55.0/connect​​​/sustainability/supplier-management/associate-procurement-items/0rqRM0000004C98YAE
```

## Related Topics

- SC Scorecard Associate Scorecard (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_s_c_scorecard_associate_scorecard_output.htm)
