---
title: "TransactionSecurityPolicy"
domain: metadata-api
topic: transactionsecuritypolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:43.195Z
estimatedTokens: 2774
keywords: [TransactionSecurityPolicy, Represents, transaction, security, policy, definition., Transaction, policies, give, way, look, through, events, organization, specify, actions, take, certain, combinations, occur.]
---

# TransactionSecurityPolicy

> Represents a transaction security policy definition.
      Transaction security policies give you a way to look through events in your organization and
      specify actions to take when certain combinations occur.

# TransactionSecurityPolicy

Represents a transaction security policy definition. Transaction security policies give you a way to look through events in your organization and specify actions to take when certain combinations occur.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

TransactionSecurityPolicy components have the suffix .transactionSecurityPolicy and are stored in the transactionSecurityPolicies folder.

## Version

TransactionSecurityPolicy components are available in API version 35.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| action | TransactionSecurityAction | Required. Describes the action to take when the matching Transaction Security policy is triggered. |
| active | boolean | Required. If true, the policy is enabled and actively monitors its event. |
| apexClass | string | Required for Apex-based policies, and optional for all other policies. The name of the class that implements the TxnSecurity.PolicyCondition or TxnSecurity.EventCondition interface for this policy. Available in API version 46.0 and later. |
| blockMessage | string | The custom message sent to a user when a policy blocks their action. Used in Real-Time Event Monitoring only. Maximum of 1000 characters. This field is null when the default message option is selected in the UI. Available only when eventName is set to ApiEvent, ListViewEvent, BulkApiResultEventStore, or ReportEvent. Available in API version 49.0 and later.Include org- or policy-specific information in your custom message, such as the name of the responsible administrator or the business unit. Be careful about what you include. Too much information on how the policy was designed. can aid a malicious user.Two-factor authentication (2FA) isn’t supported in Lightning Experience, so events like ListView and ReportEvent are upgraded to Block in Lightning.Custom messages aren’t translatable. |
| customEmailContent | string | The administrator-created custom email content sent when a policy is triggered. Used in Real-Time Event Monitoring only. Maximum of 1333 characters. This field is null when the Custom Email Content setting is selected in the UI but no message content is entered. Available in API version 54.0 and later.Custom messages aren’t translatable. |
| description | string | A description of the policy. |
| developerName | string | This unique name prevents conflicts with other policies that have the same masterLabel. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| eventName | TransactionSecurityEventName (enumeration of type string) | Used in Real-Time Event Monitoring only. Indicates the name of the event the policy monitors. This field is available in API 45.0 and later. Valid values are:ApiEvent—Tracks these user-initiated read-only API calls: query(), queryMore(), and count(). Captures API requests through SOAP API and Bulk API for the Enterprise and Partner WSDLs. Tooling API calls and API calls originating from a Salesforce mobile app aren’t captured.ApiAnomalyEventStore—Tracks anomalies in how users make API calls. ApiAnomalyEventStore is an object that stores the event data of ApiAnomalyEvent. This object is available in API version 50.0 and later.BulkApiResultEventStore—Tracks when a user downloads the results of a Bulk API request. BulkApiResultEventStore is a big object that stores the event data of BulkApiResultEvent. This object is available in API version 50.0 and later.CredentialStuffingEventStore—Tracks when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials.This value is available in API version 49.0 and later.FileEventStore (beta)—Tracks when a user downloads, previews, or uploads a file. FileEventStore is a big object that stores the event data of FileEvent. This object is available in API version 57.0 and later.GuestUserAnomalyEventStore—Tracks data access anomalies that are caused by guest user permission misconfiguration. This object is available in API version 60.0 and later.ListViewEvent—Tracks when users access data with list views using Lightning Experience, Salesforce Classic, or the API. It doesn’t track list views of Setup entities.LoginAsEvent—Tracks the login activity of admins who log in to Salesforce as other users. This object is available in API version 46.0 and later.LoginEvent—LoginEvent tracks the login activity of users who log in to Salesforce.PermissionSetEventStore —Tracks changes to permission sets and permission set groups.ReportAnomalyEventStore—Tracks anomalies in how users run or export reports, including unsaved reports. This value is available in API version 49.0 and later.ReportEvent—Tracks when reports are run in your org.SessionHijackingEventStore—Tracks when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. To detect such an event, Salesforce evaluates how significantly a user’s current browser fingerprint diverges from the previously known fingerprint using a probabilistically inferred significance of change. Available in API version 49.0 and later. |
| eventType | MonitoredEvents (enumeration of type string) | Used in Legacy Transaction Security only. Required for Apex-based policies, and optional for all other policies. Indicates which type of event is being monitored. Valid values are:AccessResource—Notifies you when the selected resource has been accessed.AuditTrail—Reserved for future use.DataExport—Notifies you when the selected object type has been exported using the Data Loader API client.Entity—Notifies you on use of an object type such as an authentication provider or Chatter comment.Login—Notifies you when a user logs in.As of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| executionUser | string | Used in Legacy Transaction Security only. The name or ID of an active user who is assigned the Modify All Data and View Setup user permissions.As of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| flowId | string | Required only for policies of type CustomConditionBuilderPolicy. The ID of the Flow object that contains the logic the Condition Builder transaction security policy. Available in API version 46.0 and later. |
| masterLabel | string | The label for this object. This display value is the internal label that is’t translated.Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations. |
| resourceName | string | Used in Legacy Transaction Security only. Required for Apex-based policies, and optional for all other policies. A resource used to narrow down the conditions under which the policy triggers. For example, with a DataExport event, you can select a resource Lead to specifically monitor export activity occurring on your Lead entities. The resources available depend on the Event Type field. The following valid resources are grouped by event type.AccessResource—ConnectedApplication, ReportsDataExport—Account, Case, Contact, Lead, OpportunityEntity—AuthProvider, ChatterMessage, FeedComment, FeedItem, Idea, QuestionLogin—LoginHistoryAs of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| type | TxnSecurityPolicyType (enumeration of type string) | The type of validation that the policy uses. The valid values are:CustomApexPolicy— Created with Apex editor.CustomConditionBuilderPolicy— Created with Condition Builder.The default value is CustomApexPolicy. |

