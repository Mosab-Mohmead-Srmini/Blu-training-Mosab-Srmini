import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabletouilibComponent } from "../../projects/ui/src/lib/tabletouilib/tabletouilib.component";
import { UiComponent } from "../../projects/ui/src/lib/ui.component";

@Component({
    selector: 'MyProject-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TabletouilibComponent, UiComponent]
})
export class AppComponent {
  title = 'Blu-training-Mosab-Srmini';


}
