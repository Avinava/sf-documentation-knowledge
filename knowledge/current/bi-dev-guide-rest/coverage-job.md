---
title: "Coverage Job"
domain: bi-dev-guide-rest
topic: coverage-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.101Z
estimatedTokens: 214
keywords: [Coverage, Job, output, user]
---

# Coverage Job

> The output of a user coverage request.

# Coverage Job

The output of a user coverage request.

Properties

CoverageJob inherits properties from the abstract [BaseWaveAssetReference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in CoverageJob alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | The error or warning message that occurred during the job run. | Small, 50.0 | 50.0 |
| object | Asset​Reference | The object name for the job. | Small, 45.0 | 45.0 |
| status | Coverage​Job​Status​Enum | The status of the job. | Small, 45.0 | 45.0 |
| user​Coverage | String | The user coverage calculated by this job. | Small, 45.0 | 45.0 |

## Related Topics

- BaseWaveAssetReference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
