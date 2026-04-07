---
title: "AMPscript Language Elements"
domain: mc-programmatic-content
topic: ampscript-language-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:27.198Z
estimatedTokens: 2662
keywords: [AMPscript, Language, Elements, uses, Constants, Attribute, Data, Extension, Custom, Keywords, Statements, Condition, Evaluation, Process, Loop]
---

# AMPscript Language Elements

> AMPscript uses the following language elements:

# AMPscript Language Elements

AMPscript uses the following language elements:

-   Constants
-   Attributes and Data Extensions
-   Keywords

## Constants

AMPscript can include numeric and string constants.

Numeric constant values consist of an unquoted set of numerals and can also include one decimal point and an introductory minus sign to indicate negative values. Numeric constant values cannot contain commas.

```
123

-123

123.456
```

String (or text) constant values must use double or single quotes. String constants can escape the delimiting quote if they appear within the text by doubling it. The system does not recognize alternative quote characters, such as smart quotes.

```
"A string value"

"123.456"

'a string value'

'Sally"s string value'

(Doubled '' will be rendered as ')
```

Boolean constant values must use true or false and are case-insensitive.

```
true

false

TRUE

False
```

## Attribute and Data Extension (Custom Object) Values

Functions and scripts reference subscriber attributes, email attributes, and data extension column values as unquoted strings. If the attribute, data extension column, table, or relationship name includes a space or special character, enclose the value in square brackets.

```
EmailAdr

[Data Extension Attribute Name]

[Total-Expense]
```

You can define additional email attributes within the email and use them in substitutions or as parameters in AMPscript function calls. The Marketing Cloud must enable the use of additional email attributes for your account. Contact your Marketing Cloud relationship manager with any questions.

## Keywords

Declare, initialize, and modify variables within a script. Script statements and functions can then reference variables.

A variable declaration consists of the keyword VAR followed by one or more comma-delimited variable names. Variable names must begin with @ and include at least one other letter, number, or underscore. You cannot use spaces and commas in variable names:

```
@Name

@C1
```

A variable assignment consists of the keyword SET followed by the variable name, equal sign, and value.

-   Declare - VAR @variable
-   Set - SET <variable>=<constant function or attribute>

Declaring a variable with the VAR keyword adds an entry to the Variables Dictionary with the variable name as the key and NULL as the value. If an entry for that name already exists, the value of the variable sets to NULL. If you use the variable to control a FOR loop, an attempt to declare it will result in a validation or runtime error.

```
%%[VAR @Count]%%

%%[VAR @Count1, @Count2, @Count3]%%
Using Conditions Syntax
```

Use this syntax for simple comparison:

```
<variable, attribute><simple operator><variable, attribute, function, constant>
```

Comparison operators compare values. These operators are case-insensitive.

-   \== Is equal to
-   != Is not equal to
-   \> Greater than
-   < Less Than
-   \>= Greater than or equal to
-   <= Less than or equal to

Use join operators to combine multiple conditions.

-   AND - Both conditions must be true
-   OR - Either condition must be true

The NOT operator reverses the result of any Boolean expression.

-   NOT - Reverses the Boolean expression

Control the expression evaluation using parentheses:

```
(BooleanExpression AND BooleanExpression) OR (BooleanExpression AND BooleanExpression)
```

## Using IF Syntax

```
if <condition> then <statement>
    elseif <condition> then <statement>
      .
    else <statement>
endif
```

## Statements

-   IF - Use the IF statement to perform conditional processing.
-   ELSEIF - Use the ELSEIF statement to perform conditional processing. Multiple ELSEIF statements can appear within an IF block.
-   ELSE - Use the ELSE statement to perform conditional processing. Only one else statement can appear within an IF block.
-   ENDIF - Use the ENDIF statement to end an IF block. Only one ENDIF statement must appear at the end of an IF block.

## Using the IF Condition Evaluation

The IF statement allows the conditional execution of any content within the IF block depending on the logic expressions it contains. IF statements may nest within IF statements.

```
%%[IF expression1 <comparison operator> expression2 THEN]%%
    [wrapped script or email content]
%%[ELSEIF expression1 <comparison operator> expression3 THEN]%%
    [wrapped script or email content]
%%[ELSE]%%
    [wrapped script or email content]
%%[ENDIF]%%
The optional ELSEIF statement can repeat as desired to evaluate additional conditions.
```

The optional ELSE statement can appear only once after the IF and all ELSEIF statements and before the ENDIF to define default behavior if none of the preceding conditions evaluate True.

You can use multiple conditions for an IF or ELSEIF statement. Join these conditions with the AND or OR keywords and group them by parentheses to control the order of evaluation. The NOT keyword can be used to reverse the evaluation:

```
IF expression1 <comparison operator> expression2
        AND [NOT] (expression3 <comparison operator> expression4
        OR expression3 <comparison operator> expression5)
THEN .
```

