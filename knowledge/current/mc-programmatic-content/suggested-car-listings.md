---
title: "Suggested Car Listings"
domain: mc-programmatic-content
topic: suggested-car-listings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:28.807Z
estimatedTokens: 674
keywords: [Suggested, Car, Listings, broker, wants, send, subscriber, email, includes, models, cars, subscriber's, stated, preference, Data]
---

# Suggested Car Listings

> In this example, a car broker wants to send a subscriber an email that includes a list of makes and models of cars that the subscriber might like based on the subscriber's stated preference.

# Suggested Car Listings

In this example, a car broker wants to send a subscriber an email that includes a list of makes and models of cars that the subscriber might like based on the subscriber's stated preference.

The car broker creates an attribute for the subscriber to contain the subscriber's preference in car type. The broker populates the attribute with a survey.

## Data Extensions and Relationships

The car broker also creates a data extension that contains multiple makes and models of cars for each of the short list of types that the subscribers could choose in the survey. The car broker creates a data relationship to associate the car\_preference attribute on the subscriber to the type column in the data extension.

The subscriber table contains this data:

| email_address | first_name | last_name | region | car_preference |
| --- | --- | --- | --- | --- |
| aruiz@example.com | Angel | Ruiz | north | sedan |
| johndoe@example.com | John | Doe | south | convertible |
| janedoe@example.com | Jane | Doe | north | SUV |

The cars data extension contains this data:

| type | make | model |
| --- | --- | --- |
| Sedan | Company A | Sedan A |
| Sedan | Company B | Sedan B |
| Sedan | Company C | Sedan C |
| Convertible | Company D | Convertible A |
| Convertible | Company E | Convertible B |
| SUV | Company F | SUV A |
| SUV | Company D | SUV B |
| SUV | Company G | SUV C |
| SUV | Company H | SUV D |

## AMPscript

The car broker includes this AMPscript block in the body of the email:

```
<html>
...
<table style= "border: 1px solid black">
%%[   /* Starting AMPscript */

/* Declaring variables */

var @rs, @row, @cntr

/* Looking up related cars by subscriber */
/* Using lookup rows function to return a rowset of related cars to use */

SET @rs = LookupRows("Cars", "Type", car_preference)

/* Looping through each record in the recordset */

for @cntr = 1 to RowCount(@rs) do

    /* If there is a value in the row, output to HTML */
SET @row = Row(@rs, @cntr)
  /*Ending script block here */ ]%%

        %%=Field(@row, "Make")=%%  &nbsp; &nbsp; &nbsp; %%=Field(@row, "Model")=%%

    %%[  /* resuming script block here */
next @cntr
  /*Ending script block */]%%
    </table>

</html>
```

## Output

When the car broker sends the email, the application processes the code:

### For Angel Ruiz

| Company | Model |
| --- | --- |
| Company A | Sedan A |
| Company B | Sedan B |
| Company C | Sedan C |

### For John Doe

| Company | Model |
| --- | --- |
| Company D | Convertible A |
| Company E | Convertible B |

### For Jane Doe

| Company | Model |
| --- | --- |
| Company F | SUV A |
| Company D | SUV B |
| Company G | SUV C |
| Company H | SUV D |
