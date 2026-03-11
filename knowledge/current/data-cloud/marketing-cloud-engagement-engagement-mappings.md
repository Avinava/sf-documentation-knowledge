---
title: "Marketing Cloud Engagement: Engagement Mappings"
domain: data-cloud
topic: marketing-cloud-engagement-engagement-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.747Z
keywords: [Marketing, Cloud, Engagement, Mappings, DLO, DMO, Mapping, SFMC, EES, Email, Snapshot, Data, Stream, Push, Complaint, Bounce, Click, Open, Send, Unsubscribe]
---

# Marketing Cloud Engagement: Engagement Mappings

# Marketing Cloud Engagement: Engagement Mappings

After a data stream is deployed, the Marketing Cloud Engagement starter data bundle automatically maps data from Marketing Cloud Engagement to data model objects (DMO)s in Data Cloud. Engagement data includes the following system-generated DLOS and associated data streams: SFMC EES Email Snapshot, SFMC EES Push Snapshot, SFMC Einstein Email Scores, SFMC Email Complaint, SFMC Email Engagement Bounce, SFMC Email Engagement Click, SFMC Email Engagement Open, SFMC Email Engagement Send, SFMC Email Unsubscribe, SFMC Msg Engagement Event, SFMC Push Engagement Event, SFMC Push Undeliver Event, SFMC WhatsApp Tracking Event, SFMC WhatsApp MO Event, and SFMC WhatsApp Send Event.

Engagement data includes attributes that relate to customer engagement with outbound marketing.

## DLO to DMO Mapping

These data mappings relate to engagement data associated with the Marketing Cloud Engagement connector and how that data connects to DMOs.

## SFMC EES Email Snapshot Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Conversion Likelihood | text | Einstein Email Engagement Scores | Email Conversion Likelihood |  |
| Conversion Score | number | Einstein Email Engagement Scores | Email Conversion Score |  |
| Created Date | date | Einstein Email Engagement Scores | Created Date |  |
| Email Click Likelihood | text | Einstein Email Engagement Scores | Email Click Likelihood |  |
| Email Click Score | number | Einstein Email Engagement Scores | Email Click Score |  |
| Email Engagement Persona | text | Einstein Email Engagement Scores | Email Engagement Persona |  |
| Email Open Likelihood | text | Einstein Email Engagement Scores | Email Open Likelihood |  |
| Email Open Score | number | Einstein Email Engagement Scores | Email Open Score |  |
| Email Subscribe Likelihood | text | Einstein Email Engagement Scores | Email Subscribe Likelihood |  |
| Email Subscribe Score | number | Einstein Email Engagement Scores | Email Subscribe Score |  |
| IDPrimary Key | text | Einstein Email Engagement Scores | Id | Primary Key |
| Subscriber Key | text | Einstein Email Engagement Scores | Subscriber Key |  |
| Update Date | date | Einstein Email Engagement Scores | Updated Date |  |

## SFMC EES Push Snapshot Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| AppID | text | Einstein Push Engagement Scores | Software Application Id |  |
| Created Date | date | Einstein Push Engagement Scores | Created Date |  |
| CustomObjectKey | text | Einstein Push Engagement Scores | Custom Object Key |  |
| Direct Open Level | text | Einstein Push Engagement Scores | Direct Open Level |  |
| Direct Open Score | number | Einstein Push Engagement Scores | Direct Open Score |  |
| Engagement Persona | text | Einstein Push Engagement Scores | Engagement Persona |  |
| Engagement Score | number | Einstein Push Engagement Scores | Engagement Score |  |
| Extracted Date | date | Einstein Push Engagement Scores | ExtractDate |  |
| IDPrimary Key | text | Einstein Push Engagement Scores | Id | Primary Key |
| Inferred Open Level | text | Einstein Push Engagement Scores | Inferred Open Level |  |
| Inferred Open Score | number | Einstein Push Engagement Scores | Inferred Open Score |  |
| Predicted Sessions Level | text | Einstein Push Engagement Scores | Predicted Sessions Level |  |
| Predicted Sessions Score | number | Einstein Push Engagement Scores | Predicted Sessions Score |  |
| Predicted Time In App | number | Einstein Push Engagement Scores | Predicted Time in App |  |
| Predicted Time In App level | text | Einstein Push Engagement Scores | Predicted Time in App level |  |
| Subscriber Key | text | Einstein Push Engagement Scores | Subscriber Key |  |
| Updated Date | date | Einstein Push Engagement Scores | Updated Date |  |

