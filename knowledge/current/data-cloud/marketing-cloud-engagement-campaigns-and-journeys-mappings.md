---
title: "Marketing Cloud Engagement: Campaigns and Journeys Mappings"
domain: data-cloud
topic: marketing-cloud-engagement-campaigns-and-journeys-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.459Z
estimatedTokens: 1111
keywords: [Marketing, Cloud, Engagement, Campaigns, Journeys, Mappings, After, data, stream, deployed, starter, bundle, automatically, maps, model, objects, DMO, Data, Cloud., includes]
---

# Marketing Cloud Engagement: Campaigns and Journeys Mappings

> After a data stream is deployed, the Marketing Cloud Engagement
         starter data bundle automatically maps data from Marketing Cloud Engagement to data model
         objects (DMO)s in Data Cloud. The Campaigns and Journeys data
         includes the following DLOs and associated data streams: SFMC Campaign, SFMC Email
         Publication, SFMC Email Template, SFMC Journey, SFMC Journey Activity, SFMC Push Template,
         SFMC SMS Template, and SFMC WhatsApp Message Template.

# Marketing Cloud Engagement: Campaigns and Journeys Mappings

After a data stream is deployed, the Marketing Cloud Engagement starter data bundle automatically maps data from Marketing Cloud Engagement to data model objects (DMO)s in Data Cloud. The Campaigns and Journeys data includes the following DLOs and associated data streams: SFMC Campaign, SFMC Email Publication, SFMC Email Template, SFMC Journey, SFMC Journey Activity, SFMC Push Template, SFMC SMS Template, and SFMC WhatsApp Message Template.

## DLO to DMO Mapping

These data streams relate to campaign and journey data associated with the Marketing Cloud Engagement connector and how that data connects to DMOs.

## SFMC Campaign Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Created Date | date | Campaign | Created Date |  |
| End Date | date | Campaign | End Date |  |
| IDPrimary Key | text | Campaign | Id | Primary Key |
| Modified Date | date | Campaign | Last Modified Date |  |
| Name | text | Campaign | Name |  |
| Start Date | date | Campaign | Start Date |  |

## SFMC Email Publication Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Created Date | date | Email Publication | Created Date |  |
| From Email | text | Email Publication | From Address |  |
| IDPrimary Key | text | Email Publication | Email Publication Id | Primary Key |
| Modified Date | date | Email Publication | Last Modified Date |  |
| Name | text | Email Publication | From Name |  |

## SFMC Email Template Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Asset Type | text | Email Template | Engagement Asset Type |  |
| Created Date | date | Email Template | Created Date |  |
| Email Name | text | Email Template | Name |  |
| Email Subject | text | Email Template | Subject |  |
| IDPrimary Key | text | Email Template | Email Template Id | Primary Key |
| Modified Date | date | Email Template | Last Modified Date |  |

## SFMC Journey Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Created Date | date | Market Journey | Created Date |  |
| IDPrimary Key | text | Market Journey | Id | Primary Key |
| Modified Date | date | Market Journey | Last Modified Date |  |
| Name | text | Market Journey | Name |  |
| VersionID | text | Market Journey | VersionID |  |

## SFMC Journey Activity Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Created Date | date | Market Journey Activity | Created Date |  |
| IDPrimary Key | text | Market Journey Activity | Market Journey Activity Id | Primary Key |
| Journey ID | text | Market Journey Activity | Market Journey Id |  |
| Modified Date | date | Market Journey Activity | Last Modified Date |  |
| Name | text | Market Journey Activity | Name |  |

## SFMC Push Template Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Asset Type | text | Device Application Template | Engagement Asset Type |  |
| Created Date | date | Device Application Template | Created Date |  |
| IDPrimary Key | text | Device Application Template | Device Application Template ID | Primary Key |
| Modified Date | date | Device Application Template | Last Modified Date |  |
| Name | text | Device Application Template | Name |  |

## SFMC SMS Template Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| Asset Type | text | SMS Template | Engagement Asset Type |  |
| Created Date | date | SMS Template | Created Date |  |
| IDPrimary Key | text | SMS Template | SMS Template ID | Primary Key |
| Modified Date | date | SMS Template | Last Modified Date |  |
| Name | text | SMS Template | Name |  |

## SFMC WhatsApp Message Template Data Stream

| DLO Field | DLO Field Data Type | DMO | DMO Field | Additional Info |
| --- | --- | --- | --- | --- |
| AssetTypeID | text | Message Template | Engagement Asset Type Id |  |
| Created Date | date | Message Template | Created Date |  |
| ID | text | Message Template | Message Template Id | Primary Key |
| Modified Date | date | Message Template | Last Modified Date |  |
| Name | text | Message Template | Name |  |
