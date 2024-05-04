# Lab 5 - Starter
Sang Do

https://sangpotado.github.io/cse110Lab5_Starter/expose.html
https://sangpotado.github.io/cse110Lab5_Starter/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: yes. Assuming we already had the system set up (user account, server, database). We can simulate a few sample messages to send/receive between user A and B. This is a simple and isolate task, and this feature would not likely affect other features of the app.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Answer: yes. Assuming that our application can perform task (1),  performing the unit test for this task would be quite simple.