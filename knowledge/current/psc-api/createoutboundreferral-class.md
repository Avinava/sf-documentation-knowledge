---
title: "CreateOutboundReferral Class"
domain: psc-api
topic: createoutboundreferral-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.576Z
estimatedTokens: 1653
namespace: PublicSectrSltn
keywords: [CreateOutboundReferral, outbound, referral, record, Special, Access, Rules, Usage]
---

# CreateOutboundReferral Class

> Use this class to create an outbound referral record.

**Namespace:** `PublicSectrSltn`

# CreateOutboundReferral Class

Use this class to create an outbound referral record.

## Namespace

[PublicSectrSltn](atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm "The PublicSectrSltn namespace provides classes for Public Sector Solutions.")

## Special Access Rules

This Apex class is available to use with the Provider Management and Provider Search features enabled in your Salesforce org.

## Usage

The CreateOutboundReferral class uses the default call(String action, Map<String, Object> args) method of the Callable interface. For more information on the Callable interface and its methods, see [Callable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_System_Callable.htm "HTML (New Window)").

Specify the implemented CreateOutboundReferral class name in the CreateReferrals Remote Actions section of the Create Outbound Referral OmniScript page. A Remote Action calls the specified Apex class and its method to create the outbound referral records. This Apex class can create a maximum of up to three outbound referral records.

This screenshot shows how the Apex class name and its method are specified in Omniscript Remote Action:

![A representation of CreateReferrals Remote Actions in Create Outbound Referral OmniScript in your Salesforce org.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpsc_api%2Fimages%2Fcreate_referral_remote_action.png&folder=psc_api)

## Example

The CreateOutboundReferral remote action accepts a JSON object with the following format as an input:

{ "$schema": "http://json-schema.org/draft-04/schema#", "type": "object", "properties": { "ReferralInformation": { "type": "object", "properties": { "ReferrerName": { "type": "string | name of the User creating Referral" }, "ReferrerEmail": { "type": "string | email of the user creating Referral" }, "ClientId": { "type": "string | AccountId of the client" }, "ClientPhone": { "type": "string | Phone number of the client" }, "ClientName": { "type": "string | Client name" }, "IsSelfReferred": { "type": "boolean | True if Referral referring to own provider" }, "ResultCategory": { "type": "string | Referral.ResultCategory picklist option" }, "UsageType": { "type": "string | Referral.UsageType picklist option" }, "ReferrerOrg": { "type": "string | Current Organization nickname, autofilled by omniscript" }, "Title": { "type": "string | Title of the Referral" }, "ReferralType": { "type": "string | Referral.ReferralType picklist option" }, "Priority": { "type": "string | Referral.Priority picklist option" }, "Description": { "type": "string | Referral.Description" }, "Category": { "type": "string | Referral.Category picklist option" }, "ReferralDate": { "type": "string | Referral.ReferralDate value" }, "Status": { "type": "string | Referral.Status picklist option" } } }, "ProviderInfoForReferral": { "type": "array", "items": \[ { "type": "object", "properties": { "ProviderFacilityId": { "type": "string | Selected Healthcare Practitioner Facility record id" }, "ProviderPhone": { "type": "string | Provider phone in case unregistered provider is referred" }, "ProviderId": { "type": "string | Selected Healthcare Provider record id" }, "ProviderEmail": { "type": "string | Provider email in case unregistered provider is referred" } } } \] }, "ReferralDetails": { "type": "object", "properties": { "ReferralTitle": { "type": "string | Title of the Referral" }, "Priority": { "type": "string | Referral.Priority picklist option" }, "Status": { "type": "string | Referral.Status picklist option" }, "Category": { "type": "string | Referral.Category picklist option" }, "Date": { "type": "string | Referral.ReferralDate value" }, "ReferralDescription": { "type": "string | Referral.Description value" }, "File1": { "type": "array", "items": \[ { "type": "object", "properties": { "data": { "type": "string | ContentDocument record id for uploaded file" }, "deleteLabel": { "type": "string" }, "filename": { "type": "string | filename of uploaded file" }, "size": { "type": "string | size of uploaded file" }, "vId": { "type": "string | ContentDocument Version record Id" } } } \] } } }, "SourceDocuments": { "type": "array", "items": \[ { "type": "object", "properties": { "Id": { "type": "string | ContentDocument record id for attached file" }, "Title": { "type": "string | ContentDocument Title record id for attached file" }, "FileExtension": { "type": "string | ContentDocument file extension for attached file" }, "DocumentFullName": { "type": "string | ContentDocument filename for attached file." } } } \] } }, "required": \[ "ReferralInformation", "ProviderInfoForReferral", "ReferralDetails", "SourceDocuments" \] }

Here’s an example of the JSON object that the CreateOutboundReferral Apex class receives as input.

{ "ReferralInformation": { "ReferrerName": "Admin User", "ReferrerEmail": "robert.l@xyz.com", "ClientId": "001B000001UFMjcIAH", "ClientPhone": "4159017000", "ClientName": "Glen Marshal", "IsSelfReferred": false, "ResultCategory": "Pending", "UsageType": "PublicSectorSolutions", "ReferrerOrg": "pssdevgs0", "Title": "Referral Title", "ReferralType": "Outbound", "Priority": "Critical", "Description": "Referral Description", "Category": "Child Abuse", "ReferralDate": "2024-01-15", "Status": "In Review" }, "ProviderInfoForReferral": \[ { "ProviderFacilityId": "0bSB00000009L8rMAE", "ProviderPhone": "practitioner-phone", "ProviderId": "0cmB0000000DxpxIAC" }, { "ProviderFacilityId": "0bSB00000009Q2mMAE", "ProviderPhone": "practitioner-phone", "ProviderId": "0cmB0000000E64nIAC" }, { "ProviderEmail": "provilder@email.test.com", "ProviderPhone": "1111111111" } \], "ReferralDetails": { "ReferralTitle": "Referral Title", "Priority": "Critical", "Status": "In Review", "Category": "Child Abuse", "Date": "2024-01-15", "ReferralDescription": "Referral Description", "File1": \[ { "data": "069xx0000004C92AAE", "deleteLabel": "Delete TestPDF\_For\_Upload.pdf", "filename": "TestPDF\_For\_Upload.pdf", "size": "103266", "vId": "068xx0000004C92AAE" }, { "data": "069xx0000004CAeAAM", "deleteLabel": "Delete SchemeInfo.pdf", "filename": "SchemeInfo.pdf", "size": "555524", "vId": "068xx0000004CAeAAM" } \] }, "SourceDocuments": \[ { "Id": "0691Q00000YWEmUQAX", "Title": "TestPDF\_For\_Upload", "FileExtension": "pdf", "DocumentFullName": "TestPDF\_For\_Upload.pdf" } \] }

Here’s an example of the JSON object that the CreateOutboundReferral Apex class response returns, which contain an array of referral IDs.

{ "referralIds": \[ "0wi1Q0000008VraQAE", "0wi1Q0000008VrbQAE", "0wi1Q0000008VrcQAE" \] }

## Related Topics

- PublicSectrSltn (atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm)
