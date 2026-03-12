---
title: "Map Telephony Error Codes to Salesforce Outbound Call Errors"
domain: voice-pt-developer-guide
topic: map-telephony-error-codes-to-salesforce-outbound-call-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.092Z
estimatedTokens: 708
keywords: [Map, Telephony, Error, Codes, Salesforce, Outbound, Call, Errors, fails, intercept, connector, implementation, specific, constant, populating]
---

# Map Telephony Error Codes to Salesforce Outbound Call Errors

> When an outbound call fails, intercept the error in your connector implementation, and
  map it to a specific Salesforce error constant by populating the error.type field. Return the
  rejected Promise containing the specific error type to show a descriptive error message to the
  rep in the Omni-Channel console.

# Map Telephony Error Codes to Salesforce Outbound Call Errors

When an outbound call fails, intercept the error in your connector implementation, and map it to a specific Salesforce error constant by populating the error.type field. Return the rejected Promise containing the specific error type to show a descriptive error message to the rep in the Omni-Channel console.

This mapping is optional. If you don’t populate the error.type field, or if the provided type is null, Salesforce defaults to the generic CAN\_NOT\_START\_THE\_CALL error type.

Map your telephony system's error codes to the Salesforce error constants to trigger specific messages for the rep:

-   AGENT\_AT\_MAXIMUM\_CAPACITY: Rep has reached the maximum number of allowed concurrent calls defined by your system.
-   AGENT\_NOT\_INITIALIZED: Rep's softphone or connection ID isn’t initialized yet.
-   PHONE\_NUMBER\_NOT\_VALID: The dialed number doesn’t exist or is invalid.
-   PHONE\_NUMBER\_NOT\_VALID\_E164\_FORMAT: The dialed number is valid but requires E.164 formatting.
-   AREA\_CODE\_NOT\_IN\_DIALABLE\_LIST: The dialed number belongs to a region or country code that is restricted.
-   UNAUTHORIZED\_SERVICE\_CALL: Rep doesn’t have the necessary permissions to make this call or has exceeded the system call limits.
-   OUTBOUND\_QUEUE\_MISCONFIGURED: The routing queue associated with the outbound call is missing required settings.
-   CALL\_THROTTLED: The call failed because rate limits are exceeded.
-   TIMEOUT\_ERROR: The connection attempt to the telephony server timed out.
-   UNABLE\_TO\_CONNECT\_TO\_AGENT: The system failed to establish a connection between the rep and the telephony server due to network issues or rep configuration errors.

If an outbound call fails:

-   Intercept the specific error code in your system.
-   Create a standard Error object and set the error.type field to the corresponding Salesforce error constant. For example, Constants.VOICE\_ERROR\_TYPE.AGENT\_AT\_MAXIMUM\_CAPACITY.
-   Reject the Promise using the modified error object.

Salesforce receives the rejected Promise, logs the specific error type, and shows the error message to the rep in the Omni-Channel console.

In this example implementation, the standard Error object is instantiated using the message received from your telephony system. The AGENT\_AT\_MAXIMUM\_CAPACITY Salesforce error constant is assigned to the error.type field. A rejected Promise containing this error object is returned to map the error scenario to provide a descriptive error message to the rep.

```

```

#### See Also

-   [Service Cloud Connector API Reference: publishError](https://developer.salesforce.com/docs/atlas.en-us.258.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publisherror.htm)

## Code Examples

```
// for rep at max capacity
   const error = new Error(partnerError.message);
   error.type = Constants.VOICE_ERROR_TYPE.AGENT_AT_MAXIMUM_CAPACITY;
   return Promise.reject(error);
```
