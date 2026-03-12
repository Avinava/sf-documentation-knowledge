---
title: "Clm Class"
domain: apex-reference
topic: clm-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:17.451Z
estimatedTokens: 552
namespace: ConnectApi
keywords: [Clm, Create, contracts, ID., createContract, contractInputPayload, API, Version, Requires, Chatter, updateContract]
---

# Clm Class

> Create contracts using the object ID.

**Namespace:** `ConnectApi`

# Clm Class

Create and update Contract Lifecycle Management (CLM) contracts using object ID.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Clm Methods

These methods are for Clm. All methods are static.

-   **[createContract(contractInputPayload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Clm_static_methods.htm#apex_ConnectAPI_Clm_createContract_2)**
    Create contracts using the object ID.
-   **[updateContract(contractInputPayload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Clm_static_methods.htm#apex_ConnectAPI_Clm_updateContract_1)**
    Update contracts using the object ID.

### createContract(contractInputPayload)

Create contracts using the object ID.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContractOutputRepresentation createContract(ConnectApi.ContractInputRepresentation contractInputPayload)

#### Parameters

contractInputPayload

Type: [ConnectApi.ContractInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contract.htm "Input to create and update contract.")

Input payload to create contract.

#### Return Value

Type: [ConnectApi.ContractOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_contract_output_response.htm "Contract list.")

### updateContract(contractInputPayload)

Update contracts using the object ID.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContractOutputRepresentation updateContract(ConnectApi.ContractInputRepresentation contractInputPayload)

#### Parameters

contractInputPayload

Type: [ConnectApi.ContractInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contract.htm "Input to create and update contract.")

Input payload to update contract.

#### Return Value

Type: [ConnectApi.ContractOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_contract_output_response.htm "Contract list.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createContract(contractInputPayload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Clm_static_methods.htm)
- updateContract(contractInputPayload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Clm_static_methods.htm)
- ConnectApi.ContractInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contract.htm)
- ConnectApi.ContractOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_contract_output_response.htm)
