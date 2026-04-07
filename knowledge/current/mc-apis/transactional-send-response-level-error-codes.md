---
title: "Transactional Send Response Level Error Codes"
domain: mc-apis
topic: transactional-send-response-level-error-codes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.707Z
estimatedTokens: 774
keywords: [Transactional, Send, Level, Error, Codes, code, occurs, there, problem, synchronous, processing, reusing, duplicate, messageKey, malformed, email, address, Response-Level]
---

> A response level error code occurs when there is a problem with syntax or other synchronous processing error, such as reusing a duplicate messageKey or malformed email address.

# Transactional Send Response Level Error Codes

A response level error code occurs when there is a problem with syntax or other synchronous processing error, such as reusing a duplicate messageKey or malformed email address.

## Response-Level Error Codes

| Error Code | Error Message | Message-specific or definition (Resource) | Channel |
| --- | --- | --- | --- |
| 10000 | MCMS_UTM_Validation | /definitions | email, sms |
| 10001 | MCMS_UTM_Validation_InvalidDataType | /definitions | email, sms |
| 10002 | MCMS_UTM_Validation_MissingRequiredField | /definitions | email, sms |
| 10003 | MCMS_UTM_Validation_IncorrectFormat | /definitions | email, sms |
| 10005 | MCMS_UTM_Validation_InvalidValue | /definitions | email, sms |
| 30000 | MCMS_UTM_Runtime | /definitions | email, sms |
| 30001 | MCMS_UTM_Runtime_InvalidOperation | /definitions | email, sms |
| 30003 | MCMS_UTM_Runtime_ObjectNotFound | /definitions | email, sms |
| 30004 | MCMS_UTM_Runtime_ObjectAlreadyExists | /definitions | email, sms |
| 40000 | MCMS_UTM_Authentication | /definitions | email, sms |
| 40001 | MCMS_UTM_Authentication_NotAuthenticated | /definitions | email, sms |
| 109001 | MCMS_UTM_ResponsesHasErrors | /messages | email, sms |
| 109101 | MCMS_UTM_Validation_TooManySubscribers | /messages | email, sms |
| 109102 | MCMS_UTM_Validation_NoSubscribers | /messages | email, sms |
| 109103 | MCMS_UTM_Validation_NoValidSubscribers | /messages | email, sms |
| 109104 | MCMS_UTM_Validation_MissingRequiredField_messageKey | /messages | email, sms |
| 109105 | MCMS_UTM_Validation_MissingRequiredField_subscriberKey | /messages | email, sms |
| 109106 | MCMS_UTM_Validation_MissingRequiredField_to | /messages | email, sms |
| 109107 | MCMS_UTM_Validation_MissingRequiredField_definitionKey | /definitions | email, sms |
| 109108 | MCMS_UTM_Validation_InvalidValue_messageKey | /messages | email, sms |
| 109109 | MCMS_UTM_Validation_InvalidValue_subscriberKey | /messages | email, sms |
| 109110 | MCMS_UTM_Validation_DuplicateMessageKey | /messages | email, sms |
| 109111 | MCMS_UTM_Validation_InvalidValue_definitionKey | /messages | email, sms |
| 109112 | MCMS_UTM_Validation_InvalidValue_options | /definitions | email, sms |
| 109113 | MCMS_UTM_Validation_InvalidValue_autoAddSubscriber | /definitions | email, sms |
| 109114 | MCMS_UTM_Validation_InvalidValue_resubscribe | /definitions | email, sms |
| 109115 | MCMS_UTM_Validation_InvalidValue_keyword | /definitions | sms |
| 109116 | MCMS_UTM_Validation_InvalidValue_resubscribe_true_without_keyword_specified | /definitions | sms |
| 109120 | MCMS_UTM_Validation_MissingRequiredField_keyword | /definitions | sms |
| 109121 | MCMS_UTM_Validation_InvalidValue_to | /messages | email, sms |
| 109122 | MCMS_UTM_Validation_UnknownFieldName | /messages | email, sms |
| 109123 | MCMS_UTM_Validation_InvalidValue_classification_IncorrectType | /definitions | email |
| 109124 | MCMS_UTM_Validation_email_does_not_pass_validation | /definitions | email |
| 109125 | MCMS_UTM_Validation_InvalidValue_updateSubscriber | /definitions | email, sms |
