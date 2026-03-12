---
title: "Dataset Coverage"
domain: bi-dev-guide-rest
topic: dataset-coverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.261Z
estimatedTokens: 223
keywords: [Dataset, Coverage, security, specific, version]
---

# Dataset Coverage

> The security coverage for a specific dataset version.

# Dataset Coverage

The security coverage for a specific dataset version.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataset​Version | Dataset​Version​Reference | The dataset version for which the coverage information applies. | Small, 41.0 | 41.0 |
| sources | Dataset​Source[] | The source objects for the dataset version. | Small, 41.0 | 41.0 |
| url | String | The URL for retrieving this information. | Small, 41.0 | 41.0 |

#### See Also

-   [Security Coverage Dataset Version Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_security_coverage_dataset_version.htm "Returns the security coverage (sharing inheritance) for a particular dataset version. The source objects listed are local to the org (there are no objects from other orgs or other external sources).")

## Related Topics

- Dataset​Version​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_version_reference.htm)
- Dataset​Source (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_source.htm)
- Security Coverage Dataset Version Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_security_coverage_dataset_version.htm)
