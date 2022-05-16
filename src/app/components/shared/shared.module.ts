import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TopbarComponent, FooterComponent],
  exports: [TopbarComponent, FooterComponent],
})
export class SharedModule {}
