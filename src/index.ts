import {NgModule, ModuleWithProviders}  from "@angular/core";
import {CommonModule}                   from '@angular/common';
// import { SampleComponent } from './sample.component';
// import { SampleDirective } from './sample.directive';
// import { SamplePipe } from './sample.pipe';
// import { SampleService } from './sample.service';
import {LinkToimageIconDirective}       from './link-toimage-icon.directive';

// export * from './sample.component';
// export * from './sample.directive';
// export * from './sample.pipe';
// export * from './sample.service';
export *                                from './link-toimage-icon.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // SampleComponent,
        // SampleDirective,
        // SamplePipe,
        LinkToimageIconDirective
    ],
    exports: [
        // SampleComponent,
        // SampleDirective,
        // SamplePipe,
        LinkToimageIconDirective
    ]
})
export class LinkToimageIconModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LinkToimageIconModule/*,
      providers: [SampleService]*/
        };
    }
}
