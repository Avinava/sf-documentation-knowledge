---
title: "Marketing Cloud Account Engagement: Email Activity Mapping"
domain: data-cloud
topic: marketing-cloud-account-engagement-email-activity-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.424Z
estimatedTokens: 941
keywords: [Marketing, Cloud, Account, Engagement, Email, Activity, Mapping, After, data, stream, deployed, maps, source, objects, model, DMOs, Data, Cloud., includes, email]
---

# Marketing Cloud Account Engagement: Email Activity Mapping

> After a data stream is deployed, the Marketing Cloud Account Engagement data stream
      maps source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Email Activity object includes email engagement
      data.

# Marketing Cloud Account Engagement: Email Activity Mapping

After a data stream is deployed, the Marketing Cloud Account Engagement data stream maps source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Email Activity object includes email engagement data.

## DLO to DMO Mapping

These data mappings relate to the Email Activity object used with the Account Engagement connector. You can add to the data mappings, but don’t change the automatically generated mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Details |
| --- | --- | --- | --- | --- |
| accountEngagementBusinessUnitId | text | — | — | ID of the Account Engagement business unit, not the Salesforce org ID |
| createdAt | dateTime | Email Engagement | Engagement Date Time | The createdAt value of the visitor activity record in Account Engagement |
| emailBounceReason | text | Email Engagement | Bounce Reason | Possible values include:SOFTHARDOnly populated when the eventType is BOUNCE |
| emailBounceType | text | Email Engagement | Email Bounce Type | Only populated when the eventType is BOUNCE |
| eventType | text | Email Engagement | Engagement Channel Action | Identifies the type of Email Activity from these possible values:SEND_STATUS: Corresponds to Account Engagement visitor Activity Type 6 (Sent)OPEN: Corresponds to Account Engagement visitor Activity Type 11 (Open)CLICK: Corresponds to Account Engagement visitor Activity Type 1 (Click)BOUNCE: Corresponds to Account Engagement visitor Activity Type 13 (Bounced)UNSUBSCRIBE: Corresponds to Account Engagement visitor Activity Type 12 (Unsubscribed)COMPLAINT: Corresponds to Account Engagement visitor Activity Type 14 (Spam Complaint)SUBSCRIBE: Corresponds to Account Engagement visitor Activity Type 16 (Resubscribed)Learn more in the Account Engagement API documentation |
| externalId | text | Email Engagement | External Record Id | ID of the Account Engagement Visitor Activity record |
| externalList EmailId | text | — | — | ID of the Account Engagement List Email record |
| externalProspectId | text | — | — | ID of the Account Engagement Prospect record |
| externalSourceId | text | Email Engagement | External Source Id | Hardcoded as pi, used to determine that the given record was imported from Account Engagement |
| id | text | Email Engagement | Email Engagement Id | Primary key |
| polymorphicListId | text | Email Engagement | Bulk Email Message | ID of the Salesforce List Email record |
| prospectEmail | text | Email Engagement | Sendtime Email Address | Email address of the recipient at the time of data ingestion from Account Engagement to Data Cloud |
| prospectId | text | — |  | ID of the Account Engagement Prospect record |
| prospectSalesforceId | text | Email Engagement | Contact Point & Individual | ID of the Salesforce record synced with the Account Engagement Prospect record |
| redirectUrl | text | Email Engagement | Link URL | The URL that the prospect is redirected to when the link is clickedPopulated only when the eventType is CLICK |
| refreshedAt | dateTime | — | — | Time when the export was processed in Account Engagement, used as the recordModified Field in Data CloudUpdates to the record ingested by Data Cloud if this dateTime value is newer than the current record |
| saleforceOrgId | text | — | — | ID of the Salesforce org that the Account Engagement business unit is associated with |
| sendStatus | text | Email Engagement | Email Recipient Send Status | Hardcoded as SENTPopulated only when the eventType is SEND_STATUS |
| updatedAt | dateTime | — | — | Time when the Account Engagement visitor activity is updated. Visitor activity records are updated when prospects are merged in Account Engagement |
