---
title: "fetch(position, count)"
domain: apex-reference
topic: fetchposition-count
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.675Z
keywords: [fetch, position, count, Fetches, cursor, rows, correspond, offset, specified, record, count., maximum, number, per, million, regardless, operation, being, synchronous, asynchronous.]
---

# fetch(position, count)

> Fetches cursor rows that correspond to the offset position and the specified record
    count. The maximum number of rows per cursor is 50 million, regardless of the operation being
    synchronous or asynchronous. Calling the Cursor.fetch() method counts against
    the SOQL query limit, and the rows fetched count against the SOQL query row limit.

### fetch(position, count)

Fetches cursor rows that correspond to the offset position and the specified record count. The maximum number of rows per cursor is 50 million, regardless of the operation being synchronous or asynchronous. Calling the Cursor.fetch() method counts against the SOQL query limit, and the rows fetched count against the SOQL query row limit.

#### Signature

public static List<SObject> fetch(Integer position, Integer count)

#### Parameters

position

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The offset position from which records are fetched.

count

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of sObjects to fetch from the cursor, up to a maximum of 2,000.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

The list of sObjects from the SOQL query, starting from the specified position.