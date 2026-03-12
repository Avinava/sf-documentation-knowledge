---
title: "Care Program Enrollment Result"
domain: life-sciences-dev-guide
topic: care-program-enrollment-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.660Z
estimatedTokens: 261
keywords: [Care, Program, Enrollment, Result, containing, patient]
---

# Care Program Enrollment Result

> Result containing details about a single patient
    enrollment.

# Care Program Enrollment Result

Result containing details about a single patient enrollment.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enrolleeProducts | Enrollee Product Result[] | A list containing results of care program enrollee products creation for each enrollee. | Small, 46.0 | 46.0 |
| enrollmentCard | Enrollment Card Result | Results of care program enrollment card creation for the enrollee. | Small, 46.0 | 46.0 |
| error | Error Message | Error code and message. | Small, 46.0 | 46.0 |
| isSuccess | Boolean | Indicates if the operation was a success. | Small, 46.0 | 46.0 |
| created | Boolean | Indicate if the record was created. | Big, 46.0 | 46.0 |
| id | String | Id for the newly created CareProgramEnrollee record. | Big, 46.0 | 46.0 |
| objectType | String | The type of the object created. In this case, it is CareProgramEnrollee. | Big, 46.0 | 46.0 |
| status | String | Indicates the status of the record creation. | Big, 46.0 | 46.0 |

## Related Topics

- Enrollee Product Result (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_enrollee_product_result.htm)
- Enrollment Card Result (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_enrollment_card_result.htm)
- Error Message (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_error_output.htm)
