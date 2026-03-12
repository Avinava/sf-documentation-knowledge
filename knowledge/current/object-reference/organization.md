---
title: "Organization"
domain: object-reference
topic: organization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.137Z
estimatedTokens: 4995
keywords: [Organization, key, configuration, Calls, Special, Access, Rules, Usage]
---

# Organization

> Represents key configuration information for an
		organization.

# Organization

Represents key configuration information for an organization.

Executing a SOQL SELECT query returns the value of fields in this object, but no value is visible for some of the fields.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| Address (beta) | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address. Read-only. See Address Compound Fields for details on compound address fields. |
| AllowsSelfServiceLogin | TypebooleanPropertiesDefaulted on create, Filter, UpdateDescriptionIndicates whether the organization allows Self-Service login (true) or not (false). |
| City | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionName of the city for the organization's address. |
| ComplianceBccEmail | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionEmail address for compliance blind carbon copies. Limit: 80 characters. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the country for the organization's address. Limit: 80 characters. |
| CountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the organization’s address. Enable state and country/territory picklists to use this field. For more information, see Enable and Disable State and Country/Territory Picklists in Salesforce Help. |
| DailyWebToCaseCount | TypeintPropertiesFilter, NillableDescriptionThe number of web form submissions that have been converted to cases for the day. |
| DailyWebToCaseLimit | TypeintPropertiesFilter, NillableDescriptionThe maximum number of web form submissions that can be converted to cases per day. |
| DailyWebToLeadCount | TypeintPropertiesFilter, NillableDescriptionThe number of web form submission that have been converted to leads for the day |
| DailyWebToLeadLimit | TypeintPropertiesFilter, NillableDescriptionThe maximum number of web form submissions that can be converted to leads per day. |
| DefaultAccountAccess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIn API version 10.0 and later, represents the default access level for accounts, contracts, and assets. The possible values are:NoneReadEditControlledByLeadOrContactControlledByCampaignIn versions before 10.0, DefaultAccountAndContactAccess represented this value. |
| DefaultAccountAndContactAccess | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionDefault access level for accounts, contacts, contracts, and assets. This field is supported for backward compatibility only and is not available in API version 10.0 or later. In version 10.0 and later, use either DefaultAccountAccess or DefaultContactAccess. |
| DefaultCalendarAccess | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionDefault access level for calendars. The possible values are listed, followed by the user interface labels in parentheses:HideDetails (Hide Details)HideDetailsInsert (Hide Details and Add Events)ShowDetails (Show Details)ShowDetailsInsert (Show Details and Add Events)AllowEdits (Full Access) |
| DefaultCampaignAccess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefault access level for campaigns. The possible values are:NoneReadEditAll |
| DefaultCaseAccess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefault access level for cases. The possible values are:NoneReadEditReadEditTransfer |
| DefaultContactAccess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefault access level for contacts. The possible values are:NoneReadEditControlledByParentIn versions before 10.0, DefaultAccountAndContactAccess represented this value.When DefaultContactAccess is set to “Controlled by Parent,” you can’t update the ContactAccessLevel field. |
| DefaultLeadAccess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefault access level for leads. The possible values are:NoneReadEditReadEditTransfer |
| DefaultLocaleSidKey | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionDefault locale SID key. For more information on picklist options, see Supported Number, Name, and Address Formats (ICU) in Salesforce help. |
| DefaultOpportunityAccess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefault access level for opportunities. The possible values are:NoneReadEditControlledByLeadOrContactControlledByCampaign |
| DefaultPricebookAccess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefault access level for price books. The possible values are listed, followed by the user interface labels in parentheses:None (No access)Read (Read only)ReadSelect (Use) |
| DefaultTerritoryCaseAccess | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionDefault access level for cases associated with accounts in territories. The possible values are:NoneReadEditControlledByLeadOrContactControlledByCampaign |
| DefaultTerritoryContactAccess | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionDefault access level for contacts associated with accounts in territories. The possible values are:NoneReadEditControlledByLeadOrContactControlledByCampaignWhen DefaultContactAccess is set to “Controlled by Parent” you can’t update this field. |
| DefaultTerritoryOppAccess | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionDefault access level for opportunities in territories.Valid values:NoneReadEditControlledByLeadOrContactControlledByCampaign |
| Division | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe name of the division for this organization. This field is not related to the Division object. |
| Fax | TypephonePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionFax number. Limit: 40 characters. |
| FiscalYearStartMonth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber that corresponds to the month that this organization's fiscal year starts. |
| HomepageHtml | TypetextareaPropertiesNillable, UpdateDescriptionThe Home tab custom links and company message for this organization. |
| InstanceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRead-only. The name of the instance. Available in API version 31.0 or later. |
| IsSandbox | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. Indicates whether the current organization is a sandbox (true) or production (false) instance. Available in API version 31.0 or later. |
| LanguageLocaleKey | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe same as Language, the two-to-five character code which represents the language and locale ISO code. This controls the language for labels displayed in an application. |
| LastWebToCaseDate | TypedateTimePropertiesFilter, NillableDescriptionThe last date that a web form submission was converted to a case. |
| LastWebToLeadDate | TypedateTimePropertiesFilter, NillableDescriptionThe last date that a web form submission was converted to a lead. |
| Latitude | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of an address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| Longitude | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| MaxActionsPerRule | TypeintPropertiesFilter, NillableDescriptionMaximum number of actions per workflow, assignment, escalation, and auto-response rules. This field is unavailable in version 15.0 and later. |
| MaxRulesPerEntity | TypeintPropertiesFilter, NillableDescriptionMaximum number of rules per object, inclusive of workflow, assignment, escalation, and auto-response rules. This field is unavailable in version 15.0 and later. |
| MonthlyPageViewsEntitlement | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of page views allowed for the current calendar month for the sites in your organization. To access this field, Salesforce Sites must be enabled for your organization. This field is generally available in API versions 18.0 and later. |
| MonthlyPageViewsUsed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of page views used in the current calendar month for the sites in your organization. To access this field, Salesforce Sites must be enabled for your organization. This field is generally available in API versions 18.0 and later. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionThe name of the organization. |
| NamespacePrefix | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| OrganizationType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionEdition of the organization, for example Enterprise Edition or Unlimited Edition. |
| Phone | TypephonePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionPhone number for the organization. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionPostal code for the address of the organization. Limit: 20 characters. |
| PreferencesEventScheduler | TypebooleanPropertiesUpdateDescriptionIndicates whether opportunities require products (true) or not (false). |
| PreferencesRequireOpportunityProducts | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether opportunities require products (true) or not (false). |
| PreferencesS1BrowserEnabled | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the Salesforce mobile web is enabled for all users in your organization (true) or is disabled for all users (false).This field is available in API version 29.0 or later. |
| PreferencesTerminateOldestSession | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the oldest login session is automatically closed when a policy specifying the maximum number of sessions is triggered.This field is available in API version 35.0 — 49.0. As of API version 50.0, this field is removed. |
| PreferencesTransactionSecurityPolicy | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether the Transaction Security feature has been enabled.This field is available in API version 35.0 — 49.0. As of API version 50.0, this field is removed. |
| PrimaryContact | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionName of the primary contact for the organization. Limit: 80 characters. |
| ReceivesAdminInfoEmails | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the organization receives administrator emails (true) or not (false). |
| ReceivesInfoEmails | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the organization receives informational email from Salesforce (true) or not (false). |
| SelfServiceCasePlural | TypestringPropertiesFilter, Nillable, UpdateDescriptionThe plural version of the term used to represent the Case object in the Self-Service portal. |
| SelfServiceCaseSingle | TypestringPropertiesFilter, Nillable, UpdateDescriptionThe singular version of the term used to represent the Case object in the Self-Service portal. |
| SelfServiceCaseSubmitRecordTypeId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the record type associated with a case submitted via the Self-Service portal. |
| SelfServicDefaultCaseOrigin | TypestringPropertiesFilter, Nillable, UpdateDescriptionThe default origin of a case submitted via the Self-Service portal. |
| SelfServiceEmailSenderAddress | TypeemailPropertiesFilter, Nillable, UpdateDescriptionThe Self-Service email address from which new Self-Service user and password email messages are sent, such as support@acme.com. |
| SelfServiceEmailSenderName | TypestringPropertiesFilter, Nillable, UpdateDescriptionThe name associated with the email address in the SelfServiceEmailSenderAddress field, such as Acme Customer Support. |
| SelfServiceEmailUserOnCaseCreation‍TemplateId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the email template used when email is sent to a Self-Service user when he or she creates a case. |
| SelfServiceEnabledForResponseRules | TypebooleanPropertiesFilter, Nillable, UpdateDescriptionIndicates whether the Self-Service portal is enabled for auto-response rules (true) or not (false). |
| SelfServiceFeatureConfig | TypeintPropertiesFilter, Nillable, UpdateDescriptionAn integer representing the active Self-Service feature configuration for this organization. |
| SelfServiceLogoutUrl | TypeurlPropertiesFilter, Nillable, UpdateDescriptionThe Web page that displays when a Self-Service user logs out of the Self-Service portal. |
| SelfServiceMaxNumSuggestions | TypeintPropertiesFilter, Nillable, UpdateDescriptionThe maximum number of suggested solutions allowed for a Self-Service case. |
| SelfServiceNewCommentCheckedByDefault | TypebooleanPropertiesDefaulted on create, Filter, UpdateDescriptionIf true, When a customer notification is automatically sent when a new comment is added to a case. |
| SelfServiceNewCommentTemplateId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the email template used to send a notification to Self-Service users when a public comment is added to one of their cases. |
| SelfServiceNewPassTemplateId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the email template used when new passwords are generated for Self-Service users. |
| SelfServiceNewUserTemplateId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the email template used when new Self-Service users are enabled. |
| SelfServicePageHeight | TypeintPropertiesFilter, Nillable, UpdateDescriptionThe maximum height in pixels of Self-Service pages. |
| SelfServicePageWidth | TypeintPropertiesFilter, Nillable, UpdateDescriptionThe maximum width in pixels of Self-Service pages. |
| SelfServiceSelfClosedCaseStatus | TypepicklistPropertiesFilter, Nillable, UpdateDescriptionThe default status for cases closed by Self-Service users. |
| SelfServiceSolutionCategoryAvailable | TypebooleanPropertiesDefaulted on create, Filter, UpdateDescriptionIndicates whether solution categories are available in the Self-Service portal (true) or not (false). |
| SelfServiceSolutionCategoryStartNodeId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the top-level category in the Self-Service portal. |
| SelfServiceSolutionPlural | TypestringPropertiesFilter, Nillable, UpdateDescriptionThe plural version of the term used to represent the Solution object in the Self-Service portal. |
| SelfServiceSolutionSingle | TypestringPropertiesFilter, Nillable, UpdateDescriptionThe singular version of the term used to represent the Solution object in the Self-Service portal. |
| SelfServiceStyleSheetUrl | TypeurlPropertiesFilter, Nillable, UpdateDescriptionThe public URL of your organization's Self-Service portal stylesheet. |
| SelfServiceWelcomePageConfig | TypeintPropertiesFilter, Nillable, UpdateDescriptionInteger that represents the welcome page configuration for the Self-Service portal. |
| SelfServiceWelcomeText | TypestringPropertiesFilter, Nillable, UpdateDescriptionThe custom welcome message displayed at the top of the Self-Service home page when Self-Service users log in. Limit: 32,000 characters. |
| SignupCountryIsoCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ISO country code specified by the user for a sign-up request. |
| State | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionState of the address of the organization. Limit: 80 characters. |
| StateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the organization’s address. |
| Street | TypetextareaPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionStreet address for the organization. Limit: 255 characters. |
| TrialExpirationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that this organization's trial license expires. |
| TimeZoneSidKey | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionIdentifies the default time zone of the organization. |
| UiSkin | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe user interface theme selected for the organization. |
| UsesStartDateAsFiscalYearName | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the calendar year when the fiscal year begins is referred to as the year of the company's fiscal year (true) or not (false). For example, if the fiscal year begins in February 2006, a true value means the fiscal year is FY2006, and a false value means the fiscal year is FY2007. |
| UsesWebToCase | TypebooleanPropertiesFilter, Nillable, UpdateDescriptionIndicates whether this organization can use Web-to-Case (true) or not (false). |
| UsesWebToLead | TypebooleanPropertiesFilter, Nillable, UpdateDescriptionIndicates whether this organization can use Web-to-Lead (true) or not (false). |
| WebToCaseAssignedEmailTemplateId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the email template used when a new case is assigned to a user via Web-to-Case. |
| WebToCaseCreatedEmailTemplateId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the email template used when a new case is created via Web-to-Case. |
| WebToCaseDefaultCreatorId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID of the user specified as the default creator of cases created via Web-to-Case. |
| WebToCaseDefaultOrigin | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe default value for the Case Origin field on cases submitted via Web-to-Case. Limit: 40 characters. |

## Usage

Query this object to obtain information about an organization's settings. Only one organization object exists per organization.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
