---
title: "Types of Enhanced Transaction Security Policies"
domain: securityImplGuide
topic: types-of-enhanced-transaction-security-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.713Z
estimatedTokens: 838
keywords: [Enhanced, Transaction, Security, Policies, Real-Time, Event, Monitoring, events]
---

# Types of Enhanced Transaction Security Policies

> You can create transaction security policies on these Real-Time Event Monitoring
  events.

# Types of Enhanced Transaction Security Policies

You can create transaction security policies on these Real-Time Event Monitoring events.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


-   **[ApiEvent Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_api.htm)**
    API events monitor API transactions, such as SOQL queries and data exports.
-   **[ApiAnomalyEventStore Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_apianomalyeventstore.htm)**
    API anomaly event policies monitor anomalies in how users make API calls.
-   **[BulkApiResultEventStore Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_bulkapiresulteventstore.htm)**
    Bulk API Result Event policies detect when a user downloads the results of a Bulk API request.
-   **[CredentialStuffingEventStore Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_credentialstuff.htm)**
    Credential stuffing event policies monitor when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials.
-   **[FileEvent Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_fileevent.htm)**
    File event policies detect file-related events, such as when a user downloads a file containing sensitive information.
-   **[ListViewEvent Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_listview.htm)**
    List View event policies monitor when data is viewed or downloaded from your list views using Salesforce Classic, Lightning Experience, or the API.
-   **[LoginEvent Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_login.htm)**
    Login event policies track login activity and enforce your login requirements.
-   **[PermissionSetEventStore Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_permissionseteventstore.htm)**
    Permission set event policies monitor when users are assigned critical permissions in a permission set.
-   **[ReportEvent Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_report.htm)**
    Report event policies monitor when data is viewed or downloaded from your reports.
-   **[ReportAnomalyEventStore Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_reportanomaly.htm)**
    Report anomaly event policies monitor anomalies in how users run or export reports.
-   **[SessionHijackingEventStore Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_sessionhijack.htm)**
    Session hijacking event policies monitor when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier.

## Related Topics

- ApiEvent Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_api.htm)
- ApiAnomalyEventStore Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_apianomalyeventstore.htm)
- BulkApiResultEventStore Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_bulkapiresulteventstore.htm)
- CredentialStuffingEventStore Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_credentialstuff.htm)
- FileEvent Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_fileevent.htm)
- ListViewEvent Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_listview.htm)
- LoginEvent Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_login.htm)
- PermissionSetEventStore Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_permissionseteventstore.htm)
- ReportEvent Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_report.htm)
- ReportAnomalyEventStore Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types_reportanomaly.htm)
