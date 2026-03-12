---
title: "RTRReportResult.MockScoreCard"
domain: retail-api
topic: rtrreportresultmockscorecard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.464Z
estimatedTokens: 191
namespace: The
keywords: [RTRReportResult.MockScoreCard, mock, responses, unit, test, execution, Implementation]
---

# RTRReportResult.MockScoreCard

> This class is used to create mock responses for the unit test execution.

**Namespace:** `The`

# RTRReportResult.MockScoreCard

This class is used to create mock responses for the unit test execution.

## Namespace

The RTRReportResult.MockScoreCard class extends RTRReportResult.ScoreCard.

The supported modifiers are global and virtual.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| RTRReportResult.MockScoreCard​(Map<String, Decimal> kpiValues) | The constructor for creating mock responses for the unit test execution.kpiValues: Map<String, Decimal> . A map of a KPI name to a decimal value.The mocked value is returned when the getValue method is executed. | 60.0 |

## Example Implementation

To unit test a scorecard component, mock the scorecard values using the MockScoreCard class.

```

```

## Code Examples

```apex
@IsTest
  public static void myTestMethod() {
    // Setup

    // Setup your required data for the test

    // Expected RTR Report Filters
    Map<String, Object> expectedReportFilters = ...

    // Create a mock RTRReportResult
    cgcloud.RTRReportResult.MockRTRReportResult mockReportResult = new cgcloud.RTRReportResult.MockRTRReportResult(
      // Create a map with the returned report components
      new Map<String, cgcloud.RTRReportResult.ReportComponent>{
        // Flatlist component
        'ScoreCard' => new cgcloud.RTRReportResult.MockScoreCard(
          // For KPI, set the values
          new Map<String, Object>{ 'KPI1' => 123, 'KPI2' => 456 }
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
