---
title: "RTRReportResult.MockRTRReportResult"
domain: retail-api
topic: rtrreportresultmockrtrreportresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.462Z
estimatedTokens: 191
namespace: The
keywords: [RTRReportResult.MockRTRReportResult, mock, responses, unit, test, execution, Implementation]
---

# RTRReportResult.MockRTRReportResult

> This class is used to create mock responses for the unit test execution.

**Namespace:** `The`

# RTRReportResult.MockRTRReportResult

This class is used to create mock responses for the unit test execution.

## Namespace

The RTRReportResult.MockRTRReportResult class extends RTRReportResult.

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| RTRReportResult.MockRTRReportResult​(Map<String, RTRReportResult.ReportComponent>​ components) | The constructor for creating mock responses for the unit test execution.components: Map<String, RTRReportResult.ReportComponent> . A map of a reporting component name to a mock report component instance.The mocked value is returned when the getComponent method is executed. | 60.0 |

## Example Implementation

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
