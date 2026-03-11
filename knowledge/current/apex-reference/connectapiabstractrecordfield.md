---
title: "ConnectApi.AbstractRecordField"
domain: apex-reference
topic: connectapiabstractrecordfield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.757Z
keywords: [ConnectApi.AbstractRecordField, Important, See]
---

# ConnectApi.AbstractRecordField

# ConnectApi.AbstractRecordField

A field on a record.

This class is abstract.

Superclass of:

-   [ConnectApi.BlankRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_blankRecordField.htm "Record field displayed as a place holder in a grid of fields.")
-   [ConnectApi.LabeledRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_labeledRecordField.htm "Record field containing a label and a text value.")

Message segments in a feed item are typed as ConnectApi.MessageSegment. Feed item capabilities are typed as ConnectApi.FeedItemCapability. Record fields are typed as ConnectApi.AbstractRecordField. These classes are all abstract and have several concrete subclasses. At runtime you can use instanceof to check the concrete types of these objects and then safely proceed with the corresponding downcast. When you downcast, you must have a default case that handles unknown subclasses.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The composition of a feed can change between releases. Write your code to handle instances of unknown subclasses.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| type | String | Type of the field. One of these values:AddressBlankBooleanCompoundCreatedByDateDateTimeEmailLastModifiedByLocationNameNumberPercentPhonePicklistReferenceTextTime | 29.0 |

#### See Also

-   [ConnectApi.RecordViewSection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordViewSection.htm "Section of record fields and values on a record detail.")