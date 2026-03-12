---
title: "postInsuranceGroupRating(gbGroupRatingInputParam, quoteId)"
domain: insurance-developer-guide
topic: postinsurancegroupratinggbgroupratinginputparam-quoteid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.966Z
estimatedTokens: 288
keywords: [postInsuranceGroupRating, gbGroupRatingInputParam, quoteId, Rate, group, benefits, quote, calculate, premiums, line, items, API, Version, Requires, Chatter]
---

# postInsuranceGroupRating(gbGroupRatingInputParam, quoteId)

> Rate a group benefits quote to calculate premiums for all quote line items.

# postInsuranceGroupRating(gbGroupRatingInputParam, quoteId)

Rate a group benefits quote to calculate premiums for all quote line items.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceGroupRatingOutputRepresentation postInsuranceGroupRating(ConnectApi.InsuranceGroupRatingInputRepresentation gbGroupRatingInputParam, String quoteId)

## Parameters

gbGroupRatingInputParam

Type: [ConnectApi.InsuranceGroupRatingInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_group_rating.htm "Input representation for rating a group benefits quote.")

The details required for the group rating process.

quoteId

Type: String

ID of the quote to perform the group rating on.

## Return Value

Type: [ConnectApi.InsuranceGroupRatingOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_group_rating.htm "Output representation for the group benefits rating process.")

## Example

Here's an example of how to invoke the Insurance Group Rating API from Apex code.

```

```

## Code Examples

```apex
// Group Rating via Connect API (simple version)

// 1) Build the input
ConnectApi.InsuranceGroupRatingInputRepresentation input =
    new ConnectApi.InsuranceGroupRatingInputRepresentation();

// Required: Quote Line Item Ids to rate
// input.quoteLineItemIds = new List<String>{
//     '0QLxx00000001A1AAY', '0QLxx00000001A2AAY'
// };

// Optional: Rating date (ISO-8601, e.g., 2025-11-26)
input.ratingDate = '2025-11-26T14:19:30.000';

// Optional: Batch size (process quote line items in batches)
// input.batchSize = 100;

// 2) Execute the POST API with the Quote Id
String quoteId = '0Q0SG000000PcEz0AK'; // Quote Id (type 0Q0)

try {
    ConnectApi.InsuranceGroupRatingOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceGroupRating(
            input,
            quoteId
        );

    System.debug('Group Rating success: ' + result.isSuccess);
    System.debug('Errors: ' + JSON.serializePretty(result.errors));
} catch (Exception e) {
    System.debug('Group Rating error: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceGroupRatingInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_group_rating.htm)
- ConnectApi.InsuranceGroupRatingOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_group_rating.htm)
