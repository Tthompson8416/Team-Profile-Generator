# Team-Profile-Generator

This a command-line application that accepts user input. When user is prompted for team members and their information, an HTML file is generated that displays a team roster based on user input.

When the user clicks on an email address in the HTML my default email program opens and populates the TO: field of the email with the address. When the user clicks on the GitHub username, that GitHub profile opens in a new tab.
When the application starts, the user is prompted to enter the team manager’s name, employee ID, email address, and office number. When the user enters the team manager’s name, employee ID, email address, and office number, they are presented with a menu with the option to add an engineer or an intern or to finish building my team.
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated