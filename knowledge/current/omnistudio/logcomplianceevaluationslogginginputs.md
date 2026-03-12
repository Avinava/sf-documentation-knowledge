---
title: "logComplianceEvaluations(loggingInputs)"
domain: omnistudio
topic: logcomplianceevaluationslogginginputs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.434Z
estimatedTokens: 228
keywords: [logComplianceEvaluations, loggingInputs, Log, compliance, check, events, control., API, supports, maximum, number, logs, per, request., 200, 000, audit, log, calls, year.]
---

# logComplianceEvaluations(loggingInputs)

> Log compliance check events for control. This API supports a maximum number of 25 logs
  per request. You can make up to 200,000 audit log API calls per year.

# logComplianceEvaluations(loggingInputs)

Log compliance check events for control. This API supports a maximum number of 25 logs per request. You can make up to 200,000 audit log API calls per year.

## API Version

64.0

## Signature

public static ConnectApi.ComplianceLoggingResponse logComplianceEvaluations(ConnectApi.ComplianceLoggingInfo loggingInputs)

## Parameters

loggingInputs

Type: [ConnectApi.ComplianceLoggingInfo](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_logging_info.htm "Compliance evaluation logging request.")

Details of the logging request for a compliance evaluation.

## Return Value

Type: [ConnectApi.ComplianceLoggingResponse](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_logging_response.htm "Compliance bulk logging result.")

Compliance bulk logging result.

## Example

```

```

## Code Examples

```apex
public with sharing class ComplianceLoggingService {

    /**
     * Logs a single compliance event.
     *
     * This is a convenience wrapper that builds a single
     * ComplianceControllogValue and delegates to the bulk
     * logging method.
     *
     * @param controlVersionApiName API name of the control version (required)
     * @param isCompliant Whether the compliance check passed (required)
     * @param inContextOf Salesforce record ID providing business context (required)
     * @param status SUCCESS or ERROR (required)
     * @param complianceMessage Message describing the compliance result (optional)
     * @param transactionKey External correlation ID for tracing across systems (optional)
     * @return ConnectApi.ComplianceLoggingResponse
     */
    public static ConnectApi.ComplianceLoggingResponse logComplianceEvent(
        String controlVersionApiName,
        Boolean isCompliant,
        String inContextOf,
        String status,
        String complianceMessage,
        String transactionKey
    ) {
        // Create a single compliance log entry
        ConnectApi.ComplianceControllogValue controllog =
            new ConnectApi.ComplianceControllogValue();

        controllog.controlVersionApiName = controlVersionApiName;
        controllog.isCompliant = isCompliant;
        controllog.inContextOf = inContextOf;
        controllog.status = status;
        controllog.complianceMessage = complianceMessage;
        controllog.transactionKey = transactionKey;
        
        // Add to a list and invoke the bulk logging API
        List<ConnectApi.ComplianceControllogValue> controllogs =
            new List<ConnectApi.ComplianceControllogValue>();
        controllogs.add(controllog);

        return logComplianceEvents(controllogs);
    }
    
    /**
     * Logs multiple compliance events in a single API call.
     *
     * Use this method when logging multiple control evaluations
     * to reduce API calls and improve performance.
     *
     * @param controllogs List of compliance log entries
     * @return ConnectApi.ComplianceLoggingResponse
     */
    public static ConnectApi.ComplianceLoggingResponse logComplianceEvents(
        List<ConnectApi.ComplianceControllogValue> controllogs
    ) {
        try {
            // Create the request payload for the Compliance Logging API
            ConnectApi.ComplianceLoggingInfo input =
                new ConnectApi.ComplianceLoggingInfo();
            input.controllogs = controllogs;
            
            // Invoke the Industries Compliance Logging API
            ConnectApi.ComplianceLoggingResponse response =
                ConnectApi.IndustriesCompliance.logComplianceEvaluations(input);
            
            System.debug('Compliance logging successful. Response: ' + response);
            return response;
            
        } catch (Exception e) {
            // Log and rethrow as a domain-specific exception
            System.debug(
                LoggingLevel.ERROR,
                'Error logging compliance events: ' + e.getMessage()
            );
            throw new ComplianceLoggingException(
                'Failed to log compliance events: ' + e.getMessage(),
                e
            );
        }
    }
    
    /**
     * Simple method using the same pattern as your working example.
     *
     * This method demonstrates a minimal compliance log
     * with a default SUCCESS status and message.
     *
     * @param controlVersionApiName API name of the control version
     * @param inContextOf Salesforce record ID providing context
     * @param isCompliant Whether the compliance check passed
     * @param transactionKey External correlation ID
     * @return ConnectApi.ComplianceLoggingResponse
     */
    public static ConnectApi.ComplianceLoggingResponse logSimpleCompliance(
        String controlVersionApiName, 
        String inContextOf, 
        Boolean isCompliant,
        String transactionKey
    ) {
        List<ConnectApi.ComplianceControllogValue> controllogs =
            new List<ConnectApi.ComplianceControllogValue>();

        ConnectApi.ComplianceControllogValue controllog =
            new ConnectApi.ComplianceControllogValue();

        controllog.transactionKey = transactionKey;
        controllog.inContextOf = inContextOf;
        controllog.controlVersionApiName = controlVersionApiName;
        controllog.status = 'SUCCESS';
        controllog.complianceMessage = 'Is Compliant';
        controllog.isCompliant = isCompliant;

        controllogs.add(controllog);

        ConnectApi.ComplianceLoggingInfo input =
            new ConnectApi.ComplianceLoggingInfo();
        input.controllogs = controllogs;

        // Call the Compliance Logging API
        ConnectApi.ComplianceLoggingResponse response =
            ConnectApi.IndustriesCompliance.logComplianceEvaluations(input);
        return response;
    }
    
    /**
     * Custom exception for compliance logging errors.
     *
     * Used to wrap lower-level exceptions thrown during
     * Compliance Logging API invocation.
     */
    public class ComplianceLoggingException extends Exception {}
}
```

## Related Topics

- ConnectApi.ComplianceLoggingInfo (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_logging_info.htm)
- ConnectApi.ComplianceLoggingResponse (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_logging_response.htm)
