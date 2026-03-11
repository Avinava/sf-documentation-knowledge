---
title: "MassEmailMessage Class"
domain: apex-reference
topic: massemailmessage-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.225Z
keywords: [MassEmailMessage, Class, Optional., specify, list, contacts, targetObjectIds, field, whatIds, well., helps, further, ensure, merge, fields, template, contain, correct, data., setWhatIds]
---

# MassEmailMessage Class

> Optional. If you specify a list of contacts for the targetObjectIds
  field, you can specify a list of whatIds as well. This helps to further
  ensure that merge fields in the template contain the correct data.

### setWhatIds(whatIds)

Optional. If you specify a list of contacts for the targetObjectIds field, you can specify a list of whatIds as well. This helps to further ensure that merge fields in the template contain the correct data.

#### Signature

public Void setWhatIds(ID\[\] whatIds)

#### Parameters

whatIds

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Return Value

Type: Void

#### Usage

The values must be one of the following types:

-   Contract
-   Case
-   Opportunity
-   Product

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If you specify whatIds, specify one for each targetObjectId; otherwise, you will receive an INVALID\_ID\_FIELD error.