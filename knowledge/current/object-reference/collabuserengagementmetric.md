---
title: "CollabUserEngagementMetric"
domain: object-reference
topic: collabuserengagementmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.617Z
estimatedTokens: 515
keywords: [CollabUserEngagementMetric, user, engagement, metrics, Quip, thread, template, document, API, version, 50.0, later, Calls]
---

# CollabUserEngagementMetric

> Represents the user engagement metrics for a Quip thread in a Quip template or
      document. This object is available in API version 50.0 and later.

# CollabUserEngagementMetric

Represents the user engagement metrics for a Quip thread in a Quip template or document. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CommentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of comments by the user for the specified MetricDate. |
| EditCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of edits by the user for the specified MetricDate. |
| MetricDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in your local time zone. |
| MetricDateOnly | TypedatePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in UTC. Available in API version 55.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique name of the CollabUserEngagementMetric object. |
| QuipThread | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe Quip thread ID. |
| QuipThreadTitle | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe title of the Quip document, sheet, slide, and so forth. |
| QuipThreadType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of Quip thread. The possible values are:CHATDOCUMENTSHEETSLIDETEMPLATE |
| QuipUser | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the Quip user. |
| SalesforceUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Salesforce user. |
| Site | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Quip site. |
| SourceTemplate | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the source template. |
| ViewCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of views by the user for the specified MetricDate. |
