---
title: "TransactionSecurityPolicy"
domain: tooling-api
topic: transactionsecuritypolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.004Z
estimatedTokens: 2129
keywords: [TransactionSecurityPolicy, Represents, transaction, security, policy, definition., Supported, Calls, REST, Fields]
---

# TransactionSecurityPolicy

> Represents a transaction security policy definition.

# TransactionSecurityPolicy

Represents a transaction security policy definition.

This object is available in Tooling API version 35.0 and later.

## Supported Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST Methods

Query, DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| ActionConfig | TypetextareaPropertiesCreate, UpdateDescriptionDescribes the action to take when the matching Transaction Security policy is triggered. Also indicates the type of notifications selected and the ID of the intended recipient. The recipient must be active and assigned the Modify All Data and View Setup user permissions. Multiple actions can be taken. The actions available depend on the EventType field. |
| ApexPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresents the Apex TxnSecurity.PolicyCondition or TxnSecurity.EventCondition interface for this policy. |
| BlockMessage | TypestringPropertiesFilter, Nillable, SortDescriptionThe custom message a user receives when their action is blocked by a policy. Used in Real-Time Event Monitoring only. Maximum of 1000 characters. This field appears as null when the default message option is selected and is available only when EventName is set to ApiEvent, ListViewEvent, and ReportEvent. Available in API version 49.0 and later. |
| CustomEmailContent | TypestringPropertiesFilter, Nillable, Sort,DescriptionThe administrator-created custom email content sent when a policy is triggered. Used in Real-Time Event Monitoring only. Maximum of 1333 characters. This field is null when the Custom Email Content setting is selected in the UI but no message content is entered. Available in API version 54.0 and later.Custom messages aren’t translatable. |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionThe description entered for this policy. This field available in API 39.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API, or program name, for this policy.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EventName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionUsed in Real-Time Event Monitoring only. Indicates the name of the event the policy monitors. This field is available in API 31.0 and later. Valid values are:ApiEvent—Tracks these user-initiated read-only API calls: query(), queryMore(), and count(). Captures API requests through SOAP API and Bulk API for the Enterprise and Partner WSDLs. Tooling API calls and API calls originating from a Salesforce mobile app aren’t captured.CredentialStuffingEventStore—Tracks when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials.This value is available in API 49.0 and later.FileEventStore (beta)—Tracks when a user downloads, previews, or uploads a file. FileEventStore is a big object that stores the event data of FileEvent. This object is available in API version 57.0 and later.ListViewEvent—Tracks when users access data with list views using Lightning Experience, Salesforce Classic, or the API. It doesn’t track list views of Setup entities.LoginAnomalyEventStore—Stores the records of data access anomalies that are caused by potentially malicious login actions.LoginAsEvent—Tracks the login activity of admins who log in to Salesforce as other users. This object is available in API version 46.0 and later.LoginEvent—LoginEvent tracks the login activity of users who log in to Salesforce.PermissionSetEventStore—Tracks changes to permission sets and permission set groups.ReportAnomalyEventStore—Tracks anomalies in how users run or export reports, including unsaved reports. This value is available in API 49.0 and later.ReportEvent—Tracks when reports are run in your org.SessionHijackingEventStore—Tracks when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. To detect such an event, Salesforce evaluates how significantly a user’s current browser fingerprint diverges from the previously known fingerprint using a probabilistically inferred significance of change. This value is available in API 49.0 and later. |
| EventType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionUsed in Legacy Transaction Security only. Indicates the type of event the policy monitors. Valid values are:AccessResource—Notifies you when the selected resource has been accessed.AuditTrail—Reserved for future use.DataExport—Notifies you when any API query is made, such as from the Data Loader API client, or when a Report export occurs.Entity—Notifies you on use of an object type such as an authentication provider or chatter post.Login—Notifies you when a user logs in.NoteAs of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| ExecutionUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUsed in Legacy Transaction Security only. The ID of an active user who is assigned the Modify All Data and View Setup user permissions.NoteAs of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated object in the Metadata API. Use to avoid race conditions on create, before you have IDs.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe policy’s name.ImportantWhere possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations. |
| Metadata | Typemns:TransactionSecurityPolicyPropertiesCreate, Nillable, UpdateDescriptionThe policy’s metadata. See the Metadata API Developer Guide for details. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ResourceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUsed in Legacy Transaction Security only. A resource used to narrow down the conditions under which the policy triggers. For example, with a DataExport event, you can select a resource Lead to specifically monitor export activity occurring on your Lead entities. The resources available depend on the EventType field.NoteAs of Summer '20, Legacy Transaction Security is a retired feature in all Salesforce orgs. |
| State | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether the policy is active. Valid values are:DisabledEnabled |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of validation that the policy uses. The valid values are:CustomApexPolicy— Created with Apex editor.CustomConditionBuilderPolicy— Created with Condition BuilderThe default value is CustomApexPolicy. |