## SFMC Email Complaint Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| Email Domain | text | Email Engagement | Email Domain Name |  |
| Email From Address | text | Email Engagement | Email From Address |  |
| Email From Name | text | Email Engagement | Email From Name |  |
| Email ID | text | Email Engagement | Engagement Asset |  |
| Engagement Channel | text | Email Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Email Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Email Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date Time |  |
| Last Modified Date |  |
| IDPrimary Key | text | Email Engagement | Email Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | number | Email Engagement | Is Test Send |  |
| Journey Activity ID | text | Email Engagement | Market Journey Activity |  |
| Last Modified Date | date | Email Engagement | Last Modified Date |  |
| Publication ID | text | Email Engagement | Engagement Publication |  |
| Subject Line | text | Email Engagement | Subject Line Text |  |
| Subscriber Key | text | Email Engagement | Individual |  |

## SFMC Email Engagement Bounce Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| Email Domain | text | Email Engagement | Email Domain Name |  |
| Email From Address | text | Email Engagement | Email From Address |  |
| Email From Name | text | Email Engagement | Email From Name |  |
| Email ID | text | Email Engagement | Engagement Asset |  |
| Engagement Channel | text | Email Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Email Engagement | Engagement Channel Action |  |
| Engagement Date Time | date |  | Engagement Date Time |  |
|  | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Email Engagement | Email Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | number | Email Engagement | Is Test Send |  |
| Journey Activity ID | text | Email Engagement | Market Journey Activity |  |
| Last Modified Date | date | Email Engagement | Last Modified Date |  |
| Publication ID | text | Email Engagement | Engagement Publication |  |
| Subject Line | text | Email Engagement | Subject Line Text |  |
| Subscriber Key | text | Email Engagement | Indiviidual |  |

## SFMC Email Engagement Click Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| City | text | Email Engagement | City Name |  |
| Country Code | text | Email Engagement | Country |  |
| Email Domain | text | Email Engagement | Email Domain Name |  |
| Email From Address | text | Email Engagement | Email From Address |  |
| Email From Name | text | Email Engagement | Email From Name |  |
| Email ID | text | Email Engagement | Engagement Asset |  |
| Engagement Channel | text | Email Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Email Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Email Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Email Engagement | Email Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | number | Email Engagement | Is Test Send |  |
| Journey Activity ID | text | Email Engagement | Market Journey Activity |  |
| Last Modified Date | date | Email Engagement | Last Modified Date |  |
| Publication ID | text | Email Engagement | Engagement Publication |  |
| State Province Code | text | Email Engagement | State Province Code |  |
| Subject Line | text | Email Engagement | Subject Line Text |  |
| Subscriber Key | text | Email Engagement | Individual |  |

## SFMC Email Engagement Open Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| City | text | Email Engagement | City Name |  |
| Country Code | text | Email Engagement | Country |  |
| Email Domain | text | Email Engagement | Email Domain Name |  |
| Email From Address | text | Email Engagement | Email From Address |  |
| Email From Name | text | Email Engagement | Email From Name |  |
| Email ID | text | Email Engagement | Engagement Asset |  |
| Engagement Channel | text | Email Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Email Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Email Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Email Engagement | Email Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | number | Email Engagement | Is Test Send |  |
| Journey Activity ID | text | Email Engagement | Market Journey Activity |  |
| Last Modified Date | date | Email Engagement | Last Modified Date |  |
| Publication ID | text | Email Engagement | Engagement Publication |  |
| State Province Code | text | Email Engagement | State Province Code |  |
| Subject Line | text | Email Engagement | Subject Line Text |  |
| Subscriber Key | text | Email Engagement | Individual |  |

## SFMC Email Engagement Send Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| Email Domain | text | Email Engagement | Email Domain Name |  |
| Email From Address | text | Email Engagement | Email From Address |  |
| Email From Name | text | Email Engagement | Email From Name |  |
| Email ID | text | Email Engagement | Engagement Asset |  |
| Engagement Channel | text | Email Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Email Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Email Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Email Engagement | Email Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | number | Email Engagement | Is Test Send |  |
| Journey Activity ID | text | Email Engagement | Market Journey Activity |  |
| Last Modified Date | date | Email Engagement | Last Modified Date |  |
| Publication ID | text | Email Engagement | Engagement Publication |  |
| Subject Line | text | Email Engagement | Subject Line Text |  |
| Subscriber Key | text | Email Engagement | Individual |  |

