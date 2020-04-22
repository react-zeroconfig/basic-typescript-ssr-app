# Start development

```bash
npm start
```

# Build

```bash
npm run build
```

# NginX config sample

```bash
pm2 start /project/dist/app/server
```

Start Node.js server (with PM2) 

```
server {
  set $STATIC_FILES /{project-root}/dist/app/browser;
  set $SERVER_PORT 4100;

  listen       9100;
  server_name  localhost;

  # SSR proxy
  location / {
    proxy_redirect off;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header Connection "";
    proxy_http_version 1.1;

    proxy_pass http://127.0.0.1:$SERVER_PORT;
  }

  # Static files
  location ~ ^/(.*)\.(.*)$ {
    root $STATIC_FILES;
    autoindex off;
    expires off;
  }
}
```

Add NginX server config

# Source Import Sample

## Jest 
<!-- import src/__tests__/*.{js,jsx,ts,tsx} --title-tag h3 -->

### src/\_\_tests\_\_/e2e.ts


```ts
import puppeteer, { Browser, Page } from 'puppeteer';

describe('E2E Sample', () => {
  test('Test', async () => {
    const browser: Browser = await puppeteer.launch({ headless: true });
    const page: Page = await browser.newPage();

    await page.goto('http://localhost:3100');
    await page.waitForSelector('#app > h1');

    await expect(page.$eval('#app > h1', (e) => e.innerHTML)).resolves.toEqual('SERVER VALUE');

    await browser.close();
  });
});

```


### src/\_\_tests\_\_/sample.ts


```ts
describe('Sample', () => {
  test('Test', () => {
    expect('text').toEqual('text');
  });
});

```

<!-- importend -->

<!-- import src/**/*.test.{js,jsx,ts,tsx} --title-tag h3 -->
<!-- importend -->

## Storybook
<!-- import src/**/*.stories.{js,jsx,ts,tsx} --title-tag h3 -->

### src/app/components/Title.stories.tsx


```tsx
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Title } from './Title';

storiesOf('Title', module)
  .add('text=Hello?', () => <Title text="Hello?" />)
  .add('text=World?', () => <Title text="World?" />);

```

<!-- importend -->