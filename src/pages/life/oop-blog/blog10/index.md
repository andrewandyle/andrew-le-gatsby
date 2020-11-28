---
path: "/life/oop-blog/blog-10"
title: "Blog #10 (Week of 10/26 - 11/1)"
entry: 10
---

1. **What did you do this past week?**

    My partner and I grinded out the Darwin project for 2 hours every day this week. It felt like no time was wasted, they were all intensive periods of thinking about design and debugging, and we utilized office hours as much as we needed to. We’ve ended off the week passing the initial test cases on HackerRank… but then failing the rest.

1. **What’s in your way?**

    Implementing the solution for Darwin was pretty difficult and time-consuming. We had to consider many factors that got us stuck, such as realizing that our segmentation faults were caused by returning invalid addresses because the object had already died after the return function. Also, trying to avoid the use of getters and setters is tough, as we feel like the way we communicate information between the classes is more complicated than it should be.

    Also, I began to tire out this week because I’m switching between 4 projects every day. Instead of spending a short amount of time on a project every day, I should’ve knocked them out one by one so I always have one less to worry about as the week goes on. Constantly switching mindsets between projects is really draining.

1. **What will you do next week?**

    My partner and I will try to grind out Darwin and finish it off in one day, spending more time than usual instead of just 2 hours. We should be good as long as we can just pass the other HackerRank tests and create our own acceptance and unit tests, as we’ve nearly finished implementation.

1. **If you read it, what did you think of The Interface Segregation Principle?**

    I liked the examples that the ISP article gave of why the use of “fat” interfaces should be avoided, as an interface with a bunch of properties that have nothing to do with each other can affect different clients upon change. Multiple inheritance is the first thing that came to mind on the first example, and it’s no surprise that that’s the solution that seems to make the most sense.

1. **What was your experience of continuing to implement std::vector?**

    Learning how to implement a C++ vector definitely felt more tedious than implementing a list in Java. It was quite tricky going through all of the vector constructors, operations and functions, needing to take into account factors such as cost, using copies vs. using references, and having two different versions of a function for read/write and read-only (and the differences between each).

1. **What made you happy this week?**

    I’m a fan of the cold weather while it’s still sunny. I don’t know why, but I feel like I just enjoy going out on a bright day while wearing all my winter fits. I wish I had more reasons to actually go out.

1. **What’s your pick-of-the-week or tip-of-the-week?**

    My pick-of-the-week is Figma, which I’m sure people who have worked on a development team with a frontend design have already seen before. But if not, it’s a web tool that allows users to prototype the design of their applications. All of my development teams have used Figma before for planning out the frontend, and I find it helpful to communicate feedback within a team using comments on any design choices. It’s also really easy to transfer the properties of components over to the CSS of the application.