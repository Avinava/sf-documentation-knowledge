---
title: "postInsuranceCreateAccounts(createAccountsInputParam, createPortalUsers)"
domain: insurance-developer-guide
topic: postinsurancecreateaccountscreateaccountsinputparam-createportalusers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.954Z
estimatedTokens: 336
keywords: [postInsuranceCreateAccounts, createAccountsInputParam, createPortalUsers, person, accounts, portal, users, group, census, members, API, Version, Requires, Chatter]
---

# postInsuranceCreateAccounts(createAccountsInputParam, createPortalUsers)

> Create person accounts and portal users for group census members.

# postInsuranceCreateAccounts(createAccountsInputParam, createPortalUsers)

Create person accounts and portal users for group census members.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceAccountsAndUsersCreationRepresentation postInsuranceCreateAccounts(ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation createAccountsInputParam, Boolean createPortalUsers)

## Parameters

createAccountsInputParam

Type: [ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_accounts_and_users_creation.htm "Input representation for creating person accounts and portal users from group census members.")

Details to create person accounts.

createPortalUsers

Type: Boolean

Specifies whether to create portal users for the new person accounts (true) or not (false). The default is false.

## Return Value

Type: [ConnectApi.InsuranceAccountsAndUsersCreationRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_accounts_and_users_creation.htm "Output representation for the person account and user creation process.")

## Example

Here's an example of how to invoke the Create Accounts API from Apex code.

```

```

## Code Examples

```apex
// Accounts and (optional) Portal Users creation via Connect API (simple version)

// 1) Create the top-level input
ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation input =
    new ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation();

// Provide either a Group Census Id OR a list of Group Census Member Ids

// Option A: Use the Group Census Id (creates accounts for all eligible members)
// input.groupCensusId = '0rfSG0000000vw7YAA';

// Option B: Or specify specific Group Census Member Ids
input.groupCensusMemberIdList = new List<String>{ '0r6SG0000008uTRYAY'};

// Optional: Person Account Record Type Name
input.personAccountRecordType = 'Person Account';

// Optional: Matching keys (used to find existing Person Accounts before creating new ones)
// input.matchingKeyList = new List<String>{ 'Email', 'ExternalId__c' };

// Optional: Field mappings from Group Census Member fields -> Account fields
// Example: map census FirstName/LastName to Person Account fields
// input.fieldMappings = new Map<String, String>{
//     'FirstName' => 'FirstName',
//     'LastName'  => 'LastName',
//     'Email'     => 'PersonEmail'
// };

// Optional: Provide portal user defaults (only applied if createPortalUsers = true)
ConnectApi.PortalUserCreationInputRepresentation userDefaults =
    new ConnectApi.PortalUserCreationInputRepresentation();
userDefaults.profileId = '00eSG00000JZg4t';
// userDefaults.localeSidKey = 'en_US';
// userDefaults.timeZoneSidKey = 'America/Los_Angeles';
// userDefaults.languageLocaleKey = 'en_US';
// userDefaults.emailEncodingKey = 'UTF-8';
input.userDetails = userDefaults;

// 2) Execute the POST API
Boolean createPortalUsers = true; // set false to only create accounts

try {
    ConnectApi.InsuranceAccountsAndUsersCreationRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceCreateAccounts(
            input,
            createPortalUsers
        );

    System.debug('Accounts and Users creation result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error during accounts/users creation: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_accounts_and_users_creation.htm)
- ConnectApi.InsuranceAccountsAndUsersCreationRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_accounts_and_users_creation.htm)
