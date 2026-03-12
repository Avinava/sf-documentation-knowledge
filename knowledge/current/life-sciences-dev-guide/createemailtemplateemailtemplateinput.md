---
title: "createEmailTemplate(emailTemplateInput)"
domain: life-sciences-dev-guide
topic: createemailtemplateemailtemplateinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.003Z
estimatedTokens: 685
keywords: [createEmailTemplate, emailTemplateInput, email, template, provided, metadata, API, Version, Requires, Chatter]
---

# createEmailTemplate(emailTemplateInput)

> Create an email template with the provided
        metadata.

# createEmailTemplate(emailTemplateInput)

Create an email template with the provided metadata.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.GenericResponseOutputRepresentation createEmailTemplate(ConnectApi.EmailTemplateInputRepresentation emailTemplateInput)

## Parameters

emailTemplateInput

Type: [ConnectApi.EmailTemplateInputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_email_template_input.htm "Input representation for creating or updating an email template.")

Input representation that contains the metadata for the email template. The fileId field is not accepted in this Apex representation.

## Return Value

Type: [ConnectApi.GenericResponseOutputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm "Output representation for a generic response from a Connect API call.")

## Example

ConnectApi.EmailTemplateInput input = new ConnectApi.EmailTemplateInput(); input.name = 'Sample Email Template'; input.id = 'email-template-id'; input.emailSubject = 'Email Subject'; input.description = 'Email template description'; input.contentDocumentId = '069SB0000047U0mYAE'; input.activatedDate = Date.today(); input.deactivatedDate = Date.today().addDays(365); input.senderType = 'SalesRep'; input.senderEmailFieldAPIName = 'noreply@company.com'; input.replyToType = 'SalesRep'; input.replyToEmailAddress = 'support@company.com'; input.bccEmailIdList = 'admin@company.com'; input.isActive = true; input.isDefaultAutoEmailTemplate = false; input.isSubjectLineEditable = true; input.shouldIgnoreEmailConsent = false; input.surveyId = '0KdYH0000000VyH0AU'; input.productId = '1KeYH0000001j2m0AA'; input.communicationSubscriptionId = 'comm-sub-source-system-id'; input.automatedEmailContextType = 'ProviderVisit'; input.automatedEmailActionType = 'Create'; input.languages = new List<String>(); input.languages.add('es\_AD'); input.languages.add('es'); input.topics = new List<String>(); input.topics.add('Onboarding'); input.topics.add('User Engagement'); input.customFields = new List<ConnectApi.CustomFieldRepresentation>(); ConnectApi.CustomFieldRepresentation customField1 = new ConnectApi.CustomFieldRepresentation(); customField1.fieldName = 'Email\_Template\_Category\_\_c'; customField1.fieldValue = 'Product Information'; input.customFields.add(customField1); ConnectApi.CustomFieldRepresentation customField2 = new ConnectApi.CustomFieldRepresentation(); customField2.fieldName = 'Priority\_\_c'; customField2.fieldValue = 'High'; input.customFields.add(customField2); System.debug(ConnectApi.LifeSciEmailTemplate.createEmailTemplate(input));

## Related Topics

- ConnectApi.EmailTemplateInputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_email_template_input.htm)
- ConnectApi.GenericResponseOutputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm)
