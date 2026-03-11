---
title: "Person Employment Input"
domain: omnistudio
topic: person-employment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.446Z
keywords: [Person, Employment, Input]
---

# Person Employment Input

# Person Employment Input

Input representation of the details of the person employment.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIso​Code | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the person employment. | Optional | 61.0 |
| employer​Address | Address Input | Employer's address. | Optional | 61.0 |
| employer​Phone | String | Phone number of the employer. | Optional | 61.0 |
| employment​Status | String | Employment status of the applicant. | Optional | 61.0 |
| employment​Type | String | Employment type for the party. | Optional | 61.0 |
| endDate | String | Last date of employment at this job. | Optional | 61.0 |
| hourlyWage | Double | Hourly wage for the party. | Optional | 61.0 |
| name | String | Name for the record. | Optional | 61.0 |
| occupation | String | Person’s occupation. | Required | 61.0 |
| position | String | Last position of the person at this job. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| relatedPerson | String | Indicates whether to associate the record to an Applicant or Party Profile record. | Required | 61 |
| startDate | String | Start date of employment at this job. | Optional | 61.0 |
| weeklyHour​Count | Integer | Number of hours per week that the party works for the employer. | Optional | 61.0 |
| workerType | String | Worker type for the party that's employed. | Optional | 61.0 |