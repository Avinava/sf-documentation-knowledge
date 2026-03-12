---
title: "Receipt Upload"
domain: loyalty
topic: receipt-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.654Z
estimatedTokens: 296
keywords: [Receipt, Upload, scan, scanning, app, uses, optical, character, recognition, interpret, receipts, unlocked, package, API, uploads]
---

# Receipt Upload

> Upload and scan a receipt with a receipt scanning app that uses optical character
  recognition to read and interpret receipts. For the unlocked package, this API uploads the image
  into the Amazon S3 bucket.

# Receipt Upload

Upload and scan a receipt with a receipt scanning app that uses optical character recognition to read and interpret receipts. For the unlocked package, this API uploads the image into the Amazon S3 bucket.

## Resource

```

```

## Rest Method Type

PUT

## Signature

```

```

## Input Parameters

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| membershipnumber | String | The unique identifier of the member. | Required |

## Sample Output

```

```

## Output Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| errorCode | Integer | The error code if the transaction fails for any reason. |
| message | String | The error message if the transaction fails for any reason. |
| status | String | The status of the receipt upload. |

#### See Also

-   [*Salesforce Help*: Set Up Amazon Web Services](https://help.salesforce.com/s/articleView?id=sf.loyalty_receipt_setaws.htm&language=en_US)

-   [*Salesforce Help*: Set Up Salesforce Org With Loyalty Management Receipt Scanner Kit Unlocked Package](https://help.salesforce.com/s/articleView?id=sf.loyalty_receipt_setup_unlocked_package.htm&language=en_US)

## Code Examples

```
services/apexrest/upload-receipt
```

```
curl --location --request PUT 'https://yourInstance.salesforce.com/services/apexrest/upload-receipt/?membershipnumber=124345696' \
--header 'Content-Type: image/jpeg' \
--header 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' \
--header 'Cookie: BrowserId=MZ4W4WebEe6bX0_gtfh0Tw; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1' \
--data '@1jFvSuLyR/Alpine receipt (4) (1) (2).jpg'
```

```
{
  "status" : "Success",
  "message" : "b9746ab0-fea3-b9ef-dc9c-ea5b905a822e.jpeg",
  "errorCode" : ""
}
```
