---
title: "Transactional Send Subscriber Error Codes"
domain: mc-apis
topic: transactional-send-subscriber-error-codes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.475Z
estimatedTokens: 3740
keywords: [Transactional, Send, Subscriber, Error, Codes, code, occurs, message, can't, delivered, due, incorrect, email, address, user]
---

# Transactional Send Subscriber Error Codes

> A subscriber error code occurs when a message can't be delivered due to an incorrect email address or other incorrect user setup.

# Transactional Send Subscriber Error Codes

A subscriber error code occurs when a message can't be delivered due to an incorrect email address or other incorrect user setup.

## Subscriber Error Codes

source row.
| Error Code | Error Message | SYSTEM ERROR | Explanation |
| --- | --- | --- | --- |
| 1 | Unsubscribed | The subscriber ExactTarget system status is unsubscribed | Email subscriber’s status in Marketing Cloud is unsubscribed |
| 2 | Held | The subscriber ExactTarget system status is held | Email subscriber’s status in Marketing Cloud is Held |
| 3 | PartnerUnsubscribed | The subscriber partner system status is unsubscribed | Email subscriber’s status in the partner system is unsubscribed |
| 4 | MissingEmailAddress | The subscriber has no email address | Email subscriber doesn’t have an email address |
| 5 | InvalidEmailAddress | The subscriber email address is invalid | Subscriber’s email address isn’t valid |
| 6 | DuplicateEmail | The subscriber email is the same as that of another job subscriber | Subscriber’s email address matches another subscriber’s |
| 7 | InvalidSubscriberIDProvided | The subscriber ID provided is invalid | Invalid subscriber ID |
| 8 | MissingSubscriberID | The subscriber key and subscriber ID are missing | Missing the subscriber key and subscriber ID |
| 9 | MissingOwnerID | This is an enterprise account and the ID for the child client account is missing | Missing the ID for the child client account in this enterprise account |
| 10 | MissingRequiredAttributes | There are required attribute values missing for the subscriber | Missing required attributes for the subscriber |
| 11 | NoAllSubscribersListEntry | The subscriber is not found on the AllSubscribers list for the account | Subscriber isn’t on the AllSubscribers list for the account |
| 12 | InvalidOwnerIDProvided | The child client account is not a member of the enterprise account | Child client account isn’t a member of the enterprise account |
| 13 | SubscriberKeyMismatch | The subscriber key in the ExactTarget system does not match the subscriber key provided | Marketing Cloud subscriber key doesn’t match the subscriber key provided. Check the subscriber key you provided against the Marketing Cloud subscriber key and try again. |
| 14 | EmailAddressMismatch | The email address in the ExactTarget system does not match the email address provided | Email address in Marketing Cloud doesn’t match the email address provided. Check the email address you provided against the one in Marketing Cloud and try again. |
| 15 | UnspecifiedError | The subscriber did not pass validation. Please contact your customer service representative. | Subscriber didn’t pass validation. Contact your Marketing Cloud account representative. |
| 16 | InvalidAttributeValue | The value specified for a subscriber attribute does not match the attribute type | Subscriber attribute value doesn’t match the attribute type |
| 17 | AttributeValueMaxLengthErr | The value specified for a subscriber attribute is over the maximum length allowed for the attribute | Subscriber attribute is too long for the given attribute size limit |
| 18 | InvalidAttributeValueCount | The number of subscriber attribute values does not match the expected count | Number of subscriber attributes doesn’t match the expected count |
| 19 | MissingRequiredFields | There are required data extension fields missing for the subscriber | Missing required data extension fields for the subscriber |
| 20 | InvalidFieldValue | The value specified for a data extension field does not match the field type | Data extension field value doesn’t match the field type |
| 21 | DuplicateDataExtensionRow | A duplicate row cannot be inserted into the Triggered Send data extension | You can’t insert a duplicate row into the triggered send data extension |
| 22 | DataExtensionInsertFailed | Failed to insert a row into the Triggered Send data extension | Failed to insert a row into the triggered send data extension |
| 23 | DomainExclusion | The subscriber was excluded by a domain exclusion list | Subscriber excluded by a domain exclusion list |
| 24 | ListDetectiveExclusion | The subscriber was excluded by List Detective | Subscriber excluded by List Detective |
| 25 | SubscriberBlackedOut | The subscriber is currently blacked out and the Triggered Send will be rescheduled | Subscriber is not available on their email calendar. The triggered send will be rescheduled. |
| 26 | BuildEmailError | An error occurred when attempting to build an email for the subscriber | An error occurred when attempting to build an email for the subscriber |
| 27 | SuppressionListExclusion | The subscriber was excluded by a suppression list | Subscriber excluded by a suppression list |
| 28 | OptOutListExclusion | The subscriber was excluded by an opt out list | Subscriber excluded by an opt out list |
| 29 | MissingSubscriberKeyValue | The subscriber key value is null or empty | Subscriber key value is null or empty |
| 30 | SubscriberKeyTooLong | The subscriber key value exceeds the maximum length | Subscriber key value is too long. Enter a key that is X or fewer characters. |
| 31 | ListLevelOptOut | The subscriber has opted out of the list | Subscriber opted out of the list. |
| 32 | MissingSendGroupID | The required SendGroupID was not specified for the subscriber | Missing required SendGroupID for the subscriber |
| 33 | AccountLevelOptOut | The subscriber is master unsubscribed at the account, enterprise or business unit level | Subscriber is master unsubscribed at the account, enterprise or business unit level |
| 34 | MissingMessageFileName | The SMTP subscriber message file name is missing | Missing SMTP subscriber message file name |
| 35 | InvalidEmailAddressID | The EmailAddressID for the subscriber supporting data privacy is missing or invalid | Missing or invalid EmailAddressID for the subscriber supporting data privacy |
| 36 | InvalidBusinessUnit | The subscriber is not a member of the enterprise business unit and has been excluded by the business unit filter | Subscriber isn’t a member of the enterprise business unit and is excluded by the business unit filter |
| 37 | QueuedTransactionDeleted | Queued Transaction for a Message has been deleted | Message’s queued transaction was deleted |
| 38 | InvalidSalesforceID | The subscriber has a subscriber key that appears to be an invalid SalesforceID. Case sensitive SFID values cannot be used as Subscriber Key values since these are not case sensitive. | Invalid SalesforceID for the subscriber key. Don’t use case-sensitive SFID values because SalesforceIDs aren’t case sensitive. |
| 39 | SubscriberQueueCleared | Queued unsent subscribers were cleared from the queue. | Queued unsent subscribers are cleared from the queue. |
| 40 | SubscriberDeleted | The subscriber or contact has been deleted and cannot be added back to the system. | Subscriber or contact is deleted and can’t be added to Marketing Cloud. |
| 41 | DuplicateSubscriber | The subscriber is a duplicate of a recent send. | Subscriber is a duplicate of a recent send. |
| 42 | RestrictedForProcessing | The subscriber or contact has been restricted for processing | Subscriber or contact is restricted for processing |
| 43 | SubscriberRequestExpired | The triggered send request to send to the subscriber or contact is expired | Expired triggered send request to the subscriber or contact |
| 100 | Error | Error when building email for subscriber | An error occurred when building the email for the subscriber. |
| 101 | Failure | Failure when sending email to subscriber | Failed to send email to the subscriber. |
| 102 | Excluded | Excluded by send time filter. | Excluded by the send-time filter. |
| 103 | MessageBuildError | An error occurred when building the subscriber message. | An error occurred when building the subscriber message. |
| 104 | RecursiveScriptError | A submitted script contains a self-reference that could lead to an infinite recursion. | A submitted script contains a self-reference that can lead to an infinite recursion. |
| 105 | InvalidSendTimeDataError | The send time data XML is invalid. | Invalid send-time data XML file. |
| 106 | MissingSendDataExtensionSourceRowError | The source row for the subscriber in the data extension send source is missing. | Missing source row for the subscriber in the data extension send source. |
| 107 | MissingSubscriberDataError | The Members source row is missing. | Missing members |
| 108 | MissingListSubscriberDataError | The tblListSub source row is missing. | Missing tblListSub source row. |
| 109 | MissingSubscriberKeyError | The subscriber key is missing. | Missing subscriber key. |
| 110 | InvalidEmailAddressError | The email address for the subscriber is invalid. | Invalid subscriber email address. |
| 111 | ScriptRaiseError | The subscriber has been excluded by a RaiseError function call. | Subscriber is excluded by a RaiseError function call. |
| 112 | EmptyHTTPGetReturnError | An HTTPGet call for the subscriber returned an empty result. | An HTTPGet request for the subscriber returned an empty result. |
| 113 | EmptyHTTPGetFunctionReturnError | An HTTPGet function call for the subscriber returned an empty result. | An HTTPGet function request for the subscriber returned an empty result. |
| 114 | MissingSFIDError | The Salesforce ID for the subscriber is missing. | Missing subscriber’s Salesforce ID. |
| 115 | MissingSFDataError | The Salesforce data for the subscriber is missing. | Missing subscriber’s Salesforce data. |
| 116 | MissingSFSubscriberDataError | The SF Subscriber row for the subscriber is missing. | Missing subscriber’s SF Subscriber row. |
| 117 | CouldNotResolveSecureEmailToken | The account is configured for secure email addresses, but the secure email address token for this subscriber could not be resolved. | The account is configured for secure email addresses, but the secure email address token for the subscriber could not be resolved. |
| 118 | GlobalUnsub | The email address is on the Global Unsub list. | Email address is on the Global Unsub list. |
| 119 | PartnerUnsub | The email address is on the Partner Unsub list. | Email address is on the Partner Unsub list. |
| 120 | ListDetectiveExclusion | The email address was excluded by List Detective. | Email address was excluded by List Detective. |
| 121 | ProcessedByPairedMember | The alternate job in the highly available job pair processed the subscriber. | The alternate job in the highly available job pair processed the subscriber. |
| 122 | SMTPFileNotFound | The file containing the SMTP message for this subscriber was not found. | Can’t find file containing the subscriber’s SMTP message. |
| 123 | SMTPFileIOError | The file containing the SMTP message for this subscriber could not be read. | Can’t read file containing the subscriber’s SMTP message. |
| 124 | SMTPFileFormatError | The file containing the SMTP message for this subscriber is in an invalid format. | Invalid format for the file containing the subscriber’s SMTP message. |
| 125 | DecryptionFailed | An encrypted field on the sendable data extension could not be decrypted. | Can’t decrypt an encrypted field on the sendable data extension. |
| 126 | MessageVolumeLimitExceeded | Account email volume limit has been exceeded and subscriber will not be processed. | Exceeded account email volume limit. Can’t process subscriber. |
| 127 | EmptySubject | The resolved email subject for this subscriber is empty. | The resolved email subject for the subscriber is empty. |
| 128 | ResolvedEmailBodyTooShort | The resolved email body for this subscriber is too short. | The resolved email body for the subscriber is too short. |
| 129 | PhoneNumberValidationFailed | The phone number failed validation at send time. | Phone number failed validation at send time. |
| 130 | PayloadExceedsMaximum | The payload exceeds maximum. | Payload is too large. Ensure that the payload is less than the maximum data amount specified by your admin. |
| 131 | LinkDataExceedsMaximumSize | The compressed job subscriber link data exceeds the Link database storage capacity of 256k. | Compressed job subscriber link data is too large. Link database storage capacity is 256,000. |
| 132 | InvalidCCEmailAddressError | The resolved CC email address for the subscriber is invalid. | Invalid resolved CC email address for the subscriber. |
| 133 | InvalidBCCEmailAddressError | The resolved BCC email address for the subscriber is invalid. | Invalid resolved BCC email address for the subscriber. |
| 134 | SubscriberDeleted | The subscriber or contact is being processed for deletion and cannot be sent to. | Can’t send because subscriber or contact is being processed for deletion. |
| 135 | RestrictedForProcessing | The subscriber or contact is restricted for processing and cannot be sent to. | Can’t send because subscriber or contact is restricted for processing. |
| 136 | SubscriberKeyMismatch | The subscriber or contact subscriber key no longer matches the send data extension subscriber key value. | Subscriber key or contact key doesn’t match the send data extension subscriber key. |
| 137 | SubscriberIDMismatch | The subscriber or contact subscriber id no longer matches the send data extension subscriber id value. | Subscriber ID or contact ID doesn’t match the send data extension subscriber ID. |
| 138 | ExceededExpirationPolicy | The triggered send request to send to the subscriber or contact is expired. | Expired triggered send request to the subscriber or contact. |
| 139 | TimedoutInQueue | The triggered send request to send to the subscriber or contact is timed out waiting in the queue. | Triggered send request to the subscriber or contact has timed out while waiting in the queue. |
| 140 | UnverifiedFromEmailAddress | The from email address is unverified. | Unverified From email address. |
| 141 | V2TriggeredSendDeletedFromQueue | The subscriber was deleted by the CLEAR_TS_QUEUE slot worker. | Subscriber deleted by the CLEAR_TS_QUEUE slot worker. |
| 1000 | UnsubscribedList | Subscriber excluded from send because unsubscribed from list. | Subscriber excluded from the send because subscriber is unsubscribed from the list. |
| 1010 | UnsubscribedMaster | Subscriber excluded from send because unsubscribed from client all subscriber list. | Subscriber excluded from the send because subscriber is unsubscribed from the client All Subscribers list. |
| 1020 | UnsubscribedGlobal | Subscriber excluded from send because unsubscribed from ExactTarget globally. | Subscriber excluded from the send because subscriber is globally unsubscribed from Marketing Cloud. |
| 1030 | Held | Subscriber excluded from send because held. | Subscriber excluded from send because subscriber is in held status. |
| 1040 | Deleted | Subscriber excluded from send because deleted. | Subscriber excluded from send because subscriber was deleted. |
