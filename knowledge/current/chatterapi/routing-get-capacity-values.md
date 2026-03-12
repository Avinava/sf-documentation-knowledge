---
title: "Routing, Get Capacity Values"
domain: chatterapi
topic: routing-get-capacity-values
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.621Z
estimatedTokens: 243
keywords: [Routing, Capacity, current, fulfillment, order, locations]
---

# Routing, Get Capacity Values

> Get information about the current fulfillment order capacity of one
      or more locations.

# Routing, Get Capacity Values

Get information about the current fulfillment order capacity of one or more locations.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

[Get FO Capacity Values Request Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_get_f_o_capacity_values_request_input.htm "Locations to get fulfillment order capacity information for.")

Root XML tag

<getFOCapacityValuesRequestRequestInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationIds | String[] | List of IDs of the locations to get fulfillment order capacity information for. | Required | 55.0 |

Response body for POST

[Get FO Capacity Values Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_get_f_o_capacity_values_output.htm "Response to a request for fulfillment order capacity values for one or more locations.")

## Code Examples

```
/commerce/order-management/routing/fulfillment-order-capacity/actions/get-capacity-values
```

```
{
  "locationIds": ["LOC-1", "LOC-2", "LOC-3", "LOC-5"]
}
```

## Related Topics

- Get FO Capacity Values Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_get_f_o_capacity_values_request_input.htm)
- Get FO Capacity Values Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_get_f_o_capacity_values_output.htm)
