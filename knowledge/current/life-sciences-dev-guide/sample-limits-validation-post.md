---
title: "Sample Limits Validation (POST)"
domain: life-sciences-dev-guide
topic: sample-limits-validation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.565Z
estimatedTokens: 205
keywords: [Sample, Limits, Validation, POST, Validate, samples, requested, visit, against, account, product, limit, template]
---

# Sample Limits Validation (POST)

> Validate the samples requested during a visit against the sample limits for that
    account, product, and sample limit template.

# Sample Limits Validation (POST)

Validate the samples requested during a visit against the sample limits for that account, product, and sample limit template.

Resource

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sampleLimitsValidationRequest | SampleLimitsRequestDataInput | The payload that contains the sample limit validations to perform in JSON format. | Required | 65.0 |

Response body for POST

[Sample Limits Validation Response Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_sample_limits_validation_response_output.htm "Output representation for a sample limits validation request.")

## Code Examples

```
/connect/life-sciences/commercial/sample-limits-validation
```

```
{
  "sampleLimitsValidationRequest": {
    "data": {
      "providerVisitsData": {
        "providerVisitData": {
          "territory": "<ProviderVisit.Visit.Territory>",
          "visitPlannedStartTime": "2025-01-01T15:45:00.000+0000",
          "productDisbursements": [
            {
              "productId": "2_childProduct1",
              "productBatchItemId": "",
              "accountId": "001XXXXXXXXXXXXAAG",
              "quantity": 1
            },
            {
              "productBatchItemId": "",
              "productId": "2_childProduct2",
              "quantity": 6,
              "accountId": "001XXXXXXXXXXXXAAG"
            }
          ],
          "providerVisitSampleLimitTransactions": {
            "001XXXXXXXXXXXXAAG": [
              {
                "providerVisitId": "a2TXXXXXXXXXXXXEAI",
                "limitProductId": "2_childProduct1",
                "productId": "2_childProduct1",
                "providerSampleLimitTemplateName": "PerYearTemplate",
                "providerVisitRequestedSampleId": "callSample1",
                "ProviderSampleLimitId": "sampleLimit1",
                "quantity": "1",
                "account": "001XXXXXXXXXXXXAAG",
                "visitPlannedStartTime": "2025-01-01T15:45:00.000+0000"
              },
              {
                "limitProductId": "2_parentProduct1",
                "quantity": "6",
                "productId": "2_childProduct2",
                "ProductDisbursementId": "callSample2",
                "ProviderVisitId": "a2TXXXXXXXXXXXXEAI",
                "providerSampleLimitTemplateName": "parent_template1",
                "ProviderSampleLimitId": "defaultSampleLimit1",
                "account": "001XXXXXXXXXXXXAAG",
                "visitPlannedStartTime": "2025-01-01T15:45:00.000+0000"
              }
            ]
          }
        },
        "childProviderVisitsData": {
          "productDisbursements": [
            {
              "accountId": "001XXXXXXXXXXXXAAG",
              "productId": "2_childProduct1",
              "productBatchItemId": "",
              "quantity": 1
            },
            {
              "accountId": "001XXXXXXXXXXXXAAG",
              "productId": "2_childProduct1",
              "productBatchItemId": "",
              "quantity": 1
            },
            {
              "accountId": "001XXXXXXXXXXXXAAG",
              "productId": "2_childProduct2",
              "productBatchItemId": "",
              "quantity": 1
            }
          ],
          "providerVisitSampleLimitTransactions": {
            "0010p000013CLb1AAG": [
              {
                "providerVisitId": "a2TXXXXXXXXXXXXEAI",
                "limitProductId": "2_childProduct1",
                "productId": "2_childProduct1",
                "ProductDisbursementId": "",
                "providerVisitRequestedSampleId": "callSample3",
                "providerSampleLimitTemplateName": "PerYearTemplate",
                "ProviderSampleLimitId": "sampleLimit1",
                "visitPlannedStartTime": "2025-01-01T15:45:00.000+0000",
                "account": "001XXXXXXXXXXXXAAG",
                "quantity": "1"
              },
              {
                "ProviderVisitId": "a2TXXXXXXXXXXXXEAI",
                "limitProductId": "2_parentProduct1",
                "productId": "2_childProduct2",
                "ProductDisbursementId": "callSample4",
                "providerVisitRequestedSampleId": "",
                "providerSampleLimitTemplateName": "parent_template1",
                "ProviderSampleLimitId": "defaultSampleLimit1",
                "visitPlannedStartTime": "2025-01-01T15:45:00.000+0000",
                "account": "001XXXXXXXXXXXXAAG",
                "quantity": "6"
              }
            ]
          }
        }
      },
      "pendingSyncData": {
        "providerVisitSampleLimitTransactions": {
          "001XXXXXXXXXXXXAAG": [
            {
              "providerVisitId": "lscpr1__call__c-639XXXXX-XXXX-XXXX-XXXX-XXXXXXXXXAEB",
              "providerVisitRequestedSampleId": "lscpr1__callsampleorder__c-988XXXXX-XXXX-XXXX-XXXX-XXXXXXXXX1BF",
              "ProductDisbursementId": "",
              "limitProductId": "a5AXXXXXXXXXXXXEAU",
              "productId": "a5AXXXXXXXXXXXXEAU",
              "quantity": "1",
              "visitPlannedStartTime": "2024-12-11T18:28:31.404+0000",
              "ProviderSampleLimitId": "a5cXXXXXXXXXXXXAAE",
              "account": "001XXXXXXXXXXXXAAG",
              "providerSampleLimitTemplateName": "PerYearTemplate"
            }
          ]
        },
        "productDisbursements": [
          {}
        ]
      }
    },
    "action": "validate"
  }
}
```

## Related Topics

- SampleLimitsRequestDataInput (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_sample_limits_request_data_input.htm)
- Sample Limits Validation Response Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_sample_limits_validation_response_output.htm)
