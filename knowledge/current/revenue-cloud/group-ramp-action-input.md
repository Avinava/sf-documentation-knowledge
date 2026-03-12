---
title: "Group Ramp Action Input"
domain: revenue-cloud
topic: group-ramp-action-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.024Z
estimatedTokens: 719
keywords: [Group, Ramp, Action, Input, Understand, sample, specify, actions, initial, sale]
---

# Group Ramp Action Input

> Understand the sample request to specify group ramp actions during initial
    sale.

# Group Ramp Action Input

Understand the sample request to specify group ramp actions during initial sale.

Keep these considerations in mind when you specify ramp actions.

-   Use the [Clone Sales Transaction API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_clone_sales_transaction.htm "HTML (New Window)") to clone a ramp segment, and specify the clone option.
-   Use the [Place Sales Transaction API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_sales_transaction.htm "HTML (New Window)") to specify a group ramp action by using the groupRampAction property. You can refer to the sections in this topic for examples.

JSON example to edit a group

This is a sample request that creates the first ramp segment. This request accepts IDs of a quote and quote line group. Additionally, the request accepts attributes of quote line group such as IsRamped, SegmentType, StartDate, and EndDate. A ramp segment is created with a ramp identifier and segment identifier added to all the quote line items available in the ramp segment.

This process converts a group into a segment, which becomes the first segment in the ramp schedule. A quote can contain a single ramp schedule only. To create another segment in the ramp schedule, use the [Clone Sales Transaction API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_clone_sales_transaction.htm "HTML (New Window)").

```

```

JSON example to edit a ramp segment

This is a sample request to edit multiple ramp segments simultaneously, maintaining date continuity among ramp segments.

```

```

JSON example to add a product

This is a sample request to add a product to the current and subsequent segments. A ramp identifier and segment identifier are added to the quote line items.

```

```

JSON example to delete a product

This is a sample request to delete a product from the current and subsequent ramp segments.

```

```

JSON example to delete a segment

This is a sample request to delete the first and last segment in a ramp schedule. The API throws an error if the specified segment isn't the first and last segment, ensuring there are no gaps between quote line items in different ramp segments.

```

```

JSON example to remove a segment from a ramp schedule

This is a sample request to remove the first or last ramp segment in a ramp schedule. This request removes the ramp-specific fields from a quote line group such as IsRamped and SegmentType. Additionally, this request removes the RampIdentifier and SegmentIdentifier fields from a quote line item.

```

```

## Code Examples

```
{
  "groupRampAction": "EditGroup",
  "pricingPref": "System",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "0Q0xx0000004CYqCAM",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "PATCH",
            "id": "0Q0xx0000004CYqCAM"
          }
        }
      },
      {
        "referenceId": "1C9xx0000004CVcCAM",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "PATCH",
            "id": "1C9xx0000004CVcCAM"
          },
          "StartDate": "2025-05-01",
          "EndDate": "2025-06-30",
          "SortOrder": 1,
          "IsRamped": true,
          "SegmentType": "Custom"
        }
      }
    ]
  }
}
```

```
{
  "groupRampAction": "EditRampSchedule",
  "pricingPref": "System",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "0Q0xx0000004CYqCAM",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "PATCH",
            "id": "0Q0xx0000004CYqCAM"
          }
        }
      },
      {
        "referenceId": "1C9xx0000004CVcCAM",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "PATCH",
            "id": "1C9xx0000004CVcCAM"
          },
          "StartDate": "2025-05-01",
          "EndDate": "2025-06-30"
        }
      },
      {
        "referenceId": "1C9xx0000004CVcAAM",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "PATCH",
            "id": "1C9xx0000004CVcAAM"
          },
          "StartDate": "2025-07-01",
          "EndDate": "2025-08-30"
        }
      },
      {
        "referenceId": "1C9xx0000004CVcBAM",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "PATCH",
            "id": "1C9xx0000004CVcBAM"
          },
          "StartDate": "2025-09-01",
          "EndDate": "2025-10-30"
        }
      }
    ]
  }
}
```

```
{
  "groupRampAction": "AddProducts",
  "pricingPref": "System",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "0Q0xx0000004CKKCA2",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "PATCH",
            "id": "0Q0xx0000004CKKCA2"
          }
        }
      },
      {
        "referenceId": "1C9xx0000004CCGCA2",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "PATCH",
            "id": "1C9xx0000004CCGCA2"
          }
        }
      },
      {
        "referenceId": "ref_01txx0000006iCXAAY_0",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "POST",
            "id": "ref_01txx0000006iCXAAY_0"
          },
          "QuoteId": "@{0Q0xx0000004CKKCA2.id}",
          "Id": "ref_01txx0000006iCXAAY_0",
          "UnitPrice": 2000,
          "Product2Id": "01txx0000006iCXAAY",
          "PricebookEntryId": "01uxx0000008yciAAA",
          "Quantity": 1,
          "StartDate": "2025-05-28T00:00:00.000Z",
          "BillingFrequency": null,
          "PeriodBoundary": null,
          "QuoteLineGroupId": "1C9xx0000004CCGCA2"
        }
      },
      {
        "referenceId": "1C9xx0000004CCGCAB",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "PATCH",
            "id": "1C9xx0000004CCGCAB"
          }
        }
      },
      {
        "referenceId": "ref_01txx0000006iCXABY_0",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "POST",
            "id": "ref_01txx0000006iCXABY_0"
          },
          "QuoteId": "@{0Q0xx0000004CKKCA2.id}",
          "Id": "ref_01txx0000006iCXAAY_0",
          "UnitPrice": 2000,
          "Product2Id": "01txx0000006iCXAAY",
          "PricebookEntryId": "01uxx0000008yciAAA",
          "Quantity": 1,
          "StartDate": "2025-05-28T00:00:00.000Z",
          "BillingFrequency": null,
          "PeriodBoundary": null,
          "QuoteLineGroupId": "1C9xx0000004CCGCAB"
        }
      }
    ]
  }
}
```

```
{
  "pricingPref": "System",
  "groupRampAction": "DeleteProducts",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "0Q0SG000000L5r70AC",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "PATCH",
            "id": "0Q0SG000000L5r70AC"
          }
        }
      },
      {
        "referenceId": "0QLSG000000WuTh4AK",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "DELETE",
            "id": "0QLSG000000WuTh4AK"
          }
        }
      },
      {
        "referenceId": "0QLSG000000WuTh4BK",
        "record": {
          "attributes": {
            "type": "QuoteLineItem",
            "method": "DELETE",
            "id": "0QLSG000000WuTh4AK"
          }
        }
      }
    ]
  }
}
```

```
{
  "pricingPref": "System",
  "groupRampAction": "DeleteSegment",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "0Q0xx0000004CfICAU",
        "record": {
          "attributes": {
            "type": "Quote",
            "method": "PATCH",
            "id": "0Q0xx0000004CfICAU"
          }
        }
      },
      {
        "referenceId": "1C9xx0000004FjcCAE",
        "record": {
          "attributes": {
            "type": "QuoteLineGroup",
            "method": "DELETE",
            "id": "1C9xx0000004FjcCAE",
            "action": "DeleteGroup"
          }
        }
      }
    ]
  }
}
```
