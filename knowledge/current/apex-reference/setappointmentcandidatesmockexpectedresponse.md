---
title: "setAppointmentCandidatesMock(expectedResponse)"
domain: apex-reference
topic: setappointmentcandidatesmockexpectedresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.565Z
keywords: [setAppointmentCandidatesMock, expectedResponse, Sets, mock, object, running, tests, getAppointmentCandidates, method., Signature, Parameters, Return, Value]
---

# setAppointmentCandidatesMock(expectedResponse)

> Sets a mock object when running tests for the getAppointmentCandidates method.

### setAppointmentCandidatesMock(expectedResponse)

Sets a mock object when running tests for the getAppointmentCandidates method.

This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

public static void setAppointmentCandidatesMock(String expectedResponse)

#### Parameters

expectedResponse

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

This example shows a sample implementation of the GetAppointmentCandidates class:

```

```

This example shows how to set a sample mock using the setAppointmentCandidatesMock method:

```

```