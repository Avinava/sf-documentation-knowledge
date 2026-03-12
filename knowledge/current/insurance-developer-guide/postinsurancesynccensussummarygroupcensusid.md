---
title: "postInsuranceSyncCensusSummary(groupCensusId)"
domain: insurance-developer-guide
topic: postinsurancesynccensussummarygroupcensusid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.977Z
estimatedTokens: 221
keywords: [postInsuranceSyncCensusSummary, groupCensusId, Synchronize, recalculate, summary, data, group, census, API, Version, Requires, Chatter]
---

# postInsuranceSyncCensusSummary(groupCensusId)

> Synchronize and recalculate the summary data for a group census.

# postInsuranceSyncCensusSummary(groupCensusId)

Synchronize and recalculate the summary data for a group census.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceCensusSummarySyncOutputRepresentation postInsuranceSyncCensusSummary(ConnectApi.InsuranceCensusSummarySyncInputRepresentation censusSummarySyncInputParam, String groupCensusId)

## Parameters

groupCensusId

Type: String

ID of the group census to synchronize.

## Return Value

Type: [ConnectApi.InsuranceCensusSummarySyncOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_summary_sync.htm "Output representation for the insurance employee census summary synchronization process.")

## Example

Here's an example of how to invoke the Insurance Sync Census Summary API from Apex code.

```

```

## Code Examples

```apex
// Census Summary Sync via Connect API (simple version)

// 1) Create the top-level input (no fields required)
ConnectApi.InsuranceCensusSummarySyncInputRepresentation input =
    new ConnectApi.InsuranceCensusSummarySyncInputRepresentation();

// 2) Execute the POST API with the Group Census Id
String groupCensusId = '0rfxx000000000RAAQ';

try {
    ConnectApi.InsuranceCensusSummarySyncOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceSyncCensusSummary(input, groupCensusId);

    System.debug('Census Summary Sync result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error during Census Summary Sync: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceCensusSummarySyncOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_summary_sync.htm)
