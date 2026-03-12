---
title: "updateEmailTemplate(emailTemplateInput)"
domain: life-sciences-dev-guide
topic: updateemailtemplateemailtemplateinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.006Z
estimatedTokens: 584
keywords: [updateEmailTemplate, emailTemplateInput, email, template, provided, metadata, API, Version, Requires, Chatter]
---

# updateEmailTemplate(emailTemplateInput)

> Update an existing email template with the provided
        metadata.

# updateEmailTemplate(emailTemplateInput)

Update an existing email template with the provided metadata.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.GenericResponseOutputRepresentation updateEmailTemplate(ConnectApi.EmailTemplateInputRepresentation emailTemplateInput)

## Parameters

emailTemplateInput

Type: [ConnectApi.EmailTemplateInputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_email_template_input.htm "Input representation for creating or updating an email template.")

Input representation that contains the metadata for the email template. The fileId field is not accepted in this Apex representation.

## Return Value

Type: [ConnectApi.GenericResponseOutputRepresentation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm "Output representation for a generic response from a Connect API call.")

## Example

ConnectApi.EmailTemplateInput input = new ConnectApi.EmailTemplateInput(); input.name = 'Sample Email Template Updated'; input.id = 'email-template-id'; input.emailSubject = 'Email Subject Updated'; input.description = 'Email template description Updated'; input.contentDocumentId = '069SB0000047U0mYAE'; input.activatedDate = Date.today(); input.deactivatedDate = Date.today().addDays(365); input.senderType = 'PredefinedEmail'; input.senderEmailFieldAPIName = 'noreply@company.com'; input.replyToType = 'PredefinedEmail'; input.replyToEmailAddress = 'support@company.com'; input.bccEmailIdList = 'admin@company.com'; input.isActive = true; input.isDefaultAutoEmailTemplate = false; input.isSubjectLineEditable = true; input.shouldIgnoreEmailConsent = false; input.productId = '01t000000000001'; input.surveyId = 'survey-001'; input.communicationSubscriptionId = 'comm-sub-001'; input.automatedEmailContextType = 'ProviderVisit'; input.automatedEmailActionType = 'Create'; input.attachmentObjectTypes = new List<String>(); input.attachmentObjectTypes.add('Account'); input.languages = new List<String>(); input.languages.add('es\_AD'); input.languages.add('es'); input.topics = new List<String>(); input.topics.add('Onboarding'); input.topics.add('User Engagement'); System.debug(ConnectApi.LifeSciEmailTemplate.updateEmailTemplate(input));

## Related Topics

- ConnectApi.EmailTemplateInputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_input_email_template_input.htm)
- ConnectApi.GenericResponseOutputRepresentation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/apex_connect_api_output_generic_response_output.htm)
