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
Was
```html
<p>{{message}}</p>
```
now
```html
<p  [link-toimage-icon]="message"></p>
```
