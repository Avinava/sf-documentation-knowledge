---
title: "Allocate Scorecard Emissions"
domain: netzero-cloud-dev-guide
topic: allocate-scorecard-emissions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.312Z
estimatedTokens: 269
keywords: [Allocate, Scorecard, Emissions, final, procurement, items, AllocationStatus, successful, allocation, API, allocates, calculated, FinalScorecardEmissions, Special, Access]
---

# Allocate Scorecard Emissions

> Allocate final emissions to procurement items. Update the
      AllocationStatus field on the scorecard on a successful allocation. The API allocates final
      emissions to procurement items based on the calculated value of the FinalScorecardEmissions
      field.

# Allocate Scorecard Emissions

Allocate final emissions to procurement items. Update the AllocationStatus field on the scorecard on a successful allocation. The API allocates final emissions to procurement items based on the calculated value of the FinalScorecardEmissions field.

## Special Access Rules

To use this resource, you must have AllowSCExternalEngMgmt enabled in your Salesforce organization.

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

[SC Scorecard Allocate Emissions](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_s_c_scorecard_allocate_emissions_output.htm "Output representation of the allocate scorecard emissions request.")

#### See Also

-   [*Net Zero Cloud Calculations*: Sustainability Scorecard](https://developer.salesforce.com/docs/atlas.en-us.260.0.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_sustainability_scorecard.htm "Net Zero Cloud Calculations: Sustainability Scorecard - HTML (New Window)")

## Code Examples

```
/connect/sustainability/supplier-management/allocate-procurement-items/${scorecardId}
```

```
https://yourInstance.salesforce.com/services/data/v55.0/connect​​​/sustainability/supplier-management/allocate-procurement-items/0rqRM0000004C98YAE
```

## Related Topics

- SC Scorecard Allocate Emissions (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_s_c_scorecard_allocate_emissions_output.htm)
