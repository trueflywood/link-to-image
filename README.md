# link-to-image
This directive converts the link into a picture.

## Installation 
```sh
npm install link-to-image --save
```

### Usage
The directive should work on any HTML element.

Import the module:
```ts
import { LinkToImageDirectivesModule } from 'link-to-image';

@NgModule({
    imports: [
        ...
        LinkToImageDirectivesModule
        ...
    ]
})
```

And use in your template:

it was
```html
<p>{{message}}</p>
```

it became
```html
<p  [link-toimage-icon]="message"></p>
```

Add Font Awesome 
```scss
...
$font-path: "../node_modules/font-awesome/fonts";
@import "../node_modules/font-awesome/scss/font-awesome";
...
```