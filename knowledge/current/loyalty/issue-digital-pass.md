---
title: "Issue Digital Pass"
domain: loyalty
topic: issue-digital-pass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.017Z
estimatedTokens: 1014
keywords: [Issue, Digital, Pass, action, issues, party, configured, template, Loyalty, Gift, Card, input, depend, trigger, issuance]
---

# Issue Digital Pass

> This action issues a digital pass to a specified party based on the
      configured digital pass template. The digital pass template can be of type Loyalty or Gift
      Card, and the available input parameters depend on the template type. You can trigger the
      issuance of a digital pass using its corresponding custom invocable action.

# Issue Digital Pass

This action issues a digital pass to a specified party based on the configured digital pass template. The digital pass template can be of type Loyalty or Gift Card, and the available input parameters depend on the template type. You can trigger the issuance of a digital pass using its corresponding custom invocable action.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/custom/issueDigitalPass/actionName

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

<actionName> is the customer-defined name of the digital pass template. The action name is derived from the digital pass template. Spaces in the template name are URL-encoded (for example, replaced with %20).

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

Input parameters depend on the digital pass template type (Loyalty or Gift Card). At runtime, the system determines the template type and loads the corresponding parameters. These input parameters are applicable to both Loyalty and Gift Card digital passes.

| Input | Details |
| --- | --- |
| partyId | TypestringDescriptionRequired. The ID of the party (for example, Loyalty Program Member or Contact) to whom the digital pass is issued. |
| sourceRecordReferenceId | TypeIDDescriptionRequired. Reference ID of the source record initiating the digital pass issuance (for example, a transaction, membership record, or promotion). |

## Inputs when the template type is Loyalty

These parameters are optional and are created by default when the loyalty digital pass template is activated. Users can modify these values as needed.

| Input | Details |
| --- | --- |
| accountNameLabel | TypestringDescriptionThe account name displayed on the loyalty digital pass. |
| accountIdLabel | TypestringDescriptionThe account ID associated with the digital pass. Use this when issuing a digital pass for an account. |
| barcode | TypestringDescriptionThe barcode value displayed on the loyalty digital pass. |
| rewardPoints | TypestringDescriptionThe reward points balance displayed on the loyalty digital pass. |
| tier | TypestringDescriptionThe tier of the loyalty program member displayed on the digital pass. |
| memberType | TypestringDescriptionThe type of loyalty program member displayed on the digital pass. |
| expiryDate | TypedateDescriptionThe expiry date of the loyalty digital pass. |

## Inputs when the template type is Gift Card

These parameters are optional and are created by default when the gift card digital pass template is activated. Users can modify these values as needed.

| Input | Details |
| --- | --- |
| barcode | TypestringDescriptionThe barcode value displayed on the gift card. |
| cardNumber | TypestringDescriptionThe number displayed on the gift card. |
| value | TypestringDescriptionThe monetary value of the gift card. |
| expiryDate | TypedateDescriptionThe expiry date of the gift card. |

## Outputs

For Issue Digital Pass, the action returns a URL that can be used to create or add the digital pass to a supported wallet.

| Output | Details |
| --- | --- |
| digitalPassUrl | TypeList<String>DescriptionThe URL used to create the digital pass. This URL can be used to add the pass to a supported digital wallet. |
| errors | TypeList<String>DescriptionA list of error messages if the operation fails. |
| isSuccess | TypeBooleanDescriptionIndicates whether the operation is successful (true) or not (false). |

## Examples

This section has the sample request and response for issuing the digital pass.

Sample Resource

/services/data/v66.0/actions/custom/issueDigitalPass/Gift%20Card

Sample request

Here’s an example POST request for Gift Card Digital Pass.

```

```

Sample response

Here's a sample response for the Issue Digital Pass action. The output structure is the same for both template types. If the digital pass template is inactive or misconfigured, the action returns an error.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "partyId": "0lMSG0000001Q8X2AU",
      "sourceRecordReferenceId": "0lMSG0000001Q8X2AU",
      "barcode": "GC-45879234",
      "expiryDate": "2026-12-31"
    }
  ]
}
```

```
{
  "actionName": "Gift_Card",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "digitalPassUrl": "https://wallet.example.com/pass/refresh/9f3a8c7b"
  }
}
```
