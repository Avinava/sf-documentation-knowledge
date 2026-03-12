---
title: "Compile Consent Settings"
domain: rest-api
topic: compile-consent-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.352Z
estimatedTokens: 2375
keywords: [Compile, Consent, Settings, action, email, track, across, specific, management, objects, records, lookup, relationship, resource, REST]
---

# Compile Consent Settings

> Gets consent details based on a single action, like email or track, across specific
  consent management objects when the records have a lookup relationship. This resource is available
  in REST API version 45.0 and later.

# Compile Consent Settings

Gets consent details based on a single action, like email or track, across specific consent management objects when the records have a lookup relationship. This resource is available in REST API version 45.0 and later.

To call Consent API, you must have either the View All Data or the Allow User Access to Privacy Data user permission. Requiring a perm ensures that the System Administrator gives explicit permission. This API accesses org-wide consent data, such as links between records and the value of consent flags, not just records to which the user ordinarily has access.

Consent API gets consent details based on a single action, like email or track, across the Contact, Contact Point Type Consent, Data Use Purpose, Individual, Lead, Person Account, and User objects when the records have a lookup relationship.

When you select *email* as the action, the API only aggregates consent for records that contain the same email address. If the record ID specified in the URI is associated with a record that contains a different email address, the consent settings of the associated record aren’t included in the API response. The Consent API can't locate records in which the email address field is protected by Platform Encryption.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

When the API compares consent settings across records, it doesn’t incorporate settings from converted leads.

| Action | Fields Consulted | API Response | Response Schema |
| --- | --- | --- | --- |
| email | Contact.HasOptedOutOfEmailContactPointTypeConsent.ContactPointTypeContactPointTypeConsent.EffectiveFromContactPointTypeConsent.EffectiveToContactPointTypeConsent.PrivacyConsentStatusDataUsePurpose.NameLead.HasOptedOutOfEmailPersonAccount.HasOptedOutOfEmail | Within the time range if specified in ContactPointTypeConsent:Returns TRUE if all consulted field values are 0.Returns FALSE if any consulted field value is 1 or if no related Contact, Contact Point Type Consent, Lead, or Person Account object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "emailResult" : "<Success/errormessage>", email : “<true/false>” }}} |
| fax | Contact.HasOptedOutOfFaxDataUsePurpose.NameLead.HasOptedOutOfFaxPersonAccount.HasOptedOutOfFax | Returns TRUE if all consulted field values are 0.Returns FALSE if any consulted field value is 1 or if no related Contact, Lead, or Person Account object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "faxResult" : "<Success/errormessage>", fax : "<true/false>" }}} |
| geotrack | DataUsePurpose.NameIndividual.HasOptedOutGeoTracking | Returns TRUE if the consulted field value is 0.Returns FALSE if the consulted field value is 1 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "geotrackResult" : "<Success/errormessage>", "geotrack" : "<true/false>" }}} |
| mail | ContactPointTypeConsent.ContactPointTypeContactPointTypeConsent.EffectiveFromContactPointTypeConsent.EffectiveToContactPointTypeConsent.PrivacyConsentStatusDataUsePurpose.Name | Within the time range if specified in ContactPointTypeConsent:Returns TRUE if all consulted field values are 0.Returns FALSE if any consulted field value is 1 or if no related Contact, Contact Point Type Consent, Lead, or Person Account object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "mailingResult" : "<Success/errormessage>", "mail" : "<true/false>" }}} |
| phone | Contact.DoNotCallContactPointTypeConsent.ContactPointTypeContactPointTypeConsent.EffectiveFromContactPointTypeConsent.EffectiveToContactPointTypeConsent.PrivacyConsentStatusDataUsePurpose.NameLead.DoNotCallPersonAccount.DoNotCall | Within the time range if specified in ContactPointTypeConsent:Returns TRUE if all consulted field values are 0.Returns FALSE if any consulted field value is 1 or if no related Contact, Contact Point Type Consent, Lead, or Person Account object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "phoneResult" : "<Success/errormessage>", "phone" : "<true/false>" }}} |
| portability | DataUsePurpose.NameIndividual.SendIndividualData | Returns TRUE if the consulted field value is 1.Returns FALSE if the consulted field value is 0 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "portabilityResult" : "<Success/errormessage>", "portability" : "<true/false>" }}} |
| process | DataUsePurpose.NameIndividual.HasOptedOutProcessing | Returns TRUE if the consulted field value is 0.Returns FALSE if the consulted field value is 1 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "processResult" : "<Success/errormessage>", "process" : "<true/false>" }}} |
| profile | DataUsePurpose.NameIndividual.HasOptedOutProfiling | Returns TRUE if the consulted field value is 0.Returns FALSE if the consulted field value is 1 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "profileResult" : "<Success/errormessage>", "profile" : "<true/false>" }}} |
| shouldforget | DataUsePurpose.NameIndividual.ShouldForget | Returns TRUE if the consulted field value is 1.Returns FALSE if the consulted field value is 0 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "shouldForgetResult" : "<Success/errormessage>", "shouldforget" : "<true/false>" }}} |
| social | ContactPointTypeConsent.ContactPointTypeContactPointTypeConsent.EffectiveFromContactPointTypeConsent.EffectiveToContactPointTypeConsent.PrivacyConsentStatusDataUsePurpose.Name | Within the time range if specified in ContactPointTypeConsent:Returns TRUE if all consulted field values are 0.Returns FALSE if any consulted field value is 1 or if no related Contact, Contact Point Type Consent, Lead, or Person Account object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "socialResult" : "<Success/errormessage>", "social" : "<true/false>" }}} |
| solicit | DataUsePurpose.NameIndividual.HasOptedOutSolicit | Returns TRUE if the consulted field value is 0.Returns FALSE if the consulted field value is 1 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "solicitResult" : "<Success/errormessage>", "solicit" : "<true/false>" }}} |
| storepiielsewhere | DataUsePurpose.NameIndividual.CanStorePiiElsewhere | Returns TRUE if the consulted field value is 1.Returns FALSE if the consulted field value is 0 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "storePIIElsewhereResult" : "<Success/errormessage>", "storepiielsewhere" : "<true/false>" }}} |
| track | DataUsePurpose.NameIndividual.HasOptedOutTracking | Returns TRUE if the consulted field value is 0.Returns FALSE if the consulted field value is 1 or if no related Individual object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "trackResult" : "<Success/errormessage>", "track" : "<true/false>" }}} |
| web | ContactPointTypeConsent.ContactPointTypeContactPointTypeConsent.EffectiveFromContactPointTypeConsent.EffectiveToContactPointTypeConsent.PrivacyConsentStatusDataUsePurpose.Name | Within the time range if specified in ContactPointTypeConsent:Returns TRUE if all consulted field values are 0.Returns FALSE if any consulted field value is 1 or if no related Contact, Contact Point Type Consent, Lead, or Person Account object exists. | {"<ID/Email>" :{"result" : "<Success/errormessage>","proceed" : { "webResult" : "<Success/errormessage>", "web" : "<true/false>" }}} |

