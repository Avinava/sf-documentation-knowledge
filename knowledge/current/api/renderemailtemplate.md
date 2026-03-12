---
title: "renderEmailTemplate()"
domain: api
topic: renderemailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.486Z
estimatedTokens: 995
keywords: [renderEmailTemplate, Replaces, merge, text, bodies, email, templates, Salesforce, records, polymorphic, template, their, corresponding, whoId, whatId]
---

# renderEmailTemplate()

> Replaces merge fields in text bodies of email templates with
            values from Salesforce records, even for polymorphic fields. The email template bodies
            and their corresponding whoId and whatId
            values are specified in the argument.

# renderEmailTemplate()

Replaces merge fields in text bodies of email templates with values from Salesforce records, even for polymorphic fields. The email template bodies and their corresponding whoId and whatId values are specified in the argument.

## Syntax

```

```

## Usage

The renderEmailTemplate() call is equivalent to rendering merge fields when sending an email with a custom template through the [sendEmail()](atlas.en-us.api.meta/api/sforce_api_calls_sendemail.htm "Immediately sends an email message.") call.

The renderEmailTemplate() call can take up to 10 RenderEmailTemplateRequest elements in its array argument, and each RenderEmailTemplateRequest can contain up to 10 template bodies. Each request is independent from the other requests in the array—an error in one request doesn’t affect the other requests. Similarly, an error in one template body doesn’t cause an error in other text bodies within the same request.

The renderEmailTemplate() call substitutes a merge field with the value of either the whatId or whoId in RenderEmailTemplateRequest:

The whatId and whoId field values of RenderEmailTemplateRequest are validated for each request. If the whatId doesn’t reference a valid what ID (a non-human object), or the whoId doesn’t reference a valid who ID (a human object), an error is set for the request.

-   If the merge field references a non-human object, it’s replaced with the corresponding value of whatId. For example, if a merge field references an account or opportunity, the whatId value is substituted.
-   If the merge field references a human object, it’s replaced with the corresponding value of whoId. For example, if a merge field references a contact, lead, or user, the whoId value is substituted.

## Sample Code—Java

In this sample, the renderEmailTemplate() call substitutes all contact merge fields with the value from the specified whoId argument. Similarly, the call substitutes the opportunity merge field ({!Opportunity.Name}) with the specified whatId value. The second template body in this sample has an incorrect merge field ({!Contact.SNARF}), which causes an error on the second template. However, the entire template rendering request is successful.

```

```

Let’s say you run this sample by specifying a valid contact ID for the first argument (whoId) and null for the second argument (whatId). The second template has one error set, for the incorrect merge field. The response looks like the following.

```

```

## RenderEmailTemplateRequest

| Name | Type | Description |
| --- | --- | --- |
| templateBodies | string[] | An array of text bodies that can contain merge fields, such as {!Account.Phone} or {!Contact.Name}. |
| whatId | reference | References a non-human object, such as an account, an opportunity, a campaign, a case, or a custom object. The whatId is polymorphic, which means that it’s an ID that can refer to more than one type of object, such as a case or an opportunity. |
| whoId | reference | References a human object, such as a lead, contact, or user. The whoId is polymorphic, which means that it’s an ID that can refer to more than one type of object. |

## Fault

The renderEmailTemplate() can return any of these API status codes.

[EMAIL\_TEMPLATE\_FORMULA\_ERROR](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_TEMPLATE_FORMULA_ERROR)

[EMAIL\_TEMPLATE\_MERGEFIELD\_ACCESS\_ERROR](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_TEMPLATE_MERGEFIELD_ACCESS_ERROR)

[EMAIL\_TEMPLATE\_MERGEFIELD\_ERROR](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_TEMPLATE_MERGEFIELD_ERROR)

[EMAIL\_TEMPLATE\_MERGEFIELD\_VALUE\_ERROR](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_TEMPLATE_MERGEFIELD_VALUE_ERROR)

[EMAIL\_TEMPLATE\_PROCESSING\_ERROR](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#EMAIL_TEMPLATE_PROCESSING_ERROR)

## Code Examples

```
RenderEmailTemplateResult = connection.renderEmailTemplate(RenderEmailTemplateRequest[] renderRequests);
```

```apex
public void renderTemplates(String whoId, String whatId) 
        throws ConnectionException, RemoteException, MalformedURLException {
    // Array of three template bodies.
    // The second template body generates an error.
    final String[] TEMPLATE_BODIES = new String[] {
           "This is a good template body {!Contact.Name}", 
           "This is a bad template body {!Opportunity.Name} {!Contact.SNARF} ", 
           "This is another good template body {!Contact.Name}"};
    
    // Create request and add template bodies, whatId, and whoId.
    RenderEmailTemplateRequest req = new RenderEmailTemplateRequest();
    req.setTemplateBodies(TEMPLATE_BODIES);
    req.setWhatId(whatId);
    req.setWhoId(whoId);
    // An array of results is returned, one for each request.	
    // We only have one request.
    RenderEmailTemplateResult[] results =  connection.renderEmailTemplate(
            new RenderEmailTemplateRequest[] { req });
    if (results != null) {
        // Check results for our one and only request.
        // Check request was processed successfully, and if not, print the errors.
        if (!results[0].isSuccess()) {
            System.out.println(
            "The following errors were encountered while rendering email templates:");
            for (Error err : results[0].getErrors()) {
                System.out.println(err.getMessage());
            }
        } else {
            // Check results for each body template and print merged body
            RenderEmailTemplateBodyResult[] bodyResults = results[0].getBodyResults();
            for( Integer i=0;i<bodyResults.length;i++) {
                RenderEmailTemplateBodyResult result = bodyResults[i];
                if (result.isSuccess()) {
                    System.out.println("
Merged body: 
" + result.getMergedBody());
                } else {
                    System.out.println("
Errors were found for body[" + i + "]: ");
                    for (RenderEmailTemplateError err : result.getErrors()) {
                        System.out.println(err.getMessage() + " - Field name: " 
                            + err.getFieldName());
                    }
                }
            }
        }
    }
}
```

```
Merged body: 
This is a good template body Howard Jones

Errors were found for body[1]: 
Field Contact.SNARF does not exist. Check spelling. - Field name: Contact.SNARF


Merged body: 
This is another good template body Howard Jones
```

## Related Topics

- RenderEmailTemplateResult (atlas.en-us.api.meta/api/sforce_api_calls_renderemailtemplateresult.htm)
- sendEmail() (atlas.en-us.api.meta/api/sforce_api_calls_sendemail.htm)
- EMAIL_TEMPLATE_FORMULA_ERROR (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- EMAIL_TEMPLATE_MERGEFIELD_ACCESS_ERROR (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- EMAIL_TEMPLATE_MERGEFIELD_ERROR (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- EMAIL_TEMPLATE_MERGEFIELD_VALUE_ERROR (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- EMAIL_TEMPLATE_PROCESSING_ERROR (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
