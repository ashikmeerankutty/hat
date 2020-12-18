# HAT
A light set of helpers for updating title and favicons dynamically.

## Examples
See examples [here](https://ashikmeerankutty.github.io/hat)

## Installation

    npm i @space-kit/hat

## Helpers

### Add a count in title

```javascript
import { setTitleCount } from '@space-kit/hat';

setTitleCount(10) // updates title as `(10) your title text`  
```

### Add a counter to title

```javascript
import { titleCounter } from '@space-kit/hat';

const increment = titleCounter(0, 'Hello');

increment() // updates title as `(1) your title text`  
```

### Add a rolling title

```javascript
import { rollingTitle } from '@space-kit/hat';

rollingTitle('A very long text') // start a rolling title 
```

### Update favicon with an svg

Updates favicon with an svg.

```javascript
import { svgFavicon } from '@space-kit/hat';

const svgLogo = '<svg>yoursvg</svg>`;

svgFavicon(svgLogo); // set svg icon as favicon
```

### Update favicon with an svg

Replaces `{{count}}` in an svg with a dynamic counter value, Suitable for chat apps to show unread messages inside favicon.

```javascript
import { svgFaviconCounter } from '@space-kit/hat';

/**
 * Replace {{count}} with counter value
*/
const svgLogo = '<svg>{{count}}</svg>';

const incrementFavicon = svgFaviconCounter(svgString);

incrementFavicon(); // increments count inside favicon
```

## Development
### Build
    npm run build
### Test
    npm run test
### Release
    npm publish