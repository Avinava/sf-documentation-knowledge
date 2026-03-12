---
title: "SignupRequest"
domain: sfFieldRef
topic: signuprequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.081Z
estimatedTokens: 667
keywords: [SignupRequest, new, sign-up]
---

# SignupRequest

> Represents a request for a new sign-up.

# SignupRequest

Represents a request for a new sign-up.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SignupRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_signuprequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthCode | Connected App Authorization Code | string |  | 120 |  |  |
| Company | Company | string |  | 80 |  |  |
| ConnectedAppCallbackUrl | Connected App Callback URL | textarea |  | 2000 |  |  |
| ConnectedAppConsumerKey | Connected App Consumer Key | string |  | 120 |  |  |
| Country | Country | string |  | 3 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreatedOrgId | Created Org | string |  | 15 |  |  |
| CreatedOrgInstance | Created Org Instance | string |  | 10 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Edition | Edition | picklist |  | 255 |  |  |
| EmailBrandId | Email Brand Id | string |  | 15 |  |  |
| ErrorCode | Error Code | string |  | 8 |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| Id | Signup Request ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSignupEmailSuppressed | Suppress signup email | boolean |  |  |  |  |
| IsTso | Apply TSO Licensing | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LoginBrandId | Login Brand Id | string |  | 15 |  |  |
| Name | Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PreferredLanguage | Preferred Language | picklist |  | 255 |  |  |
| ResolvedTemplateId | Resolved Template Id | string |  | 15 |  |  |
| ShouldConnectToEnvHub | Connect to Environment Hub | boolean |  |  |  |  |
| SignupEmail | Email | email |  | 80 |  |  |
| SignupSource | Signup Source Description | string |  | 60 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subdomain | Subdomain | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateDescription | Template Description | string |  | 255 |  |  |
| TemplateId | Template | string |  | 15 |  |  |
| TrialDays | Trial Days | int | 9 |  |  |  |
| TrialSourceOrgId | Source Org | string |  | 15 |  |  |
| Username | Username | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
