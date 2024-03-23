import { Component } from '@angular/core';
import { TabletouilibComponent } from "./tabletouilib/tabletouilib.component";

@Component({
    selector: 'lib-ui',
    standalone: true,
    template:`
    <MyProject-tabletouilib></MyProject-tabletouilib>
    `,
    imports: [TabletouilibComponent]
})
export class UiComponent {

}
