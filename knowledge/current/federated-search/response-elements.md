---
title: "Response: Elements"
domain: federated-search
topic: response-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.702Z
estimatedTokens: 1530
keywords: [Elements, external, search, provider, results, federated, connector, Atom, RSS, Common, Salesforce, Dublin, Core, provided, extracts]
---

# Response: Elements

> The external search provider returns results to the federated search connector in Atom
  or RSS format. Common elements, such as from Salesforce or Dublin Core, are also provided. The
  federated search connector extracts only the specified elements.

# Response: Elements

The external search provider returns results to the federated search connector in Atom or RSS format. Common elements, such as from Salesforce or Dublin Core, are also provided. The federated search connector extracts only the specified elements.

## Feed Elements

These fields are defined in the OpenSearch standard. The federated search connector extracts the value from these elements.

-   <opensearch:totalResults>
-   <opensearch:startIndex>

## Atom Entry Elements

If the external search provider returns results in Atom 1.0 or 1.1 format, the federated search connector extracts only the specified elements for all record types.

| Field | Description |
| --- | --- |
| <title> | Required. Title of the search result. Limited to 255 characters, beyond which the text is truncated. |
| <id> | Required. External ID of the search result. The ID can be reused to search for the corresponding specific record. Maximum length is 255 characters; if the length is longer, the entry is skipped. See the {sfdc:searchById} parameter in the URL Template request parameters for more details. |
| <link> | Optional. Clickable, well-formatted URL link to open the external document. The federated search connector doesn’t encode this URL. The external search provider can proxy it to track clicks. Maximum length is 1,000 characters; otherwise, the entry is skipped. |
| <summary> | Optional. Snippet for the search result. Can be replaced by <content>. Maximum length is 500 characters, beyond which the text is truncated. |
| <content> | Optional. Snippet for the search result for text. Can be replaced by <summary>. Maximum length is 500 characters, beyond which the text is truncated. |
| <updated> | Optional. Date of the last modification of the entry. Follows the Atom date format. For example: 2003-12-13T18:30:02.25+01:00. |
| <published> | Optional. Date of the creation of the entry. Follows the Atom date format. For example: 2003-12-13T18:30:02.25+01:00. |

## Dublin Core Entry Elements

For both Atom and RSS formats, the federated search connector also extracts Dublin Core elements if they are present. The following elements are defined in the [Dublin Core specification](http://dublincore.org/documents/2012/06/14/dcmi-terms/?v=elements) for the Dublin Core namespace http://purl.org/dc/elements/1.1/ (dc).

| Field | Description |
| --- | --- |
| <dc:abstract> | Optional. Snippet for the search result. Maximum length is 500 characters, beyond which the text is truncated. |
| <dc:date> | Date of the content. Follows either the Atom or RSS date format. |
| <dc:description> | Optional. Snippet for the search result. Maximum length is 500 characters, beyond which the text is truncated. |
| <dc:title> | Optional. Title of the search result. Limited to 255 characters, beyond which the text is truncated. |

## RSS Entry Elements

If the external search provider returns results in RSS 2.0 format, the federated search connector extracts only the specified elements for all record types.

| Field | Description |
| --- | --- |
| <description> | Optional. Snippet for the search result. Maximum length is 500 characters, beyond which the text is truncated. |
| <guid> | Only required if <link> not present. If <guid> is not present, <link> is used as the result URL and result ID as well. External ID of the search result. The ID can be reused to search for the corresponding specific record. Maximum length is 255 characters; if the length is longer, the entry is skipped. See the {sfdc:searchById} parameter in the URL Template request parameters for more details. |
| <link> | Optional. Clickable, well-formatted URL link to open the external document. The federated search connector doesn't URL-encode this URL. The external search provider can proxy it to track clicks. Maximum length is 1,000 characters; if the length is longer, the entry is skipped. |
| <pubDate> | Optional. The publication date for the content. Follows the RSS date format RFC-822. For example: Sat, 07 Sep 2002 0:00:01 GMT. |
| <title> | Required. Title of the search result. Limited to 255 characters, beyond which the text is truncated. |

## Salesforce Entry Elements

For both Atom and RSS format, the federated search connector also extracts the following elements for all record types.

| Field | Description |
| --- | --- |
| <sfdc:recordType> | Required if the external search provider uses Salesforce extensions; otherwise optional. Type of the result document. This element also includes additional fields provided for the result. It must have a single value listed by the <sfdc:RecordTypes> element of the OpenSearchDescription. Provided as text element, such as <sfdc:recordType>BlogPost</sfdc:recordType>. |
| <sfdc:link> | Required if the external search provider uses the Salesforce extension; otherwise optional. If the external search provider uses Salesforce extensions, the URL should point to the app installed by the admin. This app then renders the external document inside Salesforce. This field represents a clickable link to open the external document within Salesforce. Might not be a well-formed URL. It isn’t URL-encoded by the federated search connector. Maximum length is 1,000 characters; if the length is longer, the entry is skipped. |

## Common Entry Elements

These fields are custom and have been declared in the OpenSearchDescription with the <sfdc:Field> child element of <sfdc:RecordType>. A custom field value is provided as a text element.

If a custom field has been declared with a name containing spaces, such as *Relevant Tags*, it can be referred to by replacing all spaces with underscores, such as <sfdc:Relevant\_Tags>.

Custom field maximum lengths depend on the type of field. A custom field is skipped if it exceeds the limit. Here are the limits for field types. The phone field type follows the E.123 standard, and the date field follows the Atom date format.

| Field Type | Character Limit |
| --- | --- |
| string | 255 |
| longstring | 500 |
| number | 20 |
| boolean | 10 |
| percent | 20 |
| currency | 20 |
| email | 500 |
| url | 1,000 |
