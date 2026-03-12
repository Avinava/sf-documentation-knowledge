---
title: "Required Gateway Classes"
domain: blng-dev
topic: required-gateway-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.931Z
estimatedTokens: 543
keywords: [Gateway, Classes, payment, records, require, several, communicate, regardless, Specific, may, additional]
---

# Required Gateway Classes

> All payment gateway and payment method records require several fields to communicate
  with the payment gateway, regardless of the gateway type. Specific gateway types may also require
  additional fields.

# Required Gateway Classes

All payment gateway and payment method records require several fields to communicate with the payment gateway, regardless of the gateway type. Specific gateway types may also require additional fields.

| Available in: Salesforce Billing 7.0 and later |
| --- |


## Payment Method Fields

| Label | API Name |
| --- | --- |
| Payment Method Name | Name |
| Account | blng__Account__c |
| Active | blng__Active__c |
| Auto Pay | blng__AutoPay__c |
| Bank Account Name | blng__BankAccountName__c |
| Bank Account Number | blng__BankAccountNumber__c |
| Bank Account Type | blng__BankAccountType__c |
| Bank Name | blng__BankName__c |
| Bank Routing Code | blng__BankRoutingCode__c |
| Card BIN | blng__CardBIN__c |
| Card CVV | blng__CVV__c |
| Card Expiration Month | blng__CardExpirationMonth__c |
| Card Expiration Year | blng__CardExpirationYear__c |
| Card Last 4 | blng__CardLastFour__c |
| Card Number | blng__CardNumber__c |
| Card Type | blng__CardType__c |
| City | blng__ChequeNumber__c |
| Company | blng__BillingCity__c |
| Country | blng__BillingCompany__c |
| Email | blng__BillingEmail__c |
| Fax | blng__BillingFax__c |
| First Name | blng__BillingFirstName__c |
| Gateway Response | blng__GatewayResponse__c |
| Last Name | blng__BillingLastName__c |
| Name on Card | blng__Nameoncard__c |
| Nick Name | blng__NickName__c |
| Payment Gateway | blng__PaymentGateway__c |
| Payment Gateway Token | blng__PaymentGatewayToken__c |
| Payment Type | blng__PaymentType__c |
| Phone Number | blng__BillingPhone__c |
| Postal Code | blng__BillingZipPostal__c |
| State | blng__BillingStateProvince__c |
| Street Address 1 | blng__BillingStreet__c |
| Street Address 2 | blng__StreetAddress2__c |

## Payment Gateway Fields

Gateway integrations require the following payment gateway record fields regardless of gateway type. If you have a field required by a specific gateway such as Authorize.Net, make sure to add that field to your payment gateway record as well.

| Label | API Name |
| --- | --- |
| Payment Gateway Name | Name |
| Active | blng__Active__c |
| Default | blng__Default__c |
| Gateway Type | blng__GatewayType__c |
