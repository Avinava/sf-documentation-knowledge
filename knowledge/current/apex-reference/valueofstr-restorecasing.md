---
title: "valueOf(str, restoreCasing)"
domain: apex-reference
topic: valueofstr-restorecasing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.370Z
keywords: [valueOf, str, restoreCasing, Converts, specified, string, returns, ID., true, represents, 18-character, incorrect, casing, method, correctly, aligned, its, encoded, casing., Signature]
---

# valueOf(str, restoreCasing)

> Converts the specified string into an ID and returns the ID. If
        restoreCasing is true,
      and the string represents an 18-character ID that has incorrect casing, the method returns an
      18-character ID that is correctly aligned with its encoded casing.

### valueOf(str, restoreCasing)

Converts the specified string into an ID and returns the ID. If restoreCasing is true, and the string represents an 18-character ID that has incorrect casing, the method returns an 18-character ID that is correctly aligned with its encoded casing.

#### Signature

public static Id valueOf(String str, Boolean restoreCasing)

#### Parameters

str

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String to be converted to an ID

restoreCasing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If set to true, and str represents an 18-character ID, the method returns an 18-character ID that is correctly aligned with its casing.

#### Return Value

Type: [Id](#apex_methods_system_id "Contains methods for the ID primitive data type.")

The return value depends on both the str and the restoreCasing parameter values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the str is invalid, the method throws a System.StringException exception.

| Parameters | restoreCasing=true | restoreCasing=false |
| --- | --- | --- |
| Valid 15-character str value | Because the 15-character input value can’t be encoded for casing, the method throws a System.StringException. | The method returns a 15-character ID. |
| Valid 18-character str value | The method returns an 18-character ID that is correctly aligned with its encoded casing. | The method doesn’t attempt to correctly align the casing of the 18-character ID and returns an 18-character ID. |