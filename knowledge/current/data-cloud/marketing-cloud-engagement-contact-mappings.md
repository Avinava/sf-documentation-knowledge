---
title: "Marketing Cloud Engagement: Contact Mappings"
domain: data-cloud
topic: marketing-cloud-engagement-contact-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.179Z
estimatedTokens: 1161
keywords: [Marketing, Cloud, Engagement, Contact, Mappings, data, stream, deployed, starter, bundle, automatically, maps, model, objects, DMO]
---

# Marketing Cloud Engagement: Contact Mappings

> After a data stream is deployed, the Marketing Cloud Engagement
         starter data bundle automatically maps data from Marketing Cloud Engagement to data model
         objects (DMO)s in Data Cloud. Contact data includes the
         following system-generated DLOS and associated data streams: SFMC Contact Point App, SFMC
         Contact Point Email, SFMC Contact Point Phone, SFMC Contact Point WhatsApp, and SFMC
         Subscriber.

# Marketing Cloud Engagement: Contact Mappings

After a data stream is deployed, the Marketing Cloud Engagement starter data bundle automatically maps data from Marketing Cloud Engagement to data model objects (DMO)s in Data Cloud. Contact data includes the following system-generated DLOS and associated data streams: SFMC Contact Point App, SFMC Contact Point Email, SFMC Contact Point Phone, SFMC Contact Point WhatsApp, and SFMC Subscriber.

Attributes relate to individual subscriber data and profile information. The SFMC subscriber stream sources its data from the All Contacts list in Marketing Cloud and excludes subscribers that aren’t in the active state. The SFMC Contact Point Email stream sources its data from the All Subscribers list and includes subscribers in all states.

## DLO to DMO Mapping

These data mappings relate to contact data associated with the Marketing Cloud Engagement connector and how that data connects to DMOs.

## SFMC Contact Point App Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Application ID | text | Contact Point App | Software Application |  |
| Badge Count | number | Contact Point App | Badge Count |  |
| Device ID | text | Contact Point App | Device |  |
| Device | Device IDPrimary Key |  |
| Device Name | text | Device | Name |  |
| Device Type | text | Contact Point App | Asset Type Id |  |
| IdPrimary Key | text | Contact Point App | Contact Point App Id | Primary Key |
| Party Identification | Party Identification Id | Primary Key |
| OS Name | text | Device | OS Name |  |
| OS Version Number | text | Device | OS Version |  |
| Party Identification Name | text | Party Identification | Identification Name |  |
| Party Identification Type | text | Party Identification | Party Identification Type |  |
| Registration Id | text | Party Identification | Identification Number |  |
| Subscriber Key | text | Contact Point App | Party |  |
| Party Identification | Party |  |
| Time Zone | text | Contact Point App | Best Time to Contact Timezone |  |

## SFMC Contact Point Email Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Email Address | text | Contact Point Email | Email Address |  |
| Email Domain | text | Contact Point Email | Email Domain |  |
| Is Primary Email Address | number | Contact Point Email | Primary Flag |  |
| Subscriber KeyPrimary Key | text | Contact Point Email | Contact Point Email Id | Primary Key |
| Party |  |

## SFMC Contact Point Phone Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| City | text | Contact Point Phone | City Name |  |
| Country Code | text | Contact Point Phone | Country |  |
| IdPrimary Key | text | Contact Point Phone | Contact Point Phone Id | Primary Key |
| Is Primary | number | Contact Point Phone | Primary Flag |  |
| Is SMS | number | Contact Point Phone | Is SMS Capable |  |
| Mobile Number | text | Contact Point Phone | Formatted E164 Phone Number |  |
| Telephone Number |  |
| State | text | Contact Point Phone | State Province Text |  |
| Subscriber Key | text | Contact Point Phone | Party |  |
| Zip Code | text | Contact Point Phone | Postal Code Text |  |

## SFMC Contact Point WhatsApp Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Channel | text | Contact Point OTT Service | Engagement Channel Type |  |
| City | text | Contact Point OTT Service | City |  |
| Country Code | text | Contact Point OTT Service | Country |  |
| IDPrimary Key | text | Contact Point OTT Service | Contact Point OTT Service | Primary Key |
| Is Primary | text | Contact Point OTT Service | Primary Flag |  |
| Mobile Number | text | Contact Point OTT Service | Username |  |
|  |  |
| State | text | Contact Point OTT Service | State Province |  |
| Subscriber Key | text | Contact Point OTT Service | Party |  |
| Zip Code | text | Contact Point OTT Service | Postal Code |  |

## SFMC Subscriber Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Party Identification ID | text | Party Identification | Party Identification Id | Primary Key |
| Party Identification Name | text | Party Identification | Identification Name |  |
| Party Identification Type | text | Party Identification | Party Identification Type |  |
| Subscriber KeyPrimary Key | text | Identity | Individual Id | Primary Key |
| Party Identification | Identification Number |  |
| Party |  |
