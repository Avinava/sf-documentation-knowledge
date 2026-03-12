---
title: "ConnectApi.RenewInsurancePoliciesIAInputRep"
domain: insurance-developer-guide
topic: connectapirenewinsurancepoliciesiainputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.348Z
estimatedTokens: 454
namespace: String
keywords: [Apex, record, insurance, policies, renewed]
---

# ConnectApi.RenewInsurancePoliciesIAInputRep

> An Apex ConnectApi.RenewInsurancePoliciesIAInputRep record that contains the details of
    the insurance policies to be renewed.

**Namespace:** `String`

# ConnectApi.RenewInsurancePoliciesIAInputRep

An Apex ConnectApi.RenewInsurancePoliciesIAInputRep record that contains the details of the insurance policies to be renewed.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| execute​ConfigurationRules | Boolean | Indicates whether the configuration rules for renewal must be executed (true) or not (false). | Optional | 64.0 |
| execute​QualificationRules | Boolean | Indicates whether the qualification rules for renewal must be executed (true) or not (false). | Required for quote renewals. | 64.0 |
| fieldSetIds | Field​SetIdsInputRep | Input representation of field set IDs. | Optional | 64.0 |
| flow​APINameWithNamespace | String | The API name of the flow to execute changes before each policy or quote renewal process. Include the namespace prefix, if any. | Optional | 64.0 |
| issueQuote | Boolean | Indicates whether the renewal quote must be issued (true) or not (false). | Optional | 64.0 |
| jobIdentifier | String | A unique ID of the batch job that's used to monitor and generate reports using Custom Report Type. The maximum length is 50 characters. | Required | 64.0 |
| policyId | String | ID of the insurance policy to be renewed. | Required | 64.0 |
| priceBookId | String | ID of the price book that's used to renew policies. Defaults to the Standard Price Book record ID if no value is provided. | Required for quote renewals. | 64.0 |
| product​SellingModel | String | The model that's used to offer the product, such as one-time or term-based. The default is one-time if no value is provided. | Required for quote renewals. | 64.0 |
| sameTenure | Boolean | Indicates whether the same tenure must be set for renewal as original policy (true) or not (false). | Optional | 64.0 |

## Related Topics

- Field​SetIdsInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_field_set_ids_input_re.htm)
