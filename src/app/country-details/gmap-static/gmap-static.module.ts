import { NgModule } from '@angular/core';
import { GmapStaticComponent } from './gmap-static.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [GmapStaticComponent],
    exports: [GmapStaticComponent],
    imports: [CommonModule]
})
export class GMapStaticModule {}
