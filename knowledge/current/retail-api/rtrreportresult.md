---
title: "RTRReportResult"
domain: retail-api
topic: rtrreportresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.498Z
estimatedTokens: 557
namespace: The
keywords: [RTRReportResult, Apex, access, process, RTR, reports, Implementation]
---

# RTRReportResult

> The RTRReportResult Apex class provides methods to
  access and process RTR reports.

**Namespace:** `The`

# RTRReportResult

The RTRReportResult Apex class provides methods to access and process RTR reports.

## Namespace

The supported modifiers are global, virtual, and with sharing.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| static RTRReportResult execute(String name, String salesOrg, Map<String, Object> filters) | Executes an RTR report and retrieves all the report data.name: String. The internal name of the RTR report configuration to execute.salesOrg: String. The sales org name to execute the report.filters: Map<String, Object>. The report filters as defined in the RTR report metadata. For a list of possible filter types, see Report Execution Filter Types and Limits. | 60.0 |
| static void setMock(List<Object> results) | Sets up mock results for unit test execution.results: List<Object>. A list of object instances of type:RTRReportResultRTRReportResult.MockExceptionWhen running unit tests, the system returns the mock value of the results in the order in which they were specified. For example, for the third execute call, the third item on the list is returned.If the mock result is an instance of RTRReportResult.MockException, the method throws CGCloudException. | 60.0 |
| ReportComponent getComponent(String name) | Retrieves an instance of the reporting UI component.name: String. The reporting component name as defined in theuimapping report metadata.To access the information inside the report, cast the result of this method to the correct type. For example, if the component is Flatlist, cast the return to RTRReportResult.Flatlist.This method throws an exception if the component doesn’t exist in the report, or it’s not from a valid type. | 60.0 |
| String getSalesOrg() | Returns the sales org used for the RTR report execution. | 60.0 |
| String getReportName() | Returns the report name used for the RTR report execution. | 60.0 |
| Map<String, Object> getFilters() | Returns the filters used for the RTR report execution. | 60.0 |

## Example Implementation

Here’s an example implementation of the execute method.

```

```

Here’s an example implementation of how to use the setMock method to unit test multiple execute calls.

```

```

## Code Examples

```apex
cgcloud.RTRReportResult reportResult = cgcloud.RTRReportResult.execute(
    'Promotion Report',  // Report Name
    '0001',  // Sales Org
    new Map<String, Object> { // Report filters
        'periodmonth' => new Map<String, Object> {
            'start' => 0,
            'total' => 12,
            'year' => 2022
        },
        'accountsfids' => new List<String> {'001SL0000004dfgYAA'},
        'productsfids' => new List<String> {'01tSL00000018oNYAQ'},
        'promo_templatesfid' => new List<String> {'a2USL0000000js12AA', 'a2USL0000000jrz2AA'},
        'promo_phase' => new List<String> {
            'Planning',
            'Modeling',
            'Committed',
            'ForApproval'
        },
        'productlevel'=> 'product'
    }
);
```

```apex
@IsTest
  public static void myTestMethod() {
    // Setup
    
    // Setup your required data for the test
    
    // Create a mock RTRReportResult
    cgcloud.RTRReportResult.MockRTRReportResult mockReportResult1 = ...
    cgcloud.RTRReportResult.MockRTRReportResult mockReportResult2 = ...
    cgcloud.RTRReportResult.MockException mockException = ...
    
    // Set the mock in RTRReportResult.execute so the call to this method
    // returns our mock response
    cgcloud.RTRReportResult.setMock(
      new List<Object>{ mockReportResult1, mockReportResult2, mockException }
    );
    
    // Test
    
    // Run your code to be tested. RTRReportResult.execute call will
    // return each mock result (RTRReporResult or throw exception)
    // for each "execute" method called.
    // - First execute call will return first mock in list
    // - Second execute call will return second mock in list
    // - Third execute call will return third mock in list (in this case, it'll throw an exception)
    
    // Assert
    
    // Assert your code is working as expected.
  }
```

## Related Topics

- Report Execution Filter Types and Limits (atlas.en-us.retail_api.meta/retail_api/report_execution_filters.htm)
