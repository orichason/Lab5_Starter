# Lab 5 - Party Horn & Speech Synthesis

## Authors
- Ori Chason
- _Partner: TBD_

## GitHub Pages
- Expose (Party Horn): _link TBD_
- Explore (Speech Synthesis): _link TBD_

## Check Your Understanding

**1. Should you unit test the 'message' feature?**

Probably not — at least not with a unit test. Sending a message depends on the network, the server, and whatever is storing the messages on the other end, and a unit test isn't really the right tool for any of that. We'd end up mocking so much of the system that we'd basically be testing the mocks instead of the code, and the things that actually break in production (a flaky connection, a server returning the wrong status) wouldn't show up. An integration test or an end-to-end test that actually walks through the round-trip is a better fit here.

**2. Should you unit test the 'max message length' feature?**

Yeah, this one is a perfect fit for a unit test. It's basically a pure function — you give it a string, you ask whether it's under the limit, and you check the answer. There's no network call, no DOM, nothing async. That makes it easy to hit all the interesting boundaries (one character under, exactly at the limit, one character over, an empty string) in milliseconds, which is exactly the kind of thing unit tests are good at.
