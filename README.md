# File server (W2D3 stretch project)

## Description

This is a very basic .net application where a client can connect and request the contents of a file from the server's local directory via node command line inputs.

## Warnings

- **This activity was very quickly put together in a limited amount of time.**

- The intended purpose for myself was to revisit TCP concepts a couple weeks after the initial course material was covered.

- Possible/required improvements: The optimal functionality for this server would be to accept the file requests via readline inputs, returning the contents or errors along the way.

## How to use

1. Server is created by the host.

    ```
    node server.js
    ```

2. Client makes a command line requests using node:

    ```
    node client.js ./file.txt
    ```

3. Server looked for the file at the provided path and returns the contents.

    ```
    Contents of: [./file.txt]
    ---
    This is my test file.
    ---
    ```