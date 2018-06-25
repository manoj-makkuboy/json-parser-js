I plan to approach the problem in two steps.

1. Run a loop over the input JSON string and break it down into smaller tokens and store them into an array.

2. Loop over the array of tokens using a stack and check if the pattern is following the rules of JSON structure. If no errors are encountered the corresponding JSON object will be given as output. If an error occurs the loop will stop and an appropiate error message will be displayed.