## Syntax

URI

/services/data/vXX.X/consent/action/action?ids=listOfIds

Formats

JSON

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None

Request parameters

| Parameter | Description |
| --- | --- |
| action | Required. The proposed action.If this parameter is used, actions can't be used. |
| aggregatedConsent | Optional: true or false. aggregatedConsent is the same as aggregatedConsent=true. If true, one result is returned indicating whether to proceed or not, rather than a result for each ID. If any ID in the list returns false, the aggregated result is false. |
| datetime | Optional. The timestamp for which consent is determined. The value is converted to the UTC timezone and must be formatted as described in Valid Date and DateTime Formats. If not specified, defaults to the current date and time. |
| ids | Required. Comma-separated list of IDs. The ID can be the record ID or the email address listed on the record. |
| policy | Optional. Use policy=requireExplicitConsent to specify in the API response whether explicit consent was given for a contact point channel. The API returns an infoNotFound response when consent isn’t specified.This parameter is available in API version 49.0 and later. |
| purpose | Optional. The reason for contacting a customer. |
| verbose | Optional: true or false. verbose is the same as verbose=true. Verbose responses are slower than non-verbose responses. See the examples for a verbose response. |

## Example

Request for URI structure

```

```

Request for Email addresses as IDs, specified purpose and timespan, and a verbose response

```

```

Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/consent/action/track?ids=003xx000004TxyY,00Qxx00000syyO,003zz000004zzZ -H "Authorization: Bearer token"
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/consent/action/email?ids=j0t5t5b2@tkbxp5ia.com,4quxlswo@23wj7pwh.com&datetime=2018-12-12T00:00:00Z -H "Authorization: Bearer token"
```

```
{
  "j0t5t5b2@tkbxp5ia.com" : {
    "result" : "Success",
    "proceed" : {
      "email" : "true"
      "emailResult" : "Success"
    },
    "explanation" : [ {
      "objectConsulted" : "ContactTypePointConsent",
      "status" : "opt_in",
      "purpose" : "billing",
      "recordId" : "003xx000004TxyY",
      "value" : "true"
    },{
      "objectConsulted" : "Contact",
      "field" : "HasOptedOutOfTracking",
      "recordId" : "1",
      "value" : "true"
    }]
  },
  "4quxlswo@23wj7pwh.com" : {
    "result" : "Success",
    "proceed" : {
      "email" : "false"
      "emailResult" : "Success"
    },
    "explanation" : [ {
      "objectConsulted" : "Contact",
      "field" : "HasOptedOutOfEmail",
      "recordId" : "00Qxx00000skwO",
      "value" : "true"
    }  ]
  }
}
```

## Related Topics

- Valid Date and DateTime Formats (atlas.en-us.api_rest.meta/api_rest/intro_valid_date_formats.htm)
