---
title: "Salesforce CRM: Segment Mapping"
domain: data-cloud
topic: salesforce-crm-segment-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.826Z
estimatedTokens: 286
keywords: [Salesforce, CRM, Segment, Mapping, data, mappings, DLO, found, Loyalty, Management, bundle, Connector, Data, Cloud., Segments, Cloud, used, determine, target, audience]
---

# Salesforce CRM: Segment Mapping

> These data mappings are for the Segment DLO found in the Loyalty Management bundle of
  the Salesforce CRM Connector for Data Cloud. Segments in Data Cloud are used to determine the
  target audience for promotions and used to determine the type of rewards provided to
  members.

# Salesforce CRM: Segment Mapping

These data mappings are for the Segment DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Segments in Data Cloud are used to determine the target audience for promotions and used to determine the type of rewards provided to members.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Segment object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Description | textarea | Market Segment | Description |
| Include Criteria | textarea | Market Segment | Include Criteria |
| Segment Status Last Updated | dateTime | Market Segment | Last Status Date |
| Segment ID | id | Market Segment | Market Segment Id |
| Publish Status | picklist | Market Segment | Market Segment Publication Status |
| Name | text | Market Segment | Name |
