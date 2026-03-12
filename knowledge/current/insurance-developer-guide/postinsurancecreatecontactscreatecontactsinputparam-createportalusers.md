---
title: "postInsuranceCreateContacts(createContactsInputParam, createPortalUsers)"
domain: insurance-developer-guide
topic: postinsurancecreatecontactscreatecontactsinputparam-createportalusers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.959Z
estimatedTokens: 326
keywords: [postInsuranceCreateContacts, createContactsInputParam, createPortalUsers, contacts, portal, users, group, census, members, API, Version, Requires, Chatter]
---

# postInsuranceCreateContacts(createContactsInputParam, createPortalUsers)

> Create contacts and portal users for group census members.

# postInsuranceCreateContacts(createContactsInputParam, createPortalUsers)

Create contacts and portal users for group census members.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceContactsAndUsersCreationRepresentation postInsuranceCreateContacts(ConnectApi.InsuranceContactsAndUsersCreationInputRepresentation createContactsInputParam, Boolean createPortalUsers)

## Parameters

createContactsInputParam

Type: [ConnectApi.InsuranceContactsAndUsersCreationInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_contacts_and_users_creation.htm "Input representation to create contacts and portal users.")

Details to create contacts and users.

createPortalUsers

Type: Boolean

Indicates whether to create portal users for the new contacts (true) or not (false). The default value is false.

## Return Value

Type: [ConnectApi.InsuranceContactsAndUsersCreationRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_contacts_and_users_creation.htm "Output representation of the contact and user creation process.")

## Example

Here's an example of how to invoke the Insurance Create Contracts API from Apex code.

```

```

## Code Examples

```apex
// Create Group Benefits Contract via Connect API (simple version)

// 1) Create the top-level input
ConnectApi.InsuranceContractCreationInputRepresentation input =
    new ConnectApi.InsuranceContractCreationInputRepresentation();

// Required: Quote Id to convert
input.quoteId = '0Q0xx0000004C9QCAU';

// Optional dates (ISO-8601 strings)
input.contractStartDate = '2026-01-01';
input.contractEndDate   = '2026-12-31';
input.enrollmentStartDate = '2025-12-01';
input.enrollmentEndDate   = '2025-12-31';
// Optional: contract term in months
// input.contractTerm = 12;

// 2) (Optional) Additional fields per contract item (e.g., per quote line)
// Build a map-like structure using InsuranceApexStringMapInputRepresentation
List<ConnectApi.InsuranceApexStringRepresentation> fieldPairs = new List<ConnectApi.InsuranceApexStringRepresentation>();
ConnectApi.InsuranceApexStringRepresentation kv1 = new ConnectApi.InsuranceApexStringRepresentation();
kv1.key = 'CustomerSignedTitle';
kv1.value = 'Mr';
fieldPairs.add(kv1);

// One contract item (repeat and add to the list for more)
ConnectApi.ContractItem item = new ConnectApi.ContractItem();
item.entity = 'Contract';   // e.g., 'ContractLineItem__c' (use your org’s API name)
// item.instanceKey = 'QLI-1';                     // unique identification key from Quote Line Item
item.fields = fieldPairs;

// Wrap into list and assign to input.additionalFields
input.additionalFields = new List<ConnectApi.ContractItem>{ item };

// 3) Execute the Contract Creation API
try {
    ConnectApi.InsuranceContractCreationOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceGBQuoteToContract(input);

    System.debug('Contract creation result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error while creating contract: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceContactsAndUsersCreationInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_contacts_and_users_creation.htm)
- ConnectApi.InsuranceContactsAndUsersCreationRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_contacts_and_users_creation.htm)
