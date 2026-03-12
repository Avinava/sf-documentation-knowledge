---
title: "Organization"
domain: sfFieldRef
topic: organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.189Z
estimatedTokens: 1038
namespace: NamespacePrefix
keywords: [Organization, key, configuration]
---

# Organization

> Represents key configuration information for an
		organization.

**Namespace:** `NamespacePrefix`

# Organization

Represents key configuration information for an organization.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Organization](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_organization.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| City | City | string |  | 40 |  |  |
| ComplianceBccEmail | Compliance BCC Email | email |  | 80 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultAccountAccess | Default Account Access | picklist |  | 40 |  |  |
| DefaultCalendarAccess | Default Calendar Access | picklist |  | 40 |  |  |
| DefaultCampaignAccess | Default Campaign Access | picklist |  | 40 |  |  |
| DefaultCaseAccess | Default Case Access | picklist |  | 40 |  |  |
| DefaultContactAccess | Default Contact Access | picklist |  | 40 |  |  |
| DefaultLeadAccess | Default Lead Access | picklist |  | 40 |  |  |
| DefaultLocaleSidKey | Locale | picklist |  | 40 |  |  |
| DefaultOpportunityAccess | Default Opportunity Access | picklist |  | 40 |  |  |
| DefaultPricebookAccess | Default Price Book Access | picklist |  | 40 |  |  |
| DelegatedAuthenticationServiceUrl | Single Sign-On Gateway URL | url |  | 255 |  |  |
| Division | Division | string |  | 80 |  |  |
| Fax | Fax | phone |  | 40 |  |  |
| FiscalYearStartMonth | Fiscal Year Starts In | int | 9 |  |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Organization ID | id |  | 18 |  |  |
| InstanceName | Instance Name | string |  | 40 |  |  |
| IsReadOnly | Is Read Only | boolean |  |  |  |  |
| IsSandbox | Is Sandbox | boolean |  |  |  |  |
| LanguageLocaleKey | Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| MonthlyPageViewsEntitlement | Monthly Page Views Allowed | int | 9 |  |  |  |
| MonthlyPageViewsUsed | Monthly Page Views Used | int | 9 |  |  |  |
| Name | Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| NumKnowledgeService | Knowledge Licenses | int | 9 |  |  |  |
| OrganizationType | Edition | picklist |  | 40 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| PreferencesAutoSelectIndividualOnMerge | AutoSelectIndividualOnMerge | boolean |  |  |  |  |
| PreferencesConsentManagementEnabled | ConsentManagementEnabled | boolean |  |  |  |  |
| PreferencesEmailSenderIdCompliance | EmailSenderIdCompliance | boolean |  |  |  |  |
| PreferencesLightningLoginEnabled | LightningLoginEnabled | boolean |  |  |  |  |
| PreferencesOnlyLLPermUserAllowed | OnlyLLPermUserAllowed | boolean |  |  |  |  |
| PreferencesRequireOpportunityProducts | RequireOpportunityProducts | boolean |  |  |  |  |
| PreferencesTransactionSecurityPolicy | TransactionSecurityPolicy | boolean |  |  |  |  |
| PrimaryContact | Primary Contact | string |  | 80 |  |  |
| ReceivesAdminInfoEmails | Info Emails Admin | boolean |  |  |  |  |
| ReceivesInfoEmails | Info Emails | boolean |  |  |  |  |
| SignupCountryIsoCode | Signup Country | string |  | 2 |  |  |
| State | State/Province | string |  | 80 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeZoneSidKey | Time Zone | picklist |  | 40 |  |  |
| TrialExpirationDate | Trial Expiration Date | datetime |  |  |  |  |
| UiSkin | UI Skin | picklist |  | 40 |  |  |
| UsesStartDateAsFiscalYearName | Fiscal Year Name by Start | boolean |  |  |  |  |
| WebToCaseDefaultOrigin | Web to Cases Default Origin | string |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
