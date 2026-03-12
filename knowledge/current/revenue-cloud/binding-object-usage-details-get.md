---
title: "Binding Object Usage Details (GET)"
domain: revenue-cloud
topic: binding-object-usage-details-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.929Z
estimatedTokens: 332
keywords: [Binding, Usage, grants, resources, rates, any, configured, policies]
---

# Binding Object Usage Details (GET)

> Get details of grants, resources, rates, and any configured policies
      for a specified binding object.

# Binding Object Usage Details (GET)

Get details of grants, resources, rates, and any configured policies for a specified binding object.

Use this API to display the details for a binding object during the selling journey. Additionally, display the details after assetization on the selected binding objects.

The supported binding objects are Account, Contract, BindingObjectCustomExt, or Anchor Asset that's not bound to a target.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

GET

Path parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| bindingObjectId | String | ID of the binding object. | Required | 65.0 |

Query parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date filter that's used to retrieve the grants, rates, and applicable policies as of the specified date in yyyy-MM-dd format. | Required | 65.0 |

Response body for GET

[Binding Object Usage Detail](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_detail_binding_object_output.htm "Output representation of the usage details of a binding object.")

## Code Examples

```
/revenue/usage-management/binding-objects/bindingObjectId/actions/usage-details
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/usage-management/binding-objects/1BRxx0000004C9EGAU/actions/usage-details?effectiveDate=2025-08-07
```

## Related Topics

- Binding Object Usage
              Detail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_detail_binding_object_output.htm)