## TransactionSecurityAction

Describes the action to take when the matching Transaction Security policy is triggered.

| Field Name | Field Type | Description |
| --- | --- | --- |
| block | boolean | If true, the requested operation is blocked. This action only applies to Login and AccessResource events. |
| endSession | boolean | Used in Legacy Transaction Security only. If true, a current session must be closed before a new session can be started. This action only applies to Login events.As of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| freezeUser | boolean | Used in Legacy Transaction Security only. If true, the user that triggered the policy is frozen. This action only applies to Chatter resources for Entity events.As of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| notifications | TransactionSecurityNotification[] | Specifies how to notify the Salesforce administrator when the action is triggered. There can be none, one, or multiple notifications. |
| twoFactorAuthentication | boolean | If true, multi-factor authentication (MFA) is required for a higher level of access before the requested operation can continue. This action only applies to Login and AccessResource events.Multi-factor authentication was formerly called two-factor authentication. |

## TransactionSecurityNotification

Describes who to notify and how to notify them when the matching Transaction Security policy is triggered.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inApp | boolean | True if an in-app notification is selected. |
| sendEmail | boolean | True if an email notification is selected. |
| user | string | The user to receive the notification. |

## Declarative Metadata Sample Definition

The following is an example of a Real-Time Event Monitoring TransactionSecurityPolicy component.

```

```

The following is an example package manifest used to deploy or retrieve the transaction security metadata for an organization.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<TransactionSecurityPolicy xmlns="http://soap.sforce.com/2006/04/metadata">
    <action>
        <block>true</block>
        <notifications>
            <inApp>true</inApp>
            <sendEmail>true</sendEmail>
            <user>user@your.org</user>
        </notifications>
        <twoFactorAuthentication>false</twoFactorAuthentication>
    </action>
    <active>true</active>
    <apexClass>TxnSecMDApiPolicyEventCondition</apexClass>
    <blockMessage>You cannot view this report.</blockMessage>
    <developerName>TxnSecPolicyMDApi</developerName>
    <eventName>ReportEvent</eventName>
    <masterLabel>Txn Sec MD Api Policy</masterLabel>
    <type>CustomApexPolicy</type>
</TransactionSecurityPolicy>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MySecurityPolicy</members>
        <name>TransactionSecurityPolicy</name>
    </types>
    <version>35.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
