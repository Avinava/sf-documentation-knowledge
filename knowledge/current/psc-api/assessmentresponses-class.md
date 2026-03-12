---
title: "AssessmentResponses Class"
domain: psc-api
topic: assessmentresponses-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.510Z
estimatedTokens: 719
namespace: PublicSectrSltn
keywords: [AssessmentResponses, store, dynamic, assessment, responses, Sector, Solutions, AssessmentQuestionResponse, standard, objects, Usage, Special, Access, Rules, storeResponses]
---

# AssessmentResponses Class

> Use this class to store dynamic assessment responses Public Sector
            Solutions in the Assessment and AssessmentQuestionResponse standard
        objects.

**Namespace:** `PublicSectrSltn`

# AssessmentResponses Class

Use this class to store dynamic assessment responses Public Sector Solutions in the Assessment and AssessmentQuestionResponse standard objects.

## Namespace

[PublicSectrSltn](atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm "The PublicSectrSltn namespace provides classes for Public Sector Solutions.")

## Usage

To save assessment responses from the runtime Omniscript on the Omni Assessment Task page to the AssessmentResponses class, implement the VlocityOpenInterface interface.

Specify the implemented Apex class name in the Remote Actions section of the OmniScript page. A Remote Action calls the specified Apex class and its method to save the assessment form in the Assessment and AssessmentQuestionResponse Salesforce objects.

This screenshot shows the Apex class name and its method as specified in the Omniscript Remote Action Properties section:

![A representation of Remote Actions in OmniScript in your Salesforce org.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Freference%2Fns_PublicSectrSltn%2Fimages%2Fremote_actions_omniscript.png&folder=psc_api)

## Special Access Rules

Public Sector and Dynamic Assessment permission sets are required to use this Apex class.

## Example

global class OmniSave implements <Vlocity\_Namespace>.VlocityOpenInterface { public Boolean invokeMethod(String methodName, Map<String,Object> input, Map<String,Object> output, Map<String,Object> options){ PublicSectrSltn.AssessmentResponses.storeResponses(input,output,options); return true; } }

For more information on the VlocityOpenInterface interface, see [OmniStudio Foundation Guide](https://developer.salesforce.com/files/credential-resources/OmniStudio-Documentation.pdf "Adobe Acrobat PDF (New Window)").

-   **[AssessmentResponses Methods](atlas.en-us.psc_api.meta/psc_api/apex_class_PublicSectrSltn_AssessmentResponses.htm#apex_PublicSectrSltn_AssessmentResponses_methods)**


## AssessmentResponses Methods

The following is a method for AssessmentResponses.

-   **[storeResponses(input, output, options)](atlas.en-us.psc_api.meta/psc_api/apex_class_PublicSectrSltn_AssessmentResponses.htm#apex_PublicSectrSltn_AssessmentResponses_storeResponses)**
    Stores the assessment responses.

### storeResponses(input, output, options)

Stores the assessment responses.

#### Signature

public static void storeResponses(Map<String,Object\> input, Map<String,Object\> output, Map<String,Object\> options)

#### Parameters

input

Type: Map<String,Object>

Contains the context ID, assessment response in JSON format, and extra payload details from configurations from Vlocity OmniScript.

output

Type: Map<String,Object>

Reserved for future use.

options

Type: Map<String,Object>

Contains the assessment name and assessment status that are configured in OmniScript.

#### Return Value

Type: Void

## Related Topics

- PublicSectrSltn (atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm)
- AssessmentResponses Methods (atlas.en-us.psc_api.meta/psc_api/apex_class_PublicSectrSltn_AssessmentResponses.htm)
- storeResponses(input, output, options) (atlas.en-us.psc_api.meta/psc_api/apex_class_PublicSectrSltn_AssessmentResponses.htm)
