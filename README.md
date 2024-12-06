# Artillery and playwright
In our test "mainTest" we tested all the following:
Choose two different products with image and info about the products (we needed to delete those steps because there was some technological issues with backend about Timeout).
Go through one subcategory.
Go through all categories.
Go through all sorting options (populärast, A-Ö, Ö-A, pris: billigast till dyrast, pris: dyrast till billigast, jämnförspris: billigast till dyrast, jämnförspris: dyrast till billigast)."
Change page.

# info about running the test with playwright and Artillery
Write following in the terminal to install playwright:
npm init playwright@latest (for the latest version of playwright)

We needed to add following extensions:
-Artillery for VS Code
-Playwright Test for VSCode

We used different commands to run the tests:
-npm run build (for Artillery)
-npm run backend (for Artillery)
-npx playwright test
-npm run load-test-basic (Artillery, run test file)

We only used one network server "chronium" to run our tests.
We tested with slowMo in "basic.yml" file to see the process, but then we uncommented.
When we recorded a new test then it went in the "e2e" map but then we moved it to the "load-tests" map. 

When installing playwright we selected the following options:
-Chromium
-Use javascript


# basic.yml file
We added and changed the following files to the basic.yml file:

config:
  target: http://127.0.0.1:4000
  engines:
    playwright:
      launchOptions:
        headless: true
        #slowMo: 300
  processor: './mainTest.spec.cjs'
  phases:
    - duration: 2
      arrivalRate: 1
      rampTo: 1
      name: Warm up phase
    - duration: 2
      arrivalRate: 1
      rampTo: 1
      name: Ramp up load
    - duration: 2
      arrivalRate: 1
      rampTo: 1
      name: Spike phase
  # Load & configure a couple of useful plugins
  # https://docs.art/reference/extensions
  plugins:
    ensure: {}
    apdex: {}
    metrics-by-endpoint: {}
  apdex:
    threshold: 100
  ensure:
    thresholds:
      - http.response_time.p99: 100
      - http.response_time.p95: 75
scenarios:
  - name: 'playwright user flow'
    engine: playwright
    testFunction: 'mainTest'

# test
We did a test (mainTest) that tested all the functions for the website. 

# problems
We needed to make some changes for the test to show up in the "test explorer", instead of using "require" we used "module.exports" and did an "async function" for the test. Also we renamed it to a cjs file. 
We had technical issues getting the backend up and running,so we worked together from one screen.
We had some technological issues with backend. Then we did some changes in the code to make it run and work for both of us. Later during the workshop, we encountered another issue with the backend, but this time it was related to a timeout. To solve the problem we nedeed to take back the old backend code we used before, then we deleted the steps for the specific products in our mainTest. 



