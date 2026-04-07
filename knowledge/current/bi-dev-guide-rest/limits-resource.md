---
title: "Limits Resource"
domain: bi-dev-guide-rest
topic: limits-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:09.802Z
estimatedTokens: 877
keywords: [Limits, Resource, Analytics, Salesforce, org, Postman]
---

# Limits Resource

> The Analytics limits for the Salesforce org.

# Limits Resource

The Analytics limits for the Salesforce org.

Resource URL

```

```

Formats

JSON

Available Version

51.0

## Available in Postman

To view and test a working example of this resource, see [getWaveAnalyticsLimitCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-95b3c4f7-c88d-4fc2-8e48-3f47a5aebf1c?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

Available Components

-   LWC — [lightning/analyticsWaveApi getAnalyticsLimits()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_wire_adapters_get_analytics_limits)

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| licenseType | Connect​Analytics​License​Type​Enum | Filters the results by the Analytics license type. Valid values are:Cdp (Data 360)Data​Pipeline​Query (Data Pipeline Query)Einstein​Analytics (CRM Analytics)Intelligent​Apps (Intelligent Apps)Sonic (Salesforce Data Pipeline) | Optional | 51.0 |
| types | Connect​Analytics​Limit​Type​Enum | Filters the results by the type of limits used in Analytics. Valid values are:Batch​Transformation​Hours (Maximum dataflow runtime per month)Dataset​Queries (Maximum queries on datasets for all users)Dataset​Row​Count (Maximum row of all datasets combined)Max​Daily​Rows​Data​Cloud​Output​Con (Maximum rows for Data 360 output per rolling 24-hour period)Max​Daily​Rows​High​Output​Con (Maximum rows for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Low​Output​Con (Maximum rows for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Med​Output​Con (Maximum rows for all medium volume tier output connectors per rolling 24-hour period)Max​Daily​Size​High​Output​Con (Maximum data size for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Low​Output​Con (Maximum data size for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Med​Output​Con (Maximum data size for all medium volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Virtual​Private​Cloud​Con (Maximum cumulative bytes of data sent through connections using a virtual private cloud in a rolling 24-hour period)Max​Daily​Upload​Volume (Maximum cumulative bytes of data files uploaded to Salesforce in a rolling 24-hour period)Max​Daily​Workflow​Executions (Maximum number of dataflow and recipe runs in a rolling 24-hour period)Max​Recipe​Out​Rows​Per​Month (Maximum number of rows output by all recipes to all datasets in a month)Max​Replicated​Objects (Maximum number of connected objects)Output​Local​Connector​Volume (Maximum cumulative bytes of data files written to Salesforce in a rolling 24-hour period)Staged​Dataset​Row​Count (Maximum rows for staged datasets) | Optional | 51.0 |

Response body for GET

[Wave Analytics Limit Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_analytics_limit_collection.htm "The collection of Analytics limits.")

## Code Examples

```
/wave/limits
```

## Related Topics

- CRM
     Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Wave Analytics Limit
       Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_analytics_limit_collection.htm)
