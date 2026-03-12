---
title: "Prevent Record Duplication with Idempotent Record Writes"
domain: uiapi
topic: prevent-record-duplication-with-idempotent-record-writes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.075Z
estimatedTokens: 1420
keywords: [Prevent, Record, Duplication, Idempotent, Writes, avoid, records, server, operations, occur, app, client, encounters, network, connection]
---

# Prevent Record Duplication with Idempotent Record Writes

> Use idempotent record writes to avoid duplication of records and
      server operations, which can occur when an app or client encounters a network connection
      issue.

# Prevent Record Duplication with Idempotent Record Writes

Use idempotent record writes to avoid duplication of records and server operations, which can occur when an app or client encounters a network connection issue.

To make a request idempotent, include an Idempotency-Key value in your request header. By making a request idempotent, your records on the server remain in the same state even if an identical request is made once or multiple times. Salesforce uses server storage to store the cached response of an idempotent request.

Only the /ui-api/records/{recordId} resource supports idempotent record writes for the POST, PATCH, and DELETE methods. The following table describes idempotent record write support for specific UI API resources.

| UI API Resource | POST | PATCH | DELETE |
| --- | --- | --- | --- |
| /ui-api/records |  |  |  |
| /ui-api/records/{recordId} |  |  |  |
| /ui-api/records/content-documents/​content-versions |  |  |  |
| /ui-api/records/content-documents/​${contentDocumentId}/content-versions |  |  |  |

When a unique Idempotency-Key request header is passed to a supported resource, the response for a server data mutation operation is stored. Subsequently, next time a request is sent to the same resource with the same Idempotency-Key value, the cached response is returned instead of performing a server data mutation operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

An idempotent request supports a response size up to 9 MB. If your request results in a larger response size, idempotency isn’t honored, but the request doesn’t fail. Retrying the same request results in duplication on the server.

Idempotent record writes save server processing costs by returning cached response for POST, PATCH, and DELETE operations.

## Include an Idempotency Key Value

In your request header, pass in an [Idempotency-Key value](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header) in the [UUID v4 format](https://datatracker.ietf.org/doc/html/rfc4122). You can use a library that supports UUID v4 generation, including the [Java UUID utility](https://docs.oracle.com/javase/7/docs/api/java/util/UUID.html).

curl --location --request POST 'https://MyDomainName.my.salesforce.com/services/data/v56.0/ui-api/records' \\ --header 'Authorization: Bearer AuthToken' \\ --header 'Content-Type: application/json' \\ --header '**Idempotency-Key: 12cfe4e6-e477-4de8-aa4e-95d31aa2be24**' \\ --header 'Cookie: BrowserId=yVVAfz9GEeuRCtc5jOsncA; CookieConsentPolicy=0:0' \\ --data-raw '{ "apiName": "ResourceAbsence", "fields": { "CreatedDate": "2022-12-01T14:52:16.000Z", "LastModifiedDate": "2022-12-01T14:52:16.000Z", "ResourceId": "0Hnxx0000004C92CAE", "Start": "2022-12-02T14:52:16.000Z", "End": "2022-12-03T14:52:16.000Z" } }'

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=uiapi)

#### Tip

We recommend that you use a unique Idempotency-Key header value for each unique operation. The idempotency key doesn't provide idempotency indefinitely and auto-expires after 30 days if the same key is reused.

When the idempotency key expires after 30 days, the cached record that’s associated with the idempotency key is deleted. If the same idempotency key is used again after it’s deleted, the key is treated as a new idempotency key. A new cached response is then stored when an idempotent request is received the first time.

## Example: Upload a File With An Idempotency Key

Let’s look at how you can [upload a file](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm "Upload documents and images or update the file with a new version.") using an idempotency key. To send the idempotent request, include Idempotency-Key in your request header.

curl -H "X-PrettyPrint: 1" \\ -F 'json={"title":"Example image", "description":"Your description"}' \\ -F "fileData=@image.jpg;type=application/octet-stream" \\ -X POST https://MyDomainName.my.salesforce.com/services/data/v58.0/ui-api/records/content-documents/content-versions \\ -H 'Authorization: Bearer AuthToken' \\ -H 'Idempotency-Key: YourKey'

When you send the request, notice the id values in the contentDocument, contentDocumentLinks, and contentVersion fields. If you resend the request using the same idempotency key, the response is returned without any server-side operations and the id values remain the same, indicating that the file doesn’t get uploaded a second time.

## HTTP Status Error Codes

An idempotent request returns [2XX status codes](atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.") for a successful operation. It can also return one of these HTTP status error codes.

400

You can receive one of the following errors.

-   Idempotency not supported—Remove the Idempotency-Key header and retry the operation.
-   Idempotency-Key is not in valid format—Generate a new Idempotency-Key header value and retry the operation.

422

The Idempotency-Key header value is already used by the same user for a different request. Generate a new Idempotency-Key value and retry the operation.

409

Either a different user has issued the same request earlier or this duplicate request is issued within a short time because an earlier request terminated abruptly. If you include a Retry-After header, a follow-up request is sent.

5XX

A server error has occurred. If you include a Retry-After header, a follow-up request is sent.

## Related Topics

- /ui-api/records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm)
- /ui-api/records/{recordId} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm)
- /ui-api/records/content-documents/​content-versions (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
- /ui-api/records/content-documents/​${contentDocumentId}/content-versions (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
- upload a file (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
- 2XX status codes (atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm)
