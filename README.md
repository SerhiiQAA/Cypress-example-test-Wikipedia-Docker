# How to run a project locally with Docker

This project uses Cypress for automated testing, and you can run the tests on your computer using Docker.

# Cypress Tests with Docker

This project contains automated tests using Cypress and Docker. You can clone this repository, build the Docker image, and run the tests inside a Docker container.

### Steps to Run the Project
1. Clone the Repository

First, you need to clone this repository to your local machine.

    Go to the repository page on GitHub.

    Click the green Code button and copy the repository URL:
        For example: https://github.com/username/repository-name.git

    Open your terminal and run the following command to clone the repo:

git clone https://github.com/username/repository-name.git

Navigate to the cloned repository directory:

    cd repository-name

2. Build the Docker Image

This project includes a Dockerfile that will automatically set up the environment to run Cypress tests. To build the Docker image, run the following command in your terminal:

docker build -t my-cypress-project .

This command will build the image based on the Dockerfile in the root directory of the project. After a successful build, you will have a new Docker image named my-cypress-project.

3. Run the Docker Container

Once the image is built, you can run the container to execute the tests.
For Headless Mode:

To run the tests in headless mode (without a graphical user interface), use the following command:

|docker run --rm -it my-cypress-project

This command will run the tests using Cypress inside the container, and once the tests are finished, the container will be automatically removed (--rm).
For UI Mode (Graphical Interface):

If you want to run Cypress with a graphical interface (UI), use the following command. Note that this option requires setting up X11 forwarding to display the UI on your local machine:

|docker run --rm -it -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix my-cypress-project

This will launch Cypress in UI mode, allowing you to interact with the tests through the graphical interface.

4. Check Test Results

After running the tests, the results will be displayed in the terminal (for headless mode). If you run the tests in UI mode, you will see the results in real-time in the Cypress UI, where the test execution will be visible.

5. (Optional) Using Docker Compose

If you want to automate the startup of multiple services or pass specific parameters, you can use docker-compose.yml. Create the file with the following content:

version: '3'
services:
  cypress:
    image: my-cypress-project
    volumes:
      - .:/app
    environment:
      - DISPLAY=:0

Now you can start the container with:

docker-compose up

6. Updating Tests

If you need to change or update the tests, simply edit the relevant files inside the cypress/integration folder. Then, rerun the Docker container to execute the new tests.

7. Stopping the Container

To stop a running container, use the following command:

docker stop <container_id>

You can find the <container_id> by running:

docker ps

Need Help?

If you encounter any issues or need help, feel free to open an issue or contact us!

### Summary
    Clone the repository from GitHub.
    Build the Docker image using docker build.
    Run the container for testing with docker run.
    For the graphical interface, use X11 forwarding.

That's it! You now have clear instructions to run Cypress tests using Docker. If you have any additional questions, feel free to ask! 😊