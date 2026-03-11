---
title: "setEffectiveDate(effectiveDate)"
domain: apex-reference
topic: seteffectivedateeffectivedate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.267Z
keywords: [setEffectiveDate, effectiveDate, Sets, EffectiveDate, field, LineItemResponse, class., Effective, Date, fields, optional, store, date, transaction, takes, effect., provide, these, only, recordkeeping]
---

# setEffectiveDate(effectiveDate)

> Sets the EffectiveDate field on the LineItemResponse class. Effective Date fields are optional fields that store the
      date that a transaction takes effect. We provide these fields only for recordkeeping purposes
      – for example, if you must report an effective date to an external general ledger
      system. Salesforce doesn't use them to calculate any tax or payment values.

### setEffectiveDate(effectiveDate)

Sets the EffectiveDate field on the LineItemResponse class. Effective Date fields are optional fields that store the date that a transaction takes effect. We provide these fields only for recordkeeping purposes – for example, if you must report an effective date to an external general ledger system. Salesforce doesn't use them to calculate any tax or payment values.

#### Signature

global void setEffectiveDate(Datetime effectiveDate)

#### Parameters

effectiveDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Optional field that stores the date that a transaction takes effect.

#### Return Value

Type: void