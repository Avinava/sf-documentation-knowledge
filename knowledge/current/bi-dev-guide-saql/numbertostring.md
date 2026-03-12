---
title: "number_to_string"
domain: bi-dev-guide-saql
topic: numbertostring
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.503Z
estimatedTokens: 463
keywords: [number_to_string, Converts, number, literal, _to, _string, Usage]
---

# number_to_string

> Converts a number literal to a string literal.

# number\_to\_string

Converts a number literal to a string literal.

## Syntax

number\_to\_string(number, number\_format)

## Usage

Returns the string representation of number. Use number\_format to specify the format of the string, for example as currency or with two decimal places. number\_format can specify seperate formats for positive and negative numbers:

-   number\_to\_string(number, number\_format)

    The format specified by number\_format is used for both positive and negative numbers.

-   number\_to\_string(number, <POSITIVE>;<NEGATIVE>)

    If number is positive, the number format specified by <POSITIVE> is used. If number is negative, the number format specified by <NEGATIVE> is used. Note the semicolon separating the two specified formats.


You can specify the format with these characters:

-   0, #, decimal point (.)
-   Thousands separator (,)
-   Percentage (%)
-   Leading and trailing characters: $, +, -, (, ), :, !, ^,&,’,~,{,}

## Example

Display the number amount as a string, formatted as currency:

```

```

![Picture of a table with a number formatted as currency.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_num2string.png&folder=bi_dev_guide_saql)

## Example

Suppose that you have a measure field with the format shown in **Number You Start With**. Use the format shown in **number\_format** to display this number as a shown in **Resulting String**.

| Initial Number | number_format | Resulting String |
| --- | --- | --- |
| 1234.56 | ####.# | 1234.6 |
| 8.9 | #.000 | 8.900 |
| .631 | 0.# | 0.6 |
| 12 | #.0# | 12.0 |
| 1234.568 | #.0# | 1234.57 |
| 12000 | #,### | 12,000 |
| 12000 | #, | 12 |
| 12200000 | 0.0,, | 12.2 |
| 12 | 00000 | 00012 |
| 0.03457 | #.00% | 3.46% |
| 12.3 | $#.00;($#.00) | $12.30 |
| -12.3 | $#.00;($#.00) | ($12.30) |
| 32 | +;- | + |
| -32 | +;- | - |

## Code Examples

```
q = foreach q generate 'Amount' as 'Amount', number_to_string('Amount',"$#,###.00") as 'NumberAmount';
```
