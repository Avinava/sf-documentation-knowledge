---
title: "logComplianceEvaluations(loggingInputs)"
domain: omnistudio
topic: logcomplianceevaluationslogginginputs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.578Z
keywords: [logComplianceEvaluations, loggingInputs, API, Version, Signature, Parameters, Return, Value, Example]
---

# logComplianceEvaluations(loggingInputs)

# logComplianceEvaluations(loggingInputs)

Log compliance check events for control. This API supports a maximum number of 25 logs per request. You can make up to 200,000 audit log API calls per year.

## API Version

64.0

## Signature

public static ConnectApi.ComplianceLoggingResponse logComplianceEvaluations(ConnectApi.ComplianceLoggingInfo loggingInputs)

## Parameters

loggingInputs

Type: [ConnectApi.ComplianceLoggingInfo](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_logging_info.htm "Compliance evaluation logging request.")

Details of the logging request for a compliance evaluation.

## Return Value

Type: [ConnectApi.ComplianceLoggingResponse](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_logging_response.htm "Compliance bulk logging result.")

Compliance bulk logging result.

## Example

```

```