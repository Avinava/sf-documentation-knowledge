---
title: "Attributes for the Card Hosted Payments Component"
domain: blng-dev
topic: attributes-for-the-card-hosted-payments-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.868Z
estimatedTokens: 1149
keywords: [Attributes, Card, Hosted, Payments, Component, Review]
---

# Attributes for the Card Hosted Payments Component

> Review the attributes for the Card Hosted Payments component.

# Attributes for the Card Hosted Payments Component

Review the attributes for the Card Hosted Payments component.

| Available in: Salesforce Billing Winter ‘20 and later |
| --- |


All attributes have a Default value of False and Access value of Global.

| Name | Type | Description |
| --- | --- | --- |
| paymentProvider | String | Defines the source for processing payments. The cardPaymentMethod component requires that this attribute has a value of SalesforceBilling. |
| transactionType | String | The action that the component performs when users select the component's button. Accepts values of SavePaymentCard or PaymentSale. |
| transactionParams | Object | Accepts values of amount, accountId, and gatewayId. |
| emailRequired | Boolean | Specifies whether the Email field is required. |
| cardHolderNameRequired | Boolean | Specifies whether the Card Holder Name field is required. |
| cardTypeRequired | Boolean | Specifies whether the Card Type field is required. |
| expiryMonthRequired | Boolean | Specifies whether the Expiration Month field is required. |
| expiryYearRequired | Boolean | Specifies whether the Expiration Year field is required. |
| cvvRequired | Boolean | Specifies whether the CVV field is required. |
| firstNameRequired | Boolean | Specifies whether the First Name field is required. |
| lastNameRequired | Boolean | Specifies whether the Last Name field is required. |
| addressLine1Required | Boolean | Specifies whether the Address Line 1 field is required. |
| addressLine2Required | Boolean | Specifies whether the Address Line 2 field is required. |
| cityRequired | Boolean | Specifies whether the City field is required. |
| stateRequired | Boolean | Specifies whether the State field is required. |
| countryRequired | Boolean | Specifies whether the Country field is required. |
| postalCodeRequired | Boolean | Specifies whether the Postal Code field is required. |
| hideCardHolderName | Boolean | Specifies whether the Cardholder Name field is hidden. |
| hideCardType | Boolean | Specifies whether the Card Type field is hidden. |
| hideExpiryMonth | Boolean | Specifies whether the Expiration Month field is hidden. |
| hideExpiryYear | Boolean | Specifies whether the Expiration Year field is hidden. |
| hideCvv | Boolean | Specifies whether the CVV field is hidden. |
| hideSaveForFuture | Boolean | Specifies whether the Save for Future field is hidden. |
| hideAutoPay | Boolean | Specifies whether the AutoPay field is hidden. |
| hideFirstName | Boolean | Specifies whether the First Name field is hidden. |
| hideLastName | Boolean | Specifies whether the Last Name field is hidden. |
| hideEmail | Boolean | Specifies whether the Email field is hidden. |
| hideAddressLine1 | Boolean | Specifies whether the Address Line 1 field is hidden. |
| hideAddressLine2 | Boolean | Specifies whether the Address Line 2 field is hidden. |
| hideCity | Boolean | Specifies whether the City field is hidden. |
| hideState | Boolean | Specifies whether the State field is hidden. |
| hideCountry | Boolean | Specifies whether the Country field is hidden. |
| hidePostalCode | Boolean | Specifies whether the Postal Code field is hidden. |
| creditCardInformationLabel | Boolean | Label for the Credit Card Information section. |
| addressInformationLabel | Boolean | Label for the Address Information section. |
| payButtonLabel | String | Label for the Pay button. |
| cardHolderNameLabel | String | Label for the cardHolderName field. |
| cardTypeLabel | String | Label for the cardType field. |
| cardNumberLabel | String | Label for the cardNumber field. |
| expiryMonthLabel | String | Label for the expiryMonth field. |
| expiryYearLabel | String | Label for the expiryYear field. |
| cvvLabel | String | Label for the CVV field. |
| saveForFutureLabel | String | Label for the saveForFuture field. |
| autoPayLabel | String | Label for the AutoPay field. |
| firstNameLabel | String | Label for the firstName field. |
| lastNameLAbel | String | Label for the lastName field. |
| emailLabel | String | Label for the email field. |
| addressLine1Label | String | Label for the addressLine1 field. |
| addressLine2Label | String | Label for the addressLine2 field. |
| cityLabel | String | Label for the city field. |
| stateLabel | String | Label for the state field. |
| countryLabel | String | Label for the country field. |
| postalCodeLabel | String | Label for the postalCode field. |
| hideAddressSection | String | Specifies whether the address section is hidden. |
| clearFormData | String | Clears the component’s form data. |
