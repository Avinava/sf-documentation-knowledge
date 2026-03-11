---
title: "getBusinessUnitContextByIsCurrentStatus(isCurrent)"
domain: apex-reference
topic: getbusinessunitcontextbyiscurrentstatusiscurrent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.504Z
keywords: [getBusinessUnitContextByIsCurrentStatus, isCurrent, Get, Pardot, business, units, context, user, access, specifying, current, status., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getBusinessUnitContextByIsCurrentStatus(isCurrent)

> Get the Pardot business units the context user has access to by
      specifying the current status.

### getBusinessUnitContextByIsCurrentStatus(isCurrent)

Get the Pardot business units the context user has access to by specifying the current status.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PardotBusinessUnitContextOutput getBusinessUnitContextByIsCurrentStatus(Boolean isCurrent)

#### Parameters

isCurrent

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return only the business unit that’s selected as the context user's current business unit context in the business unit switcher of the Pardot Lightning app (true) or to return only the business units that aren’t selected as the context user's current business unit context (false).

#### Return Value

Type: [ConnectApi.PardotBusinessUnitContextOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pardot_business_unit_context_output.htm "Pardot business unit context.")