Expressions can include any of the input types:

-   Constants
-   Variables
-   Attributes and data extension values
-   Function calls

If the call does not include the comparison operator and second expression, this system assumes an equal operator with a comparison value of True.

```
IF NOT EMPTY(expression1) THEN
```

This example demonstrates how to include a variable with a value and leave that variable out if it does not include a value:

```
%%[if not empty(MailingAddress) then]%%
%%MailingAddress%%
%%[endif]%%
```

## Using the FOR Process Loop

The FOR statement allows content within the FOR block to iterate over a variable number of times.

```
%%[FOR @Variable = <start expression> TO|DOWNTO <end expression> DO ]%%
        [wrapped script or email content]
    %%[NEXT @Variable]%%
```

The system locks the @Variable variable from modification within the process loop.

The start and end index expressions can use any one of the four types of input that evaluates to an integer:

1.  Numeric constant
2.  Attribute or data extension value
3.  Variable
4.  Function call, such as LookupRows()

The TO or DOWNTO keywords determine whether the value of the variable increases or decreases by one (1) with each iteration of the FOR loop. The variable value sets or increments by one (1) at the end of each iteration of the loop. The system compares the end index expression to the new value of the counter variable. If the value did not yet reach the end value or did not equal the end value, the loop will continue.

The NEXT statement closes the FOR loop. Optionally, follow the statement with the variable name controlling the loop.

## Using the SET Statement

Assign variables a value using the SET statement. Initialize only one variable using a SET statement. An attempt to set a variable in use at the counter of a FOR loop will generate a validation or runtime error. The variable takes on the type of the assigned value.

```
%%[
VAR @Count, @Count2
SET @Count = 0
SET @Count2 = 100
]%%
@Name
@C1
```

## Using the Output and OutputLine keywords

The keywords Output and OutputLine returns the results of code executed inside a code block and includes the results in the rendered content. The OutputLine keyword also appends a carriage return and line feed (CRLF) to the end of the resolved content. Output and OutputLine works with the results of a nested function or script block, and they don't support the passing of direct literals.

Given the code below:

```
%%[Output(Now())]%%
```

The system prints the current date and time. The OutputLine keyword would return the same information with a CRLF appended at the end.

Given the code below:

```
%%[ Var @text
Set @text = "Example Text"
Output(v(@text)) ]%%
The system prints "Example Text," as that text is the value of the variable @text.
```

Note that the code in this example DOES NOT WORK:

```
%%[ Var @text
Set @text = "Example Text"
Output(@text) ]%%
```

Again, the code example above does not work because Output does not support the passing of direct literals.

Given the function below:

```
%%[ OutputLine(Substring("Example Text",1,6)) ]%%
```

System prints "Exampl", as the Substring() function shown returns the first 6 characters in the text starting with the first character, and it appends a CRLF at the end of the results.

## Using Comments

AMPscript may contain comments or non-executed notes that allow you, as the author, to document your code. You must open comments with the /\* sequence and close comments with the \*/ sequence. Comments may span multiple lines.

```
%%[ /* Insert Comment Here */ ]%%
```

## Using AMPscript Language Elements with Enterprise Awareness

These AMPscript functions include Enterprise awareness:

-   LookupRows()
-   Lookup()
-   LookupOrderedRows()

You can use the ENT. prefix with these functions to indicate to the system that the data extension operated on exists at the parent Enterprise level.

In the following example, the system looks up data from the MERCHANT data extension stored at the Enterprise Administrator level:

```
%%[
Var @rows
Set @rows = LookupRows("Ent.Merchants","TRAVELWEB_MERCHANT_ID",200043800)
]%%<br>
%%=Field(Row(@rows,1),"merchant_name")=%%<br><br>
```

## Rowsets

Rowsets contain one or more collections of data as rows, as addressed by the [Row()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/row.htm) function. Each row contains individual data points as fields, as addressed by the [Field()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/field.htm) function. AMPscript doesn't allow direct access to rowset data via functions such as [v()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/v.htm). Ensure that the rowset contains data using [Empty()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/empty.htm) or [IsNull()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/isnull.htm) before further processing, such as in a FOR loop.

The [Empty()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/empty.htm) and [IsNull()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/isnull.htm) functions both return false if the rowset doesn't contain data.

To determine the number of rows (0-x), use only the [Rowcount()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/rowcount.htm) function.

## Code Examples

```
if <condition> then <statement>   
    elseif <condition> then <statement>
      .   
    else <statement>
endif
```

## Related Topics

- Row() (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/row.htm)
- Field() (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/field.htm)
- v() (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/v.htm)
- Empty() (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/empty.htm)
- IsNull() (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/isnull.htm)
- Rowcount() (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/rowcount.htm)
