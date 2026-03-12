---
title: "Refresh Digital Pass"
domain: loyalty
topic: refresh-digital-pass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.027Z
estimatedTokens: 955
keywords: [Refresh, Digital, Pass, action, refreshes, party, configured, setup, trigger, corresponding, custom, invocable, REST, HTTP, Inputs]
---

# Refresh Digital Pass

> This action refreshes a digital pass to a specified party based on the
      configured digital pass setup. You can trigger the digital pass refresh using its
      corresponding custom invocable action.

# Refresh Digital Pass

This action refreshes a digital pass to a specified party based on the configured digital pass setup. You can trigger the digital pass refresh using its corresponding custom invocable action.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/custom/refreshDigitalPass/actionName

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

<actionname> is the name of the custom action associated with the digital pass configuration.

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

If a digital pass already exists for the specified partyId and sourceRecordReferenceId, the system refreshes the existing pass. If no digital pass exists for the specified party, the system silently exits without creating a new pass.

| Output | Details |
| --- | --- |
| errors | TypeList<String>DescriptionA list of error messages if the operation fails. |
| isSuccess | TypeBooleanDescriptionIndicates whether the operation is successful or not. |

## Examples

This section has the sample request and response for refreshing the digital pass.

Sample Resource

/services/data/v66.0/actions/custom/refreshDigitalPass/Gift%20Card

Sample request

Here’s sample request for the Refresh Digital Pass action. If a digital pass already exists for the specified partyId and sourceRecordReference, the system refreshes it. If no digital pass exists for the specified party, the system silently exits without creating a new pass.

```

```

Sample response

Here's a sample response for the successful refresh.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "partyId": "0lMSG0000001Q8X2AU",
      "sourceRecordReferenceId": "0lMSG0000001Q8X2AU"
    }
  ]
}
```

```
{
  "actionName": "Gift Card",
  "errors": null,
  "isSuccess": true
}
```
