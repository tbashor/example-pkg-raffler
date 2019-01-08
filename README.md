This project helps to demonstrate how to use `pkg` to compile a node app into a binary on multiple platforms. The 
application itself is a modified version of a Dev Bootcamp final project built for SDJS. It allows users to 
register for and participate in a raffle. The Twilio integration built into the initial version has not been retested.

# Getting Started

1. Run `npm install -g pkg`.
2. Run `npm install`.
3. Run `npm run pkg`. This will generate 2 binary files (MacOS and Windows) in the `dist` directory.
4. To run the binary on MacOS, `cd` to the `dist` directory and run `./example-pkg-raffler-macos-x64`.
5. Open a browser to [http://localhost:3000](http://localhost:3000).

## Original Sizes
- Node Mac x64 binary = 37.6 MB
- Repo with modules = 80.1 MB

## Compiled Size
- Mac x64 compiled app = 99.4 MB

## Savings
Over 15%
