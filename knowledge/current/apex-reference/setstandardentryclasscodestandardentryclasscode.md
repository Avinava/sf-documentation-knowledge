---
title: "setStandardEntryClassCode(standardEntryClassCode)"
domain: apex-reference
topic: setstandardentryclasscodestandardentryclasscode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.926Z
keywords: [setStandardEntryClassCode, standardEntryClassCode, Sets, code, identifies, type, electronic, payment, transaction, being, processed, within, Automated, Clearing, House, ACH, network., Signature, Parameters, Return]
---

# setStandardEntryClassCode(standardEntryClassCode)

> Sets the code that identifies the type of electronic payment transaction
      being processed within the Automated Clearing House (ACH) network.

### setStandardEntryClassCode(standardEntryClassCode)

Sets the code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.

#### Signature

public void setStandardEntryClassCode(commercepayments.StandardEntryClassCode standardEntryClassCode)

#### Parameters

standardEntryClassCode

Type: commercepayments.[StandardEntryClassCode](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_StandardEntryClassCode.htm "Specifies the three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.")

#### Return Value

Type: void