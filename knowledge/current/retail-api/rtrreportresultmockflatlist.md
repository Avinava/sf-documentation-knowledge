---
title: "RTRReportResult.MockFlatlist"
domain: retail-api
topic: rtrreportresultmockflatlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.459Z
estimatedTokens: 219
namespace: The
keywords: [RTRReportResult.MockFlatlist, mock, responses, unit, test, execution, Implementation]
---

# RTRReportResult.MockFlatlist

> This class is used to create mock responses for the unit test execution.

**Namespace:** `The`

# RTRReportResult.MockFlatlist

This class is used to create mock responses for the unit test execution.

## Namespace

The RTRReportResult.MockFlatlist class extends RTRReportResult.Flatlist.

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| RTRReportResult.MockFlatlist​(List<RTRReportResult.MockFlatlistRow> rows) | The constructor for creating mock responses for the unit test execution.rows: List<RTRReportResult.MockFlatlistRow> . The list of MockFlatlistRow instances contained in MockFlatlist.The mocked value is returned when the getRows method is executed on the FlatlistRowIterable instance. | 60.0 |

## Example Implementation

To unit test a Flatlist component in, mock the resulting report data rows with the MockFlatlist and MockFlatlistRow classes.

```

```

## Code Examples

```apex
@IsTest
  public static void myTestMethod() {
    // Setup

    // Setup your required data for the test

    // Expected RTR Report Filters
    Map<String, Object> expectedReportFilters = null; //...

    // Create a mock RTRReportResult
    cgcloud.RTRReportResult.MockRTRReportResult mockReportResult = new cgcloud.RTRReportResult.MockRTRReportResult(
      // Create a map with the returned report components
      new Map<String, cgcloud.RTRReportResult.ReportComponent>{
        // Flatlist component
        'FlatList' => new cgcloud.RTRReportResult.MockFlatlist(
          // For a flatlist, specify the mocked rows
          new List<cgcloud.RTRReportResult.MockFlatlistRow>{
            new cgcloud.RTRReportResult.MockFlatlistRow(
              // For each row, set the column values
              new Map<String, Object>{
                'RowType' => 'Product-Promo', // RowType is required
                'productdimension.id' => productid1,
                'KPI1' => 123,
                'KPI2' => 456
              }
            ),
            new cgcloud.RTRReportResult.MockFlatlistRow(
              // For each row, set the column values
              new Map<String, Object>{
                'RowType' => 'Product-Promo', // RowType is required
                'productdimension.id' => productid2,
                'KPI1' => 789,
                'KPI2' => 123
              }
            )
          }
        )
      }
    );

    // Set the mock in RTRReportResult.execute so the call to this method
    // returns our mock response
    cgcloud.RTRReportResult.setMock(new List<Object>{ mockReportResult });

    // Test

    // Run your code to be tested. RTRReportResult.execute call will
    // return the mock result

    // Assert

    // Assert your code is working as expected.

    // You can also validate RTRReportResult.execute was called with the expected
    // parameters
    system.assertEquals('0001', mockReportResult.getSalesOrg());
    system.assertEquals('MySampleReport', mockReportResult.getReportName());
    system.assertEquals(expectedReportFilters, mockReportResult.getFilters());
  }
```
