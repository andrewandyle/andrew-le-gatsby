---
path: "/life/oop/4"
entry: 4
week: "9/14 - 9/20"
---

1. **What did you do this past week?**

    I finished Collatz and passed all test cases. The biggest struggle, of course, was getting the whole workflow process down. I went through it several times over just to make sure I wasn’t missing anything. Now that the one individual project is over, I’m looking forward to not being alone when setting up every other project. It’s the most difficult when you’re both stuck working in your room AND not in the GDC lab to get any help!

1. **What’s in your way?**

    The lack of human interaction in my life right now is making me quite sad. I feel like staying in my room, alone 90% of the time and mostly working on projects has started to finally take a hit on my productivity. I wish it was easy to go outside and spend time with friends. I also really wish I could have worked with a partner in-person for this class. There’s nothing any of us can do about it though, so I have to deal with it.

    Also, Zoom lectures still feel exhausting, and I can’t describe why. It turns out I learn from this class much better when I rewatch past lectures. My notes for them are way better too since I can rewind anytime I want. It’s just hard for me to stay constantly engaged and focused on a synchronous Zoom lecture.

1. **What will you do next week?**

    Balance all of my projects and start early on all of them. I’m already starting on this project this Saturday with my partner, and we can hopefully keep a consistent pace of 2–3 hours per day. Also, I’ll be ready for the upcoming career fair.

1. **What was your experience of exceptions, voting, and strcmp?**

    I used exceptions sometimes and I felt pretty comfortable with them, though the parent-child concept was new. The voting problem seems like an interesting problem to think through, and I’m looking forward to seeing what kind of optimizations we can make for it. strcmp was familiar and simple, but of course more low-level this time, I struggled a little bit since I haven’t really done comparator functions much since Mike Scott.

1. **What made you happy this week?**

    My paycheck just came in. For the lack of things that I do for fun in my daily life nowadays, I’m at least saving up money and putting myself in a better position for my career search.

1. **What’s your pick-of-the-week or tip-of-the-week?**

    My pick-of-the-week is [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection), which I learned for the first time at work this week and applied it to our immediate problem. We have two different apps, one React JS and the other Native, that use the same backend, and both of them use Sentry, an error monitoring software. Unfortunately, our React Native app uses the sentry-expo dependency, which we can’t use in our React JS project. From both of our projects, we injected the dependency by passing it as a parameter into our Redux middleware so that they could use different Sentry libraries. I was amazed that such a simple Redux solution worked smoothly and was easy to pick up on!