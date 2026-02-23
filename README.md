# Fairbairn ABC – Playwright Test Suite

End-to-end and contract tests built using Playwright (JavaScript).

## Purpose
Demonstrates structured UI testing against a live production site with:
- Navigation contract validation
- Content verification
- Behaviour-driven routing checks
- Multi-browser execution (Chromium, Firefox, WebKit)

## Test Coverage
- Homepage load validation
- Navigation link integrity (text + href validation)
- Expected navigation structure
- Navigation click behaviour

## Technical Stack
- Playwright
- JavaScript
- Multi-browser configuration
- baseURL configuration
- Structured test organisation
- HTML reporting enabled

## Run Locally

npm install  
npx playwright test  
npx playwright show-report

## Next Steps
- Add mobile responsiveness tests
- Add API contract tests
- Add CI with GitHub Actions