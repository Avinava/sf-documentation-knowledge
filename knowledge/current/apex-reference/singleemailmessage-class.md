---
title: "SingleEmailMessage Class"
domain: apex-reference
topic: singleemailmessage-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.284Z
keywords: [SingleEmailMessage, Class, specify, contact, targetObjectId, field, optional, whatId, well., helps, further, ensure, merge, fields, template, contain, correct, data., setWhatId, Signature]
---

# SingleEmailMessage Class

> If you specify a contact for the targetObjectId field, you can
        specify an optional whatId as well. This helps to further ensure that
        merge fields in the template contain the correct data.

### setWhatId(whatId)

If you specify a contact for the targetObjectId field, you can specify an optional whatId as well. This helps to further ensure that merge fields in the template contain the correct data.

#### Signature

public Void setWhatId(ID whatId)

#### Parameters

whatId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

#### Usage

The value must be one of the following types:

-   Account
-   Asset
-   Campaign
-   Case
-   Contract
-   Opportunity
-   Order
-   Product
-   Solution
-   Custom