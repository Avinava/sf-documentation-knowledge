---
title: "RTRReportResult.MockFlatlistRow"
domain: retail-api
topic: rtrreportresultmockflatlistrow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.455Z
estimatedTokens: 252
namespace: The
keywords: [RTRReportResult.MockFlatlistRow, mock, responses, unit, test, execution, Implementation]
---

# RTRReportResult.MockFlatlistRow

> This class is used to create mock responses for the unit test execution.

**Namespace:** `The`

# RTRReportResult.MockFlatlistRow

This class is used to create mock responses for the unit test execution.

## Namespace

The RTRReportResult.MockFlatlistRow class extends RTRReportResult.FlatlistRow.

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| RTRReportResult.MockFlatlistRow​(Map<String, Object> rowData) | The constructor for creating mock responses for the unit test execution.rowData: Map<String, Object> . A map of String to Object that contains different values for all the columns of MockFlatlistRow.The mocked value is returned when the getColumnValue method is executed.The map must have a key called RowType, which sets the type for the row. If a map is provided without this key, this constructor throws an exception. | 60.0 |

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
