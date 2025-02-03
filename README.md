# Conference Event Planner
Event Planning and Conference Budgeting Application built using Vite and React 18. It provides an interactive and user-friendly interface for organizations and individuals to plan conferences efficiently by selecting venues, adding optional services, and calculating total costs dynamically.

# Project Overview
The application is designed to streamline the process of planning and budgeting for conferences. It offers an easy-to-use interface that allows users to select conference rooms, add custom add-ons, and include meal options, providing a real-time cost estimate.

# Key Features:
# 0. Home Page:
Displays the project title, "Conference Expense Planner," with a call-to-action inviting users to plan their next major event.
A prominent "Get Started" button for easy navigation.
A welcoming message from BudgetEase Solutions, emphasizing their expertise in budget management and financial planning.
Highlights the platform’s commitment to efficiency and innovation, empowering individuals and businesses to streamline their budgeting process.
![image](https://github.com/user-attachments/assets/dee8dfa5-ff02-44d5-b113-098e1b6de7fd)

# 1. Venue Selection:
Users can browse and select from different conference rooms based on their capacity and cost.
Each venue has a set rental price and an adjustable quantity (number of rooms required).
A restriction is applied (e.g., Auditorium Hall can only be booked up to a maximum of three times).
![image](https://github.com/user-attachments/assets/d6ea80ba-387b-4c37-a469-c49982b99ead)

# 2. Add-Ons & Services:
Additional services like projectors, speakers, microphones, whiteboards and signage can be selected to enhance the event experience.
Users can toggle selections, and prices are updated dynamically.
![image](https://github.com/user-attachments/assets/02eecaba-b39d-4a50-bef9-426852cb4b4c)

# 3. Meal Selection:
Multiple meal options are available (e.g., Breakfast, High Tea, Lunch, Dinner).
Users can select meals as part of the package, with each option contributing to the total event cost.
![image](https://github.com/user-attachments/assets/79505635-54c1-4cdc-a2e9-f403d62ccb2d)

# 4. Real-Time Cost Calculation:
The total cost dynamically updates as users select/deselect venues, add-ons, and meals.
Costs are categorized into venue, AV services, and meals.
The "Show Details" button navigates to the total cost summary.
![image](https://github.com/user-attachments/assets/69f1036f-3269-4f00-a044-112ab6de95b7)


# State Management with Redux Toolkit:
The application uses Redux Toolkit to manage global state for venues, add-ons, and meal selections.
This ensures that all components access and update shared data efficiently.
# Fast Performance with Vite & React 18:
Vite enables fast development and optimized builds, reducing loading time.
React 18 improves UI responsiveness with concurrent rendering and automatic batching.

# Technical Stack
# Frontend:
React 18 – UI development with improved rendering performance.
Redux Toolkit – State management for venues, add-ons, and meals.
CSS Modules – Component-specific styling.
Vite – Fast build tool for efficient project bundling.
# Deployment:
The project is optimized for performance and can be hosted on platforms like Netlify, Vercel, or AWS Amplify.