## SFMC Email Unsubscribe Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| Email Domain | text | Email Engagement | Email Domain Name |  |
| Email From Address | text | Email Engagement | Email From Address |  |
| Email From Name | text | Email Engagement | Email From Name |  |
| Email ID | text | Email Engagement | Engagement Asset |  |
| Engagement Channel | text | Email Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Email Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Email Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Email Engagement | Email Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | number | Email Engagement | Is Test Send |  |
| Journey Activity ID | text | Email Engagement | Market Journey Activity |  |
| Last Modified Date | date | Email Engagement | Last Modified Date |  |
| Publication ID | text | Email Engagement | Engagement Publication |  |
| Subject Line | text | Email Engagement | Subject Line Text |  |
| Subscriber Key | text | Email Engagement | Indiviidual |  |

## SFMC Msg Engagement Event Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info Key |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| Country Code | text | Message Engagement | Country |  |
| Engagement Channel | text | Message Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Message Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Message Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Message Engagement | Message Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | number | Message Engagement | Is Test Send |  |
| Is Valid | number | Message Engagement | Is Valid |  |
| Keyword | text | Message Engagement | Keyword Text |  |
| Last Modified Date | date | Message Engagement | Last Modified Date |  |
| Message ID | text | Message Engagement | Engagement Asset |  |
| Subscriber Key | text | Message Engagement | Individual |  |

## SFMC Push Engagement Event Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Campaign |  |
| Contact Point ID | text | Device Application Engagement | Contact Point |  |
| Engagement Channel | text | Device Application Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Device Application Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Device Application Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| Geofence Name | text | Device Application Engagement | Geofence Name |  |
| IDPrimary Key | text | Device Application Engagement | Device Application Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Journey Activity ID | text | Device Application Engagement | Market Journey Activity |  |
| Message ID | text | Device Application Engagement | Engagement Asset |  |
| Subscriber Key | text | Device Application Engagement | Individual |  |

## SFMC Push Undeliver Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Campaign ID | text | Engagement Topic | Engagement Topic Group |  |
| Engagement Channel | text | Device Application Engagement | Engagement Channel |  |
| Engagement Channel Type |  |
| Engagement Channel Action | text | Device Application Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Device Application Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Device Application Engagement | Device Application Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Journey Activity ID | text | Device Application Engagement | Market Journey Activity |  |
| Subscriber Key | text | Device Application Engagement | Individual |  |

## SFMC WhatsApp Tracking Event Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Conversation ID | text | Message Engagement | Session |  |
| Engagement Channel | text | Message Engagement | Engagement Channel |  |
| Engagement Channel Action | text | Message Engagement | Engagement Channel Action |  |
| Engagement Date Time | date | Message Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| IDPrimary Key | text | Message Engagement | Message Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Message ID | text | Message Engagement | Engagement Asset |  |
| Reason | text | Message Engagement | Engagement Action Reason |  |
| Waba ID | text | Message Engagement | External Source Id |  |

## SFMC WhatsApp MO Event Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Conversation ID | text | Message Engagement | Session |  |
| Engagement Channel | text | Message Engagement | Engagement Channel |  |
| Engagement Channel Action | text | Message Engagement | Engagement Channel Action |  |
| Engagement Channel Type | text | Message Engagement | Engagement Channel Type |  |
| Engagement Date Time | dateTime | Message Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| Event Direction | text | Message Engagement | Engagement Event Direction |  |
| IDPrimary Key | text | Message Engagement | Message Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Is Test Send | text | Message Engagement | Is Test Send |  |
| Is Valid | number | Message Engagement | Is Valid |  |
| SubscriberKey | text | Message Engagement | Individual |  |

## SFMC WhatsApp Send Event Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Asset Id | text | Message Engagement | Engagement Asset |  |
| Country Code | text | Message Engagement | Country |  |
| Engagement Channel | text | Message Engagement | Engagement Channel |  |
| Engagement Channel Action | text | Message Engagement | Engagement Channel Action |  |
| Engagement Channel Type | text | Message Engagement | Engagement Channel Type |  |
| Engagement Date Time | dateTime | Message Engagement | Engagement Date Time |  |
| Engagement Topic | Created Date |  |
| Last Modified Date |  |
| Event Direction | text | Message Engagement | Engagement Event Direction |  |
| ID | text | Message Engagement | Message Engagement Id | Primary Key |
| Engagement Topic | Engagement Topic Id | Primary Key |
| Engagement |  |
| Journey Activity ID | text | Message Engagement | Market Journey Activity |  |
| Last Modified Date | date | Message Engagement | Last Modified Date |  |
| Subscriber Key | text | Message Engagement | Individiual |  |