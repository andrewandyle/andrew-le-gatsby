---
path: "/life/swe/10"
entry: 10
week: "4/5 - 4/11"
class: "swe"
---

1. **What did you do this past week?**

    This week was finally chill for once, at least, after the algos exam. After getting that out of the way, I began MODERATELY working on Phase 3 by refactoring and refining our REST API, while balancing my other classwork and my job. I also got my first dose of the COVID vaccine at Greg.

2. **What's in your way?**

    Not too much this time. I'm staying ahead in some of my classes, but I'm also toning it down for this class now. I'm offering my teammates support instead of taking total ownership like last phase, since I'm still doing my fair share, and I'm just prepared to accept whatever design they implement for filtering/searching/sorting.

3. **What will you do next week?**

    Since we have a large amount of data and the frontend team prefers to handle the filtering and sorting on the backend, we will figure out the best way to implement that functionality into our endpoints. I'm pretty sure SQLAlchemy should make things easy for us there. Also, the Phase 3 deadline just got pushed back, so I can take it even easier.

4. **If you read it, what did you think of Why getter and setter methods are evil?**

    I remember needing to avoid using getters and setters in all OOP projects last semester, as that rule was highlighted in all the descriptions. I was initially very confused as to why they were so bad and often went to office hours to clarify what was considered using them. This reading really falls in line with the reasoning behind that requirement: we had always emphasized the importance of data abstraction and why objects shouldn't expose their implementation details.

    Of course this was posted while OOP is currently going through the Darwin project. Oh, that was definitely my most hellish project in that class.

5. **What was your experience of select, project, cross join and theta join?**

    The relational algebra concepts are pretty clear to me now. My team barely didn't get the select HackerRank, which pushed me to finally catch up in all the lectures, so I have the properties of generators and decorators absorbed in my head. I was able to get the project HackerRank easily after that. I still don't have the habit of using comprehensions when opportunities arise, but if I keep coding in Python more, then maybe I'll start using them more.

6. **What made you happy this week?**

    It's less than a month now until the semester ends, so it's the final wave of projects and two exams at the end. I'm way too eager to start my Citi internship already, and I'm also looking forward to going all-out on my current job immediately after the semester ends and before I leave.

7. **What's your pick-of-the-week or tip-of-the-week?**

    My tip-of-the-week is, if you're using Marshmallow in your REST API for schemas, then you should be using the SQLAlchemy integration, [marshmallow-sqlalchemy](https://marshmallow-sqlalchemy.readthedocs.io/en/latest/), if you aren't already. Last phase, we had a really inefficient setup with our association tables, and we also ended up defining all the fields in our schemas (and even having schemas for the association tables). We were using SQLAlchemy and Marshmallow separately, but with this library, we could automatically create our schemas with all fields AND include relationships after we added backrefs. This was a refactor that was easy to implement and fixed many flaws with our backend code!
