---
title: "ExtlRecShrRecordMap"
domain: object-reference
topic: extlrecshrrecordmap
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.018Z
estimatedTokens: 856
keywords: [ExtlRecShrRecordMap, lead, opportunity, mapped, partner, vendor, Connect, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# ExtlRecShrRecordMap

> Represents the lead or opportunity being mapped between a partner and
         vendor for Partner Connect. This object is available in API version 62.0 and
      later.

# ExtlRecShrRecordMap

Represents the lead or opportunity being mapped between a partner and vendor for Partner Connect. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| ExtlRecShrCnctId | TypereferencePropertiesFilter, Group, SortDescriptionID of the external record share connection.This field is a relationship field.Relationship NameExtlRecShrCnctRefers ToExtlRecShrCnct |
| ExtlRecord | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the lead or opportunity record on the external system. |
| InboundStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of imports and updates received.Possible values are:ImportSuccessImportConctExtlRecErrorUpdateSuccessUpdateFieldMapErrorUpdateConctExtlRecErrorUpdateUnknownError |
| InternalRecordId | TypereferencePropertiesFilter, Group, SortDescriptionID of the lead or opportunity record on the internal system.This field is a polymorphic relationship field.Relationship NameInternalRecordRelationship TypeMaster-detailRefers ToLead, Opportunity (the master object) |
| IsImported | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record originated on the internal system (true) or external system (false).The default value is false. |
| LastModifiedSent | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp of the last record update between the vendor and partner. This field doesn’t capture when the result is received. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
| OutboundStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of exports, updates, and results received.Possible values are:ExportSuccessExportInProgressExportSuccessSkippedExportSuccessPartialExportPublishFieldMapErrorExportSubscribeFieldMapErrorExportPublishEventErrorExportPublishUnknownErrorExportSubscribeUnknownErrorExportPublishConnectionErrorUpdateInProgressUpdateInProgressUpdateSuccessUpdatePublishFieldMapErrorUpdateSubscribeRecordNotFoundUpdatePublishFieldMapErrorUpdateSubscribeFieldMapErrorUpdatePublishConnectionErrorUpdatePublishEventErrorUpdatePublishUnknownErrorUpdateSubscribeUnknownError |
| UniqueRecordKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRecord key used internally for indexing. If IsImported is false, then this field contains the InternalRecordId value. If IsImported is true, this field contains the ExtlRecord value.This field is a calculated field. |
