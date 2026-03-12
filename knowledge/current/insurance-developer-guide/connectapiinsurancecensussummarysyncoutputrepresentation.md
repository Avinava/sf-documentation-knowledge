---
title: "ConnectApi.InsuranceCensusSummarySyncOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecensussummarysyncoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.516Z
estimatedTokens: 148
keywords: [Output, representation, insurance, employee, census, summary, synchronization, process]
---

# ConnectApi.InsuranceCensusSummarySyncOutputRepresentation

> Output representation for the insurance employee census summary synchronization process.

# ConnectApi.InsuranceCensusSummarySyncOutputRepresentation

Output representation for the insurance employee census summary synchronization process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorResponseRepresentation> | List of errors that occurred during synchronization. | 65.0 |
| groupCensus | ConnectApi.InsuranceGroupCensusOutputRepresentation | Details of the synchronized group census summary. | 65.0 |
| isSuccess | Boolean | Indicates whether the synchronization is successful (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.InsuranceGroupCensusOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_group_census.htm)
