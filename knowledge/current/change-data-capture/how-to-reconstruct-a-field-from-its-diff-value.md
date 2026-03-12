---
title: "How to Reconstruct a Field from Its Diff Value"
domain: change-data-capture
topic: how-to-reconstruct-a-field-from-its-diff-value
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.521Z
estimatedTokens: 603
keywords: [How, Reconstruct, Diff, unified, utility, obtain, full]
---

# How to Reconstruct a Field from Its Diff Value

> The value of a diff field is in the unified diff format. Use a diff utility to obtain
    the full field value from the diff.

# How to Reconstruct a Field from Its Diff Value

The value of a diff field is in the unified diff format. Use a diff utility to obtain the full field value from the diff.

For example, you can use the [Java Diff Utilities library](https://mvnrepository.com/artifact/com.googlecode.java-diff-utils/diffutils "HTML (New Window)").

The following code sample shows the order of operations and the library tools used. The toLines() method, which you implement, splits the diff value into a list of lines. The BufferedReader Java object determines how the newline character is represented, so you don’t need to pass in the newLine value.

Next, patches are obtained from the diff lines through the Java diff utility method DiffUtils.parseUnifiedDiff(). The patches are the changes applied to the content. The toLines() method is called again to split the original content into lines. The patches are then applied to the original lines using the DiffUtils.patch() method.

You implement the combineLines() method to combine the updated lines into one string variable. The newLine variable is passed to combineLines() to reintroduce the original line breaks in the text. Set the newLine variable to the newline character sequence that was in the original content (\\r or ). For more information, see [Considerations for Newline Characters and Computing the SHA-256 Hash](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields_considerations.htm "The content that Salesforce uses to generate the SHA-256 hash might have newline characters transformed by the browser. Many browsers transform newline characters to \r
in record field values before records are stored in Salesforce. Also, Salesforce trims leading and trailing white spaces in field values."). The revised string variable is the reconstructed value from the diff that contains the updates.

The final step is to generate a SHA-256 hash value to validate that the original updated value matches the reconstructed value. To generate a hash, use the [Apache Common DigestUtils library](https://commons.apache.org/proper/commons-codec/apidocs/org/apache/commons/codec/digest/DigestUtils.html "HTML (New Window)"). After the hash is generated, compare it to the one sent in the event and ensure that both hash values are equal.

```

```

The following are examples of what to implement to split lines and combine lines.

```

```

## Code Examples

```apex
public void BuildOriginalValueFromDiff(String original, String diff, String newLine) {
    // Split diff value into lines and get patches.
    List<String> diffLines = toLines(diff);
    Patch<String> patch = DiffUtils.parseUnifiedDiff(diffLines);

    // Split original text into lines.
    List<String> originalLines = toLines(original);

    // Apply patches to original lines, then combined lines.
    List<String> revisedLines = DiffUtils.patch(originalLines, patch);
    String revised = combineLines(revisedLines, newLine);

    // Generate SHA-256 hash on reconstructed value.
    String checkSum = DigestUtils.sha256Hex(revised);

    // Extract hash from the event diff field.

    // Compare extracted hash with generated hash and verify they are equal.
}
```

```apex
private List<String> toLines(String s) {
    BufferedReader rd = new BufferedReader(new StringReader(s));
    return rd.lines().collect(Collectors.toList());
}

private String combineLines(List<String> lines, String newLine) {
    StringBuilder sb = new StringBuilder();
    lines.forEach(l -> sb.append(l).append(newLine));
    sb.deleteCharAt(sb.length()-newLine.length());  // remove last newline added
    return sb.toString();
}
```

## Related Topics

- Considerations for Newline Characters and Computing the SHA-256 Hash (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff_event_fields_considerations.htm)
