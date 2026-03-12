---
title: "PermissionSetEvent"
domain: platform-events
topic: permissionsetevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.075Z
estimatedTokens: 2874
keywords: [PermissionSetEvent, Tracks, changes, permission, groups, event, initiates, added, removed, containing, critical, assigned, unassigned, API, version]
---

# PermissionSetEvent

> Tracks changes to permission sets and permission set groups. This event
      initiates when a permission is added to, or removed from a permission set. This event also
      initiates when a permission set containing a critical permission is assigned or unassigned.
      This object is available in API version 52.0 and later.

# PermissionSetEvent

Tracks changes to permission sets and permission set groups. This event initiates when a permission is added to, or removed from a permission set. This event also initiates when a permission set containing a critical permission is assigned or unassigned. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the anomaly was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds is the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventSource | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe source of the event. Possible values are:API—The user made changes to a permission set or permission set group from an API call.Classic—The user made changes to a permission set or permission set group from a page in the Salesforce Classic UI.Lightning—The user made changes to a permission set or permission set group from a page in the Lightning Experience UI. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| HasExternalUsers | TypebooleanPropertiesNillableDescriptionWhen true, external users are impacted by the operation that triggered a permission change. The default value is false. |
| ImpactedUserIds | TypejsonPropertiesNillableDescriptionA comma-separated list of IDs of the users affected by the event. A maximum of 1,000 user IDs are included.For example, if a permission set assigned to two users is updated, the users’ IDs are recorded in this field. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular series of permission set events. This field is also available in the LoginEvent, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. For example, 0YaB000002knVQLKA2.This is a relationship field.Relationship NameLoginHistoryRelationship TypeLookupRefers ToLoginHistory |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| Operation | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of operation that triggers a permission change.Possible values are:AssignedToUsers—A permission set or permission set group is assigned to one or more users.CriticalPerms—This deprecated value indicates the critical permissions are enabled.PermsDisabled—Permissions are disabled.PermsEnabled—Permissions are enabled.UnassignedFromUsers—A permission set or permission set group is unassigned from one or more users. |
| ParentIdList | TypejsonPropertiesNillableDescriptionThe IDs of the affected permission sets or permission set groups. |
| ParentNameList | TypejsonPropertiesNillableDescriptionThe names of the affected permission sets or permission set groups. |
| PermissionExpirationList | TypejsonPropertiesNillableDescriptionA comma separated list of timestamps from the PermissionSetAssignment.ExpirationDate field that specifies when added permissions will be revoked. This value is null when no expiration timestamp is specified or permissions are removed for the impacted users. |
| PermissionList | TypejsonPropertiesNillableDescriptionThe list of permissions that are enabled or disabled in the event. These permissions can include:AssignPermissionSets (Assign Permission Sets)AuthorApex (Author Apex)CustomizeApplication (Customize Application)ForceTwoFactor (Multi-Factor Authentication for User Interface Logins)FreezeUsers (Freeze Users)ManageAccessPolicies (Manage Access Policies)ManageDataspaceScope (Manage Dataspace Scope)ManageEncryptionKeys (Manage Encryption Keys)ManageInternalUsers (Manage Internal Users)ManagePasswordPolicies (Manage Password Policies)ManageProfilesPermissionsets (Manage Profiles and Permission Sets)ManageRoles (Manage Roles)ManageSharing (Manage Sharing)ManageUsers (Manage Users)ModifyAccessAllowPolicies (Modify Allow Data Governance Policies)ModifyAccessDenyPolicies (Modify Deny Data Governance Policies)ModifyAllData (Modify All Data)ModifyAllDataGovPolicies (Modify All Data Governance Policies)ModifyAllDataGovTagAssign (Modify All Data Governance Tag Assignments)MonitorLoginHistory (Monitor Login History)PasswordNeverExpires (Password Never Expires)ResetPasswords (Reset User Passwords and Unlock Users)TransactionSecurityExempt (Exempt from Transaction Security)ViewAllData (View All Data)When using this event in a transaction security policy, use the permission's API name, not its label, and use the Contains operator, rather than Equals. |
| PermissionType | TypestringPropertiesNillableDescriptionThe type of permission that is updated in the event. Possible values are:ObjectPermissionUserPermission |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction security policy associated with this event. For example, 0NIB000000000KOOAY.This is a relationship field.Relationship NamePolicyRelationship TypeLookupRefers ToTransactionSecurityPolicy |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy.Possible values are:Block—The user was blocked from performing the operation that triggered the policy.EndSession—The user’s session is terminated.Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.FailedInvalidPassword—The user entered an invalid password.FailedPasswordLockout—The user entered an invalid password too many times.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.TwoFAAutomatedSuccess—Salesforce Authenticator approved the request for access because the request came from a trusted location. After users enable location services in Salesforce Authenticator, they can designate trusted locations. When a user trusts a location for a particular activity, such as logging in from a recognized device, that activity is approved from the trusted location for as long as the location is trusted.TwoFADenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator.TwoFAFailedGeneralError—An error caused by something other than an invalid verification code, too many verification attempts, or authenticator app connectivity.TwoFAFailedInvalidCode—The user provided an invalid verification code.TwoFAFailedTooManyAttempts—The user attempted to verify identity too many times. For example, the user entered an invalid verification code repeatedly.TwoFAInProgress—Salesforce challenged the user to verify identity and is waiting for the user to respond or for Salesforce Authenticator to send an automated response.TwoFAInitiated—Salesforce initiated identity verification but hasn’t yet challenged the user.TwoFANoAction—The policy specifies multi-factor authentication (formerly called two-factor authentication) as an action, but the user is already in a high-assurance session.TwoFARecoverableError—Salesforce can’t reach the authenticator app to verify identity, but will retry.TwoFAReportedDenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator, and also flagged the approval request to report to an administrator.TwoFASucceeded—The user’s identity was verified. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level isn’t available or used in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| UserCount | TypestringPropertiesNillableDescriptionThe number of users affected by the event. This field has a maximum value of 1,000. If the user appears more than 1,000 times, the value remains at 1,000. |
| UserId | TypereferencePropertiesNillableDescriptionThe user’s unique ID. For example, 005000000000123.This is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesNillableDescriptionThe username in the format of user@company.com at the time the event was created. |
