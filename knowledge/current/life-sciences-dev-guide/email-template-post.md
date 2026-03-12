---
title: "Email Template (POST)"
domain: life-sciences-dev-guide
topic: email-template-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.483Z
estimatedTokens: 1008
keywords: [Email, Template, POST, Health, Cloud, Starter, Life, Sciences, Commercial, Admin, Permission, accessing, API, know, Intelligent]
---

# Email Template (POST)

> Create an email template. The Health Cloud Starter and
                Life Sciences Commercial Admin Permission Sets are required for
            accessing this API. To know more, see Email Template and Intelligent Content.

# Email Template (POST)

Create an email template. The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing this API. To know more, see [Email Template](https://help.salesforce.com/s/articleView?id=ind.lsc_email_get_ready.htm&language=en_US) and [Intelligent Content](https://help.salesforce.com/s/articleView?id=ind.lsc_intelligent_content_get_ready.htm&language=en_US).

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

```

```

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| activatedDate | Date | Date when the email template becomes active. | Optional |
| attachmentObjectTypes | List<String> | List of object types for attachments. | Optional |
| automatedEmailActionType | String | Action type for automated emails. Possible values are:CreateUpdateCancel | Optional |
| automatedEmailContextType | String | Context type for automated emails. Possible values are:ProviderVisitMeeting | Optional |
| bccEmailIdList | String | Email ID for BCC. | Optional |
| communicationSubscriptionId | String | ID of the communication subscription associated with the email temaplate. | Optional |
| contentDocumentId | String | ID of the content document ZIP containing the email files. You can pass this parameter if you wish to process the existing document record. This parameter cannot be provided when you pass the fileId. | Required |
| customFields | Object | Map of custom field names and their values for the email template. | Optional |
| deactivatedDate | Datetime | Date when the email template becomes inactive. | Optional |
| description | String | Description of the email template. | Optional |
| emailSubject | String | Subject line of the email template. | Required, only if the file input is provided either as contentDocumentId or fileId |
| fileId | String | The multipart form field key that references the uploaded file for this presentation page. You can pass this parameter if you wish to process a new file that you will include in the request. You cannot provide this parameter when you pass the contentDocumentId as only one of the two are allowed. | Required |
| id | String | ID of the email template. Either the SourceSystemIdentifier or Salesforce Id of the LifeSciEmailTemplate record. | Optional |
| isActive | Boolean | Indicates if the email template is active (true) or not (false). | Optional |
| isDefaultAutoEmailTemplate | Boolean | Indicates if this is a default automated email template (true) or not (false). | Optional |
| isSubjectLineEditable | Boolean | Indicates if the email subject line is editable (true) or not (false). | Optional |
| languages | List<String> | List of languages associated with the email template as per the ISO codes such as en_US, fr, es. | Optional |
| name | String | Name of the email template. | Required |
| productId | String | ID of the associated product. | Optional |
| replyToEmailAddress | String | Reply-to email address. | Optional |
| replyToType | String | Type of reply-to address. Possible values are:SalesRepPredefinedEmail | Optional |
| senderEmailFieldAPIName | String | API name of the sender's email field. | Optional |
| senderType | String | Type of sender for the email. Possible values are:SalesRepPredefinedEmail | Optional |
| shouldIgnoreEmailConsent | Boolean | Indicates whether email consent should be ignored (true) or not (false). | Optional |
| surveyId | String | ID of the associated survey. | Optional |
| topics | List<String> | List of topics associated with the email template. TopicAssignment for Life Science EmailTemplate must be enabled before using this field. | Optional |

Response body for POST

[Create Email Template Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_management_output.htm "Represents the information about the job status and any associated messages returned for Content Management APIs.")

## Code Examples

```
/connect/life-sciences/commercial/bulk-email-template
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/bulk-email-template
```

```
{
    "emailSubject": "Welcome",
    "contentDocumentId": "069xx0000004CAeAAM",
    "name": "Welcome Email",
    "activatedDate": "2025-06-03T15:00:00.000Z",
    "senderType": "SYSTEM",
    "senderEmailFieldAPIName": "noreply@company.com",
    "replyToType": "USER",
    "replyToEmailAddress": "support@company.com",
    "id": "external-id",
    "deactivatedDate": "2025-01-01T00:00:00.000Z",
    "description": "This is a welcome email template used for onboarding new users.",
    "attachmentObjectTypes": [
        "PDF",
        "DOCX"
    ],
    "customFields": [
        {
            "fieldName": "user",
            "fieldValue": "admin"
        },
        {
            "fieldName": "standard",
            "fieldValue": "user"
        }
    ],
    "languages": [
        "en",
        "es"
    ],
    "isActive": true,
    "surveyId": "sample-survey-id",
    "productId": "sample-product-id",
    "communicationSubscriptionId": "sample-comm-subscription-id",
    "topics": [
        "Onboarding",
        "User Engagement"
    ],
    "shouldIgnoreEmailConsent": false,
    "isSubjectLineEditable": true,
    "bccEmailIdList": "bcc@example.com",
    "automatedEmailContextType": "ProviderVisit",
    "automatedEmailActionType": "Create",
    "isDefaultAutoEmailTemplate": false
}
```

## Related Topics

- Create Email Template Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_management_output.htm)
