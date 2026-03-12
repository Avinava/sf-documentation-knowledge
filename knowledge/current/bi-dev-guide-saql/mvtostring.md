---
title: "mv_to_string()"
domain: bi-dev-guide-saql
topic: mvtostring
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.498Z
estimatedTokens: 495
keywords: [mv_to_string, Converts, multivalue, _to, _string, Usage]
---

# mv_to_string()

> Converts multivalue fields to string fields.

# mv\_to\_string()

Converts multivalue fields to string fields.

## Syntax

mv\_to\_string(multivalue\_column\_name, delimeter)

multivalue\_column\_name

Name of the multivalue field to be converted to a string.

delimiter

Optional. The characters used to delimit values in the converted string. Maximum length is 2 characters.

## Usage

Returns an alphabetically-sorted, delimited string representation of a multivalue field. The default delimiter is a comma followed by a space (, ).

mv\_to\_string() applies to non-grouped streams only. You can run filtering or grouping on a multivalue field post-projection.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

To enable multivalue fields, you must select the **Enable indexing of multivalue fields in Analytics** preference in Setup. If you run mv\_to\_string() without the preference selected, the function returns the first value in the first field only.

1.  From Setup, enter Analytics in the Quick Find box.
2.  Select **Settings** from the list of Analytics options.
3.  In Settings, click the checkbox for **Enable indexing of multivalue fields in CRM Analytics**.

## Example

This query returns values of the Accounts Team as a string delimited by a comma and space, in alphabetical order.

```

```

| Account | Account Team |
| --- | --- |
| Acme | Fred Williamson, Hank Chen, Sarah Vasquez |
| DTC Electronics | Brian Alison, Tessa McNaley |
| Salesforce | Nadia Smith |

## Example

This query returns the values of Accounts Team as a string delimited by two semicolons (;;) in alphabetical order.

```

```

| Account | Account Team |
| --- | --- |
| Acme | Fred Williamson;;Hank Chen;;Sarah Vasquez |
| DTC Electronics | Brian Alison;;Tessa McNaley |
| Salesforce | Nadia Smith |

#### See Also

-   [Multivalue Field](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_multivalue.htm "A multivalue field contains more than one value.")

## Code Examples

```
q = load "account;
q = foreach q generate 'Name' as 'Account', mv_to_string('Account_Team') as 'Account Team';
```

```
q = load "account";
q = foreach q generate 'Name' as 'Account', mv_to_string('Account_Team', ";;") as 'Account Team';
```

## Related Topics

- Multivalue Field (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_multivalue.htm)
