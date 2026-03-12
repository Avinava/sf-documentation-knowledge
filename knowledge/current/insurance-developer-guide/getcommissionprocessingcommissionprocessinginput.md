---
title: "getCommissionProcessing(commissionProcessingInput)"
domain: insurance-developer-guide
topic: getcommissionprocessingcommissionprocessinginput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.819Z
estimatedTokens: 397
keywords: [getCommissionProcessing, commissionProcessingInput, Process, commission, statements, asynchronous, manner, preconfigured, batch, job, API, Version, Requires, Chatter, Usage]
---

# getCommissionProcessing(commissionProcessingInput)

> Process commission statements in an asynchronous manner by using the preconfigured batch
    job.

# getCommissionProcessing(commissionProcessingInput)

Process commission statements in an asynchronous manner by using the preconfigured batch job.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceCommissionProcessingOutputRepresentation getCommissionProcessing(ConnectApi.InsuranceCommissionProcessingInputRepresentation commissionProcessingInput)

```

```

## Parameters

commissionProcessingInput

Type: [ConnectApi.InsuranceCommissionProcessingInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_commission_processing.htm "Input representation details of the insurance commission processing resource. The input includes the commissionStatementIds property required to process commission data.")

Input representation details of the insurance commission processing API.

## Return Value

Type: [ConnectApi.InsuranceCommissionProcessingOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_commission_processing_output.htm "Output representation details of the commission processing resource.")

## Usage

Commission Statement Processing API uses a JSON input that contains a list of commissionStatementIds. The service processes the commission statement asynchronously by using a batch job. The batch job calls the processing flow to process each commission statement line item. When the processing is complete, the service updates the commission statement and sends a notification to the user.

## Code Examples

```
ConnectApi.InsuranceBrokerageFamily, getCommissionProcessing, [ConnectApi.InsuranceCommissionProcessingInputRepresentation], ConnectApi.InsuranceCommissionProcessingOutputRepresentation
```

## Related Topics

- ConnectApi.InsuranceCommissionProcessingInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_commission_processing.htm)
- ConnectApi.InsuranceCommissionProcessingOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_commission_processing_output.htm)
