import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountsComponent } from './counts/counts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';
import { SecSalesComponent } from './sec-sales/sec-sales.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { TabsChartComponent } from './tabs-chart/tabs-chart.component';
import { TabsCardsComponent } from './tabs-cards/tabs-cards.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ControlComponent } from './pages/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountsComponent,
    SidebarComponent,
    TabsComponent,
    SecSalesComponent,
    TabsChartComponent,
    TabsCardsComponent,
    SettingsComponent,
    NotificationsComponent,
    LogoutComponent,
    ElementsComponent,
    DashboardComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    ChartModule,
    TabViewModule,
    CheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
