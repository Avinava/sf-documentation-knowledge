---
title: "LeadConvertResult"
domain: api
topic: leadconvertresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.919Z
estimatedTokens: 391
keywords: [LeadConvertResult, convertLead, call, array, objects, element, corresponds, LeadConvert, passed, leadConverts, index, matches]
---

# LeadConvertResult

> The convertLead() call returns an array of
    LeadConvertResult objects. Each element in the LeadConvertResult array corresponds to the
    LeadConvert[] array passed as the leadConverts parameter in
    the convertLead() call. For example, the object returned in
    the first index in the LeadConvertResult array matches the object specified in the first index
    of the LeadConvert[] array.

# LeadConvertResult

The convertLead() call returns an array of LeadConvertResult objects. Each element in the LeadConvertResult array corresponds to the LeadConvert\[\] array passed as the leadConverts parameter in the convertLead() call. For example, the object returned in the first index in the LeadConvertResult array matches the object specified in the first index of the LeadConvert\[\] array.

A LeadConvertResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| accountId | ID | ID of the new Account (if a new account was specified) or the ID of the account specified when convertLead() was invoked. |
| contactId | ID | ID of the new Contact (if a new contact was specified) or the ID of the contact specified when convertLead() was invoked. For information on IDs, see ID Field Type. |
| leadId | ID | ID of the converted Lead. For information on IDs, see ID Field Type. |
| opportunityId | ID | ID of the new or existing Opportunity, if one was created or related to the lead when convertLead() was invoked. For information on IDs, see ID Field Type. |
| relatedPersonAccountId | ID | ID of the new or existing related Person Account, if one was created or related to the lead when convertLead() was invoked. For information on IDs, see ID Field Type. |
| success | boolean | Indicates whether the convertLead() call succeeded (true) or not (false) for this object. |
| errors | Error[] | If an error occurred during the create() call, an array of one or more Error objects providing the error code and description. |

## Related Topics

- convertLead() (atlas.en-us.api.meta/api/sforce_api_calls_convertlead.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
