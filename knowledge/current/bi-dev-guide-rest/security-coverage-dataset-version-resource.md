---
title: "Security Coverage Dataset Version Resource"
domain: bi-dev-guide-rest
topic: security-coverage-dataset-version-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.814Z
estimatedTokens: 353
keywords: [Security, Coverage, Dataset, Version, Resource, sharing, inheritance, particular, source, objects, listed, local, org, there, orgs]
---

# Security Coverage Dataset Version Resource

> Returns the security coverage (sharing inheritance) for a particular dataset
    version. The source objects listed are local to the org (there are no objects from
    other orgs or other external sources).

# Security Coverage Dataset Version Resource

Returns the security coverage (sharing inheritance) for a particular dataset version. The source objects listed are local to the org (there are no objects from other orgs or other external sources).

## Resource URL

```

```

## Formats

JSON

## Available Version

41.0

## Available in Postman

To view and test a working example of this resource, see [getDatasetCoverage](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-edb258a5-cc12-4845-af0a-235373e5c076?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getSecurityCoverageDatasetVersion()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-security-coverage-dataset-version.html)

## HTTP Methods

GET

## Response body for GET

[Dataset Coverage](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_coverage.htm "The security coverage for a specific dataset version.")

## Code Examples

```
/wave/security/coverage/datasets/<datasetIdOrApiName>/versions/<versionId>
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataset Coverage (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_coverage.htm)
