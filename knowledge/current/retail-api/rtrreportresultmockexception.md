---
title: "RTRReportResult.MockException"
domain: retail-api
topic: rtrreportresultmockexception
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.452Z
estimatedTokens: 161
namespace: The
keywords: [RTRReportResult.MockException, mock, exceptions, unit, test, execution, Implementation]
---

# RTRReportResult.MockException

> This class is used to create mock exceptions for the unit test execution.

**Namespace:** `The`

# RTRReportResult.MockException

This class is used to create mock exceptions for the unit test execution.

## Namespace

The RTRReportResult.MockException class extends Exception.

The supported modifier is global.

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| RTRReportResult.MockException​(String message) | The constructor for creating mock exceptions for the unit test execution.message: String. The message to return as part of the exception. | 60.0 |

## Example Implementation

To unit test error handling scenarios, set up a mock exception to be thrown during execution.

```

```

## Code Examples

```apex
@IsTest
  public static void myTestMethod() {
    // Setup
    
    // Setup your required data for the test
    
    // Create a mock RTRReportResult
    cgcloud.RTRReportResult.MockException mockException = new cgcloud.RTRReportResult.MockException(
      'Sample Error'
    );
    
    // Set the mock in RTRReportResult.execute so the call to this method
    // returns our mock response
    cgcloud.RTRReportResult.setMock(new List<Object>{ mockException });
    
    // Test
    
    // Run your code to be tested. RTRReportResult.execute call will
    // throw a CGCloudException with the mock exception message
    
    // Assert
    
    // Assert your code is working as expected.
  }
```
