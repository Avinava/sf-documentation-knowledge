---
title: "postInsuranceIndividualEnrollment(insuranceIndividualEnrollmentInputParam, memberId)"
domain: insurance-developer-guide
topic: postinsuranceindividualenrollmentinsuranceindividualenrollmentinputparam-memberi
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.970Z
estimatedTokens: 321
keywords: [postInsuranceIndividualEnrollment, insuranceIndividualEnrollmentInputParam, memberId, Enroll, group, census, member, insurance, plans, creating, necessary, policy, records, API, Version]
---

# postInsuranceIndividualEnrollment(insuranceIndividualEnrollmentInputParam, memberId)

> Enroll a group census member in one or more insurance plans, creating the necessary
  policy records.

# postInsuranceIndividualEnrollment(insuranceIndividualEnrollmentInputParam, memberId)

Enroll a group census member in one or more insurance plans, creating the necessary policy records.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceIndividualEnrollmentOutputRepresentation postInsuranceIndividualEnrollment(ConnectApi.InsuranceIndividualEnrollmentInputRepresentation insuranceIndividualEnrollmentInputParam, String memberId)

## Parameters

insuranceIndividualEnrollmentInputParam

Type: [ConnectApi.InsuranceIndividualEnrollmentInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_individual_enrollment.htm "Input representation for enrolling an individual member.")

Details of the plans to enroll the member in.

memberId

Type: String

ID of the Group Census Member to enroll.

## Return Value

Type: [ConnectApi.InsuranceIndividualEnrollmentOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_individual_enrollment.htm "Output representation for the individual enrollment process.")

## Example

Here's an example of how to invoke the Individual Enrollment API from Apex code.

```

```

## Code Examples

```apex
// Individual Enrollment via Connect API (simple version)

// 1) Create the top-level input
ConnectApi.InsuranceIndividualEnrollmentInputRepresentation input =
    new ConnectApi.InsuranceIndividualEnrollmentInputRepresentation();

// Required: target plan (Contract Group Plan Id)
input.plan = '0rgxx00000000CcAAI';

// Optional: specify a processing flow if your org uses one
// input.flowName = 'DefaultEnrollmentFlow';

// 2) Execute the POST API with the Group Census Member Id
String memberId = '0r6xx00000007G2AAI';

try {
    ConnectApi.InsuranceIndividualEnrollmentOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceIndividualEnrollment(input, memberId);

    System.debug('Individual Enrollment result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error during individual enrollment: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceIndividualEnrollmentInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_individual_enrollment.htm)
- ConnectApi.InsuranceIndividualEnrollmentOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_individual_enrollment.htm)
