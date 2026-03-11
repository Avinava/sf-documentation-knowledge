---
title: "setCardBin(cardBin)"
domain: apex-reference
topic: setcardbincardbin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.014Z
keywords: [setCardBin, cardBin, Sets, card, Bank, Identification, Number, BIN, Signature, Parameters, Return, Value]
---

# setCardBin(cardBin)

> Sets the card Bank Identification Number (BIN).

### setCardBin(cardBin)

Sets the card Bank Identification Number (BIN).

#### Signature

public void setCardBin(String cardBin)

#### Parameters

cardBin

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Bank Identification Number (BIN). The BIN is the first 4-6 numbers on a payment card that identifies the card issuer.

#### Return Value

Type: void