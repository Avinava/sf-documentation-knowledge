---
title: "Sending Data Differences for Fields of Updated Records"
domain: change-data-capture
topic: sending-data-differences-for-fields-of-updated-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.510Z
estimatedTokens: 748
keywords: [Sending, Data, Differences, Updated, Records, reduce, event, payload, size, improve, performance, Salesforce, sometimes, text, large]
---

# Sending Data Differences for Fields of Updated Records

> To reduce the event payload size and improve performance, Salesforce sometimes sends
    data differences of updated text values. For large text fields, such as Description or Long Text
    Area fields that contain at least 1,000 characters, only the data differences might be sent.
    Data differences use the unified diff format.

# Sending Data Differences for Fields of Updated Records

To reduce the event payload size and improve performance, Salesforce sometimes sends data differences of updated text values. For large text fields, such as Description or Long Text Area fields that contain at least 1,000 characters, only the data differences might be sent. Data differences use the unified diff format.

Differences are computed for each line in the text value. The diff algorithm breaks the field value into lines by using the line breaks found in the value.

If sending the diff for updates of large text fields does not reduce the field size, the entire value is sent. The diff value is **not** sent for the following conditions.

-   The length of the field value is less than 1,000 characters.
-   The difference between the old and new values is greater than 50% in length.
-   More than 25% of the lines of the total of number of lines in the old and new values are changed.
-   The diff’s length is greater than the length of the new value.

For more information about the unified diff format and the diff utility, see the [Diff Utility](https://en.wikipedia.org/wiki/Diff_utility#Unified_format "HTML (New Window)") Wikipedia article.

The diff value includes an SHA-256 hash value that is computed on the entire updated value. Use the hash value to verify that the reconstructed value matches the original value before it was converted to a diff. To do so, compute the SHA-256 hash after expanding the diff value. Then compare the two hash values to ensure that they’re equal. If the reconstructed content is different from the original content, the hash value is different. To compute an SHA-256 hash value, you can use a utility such as the UNIX sha256sum command or the [DigestUtils class](https://commons.apache.org/proper/commons-codec/apidocs/org/apache/commons/codec/digest/DigestUtils.html "HTML (New Window)") from the Apache Commons library.

-   **[Data Differences in Event Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields.htm)**
    When the updated text field value is sent as a diff, it contains the SHA-256 hash value and data differences in the unified diff format.
-   **[How to Reconstruct a Field from Its Diff Value](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields_reconstruct.htm)**
    The value of a diff field is in the unified diff format. Use a diff utility to obtain the full field value from the diff.
-   **[Considerations for Newline Characters and Computing the SHA-256 Hash](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields_considerations.htm)**
    The content that Salesforce uses to generate the SHA-256 hash might have newline characters transformed by the browser. Many browsers transform newline characters to \\r in record field values before records are stored in Salesforce. Also, Salesforce trims leading and trailing white spaces in field values.

## Related Topics

- Data Differences in Event Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields.htm)
- How to Reconstruct a Field from Its Diff Value (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields_reconstruct.htm)
- Considerations for Newline Characters and Computing the SHA-256 Hash (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields_considerations.htm)
