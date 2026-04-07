---
title: "AMPscript Function Reference"
domain: mc-programmatic-content
topic: ampscript-function-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:26.905Z
estimatedTokens: 8499
keywords: [AMPscript, Function]
---

# AMPscript Function Reference

# AMPscript Function Reference

| Function | Description |
| --- | --- |
| AddObjectArrayItem | Appends an object to an array on an API object |
| CreateObject | Returns a new Marketing Cloud web service API object |
| InvokeCreate | Invokes the Create method on an API object. Returns the API status code. |
| InvokeDelete | Invokes the Delete method on an API object. Returns the API status code. |
| InvokeExecute | Invokes the Execute method on an API object. Returns the API status code. |
| InvokePerform | Invokes the Perform method on an API object. Returns the API status code. |
| InvokeRetrieve | Returns an array of API objects from a RetrieveRequest object. |
| InvokeUpdate | Invokes the Update method on an API object. |
| RaiseError | Raises the error given in string and stops processing of job. If optional B1 is included with a value of true, this function stops the send for the current subscriber only. |
| SetObjectProperty | Sets a value for an object created by the CreateObject function. |
| Function | Description |
| --- | --- |
| UpsertContact | Updates an existing contact in the specified channel with the specified primary key and primary key value. List as many attribute name and attribute values as necessary. |
| Function | Description |
| --- | --- |
| AttachFile | Attaches a file to an outgoing email message and can include a link to the file when you view the email as a web page. Contact your Marketing Cloud account representative to enable AMPscript email attachments for your account before using this function. You can also contact your account representative to adjust the error threshold that causes the send job to stop prematurely. This feature helps prevent a single error from stopping the entire job. |
| BarCodeURL | Generates the specified barcode using supplied information. This function does not support matrix (2-D) barcodes such as QR codes. Use this function a maximum of two times per each single message or landing page. |
| BeginImpressionRegion | Denotes the beginning of a region to track with impression tracking. |
| BuildOptionList | Builds a list of options from which a message recipient can select. Repeat value and presentation names for all options on the list. |
| BuildRowSetFromString | Creates a rowset from a character string by splitting the string at the specified delimiter. |
| BuildRowSetFromXML | Creates a rowset from XML. This function can return an empty rowset on error. This function is for use at send time only. |
| ContentArea | For classic content, returns content contained in the specified stored content area. For Content Builder, use ContentBlockById. |
| ContentAreaByName | Returns the content contained in the specified stored content area. |
| ContentBlockbyId | Returns content contained in the specified stored content block or code snippet from Content Builder, including the Image Block type. These functions support email messages only. For text-only parts of the email or mobile message, such as From Address, From Name, or Subject Line, reference the code snippet block. |
| ContentBlockbyKey | Returns content contained in the specified stored content block or code snippet from Content Builder, including the Image Block type. These functions support email messages only. For text-only parts of the email, such as From Address, From Name, or Subject Line, reference the code snippet block. |
| ContentBlockbyName | Returns content contained in the specified stored content block or code snippet from Content Builder, including the Image Block type. These functions support email messages only. For text-only parts of the email, such as From Address, From Name, or Subject Line, reference the code snippet block. |
| ContentImagebyID | Returns an img tag with the src attribute containing the path to an image from Content Builder. Identify the image to include with the ID value. The img tag includes the title and alt information for the selected image, as well as a border value (measured in pixels) and any identified thid value. If the value of the first parameter does not link to a valid image, you can include another image value for the second parameter as a default option. Use only with Image-type content in Content Builder. This function does not work with the Image Block type. |
| ContentImagebyKey | Returns an img tag with the src attribute containing the path to an image from Content Builder. Identify the image to include with the ID value. The img tag includes the title and alt information for the selected image, as well as a border value (measured in pixels) and any identified thid value. If the value of the first parameter does not link to a valid image, you can include another image value for the second parameter as a default option. Use only with Image-type content in Content Builder. This function does not work with the Image Block type. |
| CreateSmsConversation | Creates a conversation with the specified MO user. Use this AMPscript function for MobileConnect. You cannot use this function with conversation-based templates, including Double Opt-In or Info Capture. Because this function always returns a true value, don't use this function as part of a decision-making workflow. |
| EndImpressionRegion | Identifies the end of a region to be tracked by impression tracking. |
| EndSmsConversation | End any current conversation on an SMS response from an MO user. Use this AMPscript function for MobileConnect. You cannot use this function with conversation-based templates, including Double Opt-In or Info Capture. Becase this function always returns a true value, don't use this function as part of a decision-making workflow. |
| GetPortfolioItem | Returns the text value of a Portfolio item. |
| Image | Returns an img tag with the src attribute containing the path to an image from your portfolio. Identify the image to include with the external key value. The img tag includes the title and alt information for the selected image, as well as a border value measured in pixels and any identified thid value. |
| SetSmsConversationNextKeyword | Sets the keyword for the next conversation path based on an SMS response from an MO user. Use the current keyword or a new keyword for a different conversation path. You can use this AMPscript function for MobileConnect. This function does not create a new conversation. SetSMSConversationNextKeyword directs the current conversation to the next keyword to use as part of that overall conversation. You cannot use this function with conversation-based templates, including Double Opt-In or Info Capture |
| TransformXML | Applies an XSL transform to an XML document. |
| TreatAsContent | Treats the string as though it came in from a content area. To retrieve tracking information associated with these strings, wrap the embedded links within your HTML content using the HTTPGETWRAP command for tracking and analytics. Use the TreatAsContentArea() function to treat your string as if it came from a content area. |
| TreatAsContentArea | Treats content retrieved from a data extension or other source as though it is fixed content coming from a content area. |
| WAT and WATP | returns the values of the Web Analytics Tracking (WAT) parameter with the specified external key. Contact Marketing Cloud Support to set the external key values in the Web Analytics Connector. The function substitutes optional parameters for calls to the WATP function within the tracking parameter set in the Sender Profile. The WAT call parameters must use constant or numeric values. Variable, attribute, field, and faction values don't allow job-level resolution to the desired link query string parameters. |
| Function | Description |
| --- | --- |
| ClaimRow | This function returns a row from a data extension and locks the row to prevent the information from use in another context until the row claimed status changes. If the function finds a row with the correct matching set of keys, the function returns those values. If the function finds no claimed row, the function sets key values in an unclaimed row and returns that row. If the function returns no row at all, you must set up the function to raise an error, ignore the result, or provide default content. Specify multiple pairs of column names and values as needed. |
| ClaimRowValue | This function returns a value from a data extension and locks the row to prevent the information from use in another context until the value claimed status changes. If the function finds a row with the correct matching set of keys, the function returns the requested column value. If the function finds no claimed row, the function attempts to claim an unused row. If the function cannot find or claim value, the function returns the specified default value. Otherwise, the function returns an error. Specify multiple pairs of column names and values as needed. |
| DataExtensionRowCount | Returns the number of rows in the specified data extension. Use this function in place of a Lookup() call when only counting the number of rows in a data extension. |
| DeleteData | Deletes rows in a data extension with column values specified in name value pairs. Returns the number of rows affected. You can also use this function with SMS data. |
| DeleteDE | Deletes rows in a data extension with column values specified in name value pairs. Returns no value. Use this function with email messages at send time only. |
| ExecuteFilter | Executes a predefined data filter and returns a rowset containing the results. Use this function only in landing page contexts. You must use a data extension as the data source for the data filter. This function does not work with profile attributes. |
| ExecuteFilterOrderedRows | Executes a predefined data filter and returns a rowset containing the results. You must use a data extension as the data source for the data filter. This function does not work with profile attributes. This function also allows you to control the sort order and maximum number of rows in the resulting rowset. Use this function only with landing pages and SMS messages. |
| Field | Returns the specified field in the specified row or property value from an API object |
| InsertData | Inserts a row in a data extension. Returns the number of rows affected. Use this function with landing pages, SMS and MMS messages in MobileConnect, push messages in MobilePush, and messages in GroupConnect. |
| InsertDE | Inserts a row in a data extension with the column values listed in name and value pairs. You can include multiple name and value pairs as necessary. Returns no value. Use this function with email messages at send time only. No value is returned. This function applies to email messages at send time only. |
| Lookup | Returns specified value from a data extension. You can specify multiple additional field and value pairs as part of an AND clause. |
| LookupOrderedRows | Returns a specified number of rows. You can specify multiple additional field and value pairs as part of an AND clause. The function returns an empty set when no values match. |
| LookupRows | Returns a rowset from a data extension where the field matches the specified value. Specify additional field value pairs as part of an AND clause. This function returns a maximum of 2000 rows. To better control the number or the order of returned rows, use the LookupOrderedRows() function. This limitation enhances script performance. |
| LookupRowsCS | Returns a rowset from a data extension where the field matches the specified value. The system treats strings as case-sensitive. Specify additional field value pairs as part of an AND clause. This function returns a maximum of 2000 rows. To better control the number or the order of returned rows, use the LookupOrderedRowsCS() function. This limitation enhances script performance. |
| Row | Returns specified row from specified rowset or array |
| RowCount | Returns number of rows in specified rowset or array |
| UpdateData | Updates an existing row in a data extension for the specified number of columns used to build the where clause listed in name value pairs followed by a list of columns to be updated in name value pairs. Returns the number of rows affected. Use this function with landing pages and SMS messages only. |
| UpdateDE | Updates an existing row in a data extension for the specified number of columns used to build the where clause listed in name value pairs followed by a list of columns to be updated in name value pairs. Returns no value. Use this function with email messages at send time only. |
| UpsertData | Updates an existing row in a data extension for the specified number of filter columns listed in name value pairs followed by a list of columns to be updated in name and value pairs. If no data exists in that row, the function inserts a row. The function returns the number of affected rows. You can include multiple name and value pairs to build your WHERE and INSERT clauses. Use this function with landing pages and SMS messages only. |
| UpsertDE | Updates an existing row in a data extension for the specified number of filter columns listed in name value pairs followed by a list of columns to be updated in name and value pairs. If no data exists in that row, the function inserts a row. The function returns the number of affected rows. You can include multiple name and value pairs to build your WHERE and INSERT clauses. Use this function with email messages at send time only. |
| Function | Description |
| --- | --- |
| DateAdd | Returns the sum of a date and an integer, along with a time stamp. |
| DateDiff | Returns the difference between two dates. |
| DateParse | Returns a DateTime object from a date string. |
| DatePart | Returns a specified part of a date. |
| FormatDate | Formats a specified string as a date value. |
| LocalDateToSystemDate | Converts a local datetime string or object to the system time. |
| Now | Returns the current system (server) date and time. When included in content for triggered sends, the time indicates when the triggered send definition for the message started or republished. The time does not not reflect when the send actually occurred. Now() is in Central Standard Time (CST) without daylight saving time. |
| SystemDateToLocalDate | Converts a system datetime string or object to the Marketing Cloud user's local time. |
| Function | Description |
| --- | --- |
| Base64Decode | Decodes Base64 information into human-readable text. |
| Base64Encode | Encodes human-readable text into Base64 information. |
| DecryptSymmetric | This function decrypts encrypted data using the supplied algorithm and encryption values. Supply either a value or a valid external key for the password, initialization vector (IV), and salt. You can also use the external keys if you previously created keys in the Key Management section of the Marketing Cloud app. Otherwise, the function generates a password using the password parameter or stored value, the salt parameter or stored value, and the IV parameter or stored value. If you don't pass or reference an initialization vector, the function uses the password parameter or stored value as the initialization vector. This function treats Salt and IV values either directly provided or looked up by key as hex strings, with each pair of characters representing a single byte in the larger strings. Don't attempt to use these values as a cipher string, as you cannot successfully decrypt those strings using this function. You can wrap the EncryptSymmetric() and DecryptSymmetric() functions in Base64Encode() and Base64Decode() functions to view the final string in plain text. You can only use the EncryptSymmetric() and DecryptSymmetric() AMPscript function on data contained within Marketing Cloud. Marketing Cloud does not support the use of these functions in conjunction with outside or third-party encryption and decryption functionality. |
| EncryptSymmetric | This function encrypts plain text data using the supplied algorithm and encryption values. You can supply either a value or a valid external key for the password, initialization vector (IV), and salt. You can also use the external keys if you previously created keys in the Key Management section of the user interface. Otherwise, the function generates a password using the password parameter or stored value, the salt parameter or stored value, and the IV parameter or stored value. If you don't pass or reference an initialization vector, the function uses the password parameter or stored value as the initialization vector. All output provided by this function uses Base64 encoding. This function treats salt and IV values either directly provided or looked up by key as hex strings, with each pair of characters representing a single byte in the larger strings. Don't attempt to use these values as a cipher string, as you cannot successfully encrypt those strings using this function. You can wrap the EncryptSymmetric() and DecryptSymmetric() functions in Base64Encode() and Base64Decode() functions to view the final string in plain text. You can only use the EncryptSymmetric() and DecryptSymmetric() AMPscript function on data contained within Marketing Cloud. Marketing Cloud does not support the use of these functions in conjunction with outside or third-party encryption and decryption functionality. |
| GUID | Returns a new GUID as a string value. |
| MD5 | Converts a string to a 16-byte MD5 hash value. This function returns a hex representation of the 16-byte MD5 hash result. This one-way hash conversion does not allow later decryption. |
| SHA1 | Returns a SHA1 hash based on the string value passed through the function. The SHA1 hash tag returns a hexidecimal value. |
| SHA256 | Returns an SHA256 hash tag based on the string value passed through the function. |
| SHA512 | Returns an SHA512 hash tag based on the string value passed through the function. |
| Function | Description |
| --- | --- |
| HTTPGet | Returns the content from a specified URL. This function only works with HTTP on port 80 and HTTPS on port 443. Non-standard port assignments cause this function to fail. Marketing Cloud honors any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with Content-Type: text/html; charset=utf-8 included in the header. If the encoding is not specified in the header, the application assumes all returned data will be in the character set WindowsCodePage 1252. You can change this default by contacting your Marketing Cloud account representative. |
| HTTPPost | This function posts content to the specified URL. This function only works with HTTP on port 80 and HTTPS on port 443. Non-standard port assignments cause this function to fail. The Marketing Cloud honors any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with Content-Type: text/html; charset=utf-8 included in the header. If the header does not specify encoding, the application assumes all returned data will uses the character set WindowsCodePage 1252. You can change this default by contacting your Marketing Cloud account representative. Include as many header name and value pairs as necessary. |
| HTTPPost2 | This function posts content to the specified URL. This function only works with HTTP on port 80 and HTTPS on port 443. Non-standard port assignments cause this function to fail. The Marketing Cloud honors any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with Content-Type: text/html; charset=utf-8 included in the header. If the header does not specify the encoding type, the application assumes all returned data uses the character set WindowsCodePage 1252. Change this default by contacting your Marketing Cloud account representative. Include as many name and value pairs as necessary. |
| HTTPRequestHeader | Retrieves the specified header from an HTTP request. You can only use the standard HTTP headers outlined in RFC 7231 with this function. Use only in landing pages. |
| IsCHTMLBrowser | Indicates if the passed-in user agent value represents a CHTML browser. CHTML browsers, such as those found on feature phones, use a modified version of HTML to display information on smaller screens with less resources than smartphones. Returns a value of true or false indicating whether the browser uses CHTML. Use this value to determine whether or not to display CHTML content. Use only with landing pages. |
| RedirectTo | Allows a client to specify the target of a link originate from a complete URL stored in an attribute, data extension field, or variable. Only use this function in HTML emails within the href attribute of an <a< tag. In text emails, include the prefix http:// and ensure you use no spaces within the parentheses. In order to retain tracking information for clicked links, you must include the anchor tags <a</a< within the email itself and not the link retrieved via AMPscript. This function only provides tracking information for clickable links within an email message. You cannot retrieve tracking information when using this function with URLs stored in a variable or used as part of a query string parameter. |
| URLEncode | Returns the specified URL with spaces replaced with %20 or fully encodes all non-alphanumeric characters. |
| WrapLongURL | returns a wrapped URL for the long URL provided in the string parameter of the function. You can only modify URLs longer than 975 characters, and this function does not replace the standard link wrapping functionality implemented in the Marketing Cloud application. Use this function to mitigate a known limitation with long URLs in Microsoft Outlook 2007 and URLs such as those included in an image source tag. |
| Function | Description |
| --- | --- |
| Add | Returns the sum of the provided values. |
| Divide | Returns the result of dividing the first argument by the second argument. |
| FormatCurrency | Formats a specified string as a currency value. This function rounds the numbers up if the specified format uses fewer decimal points than the value itself and the remaining numbers total 5 or more. The function rounds the numbers down if the specified format uses fewer decimal points than the value itself and the remaining numbers total less than 5. |
| FormatNumber | This function rounds decimal numbers up if the specified format uses fewer decimal points than the value itself and the remaining numbers are 5 or greater. The function rounds decimal numbers down if the specified format uses fewer decimal points than the value itself and the remaining numbers total less than 5. Integers outside the range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 print in scientific notation. |
| Mod | Returns the remainder after dividing the first number by the second number. |
| Multiply | Returns the product of multiplying two numbers. |
| Random | Returns a random integer between the values you specify, inclusive. |
| Subtract | Returns the difference of two integers. |
| Function | Description |
| --- | --- |
| AddMscrmListMember | Adds the indicated record to the indicated marketing list. Does not return a value. |
| CreateMscrmRecord | Creates a single Dynamics CRM record in the target entity. Returns the GUID of the created record. Include multiple name and value pairs as necessary. |
| DescribeMscrmEntities | Returns the logical name and display name of all Microsoft Dynamics CRM entities |
| DescribeMscrmEntityAttributes | returns the logical name, display name, and type of the Dynamics CRM entity. The results include a comma-separated list of option and display values when the attribute contains a Boolean, status, picklist, or state value. |
| RetrieveMscrmRecords | Retrieves multiple CRM records. Use fields in the target entity or select fields from related entities by using many-to-one lookup attributes. |
| RetrieveMscrmRecordsFetchXML | Takes a correctly formed Fetch XML query and returns the attributes specified in the query. |
| SetStateMscrmRecord | This function sets state and status of the indicated record and provides -1 as the status value for the default status of the state. Returns no value. Some entities, including Opportunity, require special CRM requests to change their state. This function will not work for those entities. |
| UpdateMscrmRecords | Updates one or more records in a Microsoft Dynamics CRM entity. Also returns the number of succesfully updated records. Include multiple name and value pairs for attributes to update on the target records as necessary. |
| UpsertMscrmRecord | This function retrieves a single record from Microsoft Dynamics CRM, using the name and value pairs to filter the results. The function then sorts the results using the sort field and order provided. The process updates a found record with the applicable name and value pairs. If the process does not find a record, it creates one with all provided name and value pairs. This function returns the GUID of the updated or created record. |
| Function | Description |
| --- | --- |
| CreateSalesforceObject | Creates a record in your integrated Salesforce account and returns the ID of the record created. This function works only for an account integrated with a Salesforce account. |
| LongSFID | Returns the 18-character Salesforce ID from a shortened 15-character version. |
| RetrieveSalesforceJobSources | Returns a rowset with SourceID, SourceType, and IsInclusionSource columns from the job with the specified ID. This function works only with version 2 of the Salesforce integration with Marketing Cloud. This function does not return any information on the status of the job itself. For example, the function returns the same information from a completed job as it does from a job that was started and then canceled. Don't use this information as a guarantee that the send completed. Because this function returns data as a rowset, use Row() and Field() to evaluate the data. |
| RetrieveSalesforceObjects | Returns a rowset with the selected information from Salesforce objects that match the criteria you specify. This function works only with an account integrated with a Salesforce account. Include multiple sets of ordinals 3, 4, and 5 to retrieve information as necessary. Because this function returns data as a rowset, use Row() and Field() to evaluate the data. |
| UpdateSingleSalesforceObject | Updates a record in an object in your integrated Salesforce account. You can specify multiple additional field and value pairs as part of an AND clause. Returns 1 for success or 0 for failure. |
| Function | Description |
| --- | --- |
| AuthenticatedEmployeeID | Returns the employee ID of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages. |
| AuthenticatedEmployeeNotificationAddress | Returns the notification email address of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages. |
| AuthenticatedEmployeeUserName | Returns the username of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages. |
| AuthenticatedEnterpriseID | Returns the enterprise ID of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages. |
| AuthenticatedMemberID | Returns the member ID of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages. |
| AuthenticatedMemberName | Returns the member name of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages. |
| CloudPagesURL | Provides a way for users to reference a CloudPages URL in an account from an email message. Use this function in an email to pass information via a URL in an encrypted query string. For example, you could share a single unsubscription or profile center page for use in any sent email message. This method passes information in an encrypted query string without passing subscriber information or values in clear text. |
| IsNullDefault | Returns the test data when not null. If null, the function returns the specified value. Smart Capture forms use this function to return a default value for a blank or non-existent Smart Capture form value. |
| LiveContentMicrositeURL | Provides a way to return a microsite URL by referencing a coupon name hosted on a microsite. |
| MicrositeURL | Provides a way for Enterprise 2.0 users to reference a landing page URL in the top-level business unit in an Enterprise 2.0 account from an email message in any child business unit within the same Enterprise 2.0 account. Use this function in an email to pass information via a URL in an encrypted query string. For example, you could share a single unsubscription or profile center page from the top-level account for use in email messages sent from any child business units within that account. This method passes information in an encrypted query string without passing subscriber information or values in clear text. |
| QueryParameter | Retrieves the value from a query string, based on the key defined for it. Use this function to provide information on users visiting a site via the URL. |
| Redirect | Redirects the recipient's browser to the specified URL. |
| RequestParameter | Returns the value of a parameter passed into the query string of a landing page URL or passed via a form post. |
| Function | Description |
| --- | --- |
| GetPublishedSocialContent | Returns content to share on a social network as specified by the region ID. For use only in landing pages or the Social Forward feature. |
| GetSocialPublishURL | Retrieves the URL of a social network from a lookup table and creates a link to that social network for use with content to be shared from an email. The optional pairs of parameters refer to additional information like ShareThis publisher ID numbers and logins. You can include multiple name and value pairs. Use this function with the Social Forward feature. |
| GetSocialPublishURLByName | Returns the URL to the publish content page, including a site name, country code, a region ID, and optional pairs of parameter information, such as ShareThis ID information. Include mulitple name and value pairs. For use with the Social Forward feature of Marketing Cloud. |
| Function | Description |
| --- | --- |
| Char | Returns the ASCII character specified by the ASCII character code in the first parameter. An optional second parameter specifies the number of times to repeat the return of the ASCII character. |
| Concat | Concatenates the strings specified in the arguments. Include as many values as necessary. |
| Format | Formats the value according to the string you specify. |
| IndexOf | Returns character position where string occurs in the variable. Index numbering begins with 1. |
| Length | Returns the number of characters in the specified string. |
| Lowercase | Returns the specified value in all lowercase letters. |
| ProperCase | Returns specified string with initial letter of each word capitalized. |
| RegExMatch | Allows you to use a regular expression to search for information in a string. Use any value from the .NET RegexOptions enumeration, such as IgnoreCase and Multiline. |
| Replace | Replaces the first string value with the second string value anywhere it is found in the variable. |
| ReplaceList | Searches a string value for one or more string values you specify and replaces those values with another string value. |
| StringToDate | Parses a datetime string with the user's current settings and returns a .NET datetime object. |
| StringToHex | Returns the hex string of bytes that make up a string value. |
| Substring | Returns the portion of the specified string starting with the specified character position and no longer than the specified length. If the specified character position exceeds the length of the specified string, the function returns an empty string. |
| Trim | Returns the value of the string parameter with the leading and trailing white space removed. |
| Uppercase | Returns the specified value in all uppercase letters. |
| Function | Description |
| --- | --- |
| AttributeValue | Returns the value of a subscriber attribute. |
| Domain | Returns domain portion of an email address. |
| Empty | Returns True if the value is the empty string or NULL. |
| IIf | Returns the second parameter if the first parameter evaluates True. Returns the third parameter if the first parameter evaluates False. |
| IsEmailAddress | Returns a true or false result indicating whether the string value passed in contains a valid email address. This function uses the same email validation logic as the rest of the application. |
| IsNull | Returns a true value if the specified parameter is null. |
| IsPhoneNumber | Returns a true or false result indicating whether the string value passed in is a valid phone number. This function uses the same phone number validation as the SMS components of the application. |
| Output | Returns the results of AMPscript code executed within a code block, such as Concat() or V(), and includes the results inside the rendered content. The function does not return any passed direct literals. |
| OutputLine | Returns the results of AMPscript code executed within a code block, such as Concat() or V()), and includes the results inside the rendered content. The function also appends a CRLF following the results. The function does not return any passed direct literals. |
| V | Outputs the value of a variable. |

## Related Topics

- AddObjectArrayItem (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/addobjectarrayitem.htm)
- CreateObject (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/createobject.htm)
- InvokeCreate (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/invokecreate.htm)
- InvokeDelete (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/invokedelete.htm)
- InvokeExecute (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/invokeexecute.htm)
- InvokePerform (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/invokeperform.htm)
- InvokeRetrieve (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/invokeretrieve.htm)
- InvokeUpdate (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/invokeupdate.htm)
- RaiseError (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/raiseerror.htm)
- SetObjectProperty (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/setobjectproperty.htm)
